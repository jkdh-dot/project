import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { FileText, Download, RefreshCw, Calendar, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

interface Report {
  id: string;
  name: string;
  category: string;
  description: string;
  lastGenerated: string;
  frequency: string;
  status: 'scheduled' | 'ready' | 'running';
}

const reports: Report[] = [
  { id: 'R001', name: '月度风险汇总报告', category: '风险报告', description: '汇总当月所有风险告警及处理情况', lastGenerated: '2026-06-25', frequency: '月度', status: 'ready' },
  { id: 'R002', name: '审计任务进度报告', category: '任务报告', description: '展示各审计任务的进度和状态', lastGenerated: '2026-06-25', frequency: '周报', status: 'ready' },
  { id: 'R003', name: '合规检查报告', category: '合规报告', description: '合规条款执行情况检查结果', lastGenerated: '2026-06-20', frequency: '季度', status: 'ready' },
  { id: 'R004', name: '权限治理报告', category: '治理报告', description: 'IT权限梳理和治理情况', lastGenerated: '2026-06-15', frequency: '半年', status: 'ready' },
];

const quickReports = [
  { id: 'QR001', name: '本周高风险事项', type: 'chart', data: { labels: ['研发部', '财务部', '市场部', 'HR'], datasets: [{ label: '高风险数', data: [8, 5, 3, 2], backgroundColor: '#EF4444' }] } },
  { id: 'QR002', name: '工单处理时效', type: 'chart', data: { labels: ['周一', '周二', '周三', '周四', '周五'], datasets: [{ label: '平均时长(小时)', data: [4.2, 3.8, 5.1, 4.5, 3.2] }] } },
];

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export function SelfServiceReports() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">自助式审计报表与驾驶舱</h2>
          <p className="text-sm text-gray-500 mt-1">自定义报表、智能分析与可视化展示</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            时间范围
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            筛选
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <FileText className="w-4 h-4" />
            创建报表
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { label: '已生成报表', value: '12', trend: '+3', trendIcon: ArrowUpRight, trendColor: 'text-green-600' },
          { label: '本周新增', value: '3', trend: '+1', trendIcon: ArrowUpRight, trendColor: 'text-green-600' },
          { label: '订阅报表', value: '5', trend: '0', trendIcon: ArrowDownRight, trendColor: 'text-gray-500' },
        ].map((stat, index) => {
          const TrendIcon = stat.trendIcon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
                <div className={`flex items-center gap-1 ${stat.trendColor}`}>
                  <TrendIcon className="w-5 h-5" />
                  <span className="text-sm">{stat.trend}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">风险趋势分析</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                <RefreshCw className="w-3 h-3" />
                刷新
              </button>
              <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                <Download className="w-3 h-3" />
                导出
              </button>
            </div>
          </div>
          <div className="h-[300px]">
            <Line
              data={{
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [
                  {
                    label: '高风险',
                    data: [15, 18, 12, 20, 16, 14],
                    borderColor: '#EF4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                  },
                  {
                    label: '中风险',
                    data: [25, 22, 28, 24, 26, 23],
                    borderColor: '#F59E0B',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    fill: true,
                  },
                  {
                    label: '低风险',
                    data: [40, 38, 42, 36, 44, 40],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">部门风险分布</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                <Download className="w-3 h-3" />
                导出
              </button>
            </div>
          </div>
          <div className="h-[300px]">
            <Bar
              data={{
                labels: ['研发部', '财务部', '市场部', 'HR', '运营部', '行政部'],
                datasets: [
                  {
                    label: '风险数量',
                    data: [45, 32, 25, 28, 20, 6],
                    backgroundColor: [
                      'rgba(239, 68, 68, 0.8)',
                      'rgba(245, 158, 11, 0.8)',
                      'rgba(59, 130, 246, 0.8)',
                      'rgba(16, 185, 129, 0.8)',
                      'rgba(139, 92, 246, 0.8)',
                      'rgba(156, 163, 175, 0.8)',
                    ],
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {quickReports.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-800">{item.name}</h4>
              <button className="text-xs text-primary-600 hover:text-primary-700">查看详情</button>
            </div>
            <div className="h-[150px]">
              {item.type === 'chart' && (
                <Bar data={item.data} options={{ ...chartOptions, plugins: { legend: { display: false } } }} />
              )}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-800">审计任务完成率</h4>
            <span className="text-xs text-green-600">92%</span>
          </div>
          <div className="space-y-3">
            {[
              { label: '已完成', value: 8, total: 10, color: 'bg-green-500' },
              { label: '进行中', value: 2, total: 10, color: 'bg-blue-500' },
              { label: '超期', value: 1, total: 10, color: 'bg-red-500' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">{stat.label}</span>
                  <span className="text-xs text-gray-800">{stat.value}/{stat.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${stat.color}`} style={{ width: `${(stat.value / stat.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800">报表管理</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700">查看全部</button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className={`p-4 rounded-xl cursor-pointer transition-colors ${
                  selectedReport === report.id ? 'bg-primary-50 border border-primary-200' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedReport(report.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-800">{report.name}</h4>
                    <span className="text-xs text-gray-500">{report.category}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    report.status === 'ready' ? 'bg-green-100 text-green-600' :
                    report.status === 'running' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {report.status === 'ready' ? '已生成' : report.status === 'running' ? '生成中' : '已计划'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">最后生成: {report.lastGenerated}</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{report.frequency}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex items-center gap-1 px-3 py-1 text-xs bg-white border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                    <Download className="w-3 h-3" />
                    导出
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-xs bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100">
                    <RefreshCw className="w-3 h-3" />
                    刷新
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}