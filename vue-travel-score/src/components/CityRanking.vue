<template>
  <div class="card">
    <div class="flex flex-wrap justify-between items-center mb-4 gap-4">
      <div>
        <h2 class="text-xl font-bold text-gray-800">城市综合潜力排行榜</h2>
        <p class="text-sm text-gray-500 mt-1">TOP20 潜力城市排名 · 基于量化评分模型V2.0</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-500">展示模式:</span>
        <button 
          @click="viewMode = 'table'" 
          class="px-3 py-1.5 rounded-lg text-sm transition-colors"
          :class="viewMode === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          表格模式
        </button>
        <button 
          @click="viewMode = 'card'" 
          class="px-3 py-1.5 rounded-lg text-sm transition-colors"
          :class="viewMode === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          卡片模式
        </button>
      </div>
    </div>

    <div v-if="viewMode === 'table'" class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-4 py-3 text-left font-medium text-gray-600">排名</th>
            <th class="px-4 py-3 text-left font-medium text-gray-600">城市</th>
            <th class="px-4 py-3 text-center font-medium text-gray-600">类型</th>
            <th class="px-3 py-3 text-center font-medium text-gray-600">资源</th>
            <th class="px-3 py-3 text-center font-medium text-gray-600">交通</th>
            <th class="px-3 py-3 text-center font-medium text-gray-600">性价比</th>
            <th class="px-3 py-3 text-center font-medium text-gray-600">热度</th>
            <th class="px-3 py-3 text-center font-medium text-gray-600">配套</th>
            <th class="px-4 py-3 text-center font-medium text-gray-600">综合评分</th>
            <th class="px-4 py-3 text-center font-medium text-gray-600">潜力评级</th>
            <th class="px-4 py-3 text-center font-medium text-gray-600">爆红概率</th>
            <th class="px-4 py-3 text-center font-medium text-gray-600">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(city, index) in displayCities" 
            :key="city.id" 
            class="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
            @click="$emit('city-click', city)"
          >
            <td class="px-4 py-3">
              <span :class="getRankClass(index)" class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold">
                {{ index + 1 }}
              </span>
            </td>
            <td class="px-4 py-3 font-medium text-gray-800">
              <div>{{ city.name }}市</div>
              <div class="text-xs text-gray-400">{{ city.province }} · {{ city.region }}</div>
            </td>
            <td class="px-4 py-3 text-center">
              <span class="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">{{ city.type }}</span>
            </td>
            <td class="px-3 py-3 text-center">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded bg-blue-100 text-blue-700 text-xs font-medium">
                {{ city.uniqueness }}
              </span>
            </td>
            <td class="px-3 py-3 text-center">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded bg-green-100 text-green-700 text-xs font-medium">
                {{ city.traffic }}
              </span>
            </td>
            <td class="px-3 py-3 text-center">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded bg-yellow-100 text-yellow-700 text-xs font-medium">
                {{ city.cost }}
              </span>
            </td>
            <td class="px-3 py-3 text-center">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded bg-red-100 text-red-700 text-xs font-medium">
                {{ city.popularity }}
              </span>
            </td>
            <td class="px-3 py-3 text-center">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded bg-purple-100 text-purple-700 text-xs font-medium">
                {{ city.facilities }}
              </span>
            </td>
            <td class="px-4 py-3 text-center">
              <span :class="getScoreClass(city.score)" class="inline-block px-2 py-1 rounded font-bold">
                {{ city.score }}
              </span>
            </td>
            <td class="px-4 py-3 text-center">
              <span 
                class="inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm text-white"
                :style="{ backgroundColor: city.riskRating.color }"
              >
                {{ city.riskRating.level }}
              </span>
            </td>
            <td class="px-4 py-3 text-center">
              <div class="flex items-center justify-center">
                <div class="w-12 h-2 bg-gray-100 rounded-full overflow-hidden mr-2">
                  <div 
                    class="h-full rounded-full transition-all duration-500"
                    :style="{ width: (city.riskRating.probability * 100) + '%', backgroundColor: city.riskRating.color }"
                  ></div>
                </div>
                <span class="text-xs font-medium" :style="{ color: city.riskRating.color }">{{ Math.round(city.riskRating.probability * 100) }}%</span>
              </div>
            </td>
            <td class="px-4 py-3 text-center">
              <button @click.stop="$emit('city-click', city)" class="text-blue-500 hover:text-blue-600 text-sm">详情</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div 
        v-for="(city, index) in displayCities" 
        :key="city.id" 
        class="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-lg transition-all cursor-pointer group"
        @click="$emit('city-click', city)"
      >
        <div class="flex items-start justify-between mb-3">
          <span :class="getRankClass(index)" class="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold">
            {{ index + 1 }}
          </span>
          <span 
            class="px-2 py-0.5 rounded-full text-xs font-bold text-white"
            :style="{ backgroundColor: city.riskRating.color }"
          >
            {{ city.riskRating.level }}级
          </span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{{ city.name }}市</h3>
        <p class="text-sm text-gray-500 mb-3">{{ city.province }} · {{ city.type }}</p>
        
        <div class="flex flex-wrap gap-1 mb-3">
          <span v-for="tag in city.tags.slice(0, 3)" :key="tag" class="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
            {{ tag }}
          </span>
        </div>
        
        <div class="flex items-center justify-between mb-3">
          <div>
            <div class="text-2xl font-bold text-gray-800">{{ city.score }}</div>
            <div class="text-xs text-gray-400">综合评分</div>
          </div>
          <div class="text-right">
            <div class="text-lg font-bold" :class="city.growthRate >= 30 ? 'text-red-600' : 'text-green-600'">{{ city.growthRate }}%</div>
            <div class="text-xs text-gray-400">热度增速</div>
          </div>
        </div>
        
        <div class="mb-3">
          <div class="flex justify-between text-xs mb-1">
            <span class="text-gray-500">爆红概率</span>
            <span class="font-medium" :style="{ color: city.riskRating.color }">{{ Math.round(city.riskRating.probability * 100) }}%</span>
          </div>
          <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all duration-500"
              :style="{ width: (city.riskRating.probability * 100) + '%', backgroundColor: city.riskRating.color }"
            ></div>
          </div>
        </div>
        
        <div class="grid grid-cols-5 gap-1">
          <div class="text-center">
            <div class="text-xs font-medium text-blue-600">{{ city.uniqueness }}</div>
            <div class="text-[10px] text-gray-400">资源</div>
          </div>
          <div class="text-center">
            <div class="text-xs font-medium text-green-600">{{ city.traffic }}</div>
            <div class="text-[10px] text-gray-400">交通</div>
          </div>
          <div class="text-center">
            <div class="text-xs font-medium text-yellow-600">{{ city.cost }}</div>
            <div class="text-[10px] text-gray-400">性价比</div>
          </div>
          <div class="text-center">
            <div class="text-xs font-medium text-red-600">{{ city.popularity }}</div>
            <div class="text-[10px] text-gray-400">热度</div>
          </div>
          <div class="text-center">
            <div class="text-xs font-medium text-purple-600">{{ city.facilities }}</div>
            <div class="text-[10px] text-gray-400">配套</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { calculateWeightedScore, getRiskRating } from '../data/scoringModel';

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

const viewMode = ref('table');

const displayCities = computed(() => {
  return props.cities.slice(0, 20).map(city => {
    const score = calculateWeightedScore(city, props.weights);
    const riskRating = getRiskRating(score, city.growthRate);
    return {
      ...city,
      score,
      riskRating
    };
  });
});

const getRankClass = (index) => {
  if (index === 0) return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white';
  if (index === 1) return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white';
  if (index === 2) return 'bg-gradient-to-r from-orange-400 to-orange-500 text-white';
  return 'bg-gray-100 text-gray-600';
};

const getScoreClass = (score) => {
  if (score >= 85) return 'bg-red-100 text-red-700';
  if (score >= 75) return 'bg-yellow-100 text-yellow-700';
  return 'bg-green-100 text-green-700';
};
</script>
