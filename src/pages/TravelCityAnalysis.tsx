import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as echarts from 'echarts';
import { cityData, regionMap, defaultWeights, months } from '@/data/tourism/cities';
import { calculateWeightedScore, getRiskRating, scoringAlgorithm } from '@/data/tourism/scoringModel';
import { tourismData, defaultTourismInfo } from '@/data/tourism/tourismInfo';
import type { City, Weights, TourismInfo } from '@/data/tourism';

interface RiskRating {
  level: string;
  probability: number;
  color: string;
}

interface FilterOptions {
  region: string;
  type: string;
  keyword: string;
  sortBy: string;
  weights: Weights;
}

interface EnhancedCity extends City {
  score: number;
  riskRating: RiskRating;
}

const regionOptions = ['', '华东', '华中', '华南', '华北', '西南', '西北', '东北'];
const typeOptions = ['', '小众冷门城市', '自然山水型', '人文历史型', '烟火市井型'];
const sortOptions = [
  { value: 'score', label: '综合分数' },
  { value: 'growthRate', label: '热度增速' },
  { value: 'cost', label: '性价比' },
];

export const TravelCityAnalysis = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    region: '',
    type: '',
    keyword: '',
    sortBy: 'score',
    weights: { ...defaultWeights },
  });

  const [detailVisible, setDetailVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState<EnhancedCity | null>(null);
  const [selectedCityForChart, setSelectedCityForChart] = useState<EnhancedCity | null>(null);
  const barChartRef = useRef<HTMLDivElement>(null);
  const trendChartRef = useRef<HTMLDivElement>(null);
  const radarChartRef = useRef<HTMLDivElement>(null);
  const barChartInstance = useRef<echarts.ECharts | null>(null);
  const trendChartInstance = useRef<echarts.ECharts | null>(null);
  const radarChartInstance = useRef<echarts.ECharts | null>(null);

  const filteredCities = useMemo((): EnhancedCity[] => {
    let result: EnhancedCity[] = [];

    const filtered = cityData.filter((city) => {
      if (filterOptions.region) {
        const provinces = regionMap[filterOptions.region] || [];
        if (!provinces.includes(city.province)) return false;
      }
      if (filterOptions.type && city.type !== filterOptions.type) return false;
      if (filterOptions.keyword) {
        const keyword = filterOptions.keyword.toLowerCase();
        if (!city.name.toLowerCase().includes(keyword) && !city.province.toLowerCase().includes(keyword)) {
          return false;
        }
      }
      return true;
    });

    result = filtered.map((city) => {
      const score = calculateWeightedScore(city, filterOptions.weights);
      const riskRating = getRiskRating(score, city.growthRate);
      return { ...city, score, riskRating };
    });

    result.sort((a, b) => {
      if (filterOptions.sortBy === 'score') {
        return b.score - a.score;
      } else if (filterOptions.sortBy === 'growthRate') {
        return b.growthRate - a.growthRate;
      } else {
        return (b as unknown as Record<string, number>)[filterOptions.sortBy] - (a as unknown as Record<string, number>)[filterOptions.sortBy];
      }
    });

    return result;
  }, [filterOptions]);

  const totalCities = cityData.length;
  const topScore = filteredCities[0]?.score || '-';
  const avgScore =
    filteredCities.length === 0
      ? '-'
      : (filteredCities.reduce((acc, city) => acc + city.score, 0) / filteredCities.length).toFixed(1);

  const recommendations = filteredCities.slice(0, 3);

  const sCount = filteredCities.filter((c) => c.riskRating.level.startsWith('S')).length;
  const aCount = filteredCities.filter((c) => c.riskRating.level.startsWith('A')).length;
  const bCount = filteredCities.filter((c) => c.riskRating.level === 'B' || c.riskRating.level === 'C').length;

  const handleFilterChange = useCallback((options: Partial<FilterOptions>) => {
    setFilterOptions((prev) => ({ ...prev, ...options }));
  }, []);

  const openCityDetail = useCallback((city: EnhancedCity) => {
    setSelectedCity(city);
    setSelectedCityForChart(city);
    setDetailVisible(true);
  }, []);

  const closeCityDetail = useCallback(() => {
    setDetailVisible(false);
    setSelectedCity(null);
  }, []);

  useEffect(() => {
    if (!barChartRef.current) return;
    barChartInstance.current = echarts.init(barChartRef.current);
    updateBarChart();

    return () => {
      barChartInstance.current?.dispose();
    };
  }, []);

  useEffect(() => {
    updateBarChart();
  }, [filteredCities]);

  useEffect(() => {
    if (!trendChartRef.current) return;
    trendChartInstance.current = echarts.init(trendChartRef.current);
    updateTrendChart();

    return () => {
      trendChartInstance.current?.dispose();
    };
  }, [selectedCityForChart]);

  useEffect(() => {
    if (!radarChartRef.current || !selectedCity) return;
    radarChartInstance.current = echarts.init(radarChartRef.current);
    updateRadarChart();

    return () => {
      radarChartInstance.current?.dispose();
    };
  }, [selectedCity]);

  const updateBarChart = () => {
    if (!barChartInstance.current) return;
    const top10 = filteredCities.slice(0, 10);
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        textStyle: { color: '#374151' },
        formatter: (params: unknown) => {
          const data = (params as Array<{ name: string; value: number }>)[0];
          if (!data) return '';
          const city = top10.find((c) => c.name === data.name);
          if (!city) return '';
          return `${data.name}市<br/>综合评分: <strong>${data.value}</strong><br/>潜力评级: <strong>${city.riskRating.level}级</strong><br/>爆红概率: <strong>${Math.round(city.riskRating.probability * 100)}%</strong>`;
        },
      },
      grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
      xAxis: {
        type: 'category',
        data: top10.map((c) => c.name),
        axisLine: { lineStyle: { color: '#e5e7eb' } },
        axisLabel: { color: '#6b7280', fontSize: 12, rotate: 30 },
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLine: { show: false },
        axisLabel: { color: '#6b7280', fontSize: 12 },
        splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } },
      },
      series: [
        {
          type: 'bar',
          data: top10.map((c) => ({
            value: c.score,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: c.riskRating.color },
                { offset: 1, color: echarts.color.modifyAlpha(c.riskRating.color, 0.5) as string },
              ]),
              borderRadius: [4, 4, 0, 0],
            },
          })),
          barWidth: '50%',
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.2)' },
          },
        },
      ],
    };
    barChartInstance.current.setOption(option);
  };

  const updateTrendChart = () => {
    if (!trendChartInstance.current || !selectedCityForChart) return;
    const city = selectedCityForChart;
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        textStyle: { color: '#374151' },
        formatter: (params: unknown) => {
          const data = (params as Array<{ name: string; value: number }>)[0];
          if (!data) return '';
          return `${data.name}<br/>热度指数: <strong>${data.value}</strong>`;
        },
      },
      grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
      xAxis: {
        type: 'category',
        data: months,
        axisLine: { lineStyle: { color: '#e5e7eb' } },
        axisLabel: { color: '#6b7280', fontSize: 12 },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: { color: '#6b7280', fontSize: 12 },
        splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } },
      },
      series: [
        {
          type: 'line',
          smooth: true,
          data: city.trend,
          lineStyle: { color: '#3b82f6', width: 3 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.05)' },
            ]),
          },
          itemStyle: { color: '#3b82f6' },
          symbol: 'circle',
          symbolSize: 6,
        },
      ],
    };
    trendChartInstance.current.setOption(option);
  };

  const updateRadarChart = () => {
    if (!radarChartInstance.current || !selectedCity) return;
    const city = selectedCity;
    const option: echarts.EChartsOption = {
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        textStyle: { color: '#374151' },
      },
      radar: {
        indicator: [
          { name: '资源稀缺度', max: 100 },
          { name: '交通可达性', max: 100 },
          { name: '消费性价比', max: 100 },
          { name: '网络传播热度', max: 100 },
          { name: '服务配套完善度', max: 100 },
        ],
        center: ['50%', '50%'],
        radius: '70%',
        axisName: { color: '#6b7280', fontSize: 12 },
        splitArea: { areaStyle: { color: ['#fff', '#f9fafb'] } },
        axisLine: { lineStyle: { color: '#e5e7eb' } },
        splitLine: { lineStyle: { color: '#e5e7eb' } },
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [city.uniqueness, city.traffic, city.cost, city.popularity, city.facilities],
              name: city.name,
              areaStyle: { color: 'rgba(59, 130, 246, 0.2)' },
              lineStyle: { color: '#3b82f6', width: 2 },
              itemStyle: { color: '#3b82f6' },
            },
          ],
        },
      ],
    };
    radarChartInstance.current.setOption(option);
  };

  const tourismInfo: TourismInfo = selectedCity ? tourismData[selectedCity.name] || defaultTourismInfo : defaultTourismInfo;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">AI城市爆红潜力分析平台</h1>
              <p className="text-blue-100 mt-2 text-lg">飞书AI先锋挑战赛 · 去哪儿命题</p>
              <p className="text-blue-200 mt-1 text-sm">数据挖掘下一个即将爆火的旅游目的地</p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">{totalCities}</div>
                <div className="text-sm text-blue-100">收录城市</div>
              </div>
              <div className="w-px h-12 bg-blue-400"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">{topScore}</div>
                <div className="text-sm text-blue-100">最高分</div>
              </div>
              <div className="w-px h-12 bg-blue-400"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">{avgScore}</div>
                <div className="text-sm text-blue-100">平均分</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="text-2xl mb-1">🏞️</div>
              <div className="text-xs text-blue-100">资源稀缺度</div>
              <div className="font-bold">25%</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="text-2xl mb-1">🚄</div>
              <div className="text-xs text-blue-100">交通可达性</div>
              <div className="font-bold">20%</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-xs text-blue-100">消费性价比</div>
              <div className="font-bold">20%</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="text-2xl mb-1">📈</div>
              <div className="text-xs text-blue-100">网络传播热度</div>
              <div className="font-bold">25%</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="text-2xl mb-1">🏨</div>
              <div className="text-xs text-blue-100">服务配套完善度</div>
              <div className="font-bold">10%</div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{scoringAlgorithm.name}</h3>
                <p className="text-sm text-gray-500">版本：{scoringAlgorithm.version} · 方法论：{scoringAlgorithm.methodology} · 置信度：{Math.round(scoringAlgorithm.confidence * 100)}%</p>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-sm text-gray-600">S+/S级：极高潜力</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span className="text-sm text-gray-600">A+/A级：高潜力</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-sm text-gray-600">B级：潜力</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📊</span>
                  <h4 className="font-semibold text-gray-800">量化评分模型</h4>
                </div>
                <p className="text-xs text-gray-600">
                  采用加权求和+动态归一化方法论，通过五维指标量化评估。
                  支持Z-score标准化分析，实现跨维度数据可比性。
                  模型置信度{Math.round(scoringAlgorithm.confidence * 100)}%。
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎯</span>
                  <h4 className="font-semibold text-gray-800">风险评级矩阵</h4>
                </div>
                <p className="text-xs text-gray-600">
                  融合金融风险评级思路，建立评分-增速二维评级矩阵。
                  分为S+/S/A+/A/B/C六个等级，每个等级对应明确的爆红概率区间。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🔮</span>
                  <h4 className="font-semibold text-gray-800">趋势预测模型</h4>
                </div>
                <p className="text-xs text-gray-600">
                  基于历史数据趋势拟合，结合季节性调整预测未来12个月热度。
                  计算波动率和置信区间，评估预测可靠性，展现AI数据挖掘能力。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">🤖 AI推荐潜力爆火城市</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((city, index) => (
              <div
                key={city.id}
                onClick={() => openCityDetail(city)}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-bold text-indigo-600">#{index + 1}</span>
                  <span
                    className="px-3 py-1 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: city.riskRating.color }}
                  >
                    {city.riskRating.level}级
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">{city.name}市</h4>
                <p className="text-sm text-gray-500 mt-1">{city.province} · {city.type}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-2xl font-bold text-indigo-600">{city.score}</span>
                  <span className="text-xs text-gray-500">综合评分</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {city.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white rounded-full text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 p-2 bg-white rounded-lg">
                  <p className="text-xs text-gray-600">
                    🔥 热度增速：<span className="font-bold text-red-500">{city.growthRate}%</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 筛选控制面板</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">区域：</label>
              <select
                value={filterOptions.region}
                onChange={(e) => handleFilterChange({ region: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option || '全部区域'}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">类型：</label>
              <select
                value={filterOptions.type}
                onChange={(e) => handleFilterChange({ type: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {typeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option || '全部类型'}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">搜索：</label>
              <input
                type="text"
                value={filterOptions.keyword}
                onChange={(e) => handleFilterChange({ keyword: e.target.value })}
                placeholder="输入城市名称"
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">排序：</label>
              <select
                value={filterOptions.sortBy}
                onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🏆 城市综合潜力排行榜 TOP20</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">排名</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">城市</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">资源稀缺度</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">交通可达性</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">消费性价比</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">网络热度</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">配套完善度</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">综合评分</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">评级</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCities.slice(0, 20).map((city, index) => (
                      <tr
                        key={city.id}
                        onClick={() => openCityDetail(city)}
                        className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <td className="px-4 py-3">
                          {index === 0 && <span className="text-yellow-500">🥇</span>}
                          {index === 1 && <span className="text-gray-400">🥈</span>}
                          {index === 2 && <span className="text-amber-600">🥉</span>}
                          {index > 2 && <span className="text-gray-500">#{index + 1}</span>}
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-800">{city.name}</div>
                          <div className="text-xs text-gray-500">{city.province}</div>
                        </td>
                        <td className="px-4 py-3 text-center">{city.uniqueness}</td>
                        <td className="px-4 py-3 text-center">{city.traffic}</td>
                        <td className="px-4 py-3 text-center">{city.cost}</td>
                        <td className="px-4 py-3 text-center">{city.popularity}</td>
                        <td className="px-4 py-3 text-center">{city.facilities}</td>
                        <td className="px-4 py-3 text-center font-bold text-indigo-600">{city.score}</td>
                        <td className="px-4 py-3">
                          <span
                            className="px-2 py-1 rounded text-white text-xs font-bold"
                            style={{ backgroundColor: city.riskRating.color }}
                          >
                            {city.riskRating.level}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📈 热度趋势图</h3>
              <div className="text-sm text-gray-500 mb-2">
                当前城市：{selectedCityForChart?.name || filteredCities[0]?.name || '暂无'}
              </div>
              <div ref={trendChartRef} className="w-full h-[300px]"></div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📊 TOP10城市得分对比</h3>
              <div ref={barChartRef} className="w-full h-[300px]"></div>
            </div>
          </div>
        </div>

        <footer className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-800 mb-2">📊 AI总结结论 & 热度增长预判</h3>
              <p className="text-sm text-gray-600 max-w-2xl">
                根据「城市爆红潜力综合评分模型V2.0」分析，
                <span className="font-bold text-indigo-600">
                  {recommendations[0]?.name}、{recommendations[1]?.name}、{recommendations[2]?.name}
                </span>
                三座城市综合评分最高，最有可能成为下一个网红爆火目的地。
                模型采用加权求和+动态归一化方法论，基于五维指标量化评估，整体置信度{Math.round(scoringAlgorithm.confidence * 100)}%。
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{sCount}</div>
                <div className="text-xs text-gray-500">S级极高潜力</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">{aCount}</div>
                <div className="text-xs text-gray-500">A级高潜力</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{bCount}</div>
                <div className="text-xs text-gray-500">B级潜力</div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">📈 增长趋势分析</h4>
                <p className="text-xs text-gray-600">
                  基于历史数据趋势拟合与季节性调整，对TOP3城市未来12个月热度进行预测，平均预测确定性{Math.round(scoringAlgorithm.confidence * 100)}%。
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">🎯 商业洞察</h4>
                <p className="text-xs text-gray-600">
                  芒市以92分稀缺度领先，榕江68.5%热度增速爆发，天水32.8%增速稳健，均处于商业化布局窗口期。
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">⚡ 量化指标</h4>
                <p className="text-xs text-gray-600">
                  资源稀缺度(25%)+交通可达性(20%)+性价比(20%)+网络热度(25%)+配套完善度(10%)=综合潜力评分。
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">🤖 AI能力</h4>
                <p className="text-xs text-gray-600">
                  融合金融数据分析方法论，支持Z-score标准化、风险评级矩阵、趋势预测模型，展现AI数据挖掘复合能力。
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>数据来源：模拟数据 · 仅供参赛展示参考</p>
            <p className="mt-1">{scoringAlgorithm.name} {scoringAlgorithm.version} · 飞书AI先锋挑战赛</p>
          </div>
        </footer>
      </main>

      {detailVisible && selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedCity.name}市</h2>
                <p className="text-sm text-gray-500">{selectedCity.province} · {selectedCity.region} · {selectedCity.type}</p>
              </div>
              <button
                onClick={closeCityDetail}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">📊 城市评分</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl font-bold text-indigo-600">{selectedCity.score}</span>
                    <span
                      className="px-4 py-2 rounded-full text-white font-bold text-lg"
                      style={{ backgroundColor: selectedCity.riskRating.color }}
                    >
                      {selectedCity.riskRating.level}级
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    爆红概率：<span className="font-bold">{Math.round(selectedCity.riskRating.probability * 100)}%</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    热度增速：<span className="font-bold text-red-500">{selectedCity.growthRate}%</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">🏷️ 城市标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCity.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700">适合人群：</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedCity.suitableFor.map((group) => (
                        <span key={group} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {group}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-700">最佳旅行季节：</h4>
                    <span className="text-sm text-gray-600">{selectedCity.bestSeason}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 五维能力雷达图</h3>
                <div ref={radarChartRef} className="w-full h-[300px]"></div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🏞️ 热门景点推荐</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {tourismInfo.attractions.map((attraction, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                        <img
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-800">{attraction.name}</h4>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">
                            {attraction.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{attraction.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎉 民俗节日介绍</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tourismInfo.festivals.map((festival, index) => (
                    <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-800">{festival.name}</h4>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                          {festival.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{festival.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 旅游攻略</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  {tourismInfo.travelTips.map((tip, index) => (
                    <p key={index} className="text-sm text-gray-700 mb-2 flex items-start gap-2">
                      <span className="text-indigo-500">•</span>
                      {tip}
                    </p>
                  ))}
                </div>
              </div>

              {tourismInfo.itineraries && tourismInfo.itineraries.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🗺️ 行程推荐</h3>
                  <div className="space-y-4">
                    {tourismInfo.itineraries.map((day) => (
                      <div key={day.day} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                        <h4 className="font-bold text-gray-800 mb-2">Day {day.day}：{day.title}</h4>
                        <ul className="space-y-1">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-500">▸</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};