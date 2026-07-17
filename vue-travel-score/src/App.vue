<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-center md:text-left">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">AI城市爆红潜力分析平台</h1>
            <p class="text-blue-100 mt-2 text-lg">飞书AI先锋挑战赛 · 去哪儿命题</p>
            <p class="text-blue-200 mt-1 text-sm">数据挖掘下一个即将爆火的旅游目的地</p>
          </div>
          <div class="mt-6 md:mt-0 flex items-center gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold">{{ totalCities }}</div>
              <div class="text-sm text-blue-100">收录城市</div>
            </div>
            <div class="w-px h-12 bg-blue-400"></div>
            <div class="text-center">
              <div class="text-3xl font-bold">{{ topScore }}</div>
              <div class="text-sm text-blue-100">最高分</div>
            </div>
            <div class="w-px h-12 bg-blue-400"></div>
            <div class="text-center">
              <div class="text-3xl font-bold">{{ avgScore }}</div>
              <div class="text-sm text-blue-100">平均分</div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div class="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
            <div class="text-2xl mb-1">🏞️</div>
            <div class="text-xs text-blue-100">资源稀缺度</div>
            <div class="font-bold">25%</div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
            <div class="text-2xl mb-1">🚄</div>
            <div class="text-xs text-blue-100">交通可达性</div>
            <div class="font-bold">20%</div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
            <div class="text-2xl mb-1">💰</div>
            <div class="text-xs text-blue-100">消费性价比</div>
            <div class="font-bold">20%</div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
            <div class="text-2xl mb-1">📈</div>
            <div class="text-xs text-blue-100">网络传播热度</div>
            <div class="font-bold">25%</div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
            <div class="text-2xl mb-1">🏨</div>
            <div class="text-xs text-blue-100">服务配套完善度</div>
            <div class="font-bold">10%</div>
          </div>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <div class="mb-6 card">
        <div class="flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-800">{{ scoringAlgorithm.name }}</h3>
              <p class="text-sm text-gray-500">版本：{{ scoringAlgorithm.version }} · 方法论：{{ scoringAlgorithm.methodology }} · 置信度：{{ Math.round(scoringAlgorithm.confidence * 100) }}%</p>
            </div>
          </div>
          <div class="flex-1"></div>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500"></span>
              <span class="text-sm text-gray-600">S+/S级：极高潜力</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-orange-500"></span>
              <span class="text-sm text-gray-600">A+/A级：高潜力</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-green-500"></span>
              <span class="text-sm text-gray-600">B级：潜力</span>
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">📊</span>
                <h4 class="font-semibold text-gray-800">量化评分模型</h4>
              </div>
              <p class="text-xs text-gray-600">
                采用加权求和+动态归一化方法论，通过五维指标量化评估。
                支持Z-score标准化分析，实现跨维度数据可比性。
                模型置信度{{ Math.round(scoringAlgorithm.confidence * 100) }}%。
              </p>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">🎯</span>
                <h4 class="font-semibold text-gray-800">风险评级矩阵</h4>
              </div>
              <p class="text-xs text-gray-600">
                融合金融风险评级思路，建立评分-增速二维评级矩阵。
                分为S+/S/A+/A/B/C六个等级，每个等级对应明确的爆红概率区间。
              </p>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">🔮</span>
                <h4 class="font-semibold text-gray-800">趋势预测模型</h4>
              </div>
              <p class="text-xs text-gray-600">
                基于历史数据趋势拟合，结合季节性调整预测未来12个月热度。
                计算波动率和置信区间，评估预测可靠性，展现AI数据挖掘能力。
              </p>
            </div>
          </div>
        </div>
      </div>

      <AIRecommend :cities="filteredCities" :weights="filterOptions.weights" @city-click="openCityDetail" />

      <FilterBar @filter-change="handleFilterChange" />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div class="lg:col-span-2">
          <CityRanking :cities="filteredCities" :weights="filterOptions.weights" @city-click="openCityDetail" />
        </div>
        <div class="space-y-6">
          <TrendChart :city="selectedCityForChart || filteredCities[0]" />
          <div class="card">
            <h2 class="text-lg font-bold text-gray-800 mb-4">TOP10城市得分对比</h2>
            <div ref="barChartRef" class="w-full h-[300px]"></div>
          </div>
        </div>
      </div>

      <footer class="mt-12 p-6 bg-white rounded-xl shadow-sm">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-center md:text-left">
            <h3 class="font-bold text-gray-800 mb-2">📊 AI总结结论 & 热度增长预判</h3>
            <p class="text-sm text-gray-600 max-w-2xl">
              根据「城市爆红潜力综合评分模型V2.0」分析，
              <span class="font-bold text-indigo-600">{{ recommendations[0]?.name }}、{{ recommendations[1]?.name }}、{{ recommendations[2]?.name }}</span> 
              三座城市综合评分最高，最有可能成为下一个网红爆火目的地。
              模型采用加权求和+动态归一化方法论，基于五维指标量化评估，整体置信度{{ Math.round(scoringAlgorithm.confidence * 100) }}%。
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-red-500">{{ sCount }}</div>
              <div class="text-xs text-gray-500">S级极高潜力</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-500">{{ aCount }}</div>
              <div class="text-xs text-gray-500">A级高潜力</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-500">{{ bCount }}</div>
              <div class="text-xs text-gray-500">B级潜力</div>
            </div>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="bg-indigo-50 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-2">📈 增长趋势分析</h4>
              <p class="text-xs text-gray-600">基于历史数据趋势拟合与季节性调整，对TOP3城市未来12个月热度进行预测，平均预测确定性{{ Math.round(scoringAlgorithm.confidence * 100) }}%。</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-2">🎯 商业洞察</h4>
              <p class="text-xs text-gray-600">芒市以92分稀缺度领先，榕江68.5%热度增速爆发，天水32.8%增速稳健，均处于商业化布局窗口期。</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-2">⚡ 量化指标</h4>
              <p class="text-xs text-gray-600">资源稀缺度(25%)+交通可达性(20%)+性价比(20%)+网络热度(25%)+配套完善度(10%)=综合潜力评分。</p>
            </div>
            <div class="bg-pink-50 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-2">🤖 AI能力</h4>
              <p class="text-xs text-gray-600">融合金融数据分析方法论，支持Z-score标准化、风险评级矩阵、趋势预测模型，展现AI数据挖掘复合能力。</p>
            </div>
          </div>
        </div>
        <div class="mt-6 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>数据来源：模拟数据 · 仅供参赛展示参考</p>
          <p class="mt-1">{{ scoringAlgorithm.name }} {{ scoringAlgorithm.version }} · 飞书AI先锋挑战赛</p>
        </div>
      </footer>
    </main>

    <CityDetail :visible="detailVisible" :city="selectedCity" @close="closeCityDetail" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted, nextTick } from 'vue';
import * as echarts from 'echarts';
import { cityData, regionMap, defaultWeights } from './data/cities';
import { calculateWeightedScore, getRiskRating, scoringAlgorithm } from './data/scoringModel';
import FilterBar from './components/FilterBar.vue';
import CityRanking from './components/CityRanking.vue';
import CityDetail from './components/CityDetail.vue';
import AIRecommend from './components/AIRecommend.vue';
import TrendChart from './components/TrendChart.vue';

const filterOptions = ref({
  region: '',
  type: '',
  keyword: '',
  sortBy: 'score',
  weights: { ...defaultWeights }
});

const detailVisible = ref(false);
const selectedCity = ref({});
const selectedCityForChart = ref(null);
const barChartRef = ref(null);
let barChart = null;

const filteredCities = computed(() => {
  let result = [...cityData];
  
  if (filterOptions.value.region) {
    const provinces = regionMap[filterOptions.value.region] || [];
    result = result.filter(city => provinces.includes(city.province));
  }
  
  if (filterOptions.value.type) {
    result = result.filter(city => city.type === filterOptions.value.type);
  }
  
  if (filterOptions.value.keyword) {
    const keyword = filterOptions.value.keyword.toLowerCase();
    result = result.filter(city => 
      city.name.toLowerCase().includes(keyword) || 
      city.province.toLowerCase().includes(keyword)
    );
  }
  
  result = result.map(city => {
    const score = calculateWeightedScore(city, filterOptions.value.weights);
    const riskRating = getRiskRating(score, city.growthRate);
    return {
      ...city,
      score,
      riskRating
    };
  });
  
  result.sort((a, b) => {
    if (filterOptions.value.sortBy === 'score') {
      return b.score - a.score;
    } else if (filterOptions.value.sortBy === 'growthRate') {
      return b.growthRate - a.growthRate;
    } else {
      return b[filterOptions.value.sortBy] - a[filterOptions.value.sortBy];
    }
  });
  
  return result;
});

const totalCities = computed(() => cityData.length);

const topScore = computed(() => {
  const top = filteredCities.value[0];
  return top ? top.score : '-';
});

const avgScore = computed(() => {
  if (filteredCities.value.length === 0) return '-';
  const sum = filteredCities.value.reduce((acc, city) => acc + city.score, 0);
  return (sum / filteredCities.value.length).toFixed(1);
});

const recommendations = computed(() => {
  return filteredCities.value.slice(0, 3);
});

const sCount = computed(() => filteredCities.value.filter(c => c.riskRating.level.startsWith('S')).length);
const aCount = computed(() => filteredCities.value.filter(c => c.riskRating.level.startsWith('A')).length);
const bCount = computed(() => filteredCities.value.filter(c => c.riskRating.level === 'B' || c.riskRating.level === 'C').length);

const handleFilterChange = (options) => {
  filterOptions.value = options;
};

const openCityDetail = (city) => {
  selectedCity.value = city;
  selectedCityForChart.value = city;
  detailVisible.value = true;
};

const closeCityDetail = () => {
  detailVisible.value = false;
  selectedCity.value = {};
};

const initBarChart = () => {
  if (!barChartRef.value) return;
  
  barChart = echarts.init(barChartRef.value);
  updateBarChart();
};

const updateBarChart = () => {
  if (!barChart) return;
  
  const top10 = filteredCities.value.slice(0, 10);
  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: { color: '#374151' },
      formatter: (params) => {
        const data = params[0];
        const city = top10.find(c => c.name === data.name);
        if (!city) return '';
        return `${data.name}市<br/>综合评分: <strong>${data.value}</strong><br/>潜力评级: <strong>${city.riskRating.level}级</strong><br/>爆红概率: <strong>${Math.round(city.riskRating.probability * 100)}%</strong>`;
      }
    },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: top10.map(c => c.name),
      axisLine: { lineStyle: { color: '#e5e7eb' } },
      axisLabel: { color: '#6b7280', fontSize: 12, rotate: 30 }
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 12 },
      splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } }
    },
    series: [{
      type: 'bar',
      data: top10.map(c => ({
        value: c.score,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: c.riskRating.color },
            { offset: 1, color: echarts.color.modifyAlpha(c.riskRating.color, 0.5) }
          ]),
          borderRadius: [4, 4, 0, 0]
        }
      })),
      barWidth: '50%',
      emphasis: {
        itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.2)' }
      }
    }]
  };
  
  barChart.setOption(option);
};

const handleResize = () => {
  barChart?.resize();
};

watch(filterOptions, () => {
  nextTick(() => {
    updateBarChart();
  });
}, { deep: true });

onMounted(() => {
  initBarChart();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  barChart?.dispose();
});
</script>
