import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, Play, Clock, AlertTriangle, CheckCircle2, ChevronRight, Target, Layers, Zap, FileText, Eye, Send } from 'lucide-react';
import { useAuditStore } from '@/store';
import type { AuditTask, AuditFinding } from '@/types';

export function AuditTaskManagement() {
  const navigate = useNavigate();
  const { auditTasks, addWorkflowTicket } = useAuditStore();
  const [searchValue, setSearchValue] = useState('');
  const [selectedTask, setSelectedTask] = useState<AuditTask | null>(null);
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFindingModal, setShowFindingModal] = useState(false);
  const [newFinding, setNewFinding] = useState<Omit<AuditFinding, 'id' | 'createdAt'>>({
    title: '',
    severity: 'medium',
    description: '',
    recommendation: '',
    status: 'pending',
  });

  const taskTypes: Record<string, string> = {
    annual_plan: '审计计划',
    special: '年度专项',
    challenge: '揭榜挂帅',
  };

  const taskStatuses: Record<string, { label: string; color: string; icon: typeof Clock }> = {
    planning: { label: '规划中', color: 'text-info', icon: Clock },
    sampling: { label: '抽样中', color: 'text-primary-600', icon: Target },
    fieldwork: { label: '现场审计', color: 'text-warning', icon: Zap },
    review: { label: '复核中', color: 'text-success', icon: Layers },
    completed: { label: '已完成', color: 'text-success', icon: CheckCircle2 },
    overdue: { label: '已超期', color: 'text-danger', icon: AlertTriangle },
  };

  const samplingMethods: Record<string, string> = {
    random: '随机抽样',
    stratified: '分层抽样',
    risk_based: '风险导向抽样',
  };

  const filteredTasks = auditTasks.filter((task) => {
    const matchSearch =
      task.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      task.department.toLowerCase().includes(searchValue.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchValue.toLowerCase());
    const matchType = !filterType || task.type === filterType;
    const matchStatus = !filterStatus || task.status === filterStatus;
    return matchSearch && matchType && matchStatus;
  });

  const totalTasks = auditTasks.length;
  const overdueTasks = auditTasks.filter((t) => t.status === 'overdue').length;
  const inProgressTasks = auditTasks.filter((t) => ['sampling', 'fieldwork', 'review'].includes(t.status)).length;
  const completedTasks = auditTasks.filter((t) => t.status === 'completed').length;

  const handleCreateFinding = () => {
    if (!selectedTask) return;
    
    const finding: AuditFinding = {
      ...newFinding,
      id: `FIND${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };

    if (newFinding.severity === 'high') {
      addWorkflowTicket({
        riskId: finding.id,
        riskType: '账号风险',
        department: selectedTask.department,
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: '待整改',
        progress: 0,
        assignee: selectedTask.assignee,
        riskTitle: finding.title,
        rectificationRequirements: finding.recommendation,
        rectificationRecords: [],
        operationLogs: [
          { id: `LOG${Date.now()}`, action: '创建工单', operator: '系统', operatedAt: new Date().toLocaleString('zh-CN'), details: `由审计发现自动创建` },
        ],
      });
    }

    setShowFindingModal(false);
    setNewFinding({
      title: '',
      severity: 'medium',
      description: '',
      recommendation: '',
      status: 'pending',
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">任务总数</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalTasks}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">进行中</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{inProgressTasks}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">已超期</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{overdueTasks}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">已完成</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{completedTasks}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="搜索任务名称、部门、负责人..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-text-muted" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              >
                <option value="">全部类型</option>
                {Object.entries(taskTypes).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              >
                <option value="">全部状态</option>
                {Object.entries(taskStatuses).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            创建审计任务
          </button>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((task) => {
            const statusConfig = taskStatuses[task.status];
            const StatusIcon = statusConfig.icon;
            return (
              <div
                key={task.id}
                className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer ${task.status === 'overdue' ? 'border-l-4 border-l-danger' : ''}`}
                onClick={() => setSelectedTask(task)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{task.name}</h3>
                        <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                          {taskTypes[task.type]}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                        <span>{task.department}</span>
                        <span>-</span>
                        <span>{task.businessLine}</span>
                        <span>-</span>
                        <span>{task.riskDimension}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-text-muted">负责人</p>
                      <p className="text-sm font-medium text-text-primary">{task.assignee}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted">截止日期</p>
                      <p className={`text-sm font-medium ${task.status === 'overdue' ? 'text-danger' : 'text-text-primary'}`}>
                        {task.deadline}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted">进度</p>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-primary-600 rounded-full" style={{ width: `${task.progress}%` }} />
                        </div>
                        <span className="text-sm font-medium text-text-primary">{task.progress}%</span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 ${statusConfig.color}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{statusConfig.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedTask.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                    {taskTypes[selectedTask.type]}
                  </span>
                  <span className="text-xs text-text-secondary">{selectedTask.department}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTask(null)}
                className="text-text-muted hover:text-text-primary"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex">
              <div className="w-64 border-r border-border p-4 space-y-4">
                <button
                  onClick={() => navigate('/working-paper-hub')}
                  className="w-full flex items-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg text-sm"
                >
                  <FileText className="w-4 h-4" />
                  查看工作底稿
                </button>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-text-secondary uppercase">任务信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">负责人</span>
                      <span className="text-text-primary">{selectedTask.assignee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">创建时间</span>
                      <span className="text-text-primary">{selectedTask.createdAt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">截止日期</span>
                      <span className={selectedTask.status === 'overdue' ? 'text-danger' : 'text-text-primary'}>
                        {selectedTask.deadline}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">业务线</span>
                      <span className="text-text-primary">{selectedTask.businessLine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">风险维度</span>
                      <span className="text-text-primary">{selectedTask.riskDimension}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary-600" />
                    抽样配置
                  </h4>
                  {selectedTask.samplingConfig ? (
                    <div className="bg-bg rounded-lg p-4 space-y-3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs text-text-muted">抽样方法</p>
                          <p className="text-sm font-medium text-text-primary">
                            {samplingMethods[selectedTask.samplingConfig.method]}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">总体数量</p>
                          <p className="text-sm font-medium text-text-primary">
                            {selectedTask.samplingConfig.populationSize}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">样本数量</p>
                          <p className="text-sm font-medium text-text-primary">
                            {selectedTask.samplingConfig.sampleSize}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted">置信水平</p>
                          <p className="text-sm font-medium text-text-primary">
                            {selectedTask.samplingConfig.confidenceLevel}%
                          </p>
                        </div>
                      </div>
                      {selectedTask.samplingConfig.stratificationFields && (
                        <div>
                          <p className="text-xs text-text-muted">分层字段</p>
                          <p className="text-sm text-text-primary">
                            {selectedTask.samplingConfig.stratificationFields.join(', ')}
                          </p>
                        </div>
                      )}
                      {selectedTask.samplingConfig.riskFactors && (
                        <div>
                          <p className="text-xs text-text-muted">风险因子</p>
                          <p className="text-sm text-text-primary">
                            {selectedTask.samplingConfig.riskFactors.join(', ')}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-bg rounded-lg p-4 text-center">
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm">
                        <Play className="w-4 h-4" />
                        启动抽样
                      </button>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">抽样结果</h4>
                  {selectedTask.samplingResults && selectedTask.samplingResults.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">样本编号</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">项目编号</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">项目名称</th>
                            <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">状态</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">异常说明</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">抽样时间</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedTask.samplingResults.map((result) => (
                            <tr key={result.id} className="border-b border-border">
                              <td className="py-2 px-3 text-sm text-text-secondary">S{String(result.sampleNumber).padStart(3, '0')}</td>
                              <td className="py-2 px-3 text-sm text-text-primary">{result.itemId}</td>
                              <td className="py-2 px-3 text-sm text-text-primary">{result.itemName}</td>
                              <td className="py-2 px-3 text-center">
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  result.status === 'anomaly' ? 'bg-danger/10 text-danger' :
                                  result.status === 'pending' ? 'bg-info/10 text-info' :
                                  'bg-success/10 text-success'
                                }`}>
                                  {result.status === 'anomaly' ? '异常' : result.status === 'pending' ? '待核查' : '正常'}
                                </span>
                              </td>
                              <td className="py-2 px-3 text-sm text-text-secondary">{result.anomalyDescription || '-'}</td>
                              <td className="py-2 px-3 text-sm text-text-secondary">{result.selectedAt}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="bg-bg rounded-lg p-8 text-center text-text-muted">暂无抽样结果</div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-text-primary">审计发现</h4>
                    <button
                      onClick={() => setShowFindingModal(true)}
                      className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700"
                    >
                      <Plus className="w-3 h-3" />
                      添加发现
                    </button>
                  </div>
                  {selectedTask.findings && selectedTask.findings.length > 0 ? (
                    <div className="space-y-3">
                      {selectedTask.findings.map((finding) => (
                        <div
                          key={finding.id}
                          className={`bg-bg rounded-lg p-4 border-l-4 ${
                            finding.severity === 'high' ? 'border-l-danger' :
                            finding.severity === 'medium' ? 'border-l-warning' :
                            finding.severity === 'low' ? 'border-l-info' : 'border-l-success'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="text-sm font-medium text-text-primary">{finding.title}</h5>
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  finding.severity === 'high' ? 'bg-danger/10 text-danger' :
                                  finding.severity === 'medium' ? 'bg-warning/10 text-warning' :
                                  finding.severity === 'low' ? 'bg-info/10 text-info' : 'bg-success/10 text-success'
                                }`}>
                                  {finding.severity === 'high' ? '高风险' :
                                   finding.severity === 'medium' ? '中风险' :
                                   finding.severity === 'low' ? '低风险' : '正常'}
                                </span>
                              </div>
                              <p className="text-xs text-text-secondary mt-1">{finding.description}</p>
                              <div className="mt-2">
                                <p className="text-xs text-text-muted">整改建议</p>
                                <p className="text-sm text-text-primary">{finding.recommendation}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="flex items-center gap-1 text-xs text-primary-600">
                                <Eye className="w-3 h-3" />
                                详情
                              </button>
                              {!finding.linkedTicketId && (
                                <button className="flex items-center gap-1 text-xs text-success">
                                  <Send className="w-3 h-3" />
                                  生成工单
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-bg rounded-lg p-8 text-center text-text-muted">暂无审计发现</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">创建审计任务</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">任务名称</label>
                <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">任务类型</label>
                  <select className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600">
                    {Object.entries(taskTypes).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">所属部门</label>
                  <select className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600">
                    <option>财务部</option>
                    <option>IT部</option>
                    <option>采购部</option>
                    <option>数据部</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">负责人</label>
                  <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">截止日期</label>
                  <input type="date" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">风险维度</label>
                <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" placeholder="如：财务报表真实性" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
                取消
              </button>
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">
                创建
              </button>
            </div>
          </div>
        </div>
      )}

      {showFindingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">添加审计发现</h3>
              <button onClick={() => setShowFindingModal(false)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">发现标题</label>
                <input
                  type="text"
                  value={newFinding.title}
                  onChange={(e) => setNewFinding({ ...newFinding, title: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">风险等级</label>
                <select
                  value={newFinding.severity}
                  onChange={(e) => setNewFinding({ ...newFinding, severity: e.target.value as AuditFinding['severity'] })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                >
                  <option value="high">高风险</option>
                  <option value="medium">中风险</option>
                  <option value="low">低风险</option>
                  <option value="normal">正常</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">问题描述</label>
                <textarea
                  value={newFinding.description}
                  onChange={(e) => setNewFinding({ ...newFinding, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">整改建议</label>
                <textarea
                  value={newFinding.recommendation}
                  onChange={(e) => setNewFinding({ ...newFinding, recommendation: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <button onClick={() => setShowFindingModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
                取消
              </button>
              <button onClick={handleCreateFinding} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">
                添加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}