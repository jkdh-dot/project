import { Plus, Search, Wifi, WifiOff, CheckCircle2, XCircle, Save, RefreshCw, Download, Database } from 'lucide-react';
import { useState } from 'react';
import { useAuditStore } from '@/store';

export function SystemSettings() {
  const { modelConfigs, ruleConfigs, systemLogs, addModelConfig, setDefaultModel, testModelConnection, addRuleConfig, toggleRuleEnabled, updateRuleThreshold } = useAuditStore();
  const [activeTab, setActiveTab] = useState<'model' | 'rule' | 'log' | 'data'>('model');
  const [searchValue, setSearchValue] = useState('');
  const [showAddModelModal, setShowAddModelModal] = useState(false);
  const [showAddRuleModal, setShowAddRuleModal] = useState(false);
  const [newModel, setNewModel] = useState({ name: '', apiUrl: '', modelId: '', apiKey: '' });
  const [newRule, setNewRule] = useState<{ name: string; type: 'permission' | 'transaction' | 'login'; threshold: number; description: string }>({ name: '', type: 'permission', threshold: 0, description: '' });

  const filteredLogs = systemLogs.filter(
    (log) =>
      log.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      log.action.toLowerCase().includes(searchValue.toLowerCase()) ||
      log.module.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddModel = () => {
    addModelConfig({ ...newModel, isDefault: false, status: 'disconnected' });
    setNewModel({ name: '', apiUrl: '', modelId: '', apiKey: '' });
    setShowAddModelModal(false);
  };

  const handleAddRule = () => {
    addRuleConfig({ ...newRule, enabled: true });
    setNewRule({ name: '', type: 'permission', threshold: 0, description: '' });
    setShowAddRuleModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('model')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'model' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Database className="w-4 h-4" />
            模型配置
          </button>
          <button
            onClick={() => setActiveTab('rule')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'rule' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Save className="w-4 h-4" />
            规则配置
          </button>
          <button
            onClick={() => setActiveTab('log')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'log' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Search className="w-4 h-4" />
            操作日志
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'data' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Download className="w-4 h-4" />
            数据管理
          </button>
        </div>

        <div className="p-4">
          {activeTab === 'model' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary">管理企业自有大模型或开源DS模型，配置API连接参数</p>
                <button
                  onClick={() => setShowAddModelModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  添加模型
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {modelConfigs.map((model) => (
                  <div key={model.id} className="bg-bg rounded-lg p-4 border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-text-primary">{model.name}</h4>
                        {model.isDefault && (
                          <span className="px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded text-xs font-medium">默认</span>
                        )}
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${model.status === 'connected' ? 'text-success' : 'text-danger'}`}>
                        {model.status === 'connected' ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                        <span>{model.status === 'connected' ? '已连接' : '未连接'}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">API地址</span>
                        <span className="text-text-secondary max-w-xs truncate">{model.apiUrl}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">模型ID</span>
                        <span className="text-text-secondary">{model.modelId}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">API密钥</span>
                        <span className="text-text-secondary">********</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() => testModelConnection(model.id)}
                        className="flex items-center gap-1 px-3 py-1.5 border border-border rounded text-xs text-text-secondary hover:bg-bg transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        测试连通性
                      </button>
                      {!model.isDefault && (
                        <button
                          onClick={() => setDefaultModel(model.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded text-xs font-medium hover:bg-primary-700 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          设为默认
                        </button>
                      )}
                      <button className="flex items-center gap-1 px-3 py-1.5 border border-border rounded text-xs text-danger hover:bg-danger/5 transition-colors">
                        <XCircle className="w-3 h-3" />
                        删除
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rule' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary">自定义权限风险规则、大额交易阈值、异常登录判定规则</p>
                <button
                  onClick={() => setShowAddRuleModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  添加规则
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bg">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">规则名称</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">规则类型</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">阈值</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">描述</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">状态</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ruleConfigs.map((rule) => (
                      <tr key={rule.id} className="border-b border-border hover:bg-bg/50 transition-colors">
                        <td className="px-4 py-3 text-sm text-text-primary">{rule.name}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${rule.type === 'transaction' ? 'bg-danger/10 text-danger' : rule.type === 'permission' ? 'bg-warning/10 text-warning' : 'bg-info/10 text-info'}`}>
                            {rule.type === 'transaction' ? '交易规则' : rule.type === 'permission' ? '权限规则' : '登录规则'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-text-secondary">
                          <input
                            type="number"
                            value={rule.threshold}
                            onChange={(e) => updateRuleThreshold(rule.id, parseInt(e.target.value) || 0)}
                            className="w-20 px-2 py-1 bg-bg border border-border rounded text-sm focus:outline-none focus:border-primary-600"
                          />
                        </td>
                        <td className="px-4 py-3 text-sm text-text-secondary max-w-xs truncate">{rule.description}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => toggleRuleEnabled(rule.id)}
                            className={`relative w-10 h-5 rounded-full transition-colors ${rule.enabled ? 'bg-success' : 'bg-border'}`}
                          >
                            <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${rule.enabled ? 'left-5' : 'left-0.5'}`} />
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-sm text-primary-600 hover:text-primary-700">编辑</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'log' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary">全量记录系统所有操作，支持按用户、时间、操作类型筛选</p>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  <Download className="w-4 h-4" />
                  导出日志
                </button>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="搜索用户、操作、模块..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-600"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bg">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">操作时间</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">用户</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">操作</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">模块</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">详情</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">IP地址</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLogs.map((log) => (
                      <tr key={log.id} className="border-b border-border hover:bg-bg/50 transition-colors">
                        <td className="px-4 py-3 text-sm text-text-muted">{log.operatedAt}</td>
                        <td className="px-4 py-3 text-sm text-text-primary">{log.username}</td>
                        <td className="px-4 py-3 text-sm text-text-secondary">{log.action}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="px-2 py-1 bg-primary-600/10 text-primary-600 rounded text-xs font-medium">
                            {log.module}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-text-secondary max-w-xs truncate">{log.details}</td>
                        <td className="px-4 py-3 text-sm text-text-muted">{log.ipAddress}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-border">
                <span className="text-xs text-text-muted">显示 1-{filteredLogs.length} 条，共 {systemLogs.length} 条</span>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">上一页</button>
                  <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs">1</button>
                  <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">下一页</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="space-y-6">
              <div className="p-6 bg-bg rounded-lg">
                <h4 className="text-sm font-semibold text-text-primary mb-4">审计数据备份</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-xs text-text-muted mb-2">备份数据总量</p>
                    <p className="text-xl font-bold text-text-primary">2.4 GB</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-xs text-text-muted mb-2">最近备份时间</p>
                    <p className="text-sm text-text-primary">2026-06-25 02:00:00</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-xs text-text-muted mb-2">备份保留天数</p>
                    <p className="text-sm text-text-primary">30天</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                    <Database className="w-4 h-4" />
                    立即备份
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-card transition-colors">
                    配置自动备份
                  </button>
                </div>
              </div>

              <div className="p-6 bg-bg rounded-lg">
                <h4 className="text-sm font-semibold text-text-primary mb-4">数据导出</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary-600 transition-colors">
                    <Download className="w-8 h-8 text-primary-600 mb-3" />
                    <p className="text-sm font-medium text-text-primary">导出审计报告</p>
                    <p className="text-xs text-text-muted mt-1">包含所有风险数据和整改记录</p>
                  </button>
                  <button className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary-600 transition-colors">
                    <Database className="w-8 h-8 text-success mb-3" />
                    <p className="text-sm font-medium text-text-primary">导出全量数据</p>
                    <p className="text-xs text-text-muted mt-1">完整的系统数据备份文件</p>
                  </button>
                </div>
              </div>

              <div className="p-6 bg-info/10 rounded-lg border border-info/20">
                <h4 className="text-sm font-semibold text-info mb-2">注意事项</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• 数据备份将自动加密存储，确保数据安全</li>
                  <li>• 建议定期手动执行全量备份，确保数据可恢复</li>
                  <li>• 导出的审计报告包含敏感信息，请妥善保管</li>
                  <li>• 删除数据前请确认已完成备份，删除后不可恢复</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {showAddModelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">添加模型配置</h3>
              <button onClick={() => setShowAddModelModal(false)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">模型名称</label>
                <input
                  type="text"
                  value={newModel.name}
                  onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入模型名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">API请求地址</label>
                <input
                  type="text"
                  value={newModel.apiUrl}
                  onChange={(e) => setNewModel({ ...newModel, apiUrl: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="https://api.example.com/v1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">模型ID</label>
                <input
                  type="text"
                  value={newModel.modelId}
                  onChange={(e) => setNewModel({ ...newModel, modelId: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入模型ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">API密钥</label>
                <input
                  type="password"
                  value={newModel.apiKey}
                  onChange={(e) => setNewModel({ ...newModel, apiKey: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入API密钥"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setShowAddModelModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                取消
              </button>
              <button onClick={handleAddModel} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                添加模型
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddRuleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">添加规则配置</h3>
              <button onClick={() => setShowAddRuleModal(false)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">规则名称</label>
                <input
                  type="text"
                  value={newRule.name}
                  onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入规则名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">规则类型</label>
                <select
                  value={newRule.type}
                  onChange={(e) => setNewRule({ ...newRule, type: e.target.value as 'permission' | 'transaction' | 'login' })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                >
                  <option value="permission">权限规则</option>
                  <option value="transaction">交易规则</option>
                  <option value="login">登录规则</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">阈值</label>
                <input
                  type="number"
                  value={newRule.threshold}
                  onChange={(e) => setNewRule({ ...newRule, threshold: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入阈值"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">规则描述</label>
                <textarea
                  value={newRule.description}
                  onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  rows={3}
                  placeholder="请输入规则描述"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setShowAddRuleModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                取消
              </button>
              <button onClick={handleAddRule} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                添加规则
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}