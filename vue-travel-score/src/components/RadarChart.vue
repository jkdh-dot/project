<template>
  <div class="card">
    <h2 class="text-lg font-bold text-primary mb-4">城市五维能力分析</h2>
    <div ref="chartRef" class="w-full h-[350px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { dimensionLabels, dimensionColors } from '../data/cities';

const props = defineProps({
  city: {
    type: Object,
    required: true
  }
});

const chartRef = ref(null);
let chartInstance = null;

const initChart = () => {
  if (!chartRef.value) return;
  
  chartInstance = echarts.init(chartRef.value);
  updateChart();
};

const updateChart = () => {
  if (!chartInstance || !props.city) return;
  
  const dimensions = ['uniqueness', 'traffic', 'cost', 'popularity', 'facilities'];
  const data = dimensions.map(key => props.city[key]);
  
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: true,
      bottom: 0
    },
    radar: {
      indicator: dimensions.map(key => ({
        name: dimensionLabels[key],
        max: 100
      })),
      shape: 'polygon',
      splitNumber: 5,
      axisName: {
        color: '#1a365d',
        fontSize: 12
      },
      splitLine: {
        lineStyle: {
          color: ['#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569']
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(26, 54, 93, 0.02)', 'rgba(26, 54, 93, 0.04)']
        }
      },
      axisLine: {
        lineStyle: {
          color: '#cbd5e1'
        }
      }
    },
    series: [{
      name: props.city.name + ' 能力分析',
      type: 'radar',
      data: [{
        value: data,
        name: props.city.name,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
          width: 2,
          color: '#1a365d'
        },
        areaStyle: {
          color: 'rgba(26, 54, 93, 0.2)'
        },
        itemStyle: {
          color: '#1a365d'
        }
      }]
    }]
  };
  
  chartInstance.setOption(option);
};

const handleResize = () => {
  chartInstance?.resize();
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  chartInstance?.dispose();
});

watch(() => props.city, updateChart, { deep: true });
</script>
