<template>
  <div class="card mb-6">
    <div class="flex flex-wrap gap-4">
      <div class="flex-1 min-w-[150px]">
        <label class="block text-sm font-medium text-gray-600 mb-2">区域筛选</label>
        <select v-model="selectedRegion" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
          <option value="">全部区域</option>
          <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
        </select>
      </div>
      <div class="flex-1 min-w-[150px]">
        <label class="block text-sm font-medium text-gray-600 mb-2">城市类型</label>
        <select v-model="selectedType" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
          <option value="">全部类型</option>
          <option v-for="type in cityTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>
      <div class="flex-1 min-w-[150px]">
        <label class="block text-sm font-medium text-gray-600 mb-2">关键词搜索</label>
        <input v-model="searchKeyword" type="text" placeholder="搜索城市..." class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
      </div>
      <div class="flex-1 min-w-[150px]">
        <label class="block text-sm font-medium text-gray-600 mb-2">排序方式</label>
        <select v-model="sortBy" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
          <option value="score">综合评分</option>
          <option value="growthRate">热度增速</option>
          <option value="cost">消费性价比</option>
        </select>
      </div>
      <div class="flex items-end gap-2">
        <button @click="resetFilters" class="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm">重置</button>
      </div>
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-100">
      <h3 class="text-sm font-semibold text-gray-700 mb-4">自定义评分权重</h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="(label, key) in dimensionLabels" :key="key" class="space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">{{ label }}</span>
            <span class="font-medium text-blue-600">{{ weights[key] }}%</span>
          </div>
          <input 
            type="range" 
            v-model.number="weights[key]" 
            min="0" 
            max="50" 
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            :style="{ '--slider-color': dimensionColors[key] }"
          />
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-sm text-gray-500">总权重: <span class="font-bold" :class="totalWeight !== 100 ? 'text-red-500' : 'text-green-500'">{{ totalWeight }}%</span></span>
        <button @click="resetWeights" class="text-sm text-blue-500 hover:text-blue-600">恢复默认权重</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { regionMap, cityTypes, dimensionLabels, dimensionColors, defaultWeights } from '../data/cities';

const emit = defineEmits(['filter-change']);

const regions = Object.keys(regionMap);
const selectedRegion = ref('');
const selectedType = ref('');
const searchKeyword = ref('');
const sortBy = ref('score');

const weights = ref({ ...defaultWeights });

const totalWeight = computed(() => {
  return Object.values(weights.value).reduce((sum, w) => sum + w, 0);
});

const emitChange = () => {
  emit('filter-change', {
    region: selectedRegion.value,
    type: selectedType.value,
    keyword: searchKeyword.value,
    sortBy: sortBy.value,
    weights: { ...weights.value }
  });
};

const resetFilters = () => {
  selectedRegion.value = '';
  selectedType.value = '';
  searchKeyword.value = '';
  sortBy.value = 'score';
  emitChange();
};

const resetWeights = () => {
  weights.value = { ...defaultWeights };
  emitChange();
};

watch([selectedRegion, selectedType, searchKeyword, sortBy, weights], emitChange, { immediate: true, deep: true });
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
