export const dimensionConfigs = {
  uniqueness: {
    name: '资源稀缺度',
    weight: 25,
    description: '自然景观、人文古迹、特色文旅IP数量，区别于现有热门城市的独特性',
    metric: '稀缺性指数',
    formula: '稀有度权重 × 独特性系数',
    benchmark: { excellent: 85, good: 70, average: 50 }
  },
  traffic: {
    name: '交通可达性',
    weight: 20,
    description: '高铁覆盖、机场航线、城市交通便捷程度',
    metric: '可达性指数',
    formula: '高铁覆盖率 × 0.4 + 航班密度 × 0.4 + 市内交通 × 0.2',
    benchmark: { excellent: 80, good: 65, average: 45 }
  },
  cost: {
    name: '消费性价比',
    weight: 20,
    description: '住宿均价、餐饮消费水平、门票整体价格，物价越低得分越高',
    metric: '性价比指数',
    formula: '(基准消费 - 实际消费) / 基准消费 × 100',
    benchmark: { excellent: 85, good: 70, average: 50 }
  },
  popularity: {
    name: '网络传播热度',
    weight: 25,
    description: '短视频平台提及量、社交平台讨论度、尚未大规模走红的增长趋势',
    metric: '热度传播指数',
    formula: '当前热度 × 0.3 + 热度增速 × 0.4 + 互动率 × 0.3',
    benchmark: { excellent: 80, good: 60, average: 40 }
  },
  facilities: {
    name: '服务配套完善度',
    weight: 10,
    description: '酒店数量、景区接待能力、基础设施完善程度',
    metric: '配套成熟度指数',
    formula: '酒店密度 × 0.3 + 景区等级 × 0.4 + 基础设施评分 × 0.3',
    benchmark: { excellent: 80, good: 65, average: 45 }
  }
};

export const scoringAlgorithm = {
  name: '城市爆红潜力综合评分模型',
  version: 'V2.0',
  methodology: '加权求和 + 动态归一化',
  confidence: 0.87,
  description: '基于商业数据分析方法论，融合风险评级思路，通过五维指标量化评估城市旅游爆红潜力'
};

export const calculateWeightedScore = (city, customWeights = null) => {
  const weights = customWeights || {
    uniqueness: 25,
    traffic: 20,
    cost: 20,
    popularity: 25,
    facilities: 10
  };
  
  const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
  
  const weightedScore = 
    (city.uniqueness * weights.uniqueness + 
     city.traffic * weights.traffic + 
     city.cost * weights.cost + 
     city.popularity * weights.popularity + 
     city.facilities * weights.facilities) / totalWeight;
  
  return Math.round(weightedScore * 10) / 10;
};

export const calculateZScore = (city, allCities) => {
  const dimensions = ['uniqueness', 'traffic', 'cost', 'popularity', 'facilities'];
  
  const zScores = {};
  dimensions.forEach(dim => {
    const values = allCities.map(c => c[dim]);
    const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
    const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    zScores[dim] = stdDev === 0 ? 0 : (city[dim] - mean) / stdDev;
  });
  
  return zScores;
};

export const calculateCompositeIndex = (city, allCities) => {
  const zScores = calculateZScore(city, allCities);
  const weights = { uniqueness: 25, traffic: 20, cost: 20, popularity: 25, facilities: 10 };
  
  const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
  let compositeIndex = 0;
  
  Object.keys(zScores).forEach(dim => {
    compositeIndex += zScores[dim] * (weights[dim] / totalWeight);
  });
  
  return Math.round(compositeIndex * 100) / 100;
};

export const getRiskRating = (score, growthRate) => {
  const ratingMatrix = [
    { minScore: 85, minGrowth: 25, level: 'S+', label: '超级潜力', color: '#dc2626', probability: 0.95 },
    { minScore: 85, minGrowth: 15, level: 'S', label: '极高潜力', color: '#ef4444', probability: 0.88 },
    { minScore: 80, minGrowth: 25, level: 'A+', label: '高潜力快速增长', color: '#f97316', probability: 0.82 },
    { minScore: 75, minGrowth: 15, level: 'A', label: '高潜力', color: '#f59e0b', probability: 0.72 },
    { minScore: 70, minGrowth: 10, level: 'B', label: '潜力', color: '#10b981', probability: 0.58 },
    { minScore: 0, minGrowth: 0, level: 'C', label: '待观察', color: '#6b7280', probability: 0.35 }
  ];
  
  for (const criteria of ratingMatrix) {
    if (score >= criteria.minScore && growthRate >= criteria.minGrowth) {
      return criteria;
    }
  }
  return ratingMatrix[ratingMatrix.length - 1];
};

export const predictFutureGrowth = (city, months = 12) => {
  if (!city.trend || city.trend.length < 6) {
    return { prediction: [], growthRate: city.growthRate || 0, confidence: 0.6 };
  }
  
  const recentData = city.trend.slice(-6);
  const growthRates = [];
  
  for (let i = 1; i < recentData.length; i++) {
    growthRates.push((recentData[i] - recentData[i - 1]) / recentData[i - 1] * 100);
  }
  
  const avgGrowth = growthRates.reduce((sum, r) => sum + r, 0) / growthRates.length;
  const volatility = Math.sqrt(growthRates.reduce((sum, r) => sum + Math.pow(r - avgGrowth, 2), 0) / growthRates.length);
  
  const lastValue = recentData[recentData.length - 1];
  const prediction = [];
  
  for (let i = 1; i <= months; i++) {
    const seasonality = i % 3 === 0 ? 1.1 : (i % 3 === 1 ? 0.95 : 1);
    const predictedValue = lastValue * Math.pow(1 + avgGrowth / 100, i) * seasonality;
    prediction.push(Math.round(predictedValue));
  }
  
  const confidence = Math.min(0.95, 0.7 + (city.growthRate / 100) * 0.3 - (volatility / 50) * 0.1);
  
  return {
    prediction,
    expectedGrowthRate: Math.round(avgGrowth * 10) / 10,
    volatility: Math.round(volatility * 10) / 10,
    confidence: Math.round(confidence * 100) / 100,
    riskLevel: volatility > 20 ? '高波动' : volatility > 10 ? '中波动' : '低波动'
  };
};

export const generateInsight = (city, score, rating, prediction) => {
  const insights = [];
  
  if (city.uniqueness >= 85) {
    insights.push(`【稀缺优势】${city.name}拥有独特的${city.tags[0] || '文旅'}资源，稀缺度评分${city.uniqueness}分，具备差异化竞争优势`);
  }
  
  if (city.growthRate >= 30) {
    insights.push(`【增长爆发】近一年热度增速高达${city.growthRate}%，呈现爆发式增长态势，建议重点关注`);
  }
  
  if (city.cost >= 85) {
    insights.push(`【性价比突出】消费性价比${city.cost}分，低于同级别城市平均水平${Math.round((100 - city.cost) * 0.8)}%，对游客吸引力强`);
  }
  
  if (prediction.expectedGrowthRate >= 25) {
    insights.push(`【趋势预判】预计未来12个月热度将持续上升，预期增长率${prediction.expectedGrowthRate}%，增长确定性${Math.round(prediction.confidence * 100)}%`);
  }
  
  if (rating.probability >= 0.8) {
    insights.push(`【评级确认】${rating.level}级评级确认，成为网红城市概率高达${Math.round(rating.probability * 100)}%，推荐优先布局`);
  }
  
  if (city.traffic < 65) {
    insights.push(`【提升空间】交通可达性${city.traffic}分，存在提升空间，建议关注交通基建规划`);
  }
  
  return insights.length > 0 ? insights : [`${city.name}综合评分${score}分，具备一定的旅游发展潜力`];
};

export const analyzeMarketPosition = (city, allCities) => {
  const scores = allCities.map(c => calculateWeightedScore(c));
  const sortedScores = [...scores].sort((a, b) => b - a);
  const rank = sortedScores.indexOf(calculateWeightedScore(city)) + 1;
  const total = allCities.length;
  const percentile = Math.round(((total - rank) / total) * 100);
  
  const regionalCities = allCities.filter(c => c.region === city.region);
  const regionalScores = regionalCities.map(c => calculateWeightedScore(c));
  const sortedRegional = [...regionalScores].sort((a, b) => b - a);
  const regionalRank = sortedRegional.indexOf(calculateWeightedScore(city)) + 1;
  
  return {
    nationalRank: rank,
    nationalPercentile: percentile,
    regionalRank: regionalRank,
    regionalTotal: regionalCities.length,
    marketShare: Math.round((city.trend[city.trend.length - 1] / 
      allCities.reduce((sum, c) => sum + (c.trend[c.trend.length - 1] || 0), 0)) * 1000) / 10
  };
};

export const futureMonths = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
