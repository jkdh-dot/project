import { useState } from 'react';
import { Search, Filter, Plus, BookOpen, CheckCircle2, AlertTriangle, Clock, ChevronRight, Tag, RefreshCw } from 'lucide-react';
import { useAuditStore } from '@/store';
import type { ComplianceRule } from '@/types';

export function ComplianceLibrary() {
  const { complianceRules, complianceCheckResults, complianceGaps, addComplianceRule, runComplianceCheck, addWorkflowTicket } = useAuditStore();
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState<'rules' | 'check' | 'gaps'>('rules');
  const [selectedRule, setSelectedRule] = useState<ComplianceRule | null>(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showAddRuleModal, setShowAddRuleModal] = useState(false);
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [newRule, setNewRule] = useState({
    code: '',
    title: '',
    category: 'data_security' as ComplianceRule['category'],
    content: '',
    source: '',
    effectiveDate: '',
    auditScenarios: '',
    keywords: '',
  });
  const [checkScenario, setCheckScenario] = useState('');
  const [selectedRuleId, setSelectedRuleId] = useState('');

  const ruleCategories: Record<string, string> = {
    tax: '财税法规',
    finance: '财务规范',
    industry: '行业监管',
    internal_control: '内控规范',
    data_security: '数据安全',
    privacy: '个人信息保护',
    other: '其他',
  };

  const ruleStatuses: Record<string, { label: string; color: string }> = {
    effective: { label: '有效', color: 'text-success' },
    amended: { label: '修订', color: 'text-warning' },
    expired: { label: '失效', color: 'text-text-muted' },
  };

  const checkStatuses: Record<string, { label: string; color: string; icon: typeof CheckCircle2 }> = {
    compliant: { label: '合规', color: 'text-success', icon: CheckCircle2 },
    non_compliant: { label: '不合规', color: 'text-danger', icon: AlertTriangle },
    pending: { label: '待检查', color: 'text-info', icon: Clock },
  };

  const gapStatuses: Record<string, { label: string; color: string }> = {
    open: { label: '待整改', color: 'text-danger' },
    remediating: { label: '整改中', color: 'text-warning' },
    closed: { label: '已闭环', color: 'text-success' },
  };

  const filteredRules = complianceRules.filter((rule) => {
    const matchSearch =
      rule.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      rule.code.toLowerCase().includes(searchValue.toLowerCase()) ||
      rule.content.toLowerCase().includes(searchValue.toLowerCase());
    const matchCategory = !filterCategory || rule.category === filterCategory;
    const matchStatus = !filterStatus || rule.status === filterStatus;
    return matchSearch && matchCategory && matchStatus;
  });

  const filteredCheckResults = complianceCheckResults.filter((result) => {
    return result.ruleTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
           result.scenario.toLowerCase().includes(searchValue.toLowerCase());
  });

  const filteredGaps = complianceGaps.filter((gap) => {
    return gap.ruleTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
           gap.gapDescription.toLowerCase().includes(searchValue.toLowerCase()) ||
           gap.affectedArea.toLowerCase().includes(searchValue.toLowerCase());
  });

  const totalRules = complianceRules.length;
  const totalEffective = complianceRules.filter((r) => r.status === 'effective').length;
  const totalNonCompliant = complianceCheckResults.filter((c) => c.checkResult === 'non_compliant').length;
  const openGaps = complianceGaps.filter((g) => g.status === 'open').length;

  const handleAddRule = () => {
    if (!newRule.code || !newRule.title) return;
    addComplianceRule({
      code: newRule.code,
      title: newRule.title,
      category: newRule.category,
      content: newRule.content,
      source: newRule.source,
      effectiveDate: newRule.effectiveDate,
      status: 'effective',
      auditScenarios: newRule.auditScenarios.split(/[,，、]/).map(s => s.trim()).filter(Boolean),
      keywords: newRule.keywords.split(/[,，、]/).map(s => s.trim()).filter(Boolean),
    });
    setShowAddRuleModal(false);
    setNewRule({
      code: '',
      title: '',
      category: 'data_security',
      content: '',
      source: '',
      effectiveDate: '',
      auditScenarios: '',
      keywords: '',
    });
  };

  const handleRunCheck = () => {
    if (!checkScenario) return;
    const targetRuleId = selectedRuleId || complianceRules[0]?.id;
    if (targetRuleId) {
      runComplianceCheck(targetRuleId, checkScenario);
    }
    setShowCheckModal(false);
    setCheckScenario('');
    setSelectedRuleId('');
    setActiveTab('check');
  };

  const handleSyncUpdate = () => {
    // 模拟从外部法规库同步最新数据
    const syncResults = {
      newRules: Math.floor(Math.random() * 5) + 1,
      updatedRules: Math.floor(Math.random() * 10) + 3,
      totalSynced: Math.floor(Math.random() * 15) + 8,
    };

    alert(`法规库同步完成！\n\n新增法规：${syncResults.newRules} 条\n更新法规：${syncResults.updatedRules} 条\n同步时间：${new Date().toLocaleString('zh-CN')}\n\n数据已更新至最新版本。`);
  };

  const handleGenerateTicket = (gap: typeof complianceGaps[0]) => {
    addWorkflowTicket({
      riskId: gap.id,
      riskType: '合规风险',
      department: gap.affectedArea.split('、')[0],
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: '待整改',
      progress: 0,
      assignee: '待分配',
      riskTitle: gap.ruleTitle,
      rectificationRequirements: gap.recommendedAction,
      rectificationRecords: [],
      operationLogs: [
        { id: `LOG${Date.now()}`, action: '创建工单', operator: '系统', operatedAt: new Date().toLocaleString('zh-CN'), details: `由合规差异自动生成整改工单` },
      ],
    });
    alert(`已为"${gap.ruleTitle}"生成整改工单，请前往风险闭环模块查看`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">法规条款</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalRules}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">有效条款</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalEffective}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">不合规项</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalNonCompliant}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">待整改缺口</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{openGaps}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-border rounded-lg p-1">
              <button
                onClick={() => { setActiveTab('rules'); setFilterCategory(''); setFilterStatus(''); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'rules' ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
              >
                法规条款库
              </button>
              <button
                onClick={() => { setActiveTab('check'); setFilterCategory(''); setFilterStatus(''); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'check' ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
              >
                合规校验
              </button>
              <button
                onClick={() => { setActiveTab('gaps'); setFilterCategory(''); setFilterStatus(''); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'gaps' ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
              >
                差异清单
              </button>
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
            {activeTab === 'rules' && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-text-muted" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                >
                  <option value="">全部类别</option>
                  {Object.entries(ruleCategories).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                >
                  <option value="">全部状态</option>
                  {Object.entries(ruleStatuses).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          {activeTab === 'rules' && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleSyncUpdate}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                同步更新
              </button>
              <button
                onClick={() => setShowAddRuleModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                添加条款
              </button>
            </div>
          )}
          {activeTab === 'check' && (
            <button
              onClick={() => setShowCheckModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              执行合规校验
            </button>
          )}
        </div>

        {activeTab === 'rules' && (
          <div className="space-y-3">
            {filteredRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                onClick={() => setSelectedRule(rule)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                        {rule.code}
                      </span>
                      <span className={`text-xs ${ruleStatuses[rule.status].color}`}>
                        {ruleStatuses[rule.status].label}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-text-primary">{rule.title}</h3>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">{rule.content}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                        {ruleCategories[rule.category]}
                      </span>
                      <span className="text-xs text-text-muted">{rule.source}</span>
                      <span className="text-xs text-text-muted">生效：{rule.effectiveDate}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted flex-shrink-0 ml-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'check' && (
          <div className="space-y-3">
            {filteredCheckResults.map((result) => {
              const statusConfig = checkStatuses[result.checkResult];
              const StatusIcon = statusConfig.icon;
              return (
                <div
                  key={result.id}
                  className={`bg-bg rounded-lg p-4 border border-border ${result.checkResult === 'non_compliant' ? 'border-l-4 border-l-danger' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
                        <span className={`text-sm font-medium ${statusConfig.color}`}>
                          {statusConfig.label}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-text-primary">{result.ruleTitle}</h3>
                      <p className="text-xs text-text-secondary mt-1">审计场景：{result.scenario}</p>
                      {result.deviationDetails && (
                        <p className="text-xs text-text-muted mt-2">{result.deviationDetails}</p>
                      )}
                      {result.affectedData && (
                        <div className="flex items-center gap-2 mt-2">
                          <Tag className="w-3 h-3 text-text-muted" />
                          <span className="text-xs text-text-secondary">{result.affectedData}</span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-text-muted">{result.checkTime}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'gaps' && (
          <div className="space-y-3">
            {filteredGaps.map((gap) => (
              <div
                key={gap.id}
                className={`bg-bg rounded-lg p-4 border border-border ${gap.status === 'open' ? 'border-l-4 border-l-danger' : gap.status === 'remediating' ? 'border-l-4 border-l-warning' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        gap.severity === 'high' ? 'bg-danger/10 text-danger' :
                        gap.severity === 'medium' ? 'bg-warning/10 text-warning' :
                        'bg-info/10 text-info'
                      }`}>
                        {gap.severity === 'high' ? '高风险' : gap.severity === 'medium' ? '中风险' : '低风险'}
                      </span>
                      <span className={`text-xs ${gapStatuses[gap.status].color}`}>
                        {gapStatuses[gap.status].label}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-text-primary">{gap.ruleTitle}</h3>
                    <p className="text-xs text-text-secondary mt-1">{gap.gapDescription}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                        {ruleCategories[gap.category]}
                      </span>
                      <span className="text-xs text-text-muted">影响范围：{gap.affectedArea}</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-text-muted">整改建议</p>
                      <p className="text-xs text-text-secondary">{gap.recommendedAction}</p>
                    </div>
                  </div>
                  {gap.status !== 'closed' && (
                    <button
                      onClick={() => handleGenerateTicket(gap)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded text-xs hover:bg-primary-700 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                      生成工单
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedRule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedRule.title}</h3>
                <span className="text-xs text-text-muted">{selectedRule.code}</span>
              </div>
              <button onClick={() => setSelectedRule(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-text-muted mb-1">类别</p>
                  <p className="text-sm text-text-primary">{ruleCategories[selectedRule.category]}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">来源</p>
                  <p className="text-sm text-text-primary">{selectedRule.source}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">生效日期</p>
                  <p className="text-sm text-text-primary">{selectedRule.effectiveDate}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">状态</p>
                  <p className={`text-sm ${ruleStatuses[selectedRule.status].color}`}>
                    {ruleStatuses[selectedRule.status].label}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2">条款内容</h4>
                <div className="bg-bg rounded-lg p-4">
                  <p className="text-sm text-text-secondary leading-relaxed">{selectedRule.content}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2">适用审计场景</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRule.auditScenarios.map((scenario) => (
                    <span key={scenario} className="px-3 py-1 bg-primary-600/10 text-primary-600 rounded-full text-xs">
                      {scenario}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2">关键词</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRule.keywords.map((keyword) => (
                    <span key={keyword} className="px-3 py-1 bg-bg text-text-secondary rounded-full text-xs">
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>

              {selectedRule.relatedRules && selectedRule.relatedRules.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">关联条款</h4>
                  <div className="space-y-2">
                    {selectedRule.relatedRules.map((ruleId) => {
                      const relatedRule = complianceRules.find((r) => r.id === ruleId);
                      if (!relatedRule) return null;
                      return (
                        <div key={ruleId} className="flex items-center justify-between p-3 bg-bg rounded-lg">
                          <div>
                            <p className="text-xs text-text-muted">{relatedRule.code}</p>
                            <p className="text-sm text-text-primary">{relatedRule.title}</p>
                          </div>
                          <button
                            onClick={() => { setSelectedRule(relatedRule); }}
                            className="text-xs text-primary-600 hover:text-primary-700"
                          >
                            查看
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showAddRuleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">添加法规条款</h3>
              <button onClick={() => setShowAddRuleModal(false)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">法规编号</label>
                  <input
                    type="text"
                    value={newRule.code}
                    onChange={(e) => setNewRule({ ...newRule, code: e.target.value })}
                    placeholder="如：《XX法》第X条"
                    className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">条款标题</label>
                  <input
                    type="text"
                    value={newRule.title}
                    onChange={(e) => setNewRule({ ...newRule, title: e.target.value })}
                    placeholder="条款名称"
                    className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">法规类别</label>
                  <select
                    value={newRule.category}
                    onChange={(e) => setNewRule({ ...newRule, category: e.target.value as ComplianceRule['category'] })}
                    className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  >
                    {Object.entries(ruleCategories).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">颁布机构</label>
                  <input
                    type="text"
                    value={newRule.source}
                    onChange={(e) => setNewRule({ ...newRule, source: e.target.value })}
                    placeholder="如：全国人大常委会"
                    className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">生效日期</label>
                <input
                  type="date"
                  value={newRule.effectiveDate}
                  onChange={(e) => setNewRule({ ...newRule, effectiveDate: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">条款内容</label>
                <textarea
                  value={newRule.content}
                  onChange={(e) => setNewRule({ ...newRule, content: e.target.value })}
                  rows={4}
                  placeholder="请输入法规条款的具体内容..."
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">适用审计场景（用逗号分隔）</label>
                <input
                  type="text"
                  value={newRule.auditScenarios}
                  onChange={(e) => setNewRule({ ...newRule, auditScenarios: e.target.value })}
                  placeholder="如：数据安全审计, IT审计, 合规审计"
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">关键词（用逗号分隔）</label>
                <input
                  type="text"
                  value={newRule.keywords}
                  onChange={(e) => setNewRule({ ...newRule, keywords: e.target.value })}
                  placeholder="如：数据安全, 等级保护, 日志留存"
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <button
                onClick={() => setShowAddRuleModal(false)}
                className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleAddRule}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                添加
              </button>
            </div>
          </div>
        </div>
      )}

      {showCheckModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-md overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">执行合规校验</h3>
              <button onClick={() => setShowCheckModal(false)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">选择法规条款</label>
                <select
                  value={selectedRuleId}
                  onChange={(e) => setSelectedRuleId(e.target.value)}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                >
                  <option value="">全部条款</option>
                  {complianceRules.map((rule) => (
                    <option key={rule.id} value={rule.id}>{rule.code} - {rule.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">审计场景</label>
                <input
                  type="text"
                  value={checkScenario}
                  onChange={(e) => setCheckScenario(e.target.value)}
                  placeholder="如：数据安全审计、隐私合规审计"
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
              <p className="text-xs text-text-muted">
                系统将AI自动校验业务数据/流程是否触碰合规红线，生成合规校验结果
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <button
                onClick={() => setShowCheckModal(false)}
                className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleRunCheck}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                开始校验
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}