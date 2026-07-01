import { Upload, Search, Filter, Download, AlertTriangle, Shield, UserCheck, Users } from 'lucide-react';
import { useState } from 'react';
import { useAuditStore } from '@/store';
import { RiskBadge } from '@/components/common/RiskBadge';

export function DAGovernance() {
  const { accounts, permissionMappings } = useAuditStore();
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState<'risk' | 'mapping'>('risk');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const allowedExtensions = ['.xlsx', '.xls', '.pdf', '.doc', '.docx'];

  const filteredAccounts = accounts.filter(
    (a) =>
      a.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      a.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      a.department.toLowerCase().includes(searchValue.toLowerCase())
  );

  const riskCount = accounts.filter((a) => a.riskLevel === 'high' || a.riskLevel === 'medium').length;

  const validateFile = (file: File): boolean => {
    const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    return allowedExtensions.includes(extension);
  };

  const handleFileDrop = (e?: React.DragEvent) => {
    if (e) {
      e.preventDefault();
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (!validateFile(file)) {
          setUploadError('请上传Excel、PDF或Word格式的文件');
          setTimeout(() => setUploadError(''), 3000);
          return;
        }
        setUploadError('');
      }
    }
    setIsUploading(true);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setUploadProgress(0);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!validateFile(file)) {
        setUploadError('请上传Excel、PDF或Word格式的文件');
        setTimeout(() => setUploadError(''), 3000);
        return;
      }
      setUploadError('');
      setIsUploading(true);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsUploading(false);
              setUploadProgress(0);
            }, 500);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const departments = [...new Set(accounts.map((a) => a.department))];
  const systems = [...new Set(permissionMappings.map((m) => m.system))];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <h3 className="text-sm font-semibold text-text-primary mb-4">权限排查操作区</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg transition-colors cursor-pointer ${
              isUploading ? 'border-primary-600 bg-primary-600/5' : 'border-border hover:border-primary-600 hover:bg-primary-600/5'
            }`}
            onDrop={(e) => handleFileDrop(e)}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => !isUploading && document.getElementById('da-governance-file-input')?.click()}
          >
            <input
              id="da-governance-file-input"
              type="file"
              accept=".xlsx,.xls,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            {isUploading ? (
              <>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-text-primary mb-2">上传中...</p>
                <div className="w-full max-w-xs h-2 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-primary-600 transition-all" style={{ width: `${uploadProgress}%` }} />
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 bg-bg rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-text-secondary" />
                </div>
                <p className="text-sm text-text-primary mb-1">拖拽上传或点击选择文件</p>
                <p className="text-xs text-text-muted">支持 .xlsx, .xls, .pdf, .doc, .docx 格式</p>
              </>
            )}
            {uploadError && (
              <p className="text-xs text-danger mt-2">{uploadError}</p>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 bg-bg rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">一键启动权限排查</p>
                <p className="text-xs text-text-muted">自动扫描账号权限风险</p>
              </div>
            </div>
            <button className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
              启动排查
            </button>
          </div>

          <div className="flex flex-col justify-center p-6 bg-bg rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">自定义排查规则</p>
                <p className="text-xs text-text-muted">配置风险检测条件</p>
              </div>
            </div>
            <button className="w-full py-2 border border-border rounded-lg text-sm font-medium text-text-secondary hover:bg-bg transition-colors">
              配置规则
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-text-secondary" />
            <span className="text-xs text-text-secondary">扫描账号数</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{accounts.length}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">风险账号数</span>
          </div>
          <p className="text-xl font-bold text-danger">{riskCount}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">高风险</span>
          </div>
          <p className="text-xl font-bold text-warning">{accounts.filter((a) => a.riskLevel === 'high').length}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <UserCheck className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">正常账号</span>
          </div>
          <p className="text-xl font-bold text-success">{accounts.filter((a) => a.riskLevel === 'normal').length}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('risk')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'risk' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            风险明细
          </button>
          <button
            onClick={() => setActiveTab('mapping')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'mapping' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            权责映射表
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="搜索账号、姓名、部门..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-600"
              />
            </div>
            <div className="flex items-center gap-3">
              {activeTab === 'risk' && (
                <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
                  <option>全部部门</option>
                  {departments.map((dept) => (
                    <option key={dept}>{dept}</option>
                  ))}
                </select>
              )}
              {activeTab === 'mapping' && (
                <>
                  <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
                    <option>全部部门</option>
                    {departments.map((dept) => (
                      <option key={dept}>{dept}</option>
                    ))}
                  </select>
                  <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
                    <option>全部系统</option>
                    {systems.map((system) => (
                      <option key={system}>{system}</option>
                    ))}
                  </select>
                </>
              )}
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                <Download className="w-4 h-4" />
                导出报告
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            {activeTab === 'risk' ? (
              <table className="w-full">
                <thead>
                  <tr className="bg-bg">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">账号</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">姓名</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">所属部门</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">岗位</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">权限等级</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">风险类型</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">风险等级</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">审批责任人</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccounts.map((account) => (
                    <tr key={account.id} className="border-b border-border hover:bg-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-text-primary">{account.username}</td>
                      <td className="px-4 py-3 text-sm text-text-primary">{account.name}</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{account.department}</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{account.position}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${account.permissionLevel === '管理员' ? 'bg-danger/10 text-danger' : account.permissionLevel === '高级' ? 'bg-warning/10 text-warning' : 'bg-bg text-text-secondary'}`}>
                          {account.permissionLevel}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{account.riskType || '-'}</td>
                      <td className="px-4 py-3">
                        <RiskBadge level={account.riskLevel} />
                      </td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{account.approver || '-'}</td>
                      <td className="px-4 py-3">
                        <button className="text-sm text-primary-600 hover:text-primary-700">详情</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-bg">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">权限名称</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">权限等级</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">审批人</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">责任人</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">所属部门</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">所属系统</th>
                  </tr>
                </thead>
                <tbody>
                  {permissionMappings.map((mapping, index) => (
                    <tr key={index} className="border-b border-border hover:bg-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-text-primary">{mapping.permissionName}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${mapping.permissionLevel === '管理员' ? 'bg-danger/10 text-danger' : mapping.permissionLevel === '高级' ? 'bg-warning/10 text-warning' : 'bg-bg text-text-secondary'}`}>
                          {mapping.permissionLevel}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{mapping.approver}</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{mapping.responsiblePerson}</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{mapping.department}</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{mapping.system}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="flex items-center justify-between mt-4 py-3 border-t border-border">
            <span className="text-xs text-text-muted">显示 1-8 条，共 {activeTab === 'risk' ? accounts.length : permissionMappings.length} 条</span>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">上一页</button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs">1</button>
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">2</button>
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">下一页</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}