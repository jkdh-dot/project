<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
      <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-t-xl">
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-2xl font-bold">{{ city.name }}市</h2>
            <p class="text-blue-100 mt-1">{{ city.province }}省 · {{ city.region }} · {{ city.type }}</p>
          </div>
          <button @click="$emit('close')" class="text-white hover:text-gray-200 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold">{{ computedScore }}</div>
            <div class="text-sm text-blue-100">综合评分</div>
          </div>
          <div class="w-px h-12 bg-blue-400"></div>
          <div class="text-center">
            <div class="text-3xl font-bold">{{ city.growthRate }}%</div>
            <div class="text-sm text-blue-100">热度增速</div>
          </div>
          <div class="w-px h-12 bg-blue-400"></div>
          <div class="text-center">
            <span 
              class="inline-flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold"
              :style="{ backgroundColor: riskRating.color }"
            >
              {{ riskRating.level }}
            </span>
            <div class="text-sm text-blue-100 mt-1">{{ riskRating.label }}</div>
          </div>
          <div class="w-px h-12 bg-blue-400"></div>
          <div class="text-center">
            <div class="text-3xl font-bold">{{ Math.round(riskRating.probability * 100) }}%</div>
            <div class="text-sm text-blue-100">爆红概率</div>
          </div>
        </div>
      </div>
      
      <div class="p-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div class="lg:col-span-2 space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">城市简介</h3>
              <p class="text-gray-600 leading-relaxed">{{ city.description }}</p>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in city.tags" :key="tag" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {{ tag }}
              </span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">👥 适合人群</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="group in city.suitableFor" :key="group" class="px-2 py-1 bg-green-50 text-green-700 rounded text-sm">
                    {{ group }}
                  </span>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">🌄 最佳旅行季节</h4>
                <span class="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium">
                  {{ city.bestSeason }}
                </span>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">📊 市场定位</h4>
                <div class="text-sm">
                  <div class="text-gray-600">全国排名：<span class="font-bold text-blue-600">第{{ marketPosition.nationalRank }}名</span></div>
                  <div class="text-gray-600">区域排名：<span class="font-bold text-indigo-600">第{{ marketPosition.regionalRank }}名</span></div>
                  <div class="text-gray-600">市场份额：<span class="font-bold text-purple-600">{{ marketPosition.marketShare }}%</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              关键洞察
            </h3>
            <div class="space-y-3">
              <div v-for="(insight, index) in insights" :key="index" class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                <p class="text-sm text-gray-700">{{ insight }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">五维能力雷达图</h3>
            <div ref="radarRef" class="w-full h-[300px]"></div>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">各维度得分</h3>
            <div class="space-y-4">
              <div v-for="(label, key) in dimensionLabels" :key="key">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-600">{{ label }}</span>
                  <span class="font-medium text-gray-800">{{ city[key] }}分</span>
                </div>
                <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-500" 
                    :style="{ width: city[key] + '%', backgroundColor: dimensionColors[key] }"
                  ></div>
                </div>
                <div class="flex justify-between mt-1">
                  <span class="text-xs text-gray-400">{{ dimensionConfigs[key].metric }}</span>
                  <span 
                    class="text-xs font-medium"
                    :class="getLevelClass(city[key], dimensionConfigs[key].benchmark)"
                  >
                    {{ getLevelText(city[key], dimensionConfigs[key].benchmark) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">📈 近一年旅游热度趋势</h3>
            <div ref="trendRef" class="w-full h-[300px]"></div>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">🔮 未来12月热度预判</h3>
            <div ref="predictionRef" class="w-full h-[300px]"></div>
            <div class="mt-4 grid grid-cols-3 gap-4 text-center">
              <div class="bg-indigo-50 rounded-lg p-3">
                <div class="text-xl font-bold text-indigo-600">↑{{ prediction.expectedGrowthRate }}%</div>
                <div class="text-xs text-gray-500">预期增长率</div>
              </div>
              <div class="bg-blue-50 rounded-lg p-3">
                <div class="text-xl font-bold text-blue-600">{{ Math.round(prediction.confidence * 100) }}%</div>
                <div class="text-xs text-gray-500">预测确定性</div>
              </div>
              <div class="bg-purple-50 rounded-lg p-3">
                <div class="text-xl font-bold text-purple-600">{{ prediction.riskLevel }}</div>
                <div class="text-xs text-gray-500">波动风险</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            爆红机会点分析
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white/80 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 class="font-medium text-gray-800">🎯 核心竞争优势</h4>
              <p class="text-sm text-gray-600 mt-1">该城市拥有独特的{{ city.tags[0] || '旅游资源' }}，稀缺度评分{{ city.uniqueness }}分，具备差异化竞争力，区别于已爆红城市。</p>
            </div>
            <div class="bg-white/80 rounded-lg p-4 border-l-4 border-green-500">
              <h4 class="font-medium text-gray-800">💰 性价比吸引力</h4>
              <p class="text-sm text-gray-600 mt-1">消费性价比{{ city.cost }}分，{{ city.cost >= 85 ? '显著低于' : '低于' }}同级别城市平均水平，对年轻游客群体极具吸引力。</p>
            </div>
            <div class="bg-white/80 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 class="font-medium text-gray-800">📈 增长趋势分析</h4>
              <p class="text-sm text-gray-600 mt-1">近一年热度增速{{ city.growthRate }}%，呈现{{ city.growthRate > 30 ? '爆发式增长' : city.growthRate > 20 ? '快速增长' : '稳步增长' }}态势，未来爆红概率{{ Math.round(riskRating.probability * 100) }}%。</p>
            </div>
            <div class="bg-white/80 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 class="font-medium text-gray-800">💬 传播机会评估</h4>
              <p class="text-sm text-gray-600 mt-1">当前网络热度{{ city.popularity }}分，尚未达到饱和状态，存在{{ city.popularity < 50 ? '巨大的' : '一定的' }}社交媒体传播空间。</p>
            </div>
          </div>
        </div>
        
        <div class="mt-6 card">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">📊 量化指标详解</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-4 py-2 text-left font-medium text-gray-700">指标维度</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700">评分</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700">计算公式</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700">权重占比</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(config, key) in dimensionConfigs" :key="key" class="border-t">
                  <td class="px-4 py-3">
                    <div class="font-medium text-gray-800">{{ config.name }}</div>
                    <div class="text-xs text-gray-500">{{ config.description }}</div>
                  </td>
                  <td class="px-4 py-3">
                    <span class="font-bold" :style="{ color: dimensionColors[key] }">{{ city[key] }}</span>
                  </td>
                  <td class="px-4 py-3 text-xs text-gray-600">{{ config.formula }}</td>
                  <td class="px-4 py-3">
                    <div class="flex items-center gap-2">
                      <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full rounded-full" :style="{ width: config.weight + '%', backgroundColor: dimensionColors[key] }"></div>
                      </div>
                      <span class="text-sm font-medium">{{ config.weight }}%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mt-6 card">
          <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21l1.65-3.8a9 9 0 113.4 2.9L3 21"></path>
            </svg>
            🏞️ 热门景点推荐
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              v-for="(attraction, index) in tourismInfo.attractions" 
              :key="index"
              class="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div class="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                <img 
                  :src="attraction.image" 
                  :alt="attraction.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-3">
                <div class="flex justify-between items-start">
                  <h4 class="font-medium text-gray-800">{{ attraction.name }}</h4>
                  <span class="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">{{ attraction.type }}</span>
                </div>
                <div class="flex items-center gap-1 mt-1">
                  <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm font-medium text-gray-700">{{ attraction.rating }}</span>
                </div>
                <p class="text-xs text-gray-500 mt-2 line-clamp-2">{{ attraction.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 card">
          <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            🎉 民俗节日介绍
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              v-for="(festival, index) in tourismInfo.festivals" 
              :key="index"
              class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-100"
            >
              <div class="flex items-center gap-2 mb-2">
                <span class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {{ index + 1 }}
                </span>
                <h4 class="font-medium text-gray-800">{{ festival.name }}</h4>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{{ festival.time }}</span>
              </div>
              <p class="text-sm text-gray-600">{{ festival.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-6 card">
          <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            📋 旅游攻略与贴士
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium text-gray-700 mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                旅行小贴士
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="(tip, index) in tourismInfo.travelTips" 
                  :key="index"
                  class="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                  {{ tip }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-gray-700 mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                推荐行程
              </h4>
              <div class="space-y-3">
                <div 
                  v-for="(itinerary, index) in tourismInfo.itineraries" 
                  :key="index"
                  class="bg-blue-50 rounded-lg p-3"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold">Day {{ itinerary.day }}</span>
                    <span class="font-medium text-gray-800">{{ itinerary.title }}</span>
                  </div>
                  <ul class="space-y-1">
                    <li 
                      v-for="(activity, aIndex) in itinerary.activities" 
                      :key="aIndex"
                      class="flex items-center gap-2 text-xs text-gray-600"
                    >
                      <svg class="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {{ activity }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex justify-center">
          <button 
            @click="$emit('close')" 
            class="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
          >
            关闭详情
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted, nextTick, computed } from 'vue';
import * as echarts from 'echarts';
import { dimensionLabels, dimensionColors, cityData, defaultWeights, months } from '../data/cities';
import { 
  calculateWeightedScore, 
  getRiskRating, 
  predictFutureGrowth, 
  generateInsight,
  analyzeMarketPosition,
  dimensionConfigs,
  futureMonths
} from '../data/scoringModel';
import { tourismData, defaultTourismInfo } from '../data/tourismInfo';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  city: {
    type: Object,
    default: () => ({})
  }
});

defineEmits(['close']);

const radarRef = ref(null);
const trendRef = ref(null);
const predictionRef = ref(null);
let radarChart = null;
let trendChart = null;
let predictionChart = null;

const computedScore = computed(() => {
  return calculateWeightedScore(props.city);
});

const riskRating = computed(() => {
  return getRiskRating(computedScore.value, props.city.growthRate || 0);
});

const prediction = computed(() => {
  return predictFutureGrowth(props.city);
});

const marketPosition = computed(() => {
  return analyzeMarketPosition(props.city, cityData);
});

const insights = computed(() => {
  return generateInsight(props.city, computedScore.value, riskRating.value, prediction.value);
});

const tourismInfo = computed(() => {
  return tourismData[props.city.name] || defaultTourismInfo;
});

const getLevelClass = (score, benchmark) => {
  if (score >= benchmark.excellent) return 'text-green-600';
  if (score >= benchmark.good) return 'text-yellow-600';
  return 'text-gray-500';
};

const getLevelText = (score, benchmark) => {
  if (score >= benchmark.excellent) return '优秀';
  if (score >= benchmark.good) return '良好';
  return '一般';
};

const initRadarChart = () => {
  if (!radarRef.value) return;
  
  radarChart = echarts.init(radarRef.value);
  updateRadarChart();
};

const updateRadarChart = () => {
  if (!radarChart || !props.city.name) return;
  
  const dimensions = ['uniqueness', 'traffic', 'cost', 'popularity', 'facilities'];
  const data = dimensions.map(key => props.city[key] || 0);
  
  const option = {
    radar: {
      indicator: dimensions.map(key => ({
        name: dimensionLabels[key],
        max: 100
      })),
      shape: 'polygon',
      splitNumber: 5,
      axisName: { color: '#374151', fontSize: 12 },
      splitLine: { lineStyle: { color: ['#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280'] } },
      splitArea: { show: true, areaStyle: { color: ['rgba(59, 130, 246, 0.02)', 'rgba(59, 130, 246, 0.04)'] } },
      axisLine: { lineStyle: { color: '#e5e7eb' } }
    },
    series: [{
      type: 'radar',
      data: [{
        value: data,
        name: props.city.name,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { width: 2, color: '#3b82f6' },
        areaStyle: { color: 'rgba(59, 130, 246, 0.2)' },
        itemStyle: { color: '#3b82f6' }
      }]
    }]
  };
  
  radarChart.setOption(option);
};

const initTrendChart = () => {
  if (!trendRef.value) return;
  
  trendChart = echarts.init(trendRef.value);
  updateTrendChart();
};

const updateTrendChart = () => {
  if (!trendChart || !props.city.name) return;
  
  const option = {
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: months,
      axisLine: { lineStyle: { color: '#e5e7eb' } },
      axisLabel: { color: '#6b7280', fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 12 },
      splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } }
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const data = params[0];
        return `${data.name}<br/>热度指数: <strong>${data.value}</strong>`;
      }
    },
    series: [{
      type: 'line',
      data: props.city.trend || [],
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 3, color: '#3b82f6' },
      itemStyle: { color: '#3b82f6', borderWidth: 2, borderColor: '#fff' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
          { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
        ])
      }
    }]
  };
  
  trendChart.setOption(option);
};

const initPredictionChart = () => {
  if (!predictionRef.value) return;
  
  predictionChart = echarts.init(predictionRef.value);
  updatePredictionChart();
};

const updatePredictionChart = () => {
  if (!predictionChart || !props.city.name) return;
  
  const option = {
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: futureMonths,
      axisLine: { lineStyle: { color: '#e5e7eb' } },
      axisLabel: { color: '#6b7280', fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 12 },
      splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } }
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const data = params[0];
        return `${data.name}<br/>预测热度: <strong>${data.value}</strong>`;
      }
    },
    series: [{
      type: 'line',
      data: prediction.value.prediction || [],
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 3, color: '#8b5cf6', type: 'dashed' },
      itemStyle: { color: '#8b5cf6', borderWidth: 2, borderColor: '#fff' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(139, 92, 246, 0.2)' },
          { offset: 1, color: 'rgba(139, 92, 246, 0.02)' }
        ])
      }
    }]
  };
  
  predictionChart.setOption(option);
};

const handleResize = () => {
  radarChart?.resize();
  trendChart?.resize();
  predictionChart?.resize();
};

watch(() => props.visible, (newVal) => {
  if (newVal) {
    nextTick(() => {
      initRadarChart();
      initTrendChart();
      initPredictionChart();
    });
  }
});

watch(() => props.city, () => {
  if (props.visible) {
    updateRadarChart();
    updateTrendChart();
    updatePredictionChart();
  }
}, { deep: true });

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  radarChart?.dispose();
  trendChart?.dispose();
  predictionChart?.dispose();
});
</script>
