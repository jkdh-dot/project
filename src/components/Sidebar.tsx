import { Shield, Users, Activity, CheckSquare, Settings, UserCircle, Target, FileText, BookOpen, UserCheck, Brain, Flame, Layers, MessageSquare, GitBranch, Lock, BarChart3, RotateCcw, Network, FileCheck, FolderOpen, TrendingUp } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const menuGroups = [
  {
    label: '审计核心',
    items: [
      { path: '/audit-tasks', icon: Target, label: '审计任务管理' },
      { path: '/working-paper-hub', icon: FileText, label: '底稿与证据中台' },
      { path: '/compliance-library', icon: BookOpen, label: '合规法规库' },
      { path: '/hr-compliance', icon: UserCheck, label: '人力合规审计' },
    ],
  },
  {
    label: 'AI审计',
    items: [
      { path: '/ai-model-management', icon: Brain, label: 'AI审计模型' },
      { path: '/multimodal-analysis', icon: Layers, label: '多模态分析' },
      { path: '/risk-heatmap', icon: Flame, label: '风险热力图' },
      { path: '/smart-assistant', icon: MessageSquare, label: 'RankAI' },
    ],
  },
  {
    label: '数据治理',
    items: [
      { path: '/data-lineage', icon: GitBranch, label: '数据血缘' },
      { path: '/permission-control', icon: Lock, label: '权限管控' },
      { path: '/self-service-reports', icon: BarChart3, label: '自助报表' },
    ],
  },
  {
    label: '风险闭环',
    items: [
      { path: '/rectification-verification', icon: RotateCcw, label: '整改验证' },
      { path: '/internal-control', icon: Network, label: '内控缺陷' },
      { path: '/audit-review', icon: FileCheck, label: '审计复盘' },
      { path: '/risk-closure', icon: CheckSquare, label: '风险闭环' },
    ],
  },
  {
    label: '运营支撑',
    items: [
      { path: '/project-management', icon: FolderOpen, label: '项目管理' },
      { path: '/efficiency-analysis', icon: TrendingUp, label: '效率分析' },
    ],
  },
  {
    label: '旅游分析',
    items: [
      { path: '/travel-city-analysis', icon: BarChart3, label: '城市潜力分析' },
    ],
  },
  {
    label: '基础管理',
    items: [
      { path: '/da-governance', icon: Shield, label: 'DA治理' },
      { path: '/ai-acquisition', icon: Users, label: 'AI获取' },
      { path: '/me-monitoring', icon: Activity, label: 'ME监控' },
      { path: '/employee-management', icon: UserCircle, label: '员工信息管理' },
      { path: '/system-settings', icon: Settings, label: '系统设置' },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-primary-600 text-white flex flex-col z-50">
      <div className="h-16 flex items-center justify-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold">风控审计系统</span>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        {menuGroups.map((group) => (
          <div key={group.label} className="mb-6">
            <h3 className="text-xs font-medium text-white/40 px-4 py-2 uppercase tracking-wider">
              {group.label}
            </h3>
            <ul className="space-y-1 mt-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                        isActive
                          ? 'bg-white/20 text-white font-medium'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">审计管理员</p>
            <p className="text-xs text-white/60">admin@company.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}