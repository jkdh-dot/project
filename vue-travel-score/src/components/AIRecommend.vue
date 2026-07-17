<template>
  <div class="card">
    <div class="flex flex-wrap items-center gap-3 mb-6">
      <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      </div>
      <div>
        <h2 class="text-xl font-bold text-gray-800">AI智能推荐</h2>
        <p class="text-sm text-gray-500">基于量化评分模型的潜力爆火城市TOP3 · 模型置信度 {{ modelConfidence }}%</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        v-for="(city, index) in recommendations" 
        :key="city.id" 
        class="relative overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-xl group"
        :class="getBorderClass(index)"
        @click="$emit('city-click', city)"
      >
        <div :class="getBgClass(index)" class="absolute inset-0 opacity-10"></div>
        
        <div class="relative p-5">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <span :class="getRankBadgeClass(index)" class="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white">
                {{ index + 1 }}
              </span>
              <div>
                <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{{ city.name }}市</h3>
                <p class="text-xs text-gray-500">{{ city.province }} · {{ city.type }}</p>
              </div>
            </div>
            <span 
              class="px-2 py-1 rounded-full text-xs font-bold text-white"
              :style="{ backgroundColor: city.rating.color }"
            >
              {{ city.rating.level }}级
            </span>
          </div>
          
          <div class="flex items-center gap-4 mb-3">
            <div class="flex-1">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-gray-500">爆红概率</span>
                <span class="text-sm font-bold" :style="{ color: city.rating.color }">{{ Math.round(city.rating.probability * 100) }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full transition-all duration-1000"
                  :style="{ width: (city.rating.probability * 100) + '%', backgroundColor: city.rating.color }"
                ></div>
              </div>
            </div>
          </div>
          
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ city.description }}</p>
          
          <div class="flex flex-wrap gap-1 mb-4">
            <span v-for="tag in city.tags.slice(0, 3)" :key="tag" class="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
              {{ tag }}
            </span>
          </div>
          
          <div class="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
            <div class="text-center">
              <div class="text-xl font-bold text-gray-800">{{ city.score }}</div>
              <div class="text-xs text-gray-400">综合评分</div>
            </div>
            <div class="text-center">
              <div class="text-xl font-bold" :class="city.growthRate >= 30 ? 'text-red-600' : 'text-green-600'">{{ city.growthRate }}%</div>
              <div class="text-xs text-gray-400">热度增速</div>
            </div>
            <div class="text-center">
              <div class="text-xl font-bold text-yellow-600">{{ city.cost }}</div>
              <div class="text-xs text-gray-400">性价比</div>
            </div>
          </div>
          
          <div class="mt-3 pt-3 border-t border-gray-100">
            <div class="flex items-center justify-between text-xs">
              <span class="text-gray-500">未来12月预判</span>
              <span class="font-medium text-indigo-600">↑{{ city.prediction.expectedGrowthRate }}%</span>
            </div>
            <div class="mt-2 h-8 bg-gray-50 rounded-lg overflow-hidden">
              <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <polyline
                  :points="getPredictionPoints(city.prediction.prediction)"
                  fill="none"
                  stroke="#6366f1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="flex justify-between mt-1 text-xs text-gray-400">
              <span>预期</span>
              <span>确定性 {{ Math.round(city.prediction.confidence * 100) }}%</span>
            </div>
          </div>
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 h-1" :class="getProgressClass(index)">
          <div class="h-full transition-all duration-1000" :style="{ width: city.growthRate + '%' }"></div>
        </div>
      </div>
    </div>
    
    <div class="mt-6 p-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl">
      <div class="flex items-center gap-2 mb-4">
        <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
        <h3 class="font-semibold text-gray-800">📊 AI分析结论 & 热度增长预判</h3>
      </div>
      
      <div class="space-y-4">
        <p class="text-sm text-gray-600 leading-relaxed">
          <strong class="text-gray-800">综合评级：</strong>基于「城市爆红潜力综合评分模型V2.0」分析，
          <span class="font-bold text-indigo-600">{{ recommendations[0]?.name }}、{{ recommendations[1]?.name }}、{{ recommendations[2]?.name }}</span>
          三座城市综合评分最高，最有可能成为下一个网红爆火目的地。模型采用加权求和+动态归一化方法论，整体置信度{{ modelConfidence }}%。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-if="recommendations[0]" class="bg-white/70 rounded-lg p-3">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg">🥇</span>
              <strong class="text-gray-800">{{ recommendations[0].name }}</strong>
              <span class="text-xs px-2 py-0.5 rounded-full text-white" :style="{ backgroundColor: recommendations[0].rating.color }">
                {{ recommendations[0].rating.level }}级
              </span>
            </div>
            <p class="text-xs text-gray-600">
              <span class="text-indigo-600 font-medium">核心优势：</span>{{ recommendations[0].tags[0] }}资源稀缺度{{ recommendations[0].uniqueness }}分，热度增速{{ recommendations[0].growthRate }}%
              <br>
              <span class="text-indigo-600 font-medium">预判：</span>未来12月预期增长{{ recommendations[0].prediction.expectedGrowthRate }}%，爆红概率{{ Math.round(recommendations[0].rating.probability * 100) }}%
            </p>
          </div>
          
          <div v-if="recommendations[1]" class="bg-white/70 rounded-lg p-3">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg">🥈</span>
              <strong class="text-gray-800">{{ recommendations[1].name }}</strong>
              <span class="text-xs px-2 py-0.5 rounded-full text-white" :style="{ backgroundColor: recommendations[1].rating.color }">
                {{ recommendations[1].rating.level }}级
              </span>
            </div>
            <p class="text-xs text-gray-600">
              <span class="text-indigo-600 font-medium">核心优势：</span>{{ recommendations[1].tags[0] }}文化底蕴深厚，性价比{{ recommendations[1].cost }}分
              <br>
              <span class="text-indigo-600 font-medium">预判：</span>未来12月预期增长{{ recommendations[1].prediction.expectedGrowthRate }}%，爆红概率{{ Math.round(recommendations[1].rating.probability * 100) }}%
            </p>
          </div>
          
          <div v-if="recommendations[2]" class="bg-white/70 rounded-lg p-3">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg">🥉</span>
              <strong class="text-gray-800">{{ recommendations[2].name }}</strong>
              <span class="text-xs px-2 py-0.5 rounded-full text-white" :style="{ backgroundColor: recommendations[2].rating.color }">
                {{ recommendations[2].rating.level }}级
              </span>
            </div>
            <p class="text-xs text-gray-600">
              <span class="text-indigo-600 font-medium">核心优势：</span>{{ recommendations[2].tags[0] }}特色鲜明，消费性价比突出
              <br>
              <span class="text-indigo-600 font-medium">预判：</span>未来12月预期增长{{ recommendations[2].prediction.expectedGrowthRate }}%，爆红概率{{ Math.round(recommendations[2].rating.probability * 100) }}%
            </p>
          </div>
        </div>
        
        <div class="pt-3 border-t border-gray-200/50">
          <p class="text-xs text-gray-500">
            <strong>分析方法论：</strong>融合商业数据分析与风险评级思路，通过五维指标量化评估。
            资源稀缺度(25%) × 独特性系数 + 交通可达性(20%) × 可达性指数 + 消费性价比(20%) × 性价比指数 + 
            网络传播热度(25%) × 传播指数 + 服务配套(10%) × 成熟度指数 = 综合潜力评分。
            热度预判基于历史趋势拟合与季节性调整，置信区间{{ Math.round(scoringAlgorithm.confidence * 100) }}%。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { calculateWeightedScore, getRiskRating, predictFutureGrowth, scoringAlgorithm } from '../data/scoringModel';

const props = defineProps({
  cities: {
    type: Array,
    required: true
  },
  weights: {
    type: Object,
    default: () => ({})
  }
});

defineEmits(['city-click']);

const modelConfidence = Math.round(scoringAlgorithm.confidence * 100);

const recommendations = computed(() => {
  return [...props.cities]
    .map(city => {
      const score = calculateWeightedScore(city, props.weights);
      const rating = getRiskRating(score, city.growthRate);
      const prediction = predictFutureGrowth(city);
      return { ...city, score, rating, prediction };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
});

const getBorderClass = (index) => {
  if (index === 0) return 'border-yellow-400 hover:border-yellow-500';
  if (index === 1) return 'border-gray-300 hover:border-gray-400';
  if (index === 2) return 'border-orange-400 hover:border-orange-500';
  return 'border-gray-200';
};

const getBgClass = (index) => {
  if (index === 0) return 'bg-yellow-400';
  if (index === 1) return 'bg-gray-300';
  if (index === 2) return 'bg-orange-400';
  return 'bg-gray-100';
};

const getRankBadgeClass = (index) => {
  if (index === 0) return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
  if (index === 1) return 'bg-gradient-to-r from-gray-400 to-gray-500';
  if (index === 2) return 'bg-gradient-to-r from-orange-400 to-orange-500';
  return 'bg-gray-400';
};

const getProgressClass = (index) => {
  if (index === 0) return 'bg-yellow-200';
  if (index === 1) return 'bg-gray-200';
  if (index === 2) return 'bg-orange-200';
  return 'bg-gray-200';
};

const getPredictionPoints = (prediction) => {
  if (!prediction || prediction.length === 0) return '0,30 100,30';
  
  const maxVal = Math.max(...prediction);
  const minVal = Math.min(...prediction);
  const range = maxVal - minVal || 1;
  
  return prediction.map((val, i) => {
    const x = (i / (prediction.length - 1)) * 100;
    const y = 35 - ((val - minVal) / range) * 30;
    return `${x},${y}`;
  }).join(' ');
};
</script>
