import { Upload, Search, Filter, Download, AlertTriangle, Clock, Shield, Activity, RefreshCw, XCircle, FileText } from 'lucide-react';
import { useState } from 'react';
import { useAuditStore } from '@/store';
import { RiskBadge } from '@/components/common/RiskBadge';

export function MEMonitoring() {
  const { anomalyRecords } = useAuditStore();
  const [activeTab, setActiveTab] = useState<'login' | 'transaction' | 'access'>('login');
  const [searchValue, setSearchValue] = useState('');
  const [showDetailModal, setShowDetailModal] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState('');

  const allowedExtensions = ['.xlsx', '.xls', '.csv', '.pdf', '.doc', '.docx'];

  const validateFile = (file: File): boolean => {
    const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    return allowedExtensions.includes(extension);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!validateFile(file)) {
        setUploadError('请上传Excel、CSV、PDF或Word格式的文件');
        setTimeout(() => setUploadError(''), 3000);
        return;
      }
      setUploadError('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!validateFile(file)) {
        setUploadError('请上传Excel、CSV、PDF或Word格式的文件');
        setTimeout(() => setUploadError(''), 3000);
        return;
      }
      setUploadError('');
    }
  };

  const filteredRecords = anomalyRecords.filter(
    (a) =>
      a.type === activeTab &&
      (a.target.toLowerCase().includes(searchValue.toLowerCase()) ||
        a.department.toLowerCase().includes(searchValue.toLowerCase()) ||
        a.anomalyType.toLowerCase().includes(searchValue.toLowerCase()))
  );

  const currentRecords = anomalyRecords.filter((a) => a.type === activeTab);
  const totalCount = currentRecords.length;
  const highRiskCount = currentRecords.filter((a) => a.riskLevel === 'high').length;
  const mediumRiskCount = currentRecords.filter((a) => a.riskLevel === 'medium').length;

  const getTabTitle = () => {
    switch (activeTab) {
      case 'login':
        return '异常登录监控';
      case 'transaction':
        return '大额交易监控';
      case 'access':
        return '越权访问监控';
      default:
        return '';
    }
  };

  const selectedRecord = showDetailModal ? anomalyRecords.find((a) => a.id === showDetailModal) : null;

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <h3 className="text-sm font-semibold text-text-primary mb-4">{getTabTitle()} - 操作区</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-lg hover:border-primary-600 hover:bg-primary-600/5 transition-colors cursor-pointer"
            onDrop={(e) => handleFileDrop(e)}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('me-monitoring-file-input')?.click()}
          >
            <input
              id="me-monitoring-file-input"
              type="file"
              accept=".xlsx,.xls,.csv,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-12 h-12 bg-bg rounded-full flex items-center justify-center mb-3">
              <Upload className="w-6 h-6 text-text-secondary" />
            </div>
            <p className="text-sm text-text-primary mb-1">拖拽上传或点击选择文件</p>
            <p className="text-xs text-text-muted">支持 .xlsx, .xls, .csv, .pdf, .doc, .docx 格式</p>
            {uploadError && (
              <p className="text-xs text-danger mt-2">{uploadError}</p>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 bg-bg rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">自定义筛查阈值</p>
                <p className="text-xs text-text-muted">设置异常检测条件</p>
              </div>
            </div>
            <button className="w-full py-2 border border-border rounded-lg text-sm font-medium text-text-secondary hover:bg-card transition-colors">
              配置阈值
            </button>
          </div>

          <div className="flex flex-col justify-center p-6 bg-bg rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">一键启动监控</p>
                <p className="text-xs text-text-muted">立即执行异常检测</p>
              </div>
            </div>
            <button className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
              启动监控
            </button>
          </div>

          <div className="flex flex-col justify-center p-6 bg-bg rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">设置定时巡检</p>
                <p className="text-xs text-text-muted">自动定期检测</p>
              </div>
            </div>
            <button className="w-full py-2 border border-border rounded-lg text-sm font-medium text-text-secondary hover:bg-card transition-colors">
              配置任务
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-text-secondary" />
            <span className="text-xs text-text-secondary">扫描数据量</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalCount * 100}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">告警条数</span>
          </div>
          <p className="text-xl font-bold text-warning">{totalCount}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">高风险数</span>
          </div>
          <p className="text-xl font-bold text-danger">{highRiskCount}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">中风险数</span>
          </div>
          <p className="text-xl font-bold text-info">{mediumRiskCount}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'login' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Shield className="w-4 h-4" />
            异常登录
          </button>
          <button
            onClick={() => setActiveTab('transaction')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'transaction' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Activity className="w-4 h-4" />
            大额交易
          </button>
          <button
            onClick={() => setActiveTab('access')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'access' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            越权访问
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="搜索目标、部门、异常类型..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-600"
              />
            </div>
            <div className="flex items-center gap-3">
              <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
                <option>全部时间</option>
                <option>今日</option>
                <option>本周</option>
                <option>本月</option>
              </select>
              <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
                <option>全部风险等级</option>
                <option>高风险</option>
                <option>中风险</option>
                <option>低风险</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                <Download className="w-4 h-4" />
                导出清单
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredRecords.map((record) => (
              <div
                key={record.id}
                className={`flex gap-3 p-4 bg-bg rounded-lg border border-border hover:border-primary-600/50 transition-colors cursor-pointer ${record.riskLevel === 'high' ? 'border-l-4 border-l-danger' : record.riskLevel === 'medium' ? 'border-l-4 border-l-warning' : ''}`}
                onClick={() => setShowDetailModal(record.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-text-primary">{record.anomalyType}</span>
                    <RiskBadge level={record.riskLevel} />
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-1">{record.summary}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {record.time}
                    </span>
                    <span>目标：{record.target}</span>
                    <span>部门：{record.department}</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-sm text-primary-600">
                  <FileText className="w-4 h-4" />
                  详情
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 py-3 border-t border-border">
            <span className="text-xs text-text-muted">显示 1-{filteredRecords.length} 条，共 {totalCount} 条</span>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">上一页</button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs">1</button>
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">下一页</button>
            </div>
          </div>
        </div>
      </div>

      {showDetailModal && selectedRecord && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-text-primary">{selectedRecord.anomalyType} - 详情</h3>
                <RiskBadge level={selectedRecord.riskLevel} />
              </div>
              <button onClick={() => setShowDetailModal(null)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">异常时间</p>
                  <p className="text-sm text-text-primary">{selectedRecord.time}</p>
                </div>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">涉及对象</p>
                  <p className="text-sm text-text-primary">{selectedRecord.target}</p>
                </div>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">所属部门</p>
                  <p className="text-sm text-text-primary">{selectedRecord.department}</p>
                </div>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">风险等级</p>
                  <RiskBadge level={selectedRecord.riskLevel} />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2">摘要</h4>
                <p className="text-sm text-text-secondary">{selectedRecord.summary}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">详细信息</h4>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-sm text-text-secondary whitespace-pre-wrap">{selectedRecord.details}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <button onClick={() => setShowDetailModal(null)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                关闭
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                创建整改工单
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}