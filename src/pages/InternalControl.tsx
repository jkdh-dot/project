import { useState } from 'react';
import { AlertTriangle, CheckCircle, FileText, Lightbulb, Link, Search, Filter, Plus, ArrowRight } from 'lucide-react';

interface ControlDefect {
  id: string;
  code: string;
  title: string;
  process: string;
  department: string;
  severity: 'major' | 'important' | 'general';
  status: 'identified' | 'analyzing' | 'remediating' | 'closed';
  impact: string;
  rootCause: string;
  relatedProcesses: string[];
}

interface ProcessOptimization {
  id: string;
  processName: string;
  department: string;
  optimizationType: 'automation' | 'simplification' | 'restructuring' | 'integration';
  currentState: string;
  suggestedState: string;
  expectedBenefit: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'approved' | 'implementing' | 'completed';
  savings?: string;
}

const controlDefects: ControlDefect[] = [
  { id: 'CD001', code: 'ICD-2026-001', title: '采购审批流程缺乏多重验证', process: '采购流程', department: '采购部', severity: 'major', status: 'remediating', impact: '可能导致虚假采购、金额不实', rootCause: '审批流程设计缺陷，缺少二次复核环节', relatedProcesses: ['合同管理', '付款流程'] },
  { id: 'CD002', code: 'ICD-2026-002', title: '权限变更未记录审批痕迹', process: '权限管理', department: 'IT部', severity: 'important', status: 'analyzing', impact: '无法追溯权限变更历史', rootCause: '权限管理系统日志记录不完整', relatedProcesses: ['账号管理', '审计日志'] },
  { id: 'CD003', code: 'ICD-2026-003', title: '财务对账周期过长', process: '财务结算', department: '财务部', severity: 'general', status: 'identified', impact: '问题发现滞后，影响资金安全', rootCause: '人工对账效率低下', relatedProcesses: ['应收管理', '应付管理'] },
  { id: 'CD004', code: 'ICD-2026-004', title: '数据备份策略不完善', process: '数据管理', department: 'IT部', severity: 'major', status: 'closed', impact: '数据丢失风险', rootCause: '备份频率不足，无异地备份', relatedProcesses: ['系统运维', '灾难恢复'] },
];

const processOptimizations: ProcessOptimization[] = [
  { id: 'PO001', processName: '采购审批流程', department: '采购部', optimizationType: 'restructuring', currentState: '单人审批，无复核环节', suggestedState: '双人审批+AI异常检测', expectedBenefit: '降低采购舞弊风险80%', priority: 'high', status: 'approved', savings: '预计节省30%审批时间' },
  { id: 'PO002', processName: '权限变更流程', department: 'IT部', optimizationType: 'automation', currentState: '手工记录审批', suggestedState: '自动化审批流+完整审计日志', expectedBenefit: '实现权限变更全程可追溯', priority: 'high', status: 'implementing', savings: '预计节省50%操作时间' },
  { id: 'PO003', processName: '财务对账流程', department: '财务部', optimizationType: 'automation', currentState: '人工逐笔核对', suggestedState: '系统自动对账+异常标记', expectedBenefit: '对账效率提升60%', priority: 'medium', status: 'pending', savings: '预计节省40%人力成本' },
  { id: 'PO004', processName: '员工入职流程', department: '人力资源部', optimizationType: 'integration', currentState: '多系统分别操作', suggestedState: '一站式入职平台', expectedBenefit: '入职周期缩短50%', priority: 'medium', status: 'completed', savings: '预计节省60%流程时间' },
];

export function InternalControl() {
  const [activeTab, setActiveTab] = useState<'defects' | 'optimization'>('defects');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">内控缺陷联动与流程优化建议</h2>
          <p className="text-sm text-gray-500 mt-1">识别内控缺陷，提供流程优化建议，实现风险防控</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
            <Search className="w-4 h-4" />
            搜索
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            筛选
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="w-4 h-4" />
            新增缺陷
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: '重大缺陷', value: '1', icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
          { label: '重要缺陷', value: '1', icon: AlertTriangle, color: 'bg-yellow-100 text-yellow-600' },
          { label: '一般缺陷', value: '1', icon: AlertTriangle, color: 'bg-blue-100 text-blue-600' },
          { label: '已修复', value: '1', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex border-b border-gray-200">
          {[
            { key: 'defects', label: '内控缺陷', icon: AlertTriangle },
            { key: 'optimization', label: '流程优化', icon: Lightbulb },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {activeTab === 'defects' && (
            <div className="space-y-4">
              {controlDefects.map((defect) => (
                <div key={defect.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        defect.severity === 'major' ? 'bg-red-100 text-red-600' :
                        defect.severity === 'important' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {defect.severity === 'major' ? '重大缺陷' : defect.severity === 'important' ? '重要缺陷' : '一般缺陷'}
                      </span>
                      <span className="text-sm text-gray-500">{defect.code}</span>
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">{defect.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">流程: {defect.process} | 部门: {defect.department}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs text-gray-500">影响:</span>
                      <span className="text-xs text-gray-700">{defect.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-gray-500">根因:</span>
                      <span className="text-xs text-gray-700">{defect.rootCause}</span>
                    </div>
                    {defect.relatedProcesses.length > 0 && (
                      <div className="flex items-center gap-2 mt-3">
                        <Link className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">关联流程:</span>
                        {defect.relatedProcesses.map((process, index) => (
                          <span key={index} className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                            {process}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      defect.status === 'identified' ? 'bg-gray-100 text-gray-600' :
                      defect.status === 'analyzing' ? 'bg-blue-100 text-blue-600' :
                      defect.status === 'remediating' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {defect.status === 'identified' ? '已识别' :
                       defect.status === 'analyzing' ? '分析中' :
                       defect.status === 'remediating' ? '整改中' : '已关闭'}
                    </span>
                    <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                      <FileText className="w-3 h-3" />
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'optimization' && (
            <div className="grid grid-cols-2 gap-4">
              {processOptimizations.map((optimization) => {
                const typeLabels: Record<string, string> = {
                  automation: '自动化',
                  simplification: '简化',
                  restructuring: '重构',
                  integration: '集成',
                };
                return (
                  <div key={optimization.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-800">{optimization.processName}</h4>
                        <span className="text-xs text-gray-500">{optimization.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          optimization.priority === 'high' ? 'bg-red-100 text-red-600' :
                          optimization.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                        }`}>
                          {optimization.priority === 'high' ? '高优先级' : optimization.priority === 'medium' ? '中优先级' : '低优先级'}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          optimization.status === 'pending' ? 'bg-gray-100 text-gray-600' :
                          optimization.status === 'approved' ? 'bg-blue-100 text-blue-600' :
                          optimization.status === 'implementing' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                        }`}>
                          {optimization.status === 'pending' ? '待审批' :
                           optimization.status === 'approved' ? '已批准' :
                           optimization.status === 'implementing' ? '实施中' : '已完成'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-500">优化类型:</span>
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">
                        {typeLabels[optimization.optimizationType]}
                      </span>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">当前状态</p>
                        <p className="text-sm text-gray-700">{optimization.currentState}</p>
                      </div>
                      <div className="flex items-center justify-center py-1">
                        <ArrowRight className="w-4 h-4 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">建议状态</p>
                        <p className="text-sm text-gray-700">{optimization.suggestedState}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">预期收益: {optimization.expectedBenefit}</span>
                      {optimization.savings && (
                        <span className="text-xs text-green-600">{optimization.savings}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}