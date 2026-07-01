import { AlertTriangle, ClipboardList, Users, TrendingUp, ArrowRight, FileText, UserPlus, CheckCircle2, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuditStore } from '@/store';
import { StatCard } from '@/components/common/StatCard';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

export function Dashboard() {
  const navigate = useNavigate();
  const { dashboardStats, riskDistribution, riskTrend, departmentRisk, highRiskAlerts } = useAuditStore();

  const pieData = {
    labels: riskDistribution.map((d) => d.type),
    datasets: [{
      data: riskDistribution.map((d) => d.count),
      backgroundColor: ['#F97316', '#F59E0B', '#EF4444', '#0A2463', '#64748B', '#94A3B8'],
      borderWidth: 0,
    }],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const, labels: { padding: 16, usePointStyle: true, font: { size: 11 } } },
    },
  };

  const lineData = {
    labels: riskTrend.map((t) => t.date),
    datasets: [{
      label: '风险数量',
      data: riskTrend.map((t) => t.count),
      borderColor: '#0A2463',
      backgroundColor: 'rgba(10, 36, 99, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#0A2463',
    }],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } },
  };

  const barData = {
    labels: departmentRisk.map((d) => d.department),
    datasets: [{
      label: '风险数量',
      data: departmentRisk.map((d) => d.riskCount),
      backgroundColor: '#0A2463',
      borderRadius: 4,
    }],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } },
  };

  const quickActions = [
    { icon: AlertTriangle, label: '一键权限排查', color: 'bg-danger', path: '/da-governance' },
    { icon: UserPlus, label: '发起账号申请', color: 'bg-primary-600', path: '/ai-acquisition' },
    { icon: ClipboardList, label: '查看待办工单', color: 'bg-info', path: '/risk-closure' },
    { icon: FileText, label: '导出审计报告', color: 'bg-success', action: 'export' },
  ];

  const handleExportReport = () => {
    const reportData = {
      '生成时间': new Date().toLocaleString('zh-CN'),
      '风险总数': dashboardStats.totalRisks,
      '待整改工单': dashboardStats.pendingTickets,
      '账号健康度': dashboardStats.accountHealth + '%',
      '交易异常率': dashboardStats.transactionAnomalyRate + '%',
      '风险分布': riskDistribution.map(d => `${d.type}: ${d.count}(${d.percentage}%)`).join('; ')
    };
    const content = Object.entries(reportData).map(([key, value]) => `${key}: ${value}`).join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `审计报告_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={AlertTriangle} label="风险总数" value={dashboardStats.totalRisks} trend={{ value: 12.5, isUp: true }} color="danger"/>
      <StatCard icon={ClipboardList} label="待整改工单" value={dashboardStats.pendingTickets} trend={{ value: 8.3, isUp: false }} color="warning"/>
      <StatCard icon={Users} label="账号健康度" value={dashboardStats.accountHealth} unit="%" trend={{ value: 2.1, isUp: false }} color="success"/>
      <StatCard icon={TrendingUp} label="交易异常率" value={dashboardStats.transactionAnomalyRate} unit="%" trend={{ value: 0.5, isUp: true }} color="primary"/>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <h3 className="text-sm font-semibold text-text-primary mb-4">风险类型分布</h3>
        <div className="h-64"><Pie data={pieData} options={pieOptions}/></div>
      </div>
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border lg:col-span-2">
        <h3 className="text-sm font-semibold text-text-primary mb-4">近30天风险趋势</h3>
        <div className="h-64"><Line data={lineData} options={lineOptions}/></div>
      </div>
    </div>

    <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
      <h3 className="text-sm font-semibold text-text-primary mb-4">各部门风险排名</h3>
      <div className="h-48"><Bar data={barData} options={barOptions}/></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-text-primary">最新高风险告警</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
        <div className="space-y-3">
          {highRiskAlerts.slice(0, 5).map((alert) => (<div key={alert.id} className="flex gap-3 p-3 bg-bg rounded-lg hover:bg-border/50 transition-colors">
            <div className={`w-1.5 rounded-full self-stretch ${alert.level === 'high' ? 'bg-danger' : alert.level === 'medium' ? 'bg-warning' : 'bg-success'}`}/>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-text-primary truncate">{alert.title}</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${alert.level === 'high' ? 'bg-danger/10 text-danger' : alert.level === 'medium' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'}`}>
                  {alert.level === 'high' ? '高风险' : alert.level === 'medium' ? '中风险' : '低风险'}
                </span>
              </div>
              <p className="text-xs text-text-muted truncate">{alert.description}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                <span>{alert.department}</span>
                <span>{alert.createdAt}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${alert.status === '待整改' ? 'bg-info/10 text-info' : alert.status === '整改中' ? 'bg-primary-600/10 text-primary-600' : 'bg-warning/10 text-warning'}`}>{alert.status}</span>
              </div>
            </div>
          </div>))}
        </div>
      </div>

      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <h3 className="text-sm font-semibold text-text-primary mb-4">快捷操作</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (<button key={action.label} onClick={() => {
              if (action.path) { navigate(action.path); }
              else if (action.action === 'export') { handleExportReport(); }
            }} className={`flex flex-col items-center gap-2 p-4 rounded-lg ${action.color} text-white hover:opacity-90 transition-opacity`}>
              <Icon className="w-6 h-6"/>
              <span className="text-xs font-medium">{action.label}</span>
            </button>);
          })}
        </div>

        <div className="mt-6 p-4 bg-bg rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-text-secondary">系统运行状态</span>
            <span className="flex items-center gap-1 text-xs text-success">
              <CheckCircle2 className="w-3 h-3"/>
              正常
            </span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-text-muted">在线用户</span>
            <span className="text-text-primary font-medium">12</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-text-muted">今日告警</span>
            <span className="text-text-primary font-medium">8</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-text-muted">处理率</span>
            <span className="text-text-primary font-medium">87.5%</span>
          </div>
        </div>

        <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
          <Download className="w-4 h-4"/>
          导出审计报告
        </button>
      </div>
    </div>
  </div>);
}