import { useState } from 'react';
import {
  AlertTriangle, TrendingUp, TrendingDown, Minus, ChevronRight,
  BarChart3, Target, Activity, Calendar, Filter, Download, Layers
} from 'lucide-react';
import { useAuditStore } from '@/store';
import type { RiskHeatmapCell, RiskLevel } from '@/types';

export function RiskHeatmap() {
  const { riskHeatmapData, riskTrendComparisons, riskMigrations, riskQuantifications, addWorkflowTicket } = useAuditStore();
  const [activeTab, setActiveTab] = useState<'heatmap' | 'trend' | 'migration' | 'quantification'>('heatmap');
  const [heatmapType, setHeatmapType] = useState<'department' | 'process'>('department');
  const [selectedCell, setSelectedCell] = useState<RiskHeatmapCell | null>(null);

  const currentHeatmap = riskHeatmapData[0];

  const departments = [...new Set(currentHeatmap?.cells.map(c => c.rowLabel) || [])];
  const processes = [...new Set(currentHeatmap?.cells.map(c => c.colLabel) || [])];

  const getCellColor = (level: RiskLevel, score: number): string => {
    if (level === 'high') {
      const intensity = Math.min(1, score / 100);
      return `rgba(239, 68, 68, ${0.4 + intensity * 0.5})`;
    }
    if (level === 'medium') {
      const intensity = Math.min(1, score / 70);
      return `rgba(245, 158, 11, ${0.4 + intensity * 0.4})`;
    }
    const intensity = Math.min(1, score / 40);
    return `rgba(34, 197, 94, ${0.3 + intensity * 0.3})`;
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <TrendingUp className="w-3 h-3 text-danger" />;
    if (trend === 'down') return <TrendingDown className="w-3 h-3 text-success" />;
    return <Minus className="w-3 h-3 text-text-muted" />;
  };

  const handleGenerateTicket = (cell: RiskHeatmapCell) => {
    addWorkflowTicket({
      riskId: `HRM-${cell.id}`,
      riskType: '合规风险',
      department: cell.rowLabel,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: '待整改',
      progress: 0,
      assignee: '待分配',
      riskTitle: `${cell.rowLabel}-${cell.colLabel}风险排查`,
      rectificationRequirements: `风险评分${cell.riskScore}分（${cell.riskLevel === 'high' ? '高风险' : cell.riskLevel === 'medium' ? '中风险' : '低风险'}），涉及${cell.riskCount}个风险点，请立即组织排查整改。`,
      rectificationRecords: [],
      operationLogs: [
        { id: `LOG${Date.now()}`, action: '创建工单', operator: '系统', operatedAt: new Date().toLocaleString('zh-CN'), details: '由风险热力图自动生成整改工单' },
      ],
    });
    alert('已生成整改工单，请前往风险闭环模块查看');
  };

  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">风险总数</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{currentHeatmap?.totalRisks.toLocaleString() || 0}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">高风险</span>
          </div>
          <p className="text-xl font-bold text-danger">{currentHeatmap?.highRiskCount.toLocaleString() || 0}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">中风险</span>
          </div>
          <p className="text-xl font-bold text-warning">{currentHeatmap?.mediumRiskCount.toLocaleString() || 0}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">低风险</span>
          </div>
          <p className="text-xl font-bold text-success">{currentHeatmap?.lowRiskCount.toLocaleString() || 0}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">统计周期</span>
          </div>
          <p className="text-sm font-bold text-text-primary">{currentHeatmap?.period || '-'}</p>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex bg-border rounded-lg p-1">
            {[
              { key: 'heatmap', label: '风险热力图' },
              { key: 'trend', label: '趋势对比' },
              { key: 'migration', label: '风险迁徙' },
              { key: 'quantification', label: '量化评估' },
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
            {activeTab === 'heatmap' && (
              <div className="flex bg-border rounded-lg p-0.5">
                {[
                  { key: 'department', label: '按部门' },
                  { key: 'process', label: '按流程' },
                ].map(type => (
                  <button
                    key={type.key}
                    onClick={() => setHeatmapType(type.key as typeof heatmapType)}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                      heatmapType === type.key ? 'bg-card text-primary-600 shadow-sm' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
              <Filter className="w-4 h-4" />
              筛选
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
              <Download className="w-4 h-4" />
              导出
            </button>
          </div>
        </div>

        {/* 风险热力图 */}
        {activeTab === 'heatmap' && currentHeatmap && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-text-secondary">
                维度：影响程度(40%) × 发生概率(35%) × AI置信度(25%)
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-text-muted">低</span>
                <div className="w-8 h-4 bg-gradient-to-r from-green-400/60 via-yellow-400/60 to-red-500/60 rounded"></div>
                <span className="text-text-muted">高</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 text-xs font-medium text-text-muted bg-bg border border-border sticky left-0 z-10">
                      部门 / 流程
                    </th>
                    {processes.map(proc => (
                      <th key={proc} className="p-2 text-xs font-medium text-text-muted bg-bg border border-border whitespace-nowrap">
                        {proc}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {departments.map(dept => (
                    <tr key={dept}>
                      <td className="p-2 text-xs font-medium text-text-secondary bg-bg border border-border sticky left-0 z-10 whitespace-nowrap">
                        {dept}
                      </td>
                      {processes.map(proc => {
                        const cell = currentHeatmap.cells.find(c => c.rowLabel === dept && c.colLabel === proc);
                        if (!cell) {
                          return <td key={proc} className="p-2 border border-border bg-bg"></td>;
                        }
                        return (
                          <td
                            key={proc}
                            className="p-2 border border-border text-center cursor-pointer hover:ring-2 hover:ring-primary-600/30 transition-all"
                            style={{ backgroundColor: getCellColor(cell.riskLevel, cell.riskScore) }}
                            onClick={() => setSelectedCell(cell)}
                          >
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-sm font-bold text-white drop-shadow">{cell.riskScore}</span>
                              <div className="flex items-center gap-1">
                                {getTrendIcon(cell.trend)}
                                <span className="text-xs text-white/90">{cell.riskCount}</span>
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <p className="text-xs text-text-muted">
                点击单元格查看详情 · 数字为风险评分（0-100）· 下方数字为风险数量
              </p>
              <p className="text-xs text-text-muted">
                生成时间：{currentHeatmap.generatedAt}
              </p>
            </div>
          </div>
        )}

        {/* 趋势对比 */}
        {activeTab === 'trend' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {riskTrendComparisons.map((period, idx) => (
                <div key={period.period} className={`bg-bg rounded-lg p-5 border ${
                  idx === riskTrendComparisons.length - 1 ? 'border-primary-600/30 ring-1 ring-primary-600/20' : 'border-border'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-text-primary">{period.period}</h4>
                    {idx === riskTrendComparisons.length - 1 && (
                      <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">当前</span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-text-secondary">风险总数</span>
                      <span className="text-2xl font-bold text-text-primary">{period.totalRisks}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-card rounded">
                        <p className="text-sm font-bold text-danger">{period.highRiskCount}</p>
                        <p className="text-xs text-text-muted">高风险</p>
                      </div>
                      <div className="p-2 bg-card rounded">
                        <p className="text-sm font-bold text-warning">{period.mediumRiskCount}</p>
                        <p className="text-xs text-text-muted">中风险</p>
                      </div>
                      <div className="p-2 bg-card rounded">
                        <p className="text-sm font-bold text-success">{period.lowRiskCount}</p>
                        <p className="text-xs text-text-muted">低风险</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-secondary">平均评分</span>
                      <span className="font-medium text-primary-600">{period.averageScore}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-secondary">整改销号</span>
                      <span className="font-medium text-success">{period.closedCount} ({(period.closureRate * 100).toFixed(0)}%)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 环比变化 */}
            <div className="bg-bg rounded-lg p-5">
              <h4 className="text-sm font-semibold text-text-primary mb-4">环比变化分析（Q2 vs Q1）</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-danger" />
                    <span className="text-2xl font-bold text-danger">+13.4%</span>
                  </div>
                  <p className="text-xs text-text-muted">风险总数增长</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-danger" />
                    <span className="text-2xl font-bold text-danger">+22.9%</span>
                  </div>
                  <p className="text-xs text-text-muted">高风险增长</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-warning" />
                    <span className="text-2xl font-bold text-warning">+9.5%</span>
                  </div>
                  <p className="text-xs text-text-muted">平均评分上升</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingDown className="w-4 h-4 text-danger" />
                    <span className="text-2xl font-bold text-danger">-25.7%</span>
                  </div>
                  <p className="text-xs text-text-muted">整改率下降</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 风险迁徙 */}
        {activeTab === 'migration' && (
          <div className="space-y-4">
            <p className="text-sm text-text-secondary mb-4">
              风险等级变迁追踪，支持审计资源投向高风险上升领域
            </p>
            <div className="space-y-3">
              {riskMigrations.map(migration => (
                <div key={migration.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          migration.fromLevel === 'high' ? 'bg-danger/10 text-danger' :
                          migration.fromLevel === 'medium' ? 'bg-warning/10 text-warning' :
                          'bg-success/10 text-success'
                        }`}>
                          {migration.fromLevel === 'high' ? '高' : migration.fromLevel === 'medium' ? '中' : '低'}风险
                        </span>
                        <ChevronRight className="w-4 h-4 text-text-muted" />
                        <span className={`text-xs px-2 py-1 rounded ${
                          migration.toLevel === 'high' ? 'bg-danger/10 text-danger' :
                          migration.toLevel === 'medium' ? 'bg-warning/10 text-warning' :
                          'bg-success/10 text-success'
                        }`}>
                          {migration.toLevel === 'high' ? '高' : migration.toLevel === 'medium' ? '中' : '低'}风险
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-text-primary">{migration.riskTitle}</p>
                        <p className="text-xs text-text-muted mt-0.5">{migration.fromDepartment} → {migration.toDepartment}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-secondary">{migration.reason}</p>
                      <p className="text-xs text-text-muted mt-1">{migration.changedAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 量化评估 */}
        {activeTab === 'quantification' && (
          <div className="space-y-4">
            <p className="text-sm text-text-secondary mb-4">
              基于影响程度×发生概率×AI置信度的三维量化评分模型
            </p>
            <div className="space-y-3">
              {riskQuantifications.map(item => (
                <div key={item.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-text-primary">{item.riskTitle}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          item.riskLevel === 'high' ? 'bg-danger/10 text-danger' :
                          item.riskLevel === 'medium' ? 'bg-warning/10 text-warning' :
                          'bg-success/10 text-success'
                        }`}>
                          {item.riskLevel === 'high' ? '高风险' : item.riskLevel === 'medium' ? '中风险' : '低风险'}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">{item.department} · {item.process}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary-600">{item.overallScore}</p>
                      <p className="text-xs text-text-muted">综合评分</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-card rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-secondary">影响程度</span>
                        <span className="text-xs text-text-muted">权重 {(item.weights.impact * 100)}%</span>
                      </div>
                      <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-text-primary">{item.impactScore}</span>
                        <span className="text-xs text-text-muted mb-0.5">/ 100</span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-danger" style={{ width: `${item.impactScore}%` }}></div>
                      </div>
                    </div>
                    <div className="bg-card rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-secondary">发生概率</span>
                        <span className="text-xs text-text-muted">权重 {(item.weights.probability * 100)}%</span>
                      </div>
                      <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-text-primary">{item.probabilityScore}</span>
                        <span className="text-xs text-text-muted mb-0.5">/ 100</span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-warning" style={{ width: `${item.probabilityScore}%` }}></div>
                      </div>
                    </div>
                    <div className="bg-card rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-secondary">AI置信度</span>
                        <span className="text-xs text-text-muted">权重 {(item.weights.aiConfidence * 100)}%</span>
                      </div>
                      <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-text-primary">{(item.aiConfidence * 100).toFixed(0)}</span>
                        <span className="text-xs text-text-muted mb-0.5">%</span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-info" style={{ width: `${item.aiConfidence * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 单元格详情弹窗 */}
      {selectedCell && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-2xl overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {selectedCell.rowLabel} - {selectedCell.colLabel}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    selectedCell.riskLevel === 'high' ? 'bg-danger/10 text-danger' :
                    selectedCell.riskLevel === 'medium' ? 'bg-warning/10 text-warning' :
                    'bg-success/10 text-success'
                  }`}>
                    {selectedCell.riskLevel === 'high' ? '高风险' : selectedCell.riskLevel === 'medium' ? '中风险' : '低风险'}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">
                  风险评分 {selectedCell.riskScore} 分 · AI置信度 {(selectedCell.aiConfidence * 100).toFixed(0)}%
                </p>
              </div>
              <button onClick={() => setSelectedCell(null)} className="text-text-muted hover:text-text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-text-primary">{selectedCell.riskCount}</p>
                  <p className="text-xs text-text-muted">风险总数</p>
                </div>
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-danger">{selectedCell.highRiskCount}</p>
                  <p className="text-xs text-text-muted">高风险</p>
                </div>
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-warning">{selectedCell.mediumRiskCount}</p>
                  <p className="text-xs text-text-muted">中风险</p>
                </div>
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-success">{selectedCell.lowRiskCount}</p>
                  <p className="text-xs text-text-muted">低风险</p>
                </div>
              </div>

              <div className="bg-bg rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">趋势变化</span>
                  <div className="flex items-center gap-2">
                    {selectedCell.trend === 'up' ? (
                      <span className="text-danger text-sm font-medium flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        上升 {Math.abs(selectedCell.trendChange)}%
                      </span>
                    ) : selectedCell.trend === 'down' ? (
                      <span className="text-success text-sm font-medium flex items-center gap-1">
                        <TrendingDown className="w-4 h-4" />
                        下降 {Math.abs(selectedCell.trendChange)}%
                      </span>
                    ) : (
                      <span className="text-text-muted text-sm font-medium flex items-center gap-1">
                        <Minus className="w-4 h-4" />
                        持平
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => handleGenerateTicket(selectedCell)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  生成整改工单
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
