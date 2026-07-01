import { useState, useRef } from 'react';
import { Search, Download, TrendingUp, TrendingDown, Clock, CheckCircle, AlertTriangle, Award, Users, Target, Activity, Calendar } from 'lucide-react';
import { StatCard } from '@/components/common/StatCard';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);
interface EfficiencyMetric {
 id: string;
 name: string;
 value: number;
 unit: string;
 trend: 'up' | 'down' | 'stable';
 trendValue: number;
 target: number;
 status: 'excellent' | 'good' | 'warning' | 'danger';
}
interface QualityMetric {
 id: string;
 name: string;
 value: number;
 unit: string;
 trend: 'up' | 'down' | 'stable';
 trendValue: number;
}
interface AuditRecord {
 id: string;
 auditor: string;
 department: string;
 tasksCompleted: number;
 avgDuration: number;
 defectRate: number;
 productivity: number;
 qualityScore: number;
 period: string;
}
const efficiencyMetrics: EfficiencyMetric[] = [
 { id: 'e1', name: '审计任务完成率', value: 92.5, unit: '%', trend: 'up', trendValue: 3.2, target: 90, status: 'excellent' },
 { id: 'e2', name: '平均审计周期', value: 18.5, unit: '天', trend: 'down', trendValue: 2.1, target: 20, status: 'good' },
 { id: 'e3', name: '问题发现率', value: 85.3, unit: '%', trend: 'up', trendValue: 5.8, target: 80, status: 'excellent' },
 { id: 'e4', name: '整改闭环率', value: 78.6, unit: '%', trend: 'up', trendValue: 4.5, target: 80, status: 'warning' },
];
const qualityMetrics: QualityMetric[] = [
 { id: 'q1', name: '底稿质量评分', value: 94.2, unit: '分', trend: 'up', trendValue: 2.3 },
 { id: 'q2', name: '证据完整性', value: 91.8, unit: '%', trend: 'up', trendValue: 1.5 },
 { id: 'q3', name: '报告准确率', value: 96.5, unit: '%', trend: 'stable', trendValue: 0.1 },
 { id: 'q4', name: '复核通过率', value: 89.3, unit: '%', trend: 'up', trendValue: 3.2 },
];
const auditRecords: AuditRecord[] = [
 { id: 'A001', auditor: '张三', department: '财务审计部', tasksCompleted: 15, avgDuration: 16, defectRate: 5.2, productivity: 95, qualityScore: 94, period: '2024-Q1' },
 { id: 'A002', auditor: '李四', department: 'IT审计部', tasksCompleted: 12, avgDuration: 22, defectRate: 8.5, productivity: 88, qualityScore: 91, period: '2024-Q1' },
 { id: 'A003', auditor: '王五', department: '合规审计部', tasksCompleted: 18, avgDuration: 14, defectRate: 3.8, productivity: 98, qualityScore: 96, period: '2024-Q1' },
 { id: 'A004', auditor: '赵六', department: '财务审计部', tasksCompleted: 10, avgDuration: 25, defectRate: 12.1, productivity: 82, qualityScore: 85, period: '2024-Q1' },
 { id: 'A005', auditor: '钱七', department: 'IT审计部', tasksCompleted: 14, avgDuration: 19, defectRate: 6.3, productivity: 92, qualityScore: 93, period: '2024-Q1' },
];
const monthlyData = {
 labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
 efficiency: [85, 88, 90, 89, 92, 92.5],
 quality: [90, 91, 92, 93, 94, 94.2],
 tasks: [45, 52, 48, 55, 58, 62],
 defects: [8, 6, 5, 7, 4, 3],
};
export function EfficiencyAnalysis() {
 const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'ranking'>('overview');
 const [searchTerm, setSearchTerm] = useState('');
 const [selectedPeriod, setSelectedPeriod] = useState('2024-Q1');
 const efficiencyChartRef = useRef<ChartJS<'line'>>(null);
 const taskChartRef = useRef<ChartJS<'bar'>>(null);
 const distributionChartRef = useRef<ChartJS<'doughnut'>>(null);
 const filteredRecords = auditRecords.filter((record) => record.auditor.toLowerCase().includes(searchTerm.toLowerCase()) ||
 record.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
 record.id.toLowerCase().includes(searchTerm.toLowerCase()));
 const efficiencyChartData = {
 labels: monthlyData.labels,
 datasets: [
 {
 label: '效率指数',
 data: monthlyData.efficiency,
 borderColor: '#0A2463',
 backgroundColor: 'rgba(10, 36, 99, 0.1)',
 fill: true,
 tension: 0.4,
 },
 {
 label: '质量指数',
 data: monthlyData.quality,
 borderColor: '#3E92CC',
 backgroundColor: 'rgba(62, 146, 204, 0.1)',
 fill: true,
 tension: 0.4,
 },
 ],
 };
 const qualityBarChartData = {
 labels: monthlyData.labels,
 datasets: [
 {
 label: '任务完成数',
 data: monthlyData.tasks,
 backgroundColor: '#0A2463',
 },
 {
 label: '发现问题数',
 data: monthlyData.defects,
 backgroundColor: '#EF476F',
 },
 ],
 };
 const distributionChartData = {
 labels: ['财务审计部', 'IT审计部', '合规审计部', '人力审计部'],
 datasets: [
 {
 data: [35, 28, 25, 12],
 backgroundColor: ['#0A2463', '#3E92CC', '#68B9C0', '#FFD166'],
 borderWidth: 0,
 },
 ],
 };
 const chartOptions = {
 responsive: true,
 plugins: {
 legend: {
 position: 'bottom' as const,
 labels: {
 usePointStyle: true,
 padding: 20,
 },
 },
 },
 scales: {
 y: {
 beginAtZero: true,
 grid: {
 color: '#F3F4F6',
 },
 },
 x: {
 grid: {
 display: false,
 },
 },
 },
 };
 const doughnutOptions = {
 responsive: true,
 plugins: {
 legend: {
 position: 'right' as const,
 labels: {
 usePointStyle: true,
 padding: 15,
 },
 },
 },
 };
 const getStatusColor = (status: string) => {
 switch (status) {
 case 'excellent':
 return 'bg-green-100 text-green-700';
 case 'good':
 return 'bg-blue-100 text-blue-700';
 case 'warning':
 return 'bg-yellow-100 text-yellow-700';
 case 'danger':
 return 'bg-red-100 text-red-700';
 default:
 return 'bg-gray-100 text-gray-700';
 }
 };
 const getStatusText = (status: string) => {
 switch (status) {
 case 'excellent':
 return '优秀';
 case 'good':
 return '良好';
 case 'warning':
 return '待改进';
 case 'danger':
 return '需关注';
 default:
 return '-';
 }
 };
 const getTrendIcon = (trend: string) => {
 switch (trend) {
 case 'up':
 return <TrendingUp className="w-4 h-4 text-green-500"/>;
 case 'down':
 return <TrendingDown className="w-4 h-4 text-red-500"/>;
 default:
 return <TrendingUp className="w-4 h-4 text-gray-400"/>;
 }
 };
 const getTrendColor = (trend: string) => {
 switch (trend) {
 case 'up':
 return 'text-green-500';
 case 'down':
 return 'text-red-500';
 default:
 return 'text-gray-500';
 }
 };
 return (<div className="space-y-6">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-4">
 <div className="flex items-center gap-2">
 <Calendar className="w-5 h-5 text-gray-400"/>
 <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)} className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20">
 <option value="2024-Q1">2024年第一季度</option>
 <option value="2024-Q2">2024年第二季度</option>
 <option value="2024-Q3">2024年第三季度</option>
 <option value="2024-Q4">2024年第四季度</option>
 </select>
 </div>
 <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
 <Download className="w-4 h-4"/>
 导出报告
 </button>
 </div>
 </div>

 <div className="grid grid-cols-4 gap-4">
 <StatCard title="效率指数" value="92.5" icon={<Activity className="w-5 h-5"/>} color="bg-primary-600" subtitle="较上期 +3.2%"/>
 <StatCard title="质量指数" value="94.2" icon={<Award className="w-5 h-5"/>} color="bg-blue-500" subtitle="较上期 +2.3%"/>
 <StatCard title="完成任务数" value="69" icon={<Target className="w-5 h-5"/>} color="bg-green-500" subtitle="本季度"/>
 <StatCard title="审计人员" value="12" icon={<Users className="w-5 h-5"/>} color="bg-purple-500" subtitle="在岗"/>
 </div>

 <div className="grid grid-cols-2 gap-6">
 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-4">效率指标</h3>
 <div className="space-y-4">
 {efficiencyMetrics.map((metric) => (<div key={metric.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
 <div>
 <p className="text-sm text-gray-600">{metric.name}</p>
 <div className="flex items-center gap-2 mt-1">
 <span className="text-xl font-bold text-gray-900">{metric.value}</span>
 <span className="text-sm text-gray-500">{metric.unit}</span>
 {getTrendIcon(metric.trend)}
 <span className={`text-sm ${getTrendColor(metric.trend)}`}>
 {metric.trendValue}%
 </span>
 </div>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-32 bg-gray-200 rounded-full h-2">
 <div className="h-2 rounded-full bg-primary-600" style={{ width: `${Math.min(metric.value, 100)}%` }}/>
 </div>
 <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(metric.status)}`}>
 {getStatusText(metric.status)}
 </span>
 </div>
 </div>))}
 </div>
 </div>

 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-4">质量指标</h3>
 <div className="space-y-4">
 {qualityMetrics.map((metric) => (<div key={metric.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
 <div>
 <p className="text-sm text-gray-600">{metric.name}</p>
 <div className="flex items-center gap-2 mt-1">
 <span className="text-xl font-bold text-gray-900">{metric.value}</span>
 <span className="text-sm text-gray-500">{metric.unit}</span>
 {getTrendIcon(metric.trend)}
 <span className={`text-sm ${getTrendColor(metric.trend)}`}>
 {metric.trendValue}%
 </span>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-24 bg-gray-200 rounded-full h-2">
 <div className="h-2 rounded-full bg-blue-500" style={{ width: `${Math.min(metric.value, 100)}%` }}/>
 </div>
 </div>
 </div>))}
 </div>
 </div>
 </div>

 <div className="bg-white rounded-xl shadow-sm border border-gray-100">
 <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
 <div className="flex gap-4">
 <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'overview'
 ? 'bg-primary-50 text-primary-600'
 : 'text-gray-500 hover:text-gray-700'}`}>
 趋势分析
 </button>
 <button onClick={() => setActiveTab('details')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'details'
 ? 'bg-primary-50 text-primary-600'
 : 'text-gray-500 hover:text-gray-700'}`}>
 人员明细
 </button>
 <button onClick={() => setActiveTab('ranking')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'ranking'
 ? 'bg-primary-50 text-primary-600'
 : 'text-gray-500 hover:text-gray-700'}`}>
 部门分布
 </button>
 </div>
 {activeTab === 'details' && (<div className="relative">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/>
 <input type="text" placeholder="搜索审计人员..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"/>
 </div>)}
 </div>

 <div className="p-6">
 {activeTab === 'overview' && (<div className="grid grid-cols-2 gap-6">
 <div>
 <h4 className="text-sm font-medium text-gray-700 mb-4">效率与质量趋势</h4>
 <div className="h-64">
 <Line ref={efficiencyChartRef} data={efficiencyChartData} options={chartOptions}/>
 </div>
 </div>
 <div>
 <h4 className="text-sm font-medium text-gray-700 mb-4">任务完成与问题发现</h4>
 <div className="h-64">
 <Bar ref={taskChartRef} data={qualityBarChartData} options={chartOptions}/>
 </div>
 </div>
 </div>)}

 {activeTab === 'details' && (<div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b border-gray-100">
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 审计人员
 </th>
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 部门
 </th>
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 完成任务数
 </th>
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 平均周期(天)
 </th>
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 缺陷率
 </th>
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 效率评分
 </th>
 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
 质量评分
 </th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-50">
 {filteredRecords.map((record) => (<tr key={record.id} className="hover:bg-gray-50 transition-colors">
 <td className="py-4 px-4 text-sm font-medium text-gray-900">{record.auditor}</td>
 <td className="py-4 px-4 text-sm text-gray-600">{record.department}</td>
 <td className="py-4 px-4 text-sm text-gray-600">{record.tasksCompleted}</td>
 <td className="py-4 px-4 text-sm text-gray-600">{record.avgDuration}</td>
 <td className="py-4 px-4">
 <span className={`px-2 py-1 rounded text-xs ${record.defectRate > 10 ? 'bg-red-100 text-red-700' :
 record.defectRate > 5 ? 'bg-yellow-100 text-yellow-700' :
 'bg-green-100 text-green-700'}`}>
 {record.defectRate}%
 </span>
 </td>
 <td className="py-4 px-4">
 <div className="flex items-center gap-2">
 <div className="w-16 bg-gray-200 rounded-full h-2">
 <div className="h-2 rounded-full bg-green-500" style={{ width: `${record.productivity}%` }}/>
 </div>
 <span className="text-sm text-gray-600">{record.productivity}</span>
 </div>
 </td>
 <td className="py-4 px-4">
 <div className="flex items-center gap-2">
 <div className="w-16 bg-gray-200 rounded-full h-2">
 <div className="h-2 rounded-full bg-blue-500" style={{ width: `${record.qualityScore}%` }}/>
 </div>
 <span className="text-sm text-gray-600">{record.qualityScore}</span>
 </div>
 </td>
 </tr>))}
 </tbody>
 </table>
 </div>)}

 {activeTab === 'ranking' && (<div className="grid grid-cols-2 gap-6">
 <div>
 <h4 className="text-sm font-medium text-gray-700 mb-4">部门任务分布</h4>
 <div className="h-64">
 <Doughnut ref={distributionChartRef} data={distributionChartData} options={doughnutOptions}/>
 </div>
 </div>
 <div className="bg-gray-50 rounded-lg p-6">
 <h4 className="text-sm font-medium text-gray-700 mb-4">效率排名</h4>
 <div className="space-y-4">
 {auditRecords
 .sort((a, b) => b.productivity - a.productivity)
 .slice(0, 5)
 .map((record, index) => (<div key={record.id} className="flex items-center gap-4">
 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${index === 0 ? 'bg-yellow-400 text-white' :
 index === 1 ? 'bg-gray-300 text-white' :
 index === 2 ? 'bg-orange-400 text-white' :
 'bg-gray-100 text-gray-600'}`}>
 {index + 1}
 </div>
 <div className="flex-1">
 <p className="text-sm font-medium text-gray-900">{record.auditor}</p>
 <p className="text-xs text-gray-500">{record.department}</p>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-24 bg-gray-200 rounded-full h-2">
 <div className="h-2 rounded-full bg-green-500" style={{ width: `${record.productivity}%` }}/>
 </div>
 <span className="text-sm font-medium text-gray-700">{record.productivity}</span>
 </div>
 </div>))}
 </div>
 </div>
 </div>)}
 </div>
 </div>

 <div className="grid grid-cols-3 gap-6">
 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
 <CheckCircle className="w-5 h-5 text-green-600"/>
 </div>
 <div>
 <p className="text-sm text-gray-600">按期完成率</p>
 <p className="text-xl font-bold text-gray-900">94%</p>
 </div>
 </div>
 <p className="text-sm text-gray-500">较上期提升 3%，15个任务全部按期完成</p>
 </div>

 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
 <AlertTriangle className="w-5 h-5 text-yellow-600"/>
 </div>
 <div>
 <p className="text-sm text-gray-600">待改进项</p>
 <p className="text-xl font-bold text-gray-900">3项</p>
 </div>
 </div>
 <p className="text-sm text-gray-500">整改闭环率未达标，需关注进度</p>
 </div>

 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
 <Clock className="w-5 h-5 text-blue-600"/>
 </div>
 <div>
 <p className="text-sm text-gray-600">平均节省时间</p>
 <p className="text-xl font-bold text-gray-900">1.5天/任务</p>
 </div>
 </div>
 <p className="text-sm text-gray-500">通过流程优化，单个任务平均缩短1.5天</p>
 </div>
 </div>
 </div>);
}
