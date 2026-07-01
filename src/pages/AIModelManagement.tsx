import { useState } from 'react';
import {
  Search, Plus, Cpu, TrendingUp, CheckCircle2, ChevronRight,
  BarChart3, Layers, Settings, RefreshCw, ArrowLeftRight, Zap,
  FileText, Shield, Target, Activity
} from 'lucide-react';
import { useAuditStore } from '@/store';
import type { AuditAIModel, AIExplanationReport, ModelStatus, ModelType } from '@/types';

const modelStatusMap: Record<ModelStatus, { label: string; color: string; dotColor: string }> = {
  draft: { label: '草稿', color: 'text-text-muted', dotColor: 'bg-text-muted' },
  training: { label: '训练中', color: 'text-info', dotColor: 'bg-info' },
  testing: { label: '测试中', color: 'text-warning', dotColor: 'bg-warning' },
  production: { label: '已上线', color: 'text-success', dotColor: 'bg-success' },
  deprecated: { label: '已下线', color: 'text-danger', dotColor: 'bg-danger' },
  rollback: { label: '回滚中', color: 'text-warning', dotColor: 'bg-warning' },
};

const modelTypeMap: Record<ModelType, string> = {
  anomaly_detection: '异常检测',
  fraud_detection: '舞弊识别',
  text_semantic: '文本语义',
  ocr_recognition: 'OCR识别',
  voice_transcription: '语音转写',
  risk_prediction: '风险预测',
};

export function AIModelManagement() {
  const { auditAIModels, aiExplanationReports } = useAuditStore();
  const [activeTab, setActiveTab] = useState<'models' | 'explanation' | 'performance'>('models');
  const [searchValue, setSearchValue] = useState('');
  const [selectedModel, setSelectedModel] = useState<AuditAIModel | null>(null);
  const [selectedReport, setSelectedReport] = useState<AIExplanationReport | null>(null);

  const productionModels = auditAIModels.filter(m => m.status === 'production').length;
  const avgPrecision = auditAIModels.length > 0
    ? (auditAIModels.reduce((sum, m) => sum + m.metrics.precision, 0) / auditAIModels.length * 100).toFixed(1)
    : '0';
  const totalDetections = auditAIModels.reduce((sum, m) => sum + (m.metrics.detectionCount || 0), 0);
  const verifiedCount = auditAIModels.reduce((sum, m) => sum + (m.metrics.auditVerifiedCount || 0), 0);

  const filteredModels = auditAIModels.filter(m =>
    m.name.includes(searchValue) || m.type.includes(searchValue) || m.description.includes(searchValue)
  );

  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">生产模型</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{productionModels}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">平均精准率</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{avgPrecision}%</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">AI检出总量</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalDetections.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">审计核实</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{verifiedCount.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">核实率</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            {totalDetections > 0 ? ((verifiedCount / totalDetections) * 100).toFixed(1) : '0'}%
          </p>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex bg-border rounded-lg p-1">
            {[
              { key: 'models', label: '模型管理' },
              { key: 'explanation', label: '可解释报告' },
              { key: 'performance', label: '效果指标' },
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
          <div className="flex items-center gap-3">
            {activeTab === 'models' && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="搜索模型..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                />
              </div>
            )}
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
              <Plus className="w-4 h-4" />
              {activeTab === 'models' ? '新建模型' : '生成报告'}
            </button>
          </div>
        </div>

        {/* 模型管理 */}
        {activeTab === 'models' && (
          <div className="space-y-3">
            {filteredModels.map(model => {
              const statusConfig = modelStatusMap[model.status];
              return (
                <div
                  key={model.id}
                  className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedModel(model)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium text-text-primary">{model.name}</h3>
                          <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">
                            {modelTypeMap[model.type]}
                          </span>
                          <span className="text-xs text-text-muted">{model.currentVersion}</span>
                        </div>
                        <p className="text-xs text-text-secondary mt-1 max-w-xl line-clamp-1">{model.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <div>
                          <span className="text-text-muted">精准率</span>
                          <span className="ml-2 text-success font-medium">{(model.metrics.precision * 100).toFixed(0)}%</span>
                        </div>
                        <div>
                          <span className="text-text-muted">召回率</span>
                          <span className="ml-2 text-primary-600 font-medium">{(model.metrics.recall * 100).toFixed(0)}%</span>
                        </div>
                        <div>
                          <span className="text-text-muted">误报率</span>
                          <span className="ml-2 text-warning font-medium">{(model.metrics.falsePositiveRate * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 ${statusConfig.color}`}>
                        <span className={`w-2 h-2 rounded-full ${statusConfig.dotColor} ${model.status === 'training' ? 'animate-pulse' : ''}`}></span>
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

        {/* 可解释报告 */}
        {activeTab === 'explanation' && (
          <div className="space-y-3">
            {aiExplanationReports.map(report => (
              <div
                key={report.id}
                className={`bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer ${
                  report.riskLevel === 'high' ? 'border-l-4 border-l-danger' :
                  report.riskLevel === 'medium' ? 'border-l-4 border-l-warning' : ''
                }`}
                onClick={() => setSelectedReport(report)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      report.riskLevel === 'high' ? 'bg-danger/10' :
                      report.riskLevel === 'medium' ? 'bg-warning/10' : 'bg-success/10'
                    }`}>
                      <FileText className={`w-6 h-6 ${
                        report.riskLevel === 'high' ? 'text-danger' :
                        report.riskLevel === 'medium' ? 'text-warning' : 'text-success'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-text-primary">{report.caseTitle}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          report.riskLevel === 'high' ? 'bg-danger/10 text-danger' :
                          report.riskLevel === 'medium' ? 'bg-warning/10 text-warning' :
                          'bg-success/10 text-success'
                        }`}>
                          {report.riskLevel === 'high' ? '高风险' : report.riskLevel === 'medium' ? '中风险' : '低风险'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                        <span>{report.modelName}</span>
                        <span>-</span>
                        <span>置信度 {(report.confidence * 100).toFixed(0)}%</span>
                        <span>-</span>
                        <span>{report.generatedAt}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-text-muted">关键风险因子</p>
                      <p className="text-sm text-text-primary">{report.keyFactors.length}个</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 效果指标 */}
        {activeTab === 'performance' && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">模型精准率/召回率对比</h4>
              <div className="space-y-4">
                {auditAIModels.map(model => (
                  <div key={model.id} className="bg-bg rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary">{model.name}</span>
                      <span className="text-xs text-text-muted">{model.currentVersion}</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-text-secondary">精准率</span>
                          <span className="text-success">{(model.metrics.precision * 100).toFixed(1)}%</span>
                        </div>
                        <div className="h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-success rounded-full transition-all"
                            style={{ width: `${model.metrics.precision * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-text-secondary">召回率</span>
                          <span className="text-primary-600">{(model.metrics.recall * 100).toFixed(1)}%</span>
                        </div>
                        <div className="h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-600 rounded-full transition-all"
                            style={{ width: `${model.metrics.recall * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-text-secondary">F1 Score</span>
                          <span className="text-info">{(model.metrics.f1Score * 100).toFixed(1)}%</span>
                        </div>
                        <div className="h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-info rounded-full transition-all"
                            style={{ width: `${model.metrics.f1Score * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">误报/漏报分析</h4>
              <div className="space-y-4">
                {auditAIModels.map(model => (
                  <div key={model.id} className="bg-bg rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-text-primary">{model.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-card rounded-lg">
                        <p className="text-2xl font-bold text-warning">{(model.metrics.falsePositiveRate * 100).toFixed(1)}%</p>
                        <p className="text-xs text-text-muted mt-1">误报率</p>
                      </div>
                      <div className="text-center p-3 bg-card rounded-lg">
                        <p className="text-2xl font-bold text-danger">{(model.metrics.falseNegativeRate * 100).toFixed(1)}%</p>
                        <p className="text-xs text-text-muted mt-1">漏报率</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex justify-between text-xs">
                        <span className="text-text-secondary">总检出</span>
                        <span className="text-text-primary">{(model.metrics.detectionCount || 0).toLocaleString()}条</span>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-text-secondary">审计核实</span>
                        <span className="text-text-primary">{(model.metrics.auditVerifiedCount || 0).toLocaleString()}条</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 模型详情弹窗 */}
      {selectedModel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-text-primary">{selectedModel.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    selectedModel.status === 'production' ? 'bg-success/10 text-success' :
                    selectedModel.status === 'testing' ? 'bg-warning/10 text-warning' :
                    'bg-text-muted/10 text-text-muted'
                  }`}>
                    {modelStatusMap[selectedModel.status].label}
                  </span>
                </div>
                <span className="text-xs text-text-secondary">
                  {modelTypeMap[selectedModel.type]} · 当前版本 {selectedModel.currentVersion}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {selectedModel.status === 'production' && (
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
                    <ArrowLeftRight className="w-4 h-4" />
                    版本回滚
                  </button>
                )}
                <button onClick={() => setSelectedModel(null)} className="text-text-muted hover:text-text-primary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <p className="text-sm text-text-secondary mb-6">{selectedModel.description}</p>

              {/* 核心指标 */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-bg rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-success">{(selectedModel.metrics.precision * 100).toFixed(1)}%</p>
                  <p className="text-xs text-text-muted mt-1">精准率</p>
                </div>
                <div className="bg-bg rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary-600">{(selectedModel.metrics.recall * 100).toFixed(1)}%</p>
                  <p className="text-xs text-text-muted mt-1">召回率</p>
                </div>
                <div className="bg-bg rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-info">{(selectedModel.metrics.accuracy * 100).toFixed(1)}%</p>
                  <p className="text-xs text-text-muted mt-1">准确率</p>
                </div>
                <div className="bg-bg rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-warning">{(selectedModel.metrics.falsePositiveRate * 100).toFixed(1)}%</p>
                  <p className="text-xs text-text-muted mt-1">误报率</p>
                </div>
              </div>

              {/* 版本管理 */}
              {selectedModel.versions.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary-600" />
                    版本管理 ({selectedModel.versions.length})
                  </h4>
                  <div className="space-y-2">
                    {selectedModel.versions.map((version, idx) => (
                      <div key={version.id} className={`p-3 bg-bg rounded-lg border ${version.isProduction ? 'border-primary-600/30' : 'border-border'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary-600/10 rounded-full flex items-center justify-center text-xs font-bold text-primary-600">
                              {idx + 1}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-text-primary">{version.version}</span>
                                {version.isProduction && (
                                  <span className="text-xs px-2 py-0.5 bg-success/10 text-success rounded">当前生产</span>
                                )}
                              </div>
                              <p className="text-xs text-text-muted mt-0.5">{version.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-text-secondary">
                              精准率 <span className="text-success">{(version.metrics.precision * 100).toFixed(0)}%</span>
                            </span>
                            <span className="text-text-secondary">
                              召回率 <span className="text-primary-600">{(version.metrics.recall * 100).toFixed(0)}%</span>
                            </span>
                            <span className="text-text-muted">{version.trainedAt}</span>
                            {version.rollbackAvailable && !version.isProduction && (
                              <button className="text-primary-600 hover:text-primary-700 font-medium">
                                回滚到此版本
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 配置信息 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary-600" />
                    模型配置
                  </h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">创建者</span>
                      <span className="text-text-primary">{selectedModel.creator}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">创建时间</span>
                      <span className="text-text-primary">{selectedModel.createdAt}</span>
                    </div>
                    {selectedModel.lastDeployedAt && (
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">最后上线</span>
                        <span className="text-text-primary">{selectedModel.lastDeployedAt}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">可解释性</span>
                      <span className={selectedModel.explanationConfig.enabled ? 'text-success' : 'text-text-muted'}>
                        {selectedModel.explanationConfig.enabled ? '已开启' : '未开启'}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-primary-600" />
                    数据来源
                  </h4>
                  <div className="bg-bg rounded-lg p-4 space-y-2">
                    <div className="text-xs text-text-muted mb-2">接入系统</div>
                    {selectedModel.dataSource.map(source => (
                      <div key={source} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-text-primary">{source}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 可解释报告详情弹窗 */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-text-primary">{selectedReport.caseTitle}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    selectedReport.riskLevel === 'high' ? 'bg-danger/10 text-danger' :
                    selectedReport.riskLevel === 'medium' ? 'bg-warning/10 text-warning' :
                    'bg-success/10 text-success'
                  }`}>
                    {selectedReport.riskLevel === 'high' ? '高风险' : selectedReport.riskLevel === 'medium' ? '中风险' : '低风险'}
                  </span>
                </div>
                <span className="text-xs text-text-secondary">
                  {selectedReport.modelName} · 置信度 {(selectedReport.confidence * 100).toFixed(0)}%
                </span>
              </div>
              <button onClick={() => setSelectedReport(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              {/* AI解释摘要 */}
              <div className="bg-primary-600/5 rounded-lg p-4 mb-6 border border-primary-600/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-600 mb-2">AI判定结论</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{selectedReport.summary}</p>
                  </div>
                </div>
              </div>

              {/* 关键风险因子 */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary-600" />
                  关键风险因子（{selectedReport.keyFactors.length}）
                </h4>
                <div className="space-y-3">
                  {selectedReport.keyFactors.map(factor => (
                    <div key={factor.id} className="bg-bg rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text-primary">{factor.name}</span>
                          <span className="text-xs px-2 py-0.5 bg-text-muted/10 text-text-muted rounded">{factor.value}</span>
                        </div>
                        <span className="text-sm font-bold text-danger">{(factor.weight * 100).toFixed(0)}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden mb-2">
                        <div
                          className="h-full bg-danger rounded-full"
                          style={{ width: `${factor.weight * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-text-secondary">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 支撑证据 */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-info" />
                  支撑证据（{selectedReport.evidence.length}）
                </h4>
                <div className="space-y-2">
                  {selectedReport.evidence.map(item => (
                    <div key={item.id} className="bg-bg rounded-lg p-3 flex items-start gap-3">
                      <div className="w-8 h-8 bg-info/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-info" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-text-primary">{item.type}</span>
                          <span className="text-xs text-text-muted">关联度 {(item.relevance * 100).toFixed(0)}%</span>
                        </div>
                        <p className="text-xs text-text-secondary mt-1">{item.description}</p>
                        <p className="text-xs text-text-muted mt-1">来源：{item.source} · {item.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 审计建议 */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-success" />
                  审计建议（{selectedReport.auditRecommendations.length}）
                </h4>
                <div className="space-y-2">
                  {selectedReport.auditRecommendations.map((rec, idx) => (
                    <div key={idx} className="bg-bg rounded-lg p-3 flex items-start gap-3">
                      <span className="w-6 h-6 bg-success/10 text-success rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-text-secondary">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 相似案例 */}
              {selectedReport.similarCases.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-warning" />
                    历史相似案例（{selectedReport.similarCases.length}）
                  </h4>
                  <div className="space-y-2">
                    {selectedReport.similarCases.map(item => (
                      <div key={item.id} className="bg-bg rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-text-primary">{item.title}</p>
                          <p className="text-xs text-text-muted mt-1">{item.outcome} · {item.date}</p>
                        </div>
                        <span className="text-sm font-medium text-warning">相似度 {(item.similarity * 100).toFixed(0)}%</span>
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
