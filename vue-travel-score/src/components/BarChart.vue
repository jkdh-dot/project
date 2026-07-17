<template>
  <div class="card">
    <h2 class="text-lg font-bold text-primary mb-4">各维度评分对比</h2>
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
  const xAxisData = dimensions.map(key => dimensionLabels[key]);
  const data = dimensions.map(key => props.city[key]);
  const colors = dimensions.map(key => dimensionColors[key]);
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        color: '#475569',
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: '#cbd5e1'
        }
      }
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        color: '#475569',
        fontSize: 12
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#e2e8f0'
        }
      }
    },
    series: [{
      name: '评分',
      type: 'bar',
      data: data.map((value, index) => ({
        value: value,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colors[index] },
            { offset: 1, color: echarts.color.modifyAlpha(colors[index], 0.6) }
          ]),
          borderRadius: [4, 4, 0, 0]
        }
      })),
      barWidth: '50%',
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.2)'
        }
      }
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
