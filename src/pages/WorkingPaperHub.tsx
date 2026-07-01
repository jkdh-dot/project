import { useState } from 'react';
import { Search, Filter, Plus, FileText, Upload, Eye, Download, CheckCircle2, ArrowRight, Layers, Tag, FileCheck } from 'lucide-react';
import { useAuditStore } from '@/store';
import type { WorkPaper, WorkPaperTemplate, Evidence } from '@/types';

export function WorkingPaperHub() {
  const { workPapers, workPaperTemplates, evidences } = useAuditStore();
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState<'papers' | 'templates' | 'evidence'>('papers');
  const [selectedPaper, setSelectedPaper] = useState<WorkPaper | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<WorkPaperTemplate | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<Evidence | null>(null);
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const paperTypes: Record<string, string> = {
    financial: '财务审计',
    internal_control: '内控审计',
    it: 'IT审计',
    compliance: '合规审计',
    other: '其他',
  };

  const paperStatuses: Record<string, { label: string; color: string }> = {
    draft: { label: '草稿', color: 'text-text-muted' },
    completed: { label: '已完成', color: 'text-primary-600' },
    reviewing: { label: '复核中', color: 'text-warning' },
    approved: { label: '已审批', color: 'text-success' },
  };

  const evidenceTypes: Record<string, string> = {
    contract: '合同',
    voucher: '凭证',
    log: '日志',
    interview: '访谈记录',
    system_snapshot: '系统截图',
    other: '其他',
  };

  const filteredPapers = workPapers.filter((paper) => {
    const matchSearch =
      paper.templateName.toLowerCase().includes(searchValue.toLowerCase()) ||
      paper.taskName.toLowerCase().includes(searchValue.toLowerCase()) ||
      paper.assignee.toLowerCase().includes(searchValue.toLowerCase());
    const matchType = !filterType || paper.type === filterType;
    const matchStatus = !filterStatus || paper.status === filterStatus;
    return matchSearch && matchType && matchStatus;
  });

  const filteredTemplates = workPaperTemplates.filter((template) => {
    const matchSearch =
      template.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      template.description.toLowerCase().includes(searchValue.toLowerCase());
    const matchType = !filterType || template.type === filterType;
    return matchSearch && matchType;
  });

  const filteredEvidences = evidences.filter((evidence) => {
    return evidence.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const totalPapers = workPapers.length;
  const totalTemplates = workPaperTemplates.length;
  const pendingReview = workPapers.filter((p) => p.status === 'reviewing').length;
  const approvedPapers = workPapers.filter((p) => p.status === 'approved').length;

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">工作底稿</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalPapers}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">底稿模板</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalTemplates}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">待复核</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{pendingReview}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">已审批</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{approvedPapers}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-border rounded-lg p-1">
              <button
                onClick={() => { setActiveTab('papers'); setFilterType(''); setFilterStatus(''); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'papers' ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
              >
                工作底稿
              </button>
              <button
                onClick={() => { setActiveTab('templates'); setFilterType(''); setFilterStatus(''); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'templates' ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
              >
                模板库
              </button>
              <button
                onClick={() => { setActiveTab('evidence'); setFilterType(''); setFilterStatus(''); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'evidence' ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
              >
                证据管理
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
            {(activeTab === 'papers' || activeTab === 'templates') && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-text-muted" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                >
                  <option value="">全部类型</option>
                  {Object.entries(paperTypes).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                {activeTab === 'papers' && (
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  >
                    <option value="">全部状态</option>
                    {Object.entries(paperStatuses).map(([key, { label }]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                )}
              </div>
            )}
          </div>
          {activeTab === 'papers' && (
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
              <Plus className="w-4 h-4" />
              新建底稿
            </button>
          )}
          {activeTab === 'evidence' && (
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
              <Upload className="w-4 h-4" />
              上传证据
            </button>
          )}
        </div>

        {activeTab === 'papers' && (
          <div className="space-y-3">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                onClick={() => setSelectedPaper(paper)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{paper.templateName}</h3>
                        <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                          {paperTypes[paper.type]}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                        <span>{paper.taskName}</span>
                        <span>-</span>
                        <span>{paper.assignee}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-text-muted">版本</p>
                      <p className="text-sm font-medium text-text-primary">v{paper.versions.length}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted">更新时间</p>
                      <p className="text-sm text-text-primary">{paper.updatedAt}</p>
                    </div>
                    <div className={`text-sm font-medium ${paperStatuses[paper.status].color}`}>
                      {paperStatuses[paper.status].label}
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                      <Layers className="w-5 h-5 text-info" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">{template.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                        {paperTypes[template.type]}
                      </span>
                    </div>
                  </div>
                  {template.isStandard && (
                    <span className="text-xs px-2 py-0.5 bg-success/10 text-success rounded">标准模板</span>
                  )}
                </div>
                <p className="text-xs text-text-secondary mb-3">{template.description}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    {template.sections.length} 个章节
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {template.fields.length} 个字段
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'evidence' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEvidences.map((evidence) => (
              <div
                key={evidence.id}
                className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer ${evidence.verified ? 'border-l-2 border-l-success' : ''}`}
                onClick={() => setSelectedEvidence(evidence)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-600/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">{evidence.name}</p>
                      <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                        {evidenceTypes[evidence.type]}
                      </span>
                    </div>
                  </div>
                  {evidence.verified && (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  )}
                </div>
                <div className="space-y-1 text-xs text-text-secondary">
                  <div className="flex justify-between">
                    <span>文件大小</span>
                    <span>{formatFileSize(evidence.fileSize)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>上传人</span>
                    <span>{evidence.uploadedBy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>上传时间</span>
                    <span>{evidence.uploadedAt}</span>
                  </div>
                </div>
                {evidence.description && (
                  <p className="text-xs text-text-muted mt-2 line-clamp-2">{evidence.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedPaper.templateName}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                    {paperTypes[selectedPaper.type]}
                  </span>
                  <span className="text-xs text-text-secondary">{selectedPaper.taskName}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-primary-600">
                  <Download className="w-4 h-4" />
                  导出
                </button>
                <button onClick={() => setSelectedPaper(null)} className="text-text-muted hover:text-text-primary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="w-56 border-r border-border p-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-text-secondary uppercase">基本信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">负责人</span>
                      <span className="text-text-primary">{selectedPaper.assignee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">状态</span>
                      <span className={paperStatuses[selectedPaper.status].color}>
                        {paperStatuses[selectedPaper.status].label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">创建时间</span>
                      <span className="text-text-primary">{selectedPaper.createdAt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">更新时间</span>
                      <span className="text-text-primary">{selectedPaper.updatedAt}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-text-secondary uppercase">版本历史</h4>
                  <div className="space-y-2">
                    {selectedPaper.versions.map((version) => (
                      <div key={version.id} className="p-2 bg-bg rounded text-xs">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-text-primary">v{version.versionNumber}</span>
                          <span className="text-text-muted">{version.changedAt}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">{version.changedBy}</span>
                          {version.changeReason && (
                            <span className="text-text-muted">{version.changeReason}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">底稿内容</h4>
                  <div className="bg-bg rounded-lg p-4 space-y-4">
                    {Object.entries(selectedPaper.content.fields).map(([key, value]) => {
                      const field = workPaperTemplates.find((t) => t.id === selectedPaper.templateId)?.fields.find((f) => f.id === key);
                      return (
                        <div key={key}>
                          <label className="block text-xs text-text-muted mb-1">
                            {field?.name || key} {field?.required && <span className="text-danger">*</span>}
                          </label>
                          {field?.type === 'textarea' ? (
                            <p className="text-sm text-text-primary whitespace-pre-wrap">{value}</p>
                          ) : (
                            <input
                              type="text"
                              value={value}
                              readOnly
                              className="w-full px-3 py-2 bg-card border border-border rounded text-sm text-text-primary"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">关联证据</h4>
                  {selectedPaper.evidences.length > 0 ? (
                    <div className="space-y-2">
                      {selectedPaper.evidences.map((evidenceId) => {
                        const evidence = evidences.find((e) => e.id === evidenceId);
                        if (!evidence) return null;
                        return (
                          <div key={evidenceId} className="flex items-center justify-between p-3 bg-bg rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-primary-600" />
                              <span className="text-sm text-text-primary">{evidence.name}</span>
                            </div>
                            <button className="flex items-center gap-1 text-xs text-primary-600">
                              <Eye className="w-3 h-3" />
                              查看
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-bg rounded-lg p-4 text-center text-text-muted">暂无关联证据</div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3">复核记录</h4>
                  {selectedPaper.reviews.length > 0 ? (
                    <div className="space-y-3">
                      {selectedPaper.reviews.map((review) => (
                        <div key={review.id} className="p-3 bg-bg rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-text-primary">{review.reviewer}</span>
                              <span className={`text-xs px-2 py-0.5 rounded ${
                                review.reviewLevel === 'first' ? 'bg-primary-600/10 text-primary-600' :
                                review.reviewLevel === 'second' ? 'bg-warning/10 text-warning' :
                                'bg-success/10 text-success'
                              }`}>
                                {review.reviewLevel === 'first' ? '一级复核' :
                                 review.reviewLevel === 'second' ? '二级复核' : '最终复核'}
                              </span>
                            </div>
                            <span className={`text-xs ${review.result === 'passed' ? 'text-success' : 'text-danger'}`}>
                              {review.result === 'passed' ? '通过' : '驳回'}
                            </span>
                          </div>
                          {review.comment && (
                            <p className="text-xs text-text-secondary">{review.comment}</p>
                          )}
                          <p className="text-xs text-text-muted mt-1">{review.reviewedAt}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-bg rounded-lg p-4 text-center text-text-muted">暂无复核记录</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedTemplate.name}</h3>
                <span className="text-xs text-text-secondary">{paperTypes[selectedTemplate.type]}</span>
              </div>
              <button onClick={() => setSelectedTemplate(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2">模板说明</h4>
                <p className="text-sm text-text-secondary">{selectedTemplate.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3">章节结构</h4>
                <div className="space-y-2">
                  {selectedTemplate.sections.map((section) => (
                    <div key={section.id} className="flex items-center gap-3 p-3 bg-bg rounded-lg">
                      <span className="w-6 h-6 bg-primary-600/10 text-primary-600 rounded-full flex items-center justify-center text-xs font-medium">
                        {section.order}
                      </span>
                      <span className="text-sm text-text-primary">{section.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3">字段清单</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">字段名称</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">类型</th>
                        <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">所属章节</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">必填</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedTemplate.fields.map((field) => {
                        const section = selectedTemplate.sections.find((s) => s.id === field.sectionId);
                        return (
                          <tr key={field.id} className="border-b border-border">
                            <td className="py-2 px-3 text-sm text-text-primary">{field.name}</td>
                            <td className="py-2 px-3 text-sm text-text-secondary">
                              {field.type === 'text' ? '文本' :
                               field.type === 'number' ? '数字' :
                               field.type === 'date' ? '日期' :
                               field.type === 'select' ? '下拉选择' : '多行文本'}
                            </td>
                            <td className="py-2 px-3 text-sm text-text-secondary">{section?.title}</td>
                            <td className="py-2 px-3 text-center">
                              {field.required ? <CheckCircle2 className="w-4 h-4 text-success mx-auto" /> : '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedEvidence && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-md overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">证据详情</h3>
              <button onClick={() => setSelectedEvidence(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-600/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{selectedEvidence.name}</p>
                  <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                    {evidenceTypes[selectedEvidence.type]}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-text-muted mb-1">文件大小</p>
                  <p className="text-sm text-text-primary">{formatFileSize(selectedEvidence.fileSize)}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">验证状态</p>
                  <p className={`text-sm ${selectedEvidence.verified ? 'text-success' : 'text-text-muted'}`}>
                    {selectedEvidence.verified ? '已验证' : '待验证'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">上传人</p>
                  <p className="text-sm text-text-primary">{selectedEvidence.uploadedBy}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">上传时间</p>
                  <p className="text-sm text-text-primary">{selectedEvidence.uploadedAt}</p>
                </div>
              </div>

              {selectedEvidence.description && (
                <div>
                  <p className="text-xs text-text-muted mb-1">描述</p>
                  <p className="text-sm text-text-secondary">{selectedEvidence.description}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm">
                  <Eye className="w-4 h-4" />
                  预览
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary">
                  <Download className="w-4 h-4" />
                  下载
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}