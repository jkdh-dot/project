import { useState } from 'react';
import {
  Search, Plus, Users, Shield, AlertTriangle, Clock, CheckCircle2, X, ChevronRight,
  FileText, UserCheck, UserX, Briefcase, AlertCircle, Eye,
  Clipboard, Key, Banknote, BookOpen, ArrowRight
} from 'lucide-react';
import { useAuditStore } from '@/store';
import type {
  RecruitmentAudit, WorkMonitor, DepartureAudit, PersonnelArchive,
  RecruitmentStatus, PersonnelChangeType, DepartureType
} from '@/types';

// 招聘状态映射
const recruitmentStatusMap: Record<RecruitmentStatus, { label: string; color: string; icon: typeof Clock }> = {
  pending: { label: '待处理', color: 'text-text-muted', icon: Clock },
  background_check: { label: '背景调查中', color: 'text-warning', icon: UserCheck },
  materials_review: { label: '材料审核中', color: 'text-info', icon: FileText },
  contract_signing: { label: '合同签署中', color: 'text-primary-600', icon: Clipboard },
  onboarding: { label: '入职办理中', color: 'text-primary-600', icon: Users },
  completed: { label: '已完成', color: 'text-success', icon: CheckCircle2 },
  rejected: { label: '已拒绝', color: 'text-danger', icon: X },
};

// 人员变更类型映射
const changeTypeMap: Record<PersonnelChangeType, string> = {
  promotion: '晋升',
  transfer: '调岗',
  demotion: '降职',
  loan: '借调',
  standby: '待岗',
  probation_change: '试用期变更',
};

// 离职类型映射
const departureTypeMap: Record<DepartureType, string> = {
  resignation: '主动离职',
  dismissal: '辞退',
  retirement: '退休',
  contract_end: '合同到期',
  death: '死亡',
};

// 风险类型映射
const riskTypeMap: Record<string, string> = {
  discrimination: '就业歧视',
  illegal_fee: '违法收费',
  fake_recruitment: '虚假招聘',
  qualification_fraud: '资质造假',
  work_permit: '就业许可',
  visa_issue: '签证问题',
  contract_issue: '合同条款问题',
};

export function HumanResourceCompliance() {
  const {
    recruitmentAudits, workMonitors, personnelChanges, departureAudits, personnelArchives,
    addWorkflowTicket
  } = useAuditStore();

  const [activeTab, setActiveTab] = useState<'recruitment' | 'monitor' | 'change' | 'departure' | 'archive'>('recruitment');
  const [searchValue, setSearchValue] = useState('');
  const [selectedRecruitment, setSelectedRecruitment] = useState<RecruitmentAudit | null>(null);
  const [selectedWorkMonitor, setSelectedWorkMonitor] = useState<WorkMonitor | null>(null);
  const [selectedDeparture, setSelectedDeparture] = useState<DepartureAudit | null>(null);
  const [selectedArchive, setSelectedArchive] = useState<PersonnelArchive | null>(null);

  // 统计计算
  const pendingRecruitments = recruitmentAudits.filter(r => r.status !== 'completed' && r.status !== 'rejected').length;
  const recruitmentRisks = recruitmentAudits.flatMap(r => r.risks).filter(r => r.status === 'open').length;
  const workAnomalies = workMonitors.flatMap(w => w.anomalies).filter(a => a.status === 'pending').length;
  const highRiskMonitors = workMonitors.filter(w => w.riskLevel === 'high').length;
  const pendingChanges = personnelChanges.filter(c => c.approvalStatus === 'pending').length;
  const pendingDepartures = departureAudits.filter(d => d.status !== 'completed').length;
  const departureRisks = departureAudits.flatMap(d => d.risks).filter(r => r.status === 'open').length;
  const pendingPrivacyRequests = personnelArchives.flatMap(a => a.privacyRequests).filter(p => p.status === 'pending').length;

  // 过滤逻辑
  const filteredRecruitments = recruitmentAudits.filter(r =>
    r.candidateName.includes(searchValue) || r.position.includes(searchValue) || r.department.includes(searchValue)
  );

  const filteredWorkMonitors = workMonitors.filter(w =>
    w.employeeName.includes(searchValue) || w.department.includes(searchValue)
  );

  const filteredChanges = personnelChanges.filter(c =>
    c.employeeName.includes(searchValue) || c.fromDepartment.includes(searchValue) || c.toDepartment.includes(searchValue)
  );

  const filteredDepartures = departureAudits.filter(d =>
    d.employeeName.includes(searchValue) || d.department.includes(searchValue)
  );

  const filteredArchives = personnelArchives.filter(a =>
    a.employeeName.includes(searchValue) || a.department.includes(searchValue)
  );

  const handleGenerateTicket = (_type: string, title: string, description: string, department: string) => {
    addWorkflowTicket({
      riskId: `HR-${Date.now()}`,
      riskType: '合规风险',
      department,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: '待整改',
      progress: 0,
      assignee: '待分配',
      riskTitle: title,
      rectificationRequirements: description,
      rectificationRecords: [],
      operationLogs: [
        { id: `LOG${Date.now()}`, action: '创建工单', operator: '系统', operatedAt: new Date().toLocaleString('zh-CN'), details: `由人力合规审计自动创建` },
      ],
    });
    alert(`已为"${title}"生成整改工单，请前往风险闭环模块查看`);
  };

  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">待入职审核</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{pendingRecruitments}</p>
          {recruitmentRisks > 0 && (
            <p className="text-xs text-danger mt-1">{recruitmentRisks}个风险项</p>
          )}
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">用工异常</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{workAnomalies}</p>
          {highRiskMonitors > 0 && (
            <p className="text-xs text-danger mt-1">{highRiskMonitors}个高风险</p>
          )}
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">待审批变更</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{pendingChanges}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <UserX className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">离职审计中</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{pendingDepartures}</p>
          {departureRisks > 0 && (
            <p className="text-xs text-danger mt-1">{departureRisks}个风险项</p>
          )}
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">待处理隐私请求</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{pendingPrivacyRequests}</p>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-border rounded-lg p-1">
              {[
                { key: 'recruitment', label: '招聘入职审计' },
                { key: 'monitor', label: '用工合规监控' },
                { key: 'change', label: '人事变更' },
                { key: 'departure', label: '离职离任审计' },
                { key: 'archive', label: '档案管理' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.key ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="搜索..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full md:w-48 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
            <Plus className="w-4 h-4" />
            新增记录
          </button>
        </div>

        {/* 招聘入职审计 */}
        {activeTab === 'recruitment' && (
          <div className="space-y-3">
            {filteredRecruitments.map(recruitment => {
              const statusConfig = recruitmentStatusMap[recruitment.status];
              const StatusIcon = statusConfig.icon;
              return (
                <div
                  key={recruitment.id}
                  className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer ${
                    recruitment.risks.some(r => r.status === 'open') ? 'border-l-4 border-l-danger' : ''
                  }`}
                  onClick={() => setSelectedRecruitment(recruitment)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium text-text-primary">{recruitment.candidateName}</h3>
                          <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                            {recruitment.position}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                          <span>{recruitment.department}</span>
                          <span>-</span>
                          <span>招聘人：{recruitment.recruiter}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      {recruitment.risks.filter(r => r.status === 'open').length > 0 && (
                        <div className="flex items-center gap-1 text-danger">
                          <AlertTriangle className="w-4 h-4" />
                          <span className="text-sm">{recruitment.risks.filter(r => r.status === 'open').length}个风险</span>
                        </div>
                      )}
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
        )}

        {/* 用工合规监控 */}
        {activeTab === 'monitor' && (
          <div className="space-y-3">
            {filteredWorkMonitors.map(monitor => (
              <div
                key={monitor.id}
                className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer ${
                  monitor.riskLevel === 'high' ? 'border-l-4 border-l-danger' :
                  monitor.riskLevel === 'medium' ? 'border-l-4 border-l-warning' : ''
                }`}
                onClick={() => setSelectedWorkMonitor(monitor)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{monitor.employeeName}</h3>
                        <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                          {monitor.position}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          monitor.riskLevel === 'high' ? 'bg-danger/10 text-danger' :
                          monitor.riskLevel === 'medium' ? 'bg-warning/10 text-warning' :
                          'bg-success/10 text-success'
                        }`}>
                          {monitor.riskLevel === 'high' ? '高风险' : monitor.riskLevel === 'medium' ? '中风险' : '低风险'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                        <span>{monitor.department}</span>
                        <span>-</span>
                        <span>{monitor.month}月</span>
                        <span>-</span>
                        <span>加班{monitor.overtime.totalHours}小时</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {monitor.anomalies.filter(a => a.status === 'pending').length > 0 && (
                      <div className="flex items-center gap-1 text-warning">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">{monitor.anomalies.filter(a => a.status === 'pending').length}个异常</span>
                      </div>
                    )}
                    <span className="text-sm text-text-secondary">{monitor.department}</span>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 人事变更 */}
        {activeTab === 'change' && (
          <div className="space-y-3">
            {filteredChanges.map(change => (
              <div
                key={change.id}
                className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors ${
                  change.salarySyncStatus === 'error' ? 'border-l-4 border-l-danger' :
                  change.approvalStatus === 'pending' ? 'border-l-4 border-l-warning' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-info" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{change.employeeName}</h3>
                        <span className="text-xs px-2 py-0.5 bg-info/10 text-info rounded">
                          {changeTypeMap[change.changeType]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-text-secondary">
                        <span>{change.fromDepartment}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>{change.toDepartment}</span>
                        <span>-</span>
                        <span>{change.fromPosition}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>{change.toPosition}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-text-muted">薪资变更</p>
                      <p className="text-sm text-text-primary">
                        ¥{change.fromSalary.toLocaleString()} → ¥{change.toSalary.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted">生效日期</p>
                      <p className="text-sm text-text-primary">{change.effectiveDate}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      change.approvalStatus === 'approved' ? 'bg-success/10 text-success' :
                      change.approvalStatus === 'pending' ? 'bg-warning/10 text-warning' :
                      'bg-danger/10 text-danger'
                    }`}>
                      {change.approvalStatus === 'approved' ? '已审批' : change.approvalStatus === 'pending' ? '待审批' : '已拒绝'}
                    </span>
                    {change.salarySyncStatus !== 'synced' && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        change.salarySyncStatus === 'error' ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning'
                      }`}>
                        薪资未同步
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 离职离任审计 */}
        {activeTab === 'departure' && (
          <div className="space-y-3">
            {filteredDepartures.map(departure => (
              <div
                key={departure.id}
                className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer ${
                  departure.risks.some(r => r.status === 'open') ? 'border-l-4 border-l-danger' :
                  departure.status === 'in_progress' ? 'border-l-4 border-l-warning' : ''
                }`}
                onClick={() => setSelectedDeparture(departure)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-danger/10 rounded-lg flex items-center justify-center">
                      <UserX className="w-5 h-5 text-danger" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{departure.employeeName}</h3>
                        <span className="text-xs px-2 py-0.5 bg-danger/10 text-danger rounded">
                          {departureTypeMap[departure.departureType]}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                          {departure.position}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                        <span>{departure.department}</span>
                        <span>-</span>
                        <span>离职日期：{departure.departureDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-text-muted">补偿总额</p>
                      <p className="text-sm font-medium text-text-primary">¥{departure.compensation.totalAmount.toLocaleString()}</p>
                    </div>
                    {departure.risks.filter(r => r.status === 'open').length > 0 && (
                      <div className="flex items-center gap-1 text-danger">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm">{departure.risks.filter(r => r.status === 'open').length}个风险</span>
                      </div>
                    )}
                    <span className={`text-xs px-2 py-1 rounded ${
                      departure.status === 'completed' ? 'bg-success/10 text-success' :
                      departure.status === 'in_progress' ? 'bg-warning/10 text-warning' :
                      'bg-text-muted/10 text-text-muted'
                    }`}>
                      {departure.status === 'completed' ? '已完成' : departure.status === 'in_progress' ? '进行中' : '待处理'}
                    </span>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 档案管理 */}
        {activeTab === 'archive' && (
          <div className="space-y-3">
            {filteredArchives.map(archive => (
              <div
                key={archive.id}
                className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                onClick={() => setSelectedArchive(archive)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{archive.employeeName}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          archive.dataClassification === 'strictly_confidential' ? 'bg-danger/10 text-danger' :
                          archive.dataClassification === 'confidential' ? 'bg-warning/10 text-warning' :
                          'bg-info/10 text-info'
                        }`}>
                          {archive.dataClassification === 'strictly_confidential' ? '机密' :
                           archive.dataClassification === 'confidential' ? '保密' :
                           archive.dataClassification === 'internal' ? '内部' : '公开'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                        <span>{archive.department}</span>
                        <span>-</span>
                        <span>{archive.documents.length}份文档</span>
                        <span>-</span>
                        <span>{archive.accessLogs.length}次访问</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {archive.privacyRequests.filter(p => p.status === 'pending').length > 0 && (
                      <div className="flex items-center gap-1 text-warning">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">{archive.privacyRequests.filter(p => p.status === 'pending').length}个待处理请求</span>
                      </div>
                    )}
                    <span className="text-xs text-text-muted">更新于{archive.lastUpdated}</span>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 招聘详情弹窗 */}
      {selectedRecruitment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedRecruitment.candidateName}</h3>
                <span className="text-xs text-text-secondary">{selectedRecruitment.position} - {selectedRecruitment.department}</span>
              </div>
              <button onClick={() => setSelectedRecruitment(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-3 gap-6">
                {/* 背景调查 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-primary-600" />
                    背景调查
                  </h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    {selectedRecruitment.backgroundCheck ? (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">身份核实</span>
                          <CheckCircle2 className={`w-4 h-4 ${selectedRecruitment.backgroundCheck.items.identity ? 'text-success' : 'text-danger'}`} />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">学历核实</span>
                          <CheckCircle2 className={`w-4 h-4 ${selectedRecruitment.backgroundCheck.items.education ? 'text-success' : 'text-danger'}`} />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">工作经历</span>
                          <CheckCircle2 className={`w-4 h-4 ${selectedRecruitment.backgroundCheck.items.employment ? 'text-success' : 'text-warning'}`} />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">犯罪记录</span>
                          <CheckCircle2 className={`w-4 h-4 ${selectedRecruitment.backgroundCheck.items.criminal ? 'text-success' : 'text-danger'}`} />
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-text-muted">未开始</p>
                    )}
                  </div>
                </div>

                {/* 材料审核 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-info" />
                    材料审核
                  </h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    {selectedRecruitment.materialsReview ? (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">完整度</span>
                          <span className="text-primary-600 font-medium">{selectedRecruitment.materialsReview.completeness}%</span>
                        </div>
                        {selectedRecruitment.materialsReview.missingItems.length > 0 && (
                          <div className="mt-2">
                            <p className="text-xs text-text-muted">缺失材料：</p>
                            {selectedRecruitment.materialsReview.missingItems.map(item => (
                              <p key={item} className="text-xs text-danger">{item}</p>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="text-sm text-text-muted">未开始</p>
                    )}
                  </div>
                </div>

                {/* 合同签署 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Clipboard className="w-4 h-4 text-warning" />
                    合同签署
                  </h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    {selectedRecruitment.contractSigning ? (
                      <>
                        <div className="text-sm">
                          <span className="text-text-secondary">合同类型：</span>
                          <span className="text-text-primary">{selectedRecruitment.contractSigning.contractType}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-text-secondary">入职日期：</span>
                          <span className="text-text-primary">{selectedRecruitment.contractSigning.startDate}</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs text-text-muted">必条款检查：</p>
                          {Object.entries(selectedRecruitment.contractSigning.requiredClauses).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between text-xs">
                              <span className="text-text-secondary">{key}</span>
                              <CheckCircle2 className={`w-3 h-3 ${value ? 'text-success' : 'text-danger'}`} />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-text-muted">未开始</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 风险项 */}
              {selectedRecruitment.risks.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-danger" />
                    风险项 ({selectedRecruitment.risks.filter(r => r.status === 'open').length})
                  </h4>
                  <div className="space-y-2">
                    {selectedRecruitment.risks.map(risk => (
                      <div key={risk.id} className={`p-3 bg-bg rounded-lg border-l-4 ${
                        risk.severity === 'high' ? 'border-l-danger' :
                        risk.severity === 'medium' ? 'border-l-warning' : 'border-l-info'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              risk.severity === 'high' ? 'bg-danger/10 text-danger' :
                              risk.severity === 'medium' ? 'bg-warning/10 text-warning' :
                              'bg-info/10 text-info'
                            }`}>
                              {riskTypeMap[risk.type]}
                            </span>
                            <p className="text-sm text-text-primary mt-1">{risk.description}</p>
                            <p className="text-xs text-text-muted mt-1">发现时间：{risk.discoveredAt}</p>
                          </div>
                          {risk.status === 'open' && (
                            <button
                              onClick={() => handleGenerateTicket('recruitment', riskTypeMap[risk.type], risk.description, selectedRecruitment.department)}
                              className="px-3 py-1 bg-primary-600 text-white rounded text-xs"
                            >
                              生成工单
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 用工监控详情弹窗 */}
      {selectedWorkMonitor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedWorkMonitor.employeeName}</h3>
                <span className="text-xs text-text-secondary">{selectedWorkMonitor.position} - {selectedWorkMonitor.department} - {selectedWorkMonitor.month}月</span>
              </div>
              <button onClick={() => setSelectedWorkMonitor(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-2 gap-6">
                {/* 出勤情况 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3">出勤情况</h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">正常出勤</span>
                      <span className="text-text-primary">{selectedWorkMonitor.attendance.normalDays}天</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">迟到</span>
                      <span className="text-warning">{selectedWorkMonitor.attendance.lateCount}次</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">早退</span>
                      <span className="text-warning">{selectedWorkMonitor.attendance.earlyLeaveCount}次</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">请假</span>
                      <span className="text-text-primary">{selectedWorkMonitor.attendance.leaveDays}天</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">旷工</span>
                      <span className="text-danger">{selectedWorkMonitor.attendance.absentDays}天</span>
                    </div>
                  </div>
                </div>

                {/* 加班情况 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3">加班情况</h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">总加班</span>
                      <span className={`font-medium ${selectedWorkMonitor.overtime.totalHours > 36 ? 'text-danger' : 'text-text-primary'}`}>
                        {selectedWorkMonitor.overtime.totalHours}小时
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">周末加班</span>
                      <span className="text-text-primary">{selectedWorkMonitor.overtime.weekendHours}小时</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">节假日加班</span>
                      <span className="text-text-primary">{selectedWorkMonitor.overtime.holidayHours}小时</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">是否调休</span>
                      <span className={selectedWorkMonitor.overtime.compensated ? 'text-success' : 'text-danger'}>
                        {selectedWorkMonitor.overtime.compensated ? '已调休' : '未调休'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 合规检查 */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3">合规检查结果</h4>
                <div className="space-y-2">
                  {selectedWorkMonitor.compliance.map((check, idx) => (
                    <div key={idx} className={`p-3 bg-bg rounded-lg flex items-center justify-between ${
                      check.result === 'fail' ? 'border-l-4 border-l-danger' :
                      check.result === 'warning' ? 'border-l-4 border-l-warning' : 'border-l-4 border-l-success'
                    }`}>
                      <div>
                        <p className="text-sm text-text-primary">{check.item}</p>
                        {check.details && <p className="text-xs text-text-muted mt-1">{check.details}</p>}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        check.result === 'pass' ? 'bg-success/10 text-success' :
                        check.result === 'fail' ? 'bg-danger/10 text-danger' :
                        'bg-warning/10 text-warning'
                      }`}>
                        {check.result === 'pass' ? '通过' : check.result === 'fail' ? '不通过' : '警告'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 异常项 */}
              {selectedWorkMonitor.anomalies.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-danger" />
                    异常项 ({selectedWorkMonitor.anomalies.filter(a => a.status === 'pending').length})
                  </h4>
                  <div className="space-y-2">
                    {selectedWorkMonitor.anomalies.map(anomaly => (
                      <div key={anomaly.id} className={`p-3 bg-bg rounded-lg border-l-4 ${
                        anomaly.severity === 'high' ? 'border-l-danger' :
                        anomaly.severity === 'medium' ? 'border-l-warning' : 'border-l-info'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-text-primary">{anomaly.description}</p>
                            <p className="text-xs text-text-muted mt-1">发现时间：{anomaly.detectedAt}</p>
                          </div>
                          {anomaly.status === 'pending' && (
                            <button
                              onClick={() => handleGenerateTicket('monitor', '用工异常', anomaly.description, selectedWorkMonitor.department)}
                              className="px-3 py-1 bg-primary-600 text-white rounded text-xs"
                            >
                              生成工单
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 离职详情弹窗 */}
      {selectedDeparture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedDeparture.employeeName}</h3>
                <span className="text-xs text-text-secondary">
                  {selectedDeparture.position} - {selectedDeparture.department} - {departureTypeMap[selectedDeparture.departureType]}
                </span>
              </div>
              <button onClick={() => setSelectedDeparture(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-2 gap-6">
                {/* 离职清单 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3">离职清单</h4>
                  <div className="space-y-3">
                    <div className={`p-3 bg-bg rounded-lg ${selectedDeparture.exitChecklist.workHandover.completed ? 'border-l-4 border-l-success' : 'border-l-4 border-l-warning'}`}>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${selectedDeparture.exitChecklist.workHandover.completed ? 'text-success' : 'text-warning'}`} />
                        <span className="text-sm font-medium">工作交接</span>
                      </div>
                      {selectedDeparture.exitChecklist.workHandover.completed && (
                        <p className="text-xs text-text-muted mt-1">已完成 - {selectedDeparture.exitChecklist.workHandover.signedAt}</p>
                      )}
                    </div>

                    <div className={`p-3 bg-bg rounded-lg ${selectedDeparture.exitChecklist.assetReturn.completed ? 'border-l-4 border-l-success' : 'border-l-4 border-l-warning'}`}>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${selectedDeparture.exitChecklist.assetReturn.completed ? 'text-success' : 'text-warning'}`} />
                        <span className="text-sm font-medium">资产归还</span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">
                        {selectedDeparture.exitChecklist.assetReturn.assets.filter(a => a.returned).length}/{selectedDeparture.exitChecklist.assetReturn.assets.length} 已归还
                      </p>
                    </div>

                    <div className={`p-3 bg-bg rounded-lg ${selectedDeparture.exitChecklist.accountDisable.completed ? 'border-l-4 border-l-success' : 'border-l-4 border-l-danger'}`}>
                      <div className="flex items-center gap-2">
                        <Key className={`w-4 h-4 ${selectedDeparture.exitChecklist.accountDisable.completed ? 'text-success' : 'text-danger'}`} />
                        <span className="text-sm font-medium">账号禁用</span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">
                        {selectedDeparture.exitChecklist.accountDisable.accounts.filter(a => a.disabled).length}/{selectedDeparture.exitChecklist.accountDisable.accounts.length} 已禁用
                      </p>
                    </div>

                    <div className={`p-3 bg-bg rounded-lg ${selectedDeparture.exitChecklist.feeSettlement.completed ? 'border-l-4 border-l-success' : 'border-l-4 border-l-warning'}`}>
                      <div className="flex items-center gap-2">
                        <Banknote className={`w-4 h-4 ${selectedDeparture.exitChecklist.feeSettlement.completed ? 'text-success' : 'text-warning'}`} />
                        <span className="text-sm font-medium">费用结算</span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">已完成</p>
                    </div>
                  </div>
                </div>

                {/* 补偿核算 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3">补偿核算</h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">最后工资</span>
                      <span className="text-text-primary">¥{selectedDeparture.compensation.finalSalary.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">未休年假折算</span>
                      <span className="text-text-primary">¥{selectedDeparture.compensation.annualLeaveCompensation.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">加班补偿</span>
                      <span className="text-text-primary">¥{selectedDeparture.compensation.overtimeCompensation.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">经济补偿金</span>
                      <span className="text-text-primary">¥{selectedDeparture.compensation.severancePay.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-text-primary">合计</span>
                        <span className="text-primary-600">¥{selectedDeparture.compensation.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 风险项 */}
              {selectedDeparture.risks.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-danger" />
                    风险项 ({selectedDeparture.risks.filter(r => r.status === 'open').length})
                  </h4>
                  <div className="space-y-2">
                    {selectedDeparture.risks.map(risk => (
                      <div key={risk.id} className={`p-3 bg-bg rounded-lg border-l-4 ${
                        risk.severity === 'high' ? 'border-l-danger' :
                        risk.severity === 'medium' ? 'border-l-warning' : 'border-l-info'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-text-primary">{risk.description}</p>
                            <p className="text-xs text-text-muted mt-1">发现时间：{risk.discoveredAt}</p>
                          </div>
                          {risk.status === 'open' && (
                            <button
                              onClick={() => handleGenerateTicket('departure', '离职风险', risk.description, selectedDeparture.department)}
                              className="px-3 py-1 bg-primary-600 text-white rounded text-xs"
                            >
                              生成工单
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 档案详情弹窗 */}
      {selectedArchive && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedArchive.employeeName}</h3>
                <span className="text-xs text-text-secondary">{selectedArchive.department} - 档案管理</span>
              </div>
              <button onClick={() => setSelectedArchive(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-2 gap-6">
                {/* 文档列表 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary-600" />
                    文档列表 ({selectedArchive.documents.length})
                  </h4>
                  <div className="space-y-2">
                    {selectedArchive.documents.map(doc => (
                      <div key={doc.id} className="p-3 bg-bg rounded-lg flex items-center justify-between">
                        <div>
                          <p className="text-sm text-text-primary">{doc.name}</p>
                          <p className="text-xs text-text-muted mt-1">{doc.uploadedAt} - {(doc.fileSize / 1024).toFixed(1)}KB</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            doc.status === 'active' ? 'bg-success/10 text-success' : 'bg-text-muted/10 text-text-muted'
                          }`}>
                            {doc.status === 'active' ? '有效' : '已归档'}
                          </span>
                          <button className="text-primary-600 hover:text-primary-700">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 访问日志 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-info" />
                    访问日志 ({selectedArchive.accessLogs.length})
                  </h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {selectedArchive.accessLogs.map(log => (
                      <div key={log.id} className="p-3 bg-bg rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-primary">{log.accessorName}</span>
                          <span className="text-xs text-text-muted">{log.accessorRole}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-text-muted">{log.action}</span>
                          <span className="text-xs text-text-muted">{log.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 隐私请求 */}
              {selectedArchive.privacyRequests.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    隐私请求 ({selectedArchive.privacyRequests.filter(p => p.status === 'pending').length}待处理)
                  </h4>
                  <div className="space-y-2">
                    {selectedArchive.privacyRequests.map(request => (
                      <div key={request.id} className={`p-3 bg-bg rounded-lg border-l-4 ${
                        request.status === 'pending' ? 'border-l-warning' :
                        request.status === 'completed' ? 'border-l-success' : 'border-l-danger'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium text-text-primary">
                              {request.type === 'access' ? '档案查阅' :
                               request.type === 'correction' ? '信息更正' :
                               request.type === 'deletion' ? '数据删除' : '数据导出'}
                            </span>
                            <p className="text-xs text-text-muted mt-1">提交时间：{request.submittedAt}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            request.status === 'pending' ? 'bg-warning/10 text-warning' :
                            request.status === 'completed' ? 'bg-success/10 text-success' :
                            'bg-danger/10 text-danger'
                          }`}>
                            {request.status === 'pending' ? '待处理' :
                             request.status === 'processing' ? '处理中' :
                             request.status === 'completed' ? '已完成' : '已拒绝'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
