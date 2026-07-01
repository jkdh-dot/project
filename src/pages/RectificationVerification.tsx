import { useState } from 'react';
import { CheckCircle, AlertCircle, Clock, RefreshCw, Play, Download, Search, Filter, FileText, ChevronRight } from 'lucide-react';

interface VerificationTask {
  id: string;
  ticketId: string;
  ticketTitle: string;
  riskLevel: 'high' | 'medium' | 'low';
  assignee: string;
  department: string;
  status: 'pending' | 'verifying' | 'passed' | 'failed' | 'auto_verified';
  verificationType: 'manual' | 'auto';
  lastVerification: string;
  nextVerification: string;
  retryCount: number;
}

interface VerificationResult {
  id: string;
  taskId: string;
  verifiedAt: string;
  verifier: string;
  result: 'passed' | 'failed';
  comment: string;
  evidence: string[];
  automated: boolean;
}

const verificationTasks: VerificationTask[] = [
  { id: 'VT001', ticketId: 'WT001', ticketTitle: '研发部张三存在越权访问核心代码仓库', riskLevel: 'high', assignee: '李总', department: '研发部', status: 'verifying', verificationType: 'auto', lastVerification: '2026-06-25 14:00', nextVerification: '2026-06-25 16:00', retryCount: 0 },
  { id: 'VT002', ticketId: 'WT002', ticketTitle: '财务部大额异常转账预警', riskLevel: 'high', assignee: '王总', department: '财务部', status: 'pending', verificationType: 'manual', lastVerification: '-', nextVerification: '2026-06-26 10:00', retryCount: 0 },
  { id: 'VT003', ticketId: 'WT003', ticketTitle: '数据库敏感信息未加密存储', riskLevel: 'high', assignee: '李总', department: '研发部', status: 'failed', verificationType: 'auto', lastVerification: '2026-06-25 10:00', nextVerification: '2026-06-25 17:00', retryCount: 2 },
  { id: 'VT004', ticketId: 'WT004', ticketTitle: '离职员工账号未及时注销', riskLevel: 'medium', assignee: '赵总', department: '人力资源部', status: 'auto_verified', verificationType: 'auto', lastVerification: '2026-06-25 15:00', nextVerification: '-', retryCount: 0 },
  { id: 'VT005', ticketId: 'WT005', ticketTitle: '权限配置不符合职责分离', riskLevel: 'medium', assignee: '孙总', department: 'IT部', status: 'passed', verificationType: 'manual', lastVerification: '2026-06-24 16:00', nextVerification: '-', retryCount: 0 },
];

const verificationResults: VerificationResult[] = [
  { id: 'VR001', taskId: 'VT001', verifiedAt: '2026-06-25 14:00', verifier: '系统自动', result: 'failed', comment: '检测到权限仍未收回', evidence: ['权限截图.png'], automated: true },
  { id: 'VR002', taskId: 'VT004', verifiedAt: '2026-06-25 15:00', verifier: '系统自动', result: 'passed', comment: '账号已成功禁用', evidence: ['操作日志.txt'], automated: true },
  { id: 'VR003', taskId: 'VT005', verifiedAt: '2026-06-24 16:00', verifier: '张审计', result: 'passed', comment: '权限配置已修正，符合职责分离要求', evidence: ['复核报告.pdf'], automated: false },
];

export function RectificationVerification() {
  const [activeTab, setActiveTab] = useState<'tasks' | 'results' | 'automation'>('tasks');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">整改验证与复测自动化</h2>
          <p className="text-sm text-gray-500 mt-1">自动验证整改效果，支持手动复核与自动复测</p>
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
            <Play className="w-4 h-4" />
            执行验证
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: '待验证任务', value: '2', icon: Clock, color: 'bg-yellow-100 text-yellow-600' },
          { label: '自动验证通过', value: '1', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
          { label: '验证失败', value: '2', icon: AlertCircle, color: 'bg-red-100 text-red-600' },
          { label: '自动验证率', value: '60%', icon: RefreshCw, color: 'bg-blue-100 text-blue-600' },
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
            { key: 'tasks', label: '验证任务' },
            { key: 'results', label: '验证结果' },
            { key: 'automation', label: '自动化配置' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === tab.key
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'tasks' && (
            <div className="space-y-4">
              {verificationTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        task.riskLevel === 'high' ? 'bg-red-100 text-red-600' :
                        task.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {task.riskLevel === 'high' ? '高风险' : task.riskLevel === 'medium' ? '中风险' : '低风险'}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        task.verificationType === 'auto' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {task.verificationType === 'auto' ? '自动验证' : '手动验证'}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">{task.ticketTitle}</h4>
                    <p className="text-sm text-gray-500">工单ID: {task.ticketId} | 部门: {task.department}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`text-sm font-medium ${
                        task.status === 'passed' || task.status === 'auto_verified' ? 'text-green-600' :
                        task.status === 'failed' ? 'text-red-600' :
                        task.status === 'verifying' ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {task.status === 'pending' ? '待验证' :
                         task.status === 'verifying' ? '验证中' :
                         task.status === 'passed' ? '验证通过' :
                         task.status === 'failed' ? '验证失败' : '自动通过'}
                      </p>
                      <p className="text-xs text-gray-500">重试次数: {task.retryCount}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-4">
              {verificationResults.map((result) => (
                <div key={result.id} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          result.result === 'passed' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {result.result === 'passed' ? '验证通过' : '验证失败'}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          result.automated ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {result.automated ? '自动验证' : '手动验证'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">任务ID: {result.taskId}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{result.verifiedAt}</p>
                      <p className="text-xs text-gray-500">{result.verifier}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-3">{result.comment}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">证据:</span>
                    {result.evidence.map((file, index) => (
                      <button key={index} className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                        <FileText className="w-3 h-3" />
                        {file}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'AC001', name: '权限收回验证', description: '自动检测权限是否已按要求收回', frequency: '每小时', status: 'active' },
                { id: 'AC002', name: '账号禁用验证', description: '检测离职员工账号是否已禁用', frequency: '实时', status: 'active' },
                { id: 'AC003', name: '数据加密验证', description: '检测敏感字段是否已加密存储', frequency: '每日', status: 'active' },
                { id: 'AC004', name: '日志完整性验证', description: '验证审计日志是否完整留存', frequency: '每周', status: 'draft' },
              ].map((config) => (
                <div key={config.id} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-800">{config.name}</h4>
                      <p className="text-xs text-gray-500">ID: {config.id}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      config.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {config.status === 'active' ? '生效中' : '草稿'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{config.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">执行频率: {config.frequency}</span>
                    <button className="text-xs text-primary-600 hover:text-primary-700">编辑</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}