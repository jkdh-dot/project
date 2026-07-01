import { Plus, Search, UserPlus, RefreshCw, CheckCircle2, Clock, XCircle, FileText, UserMinus, Users } from 'lucide-react';
import { useState } from 'react';
import { useAuditStore } from '@/store';

export function AIAcquisition() {
  const { accountRequests, accountChanges, departureAccounts, reconResult, addAccountRequest } = useAuditStore();
  const [activeTab, setActiveTab] = useState<'apply' | 'change' | 'departure' | 'recon'>('apply');
  const [searchValue, setSearchValue] = useState('');
  const [showApplyModal, setShowApplyModal] = useState(false);

  // 账号申请表单状态
  const [applyForm, setApplyForm] = useState({
    employeeId: '',
    employeeName: '',
    department: '',
    position: '',
    requestedPermissions: [] as string[],
  });

  const filteredRequests = accountRequests.filter(
    (r) =>
      r.employeeName.toLowerCase().includes(searchValue.toLowerCase()) ||
      r.department.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredChanges = accountChanges.filter(
    (c) =>
      c.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      c.accountId.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case 'current':
        return <Clock className="w-4 h-4 text-primary-600" />;
      case 'pending':
        return <XCircle className="w-4 h-4 text-text-muted" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-info bg-info/10';
      case 'approved':
        return 'text-success bg-success/10';
      case 'rejected':
        return 'text-danger bg-danger/10';
      case 'processing':
        return 'text-primary-600 bg-primary-600/10';
      default:
        return 'text-text-secondary bg-bg';
    }
  };

  // 提交账号申请
  const handleSubmitApplication = () => {
    if (!applyForm.employeeId || !applyForm.employeeName || !applyForm.department || !applyForm.position) {
      alert('请填写完整的申请信息');
      return;
    }
    if (applyForm.requestedPermissions.length === 0) {
      alert('请选择至少一个申请权限');
      return;
    }

    addAccountRequest({
      employeeId: applyForm.employeeId,
      employeeName: applyForm.employeeName,
      department: applyForm.department,
      position: applyForm.position,
      requestedPermissions: applyForm.requestedPermissions,
      status: 'pending',
      createdAt: new Date().toISOString(),
      processNodes: [
        { nodeName: '提交申请', assignee: '申请人', status: 'completed', completedAt: new Date().toLocaleString('zh-CN') },
        { nodeName: '部门审批', assignee: '部门负责人', status: 'pending' },
        { nodeName: 'IT审核', assignee: 'IT管理员', status: 'pending' },
        { nodeName: '账号创建', assignee: '系统', status: 'pending' },
      ],
    });

    alert(`账号申请已提交！\n员工：${applyForm.employeeName}\n部门：${applyForm.department}\n权限：${applyForm.requestedPermissions.join('、')}`);
    setShowApplyModal(false);
    setApplyForm({
      employeeId: '',
      employeeName: '',
      department: '',
      position: '',
      requestedPermissions: [],
    });
  };

  // 切换权限选择
  const togglePermission = (perm: string) => {
    setApplyForm(prev => ({
      ...prev,
      requestedPermissions: prev.requestedPermissions.includes(perm)
        ? prev.requestedPermissions.filter(p => p !== perm)
        : [...prev.requestedPermissions, perm]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('apply')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'apply' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            账号申请
          </button>
          <button
            onClick={() => setActiveTab('change')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'change' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            变更管理
          </button>
          <button
            onClick={() => setActiveTab('departure')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'departure' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <UserMinus className="w-4 h-4" />
            离职销户
          </button>
          <button
            onClick={() => setActiveTab('recon')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'recon' ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-600/5' : 'text-text-secondary hover:text-text-primary hover:bg-bg'
            }`}
          >
            <Users className="w-4 h-4" />
            月度对账
          </button>
        </div>

        <div className="p-4">
          {activeTab !== 'recon' && (
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="搜索..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-600"
                />
              </div>
              {activeTab === 'apply' && (
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  发起申请
                </button>
              )}
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <div key={request.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-text-primary">{request.employeeName}</span>
                        <span className="text-xs text-text-muted">{request.employeeId}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(request.status)}`}>
                          {request.status === 'pending' ? '待审批' : request.status === 'approved' ? '已通过' : request.status === 'rejected' ? '已拒绝' : '处理中'}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary">{request.department} - {request.position}</p>
                    </div>
                    <button className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700">
                      <FileText className="w-4 h-4" />
                      查看详情
                    </button>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-text-muted mb-2">申请权限：</p>
                    <div className="flex flex-wrap gap-2">
                      {request.requestedPermissions.map((perm, index) => (
                        <span key={index} className="px-2 py-1 bg-card border border-border rounded text-xs text-text-secondary">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {request.processNodes.map((node, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${node.status === 'completed' ? 'bg-success/10' : node.status === 'current' ? 'bg-primary-600' : 'bg-bg'}`}>
                          {getStatusIcon(node.status)}
                        </div>
                        <div className="ml-2">
                          <p className={`text-xs ${node.status === 'current' ? 'text-primary-600 font-medium' : 'text-text-secondary'}`}>{node.nodeName}</p>
                          <p className="text-xs text-text-muted">{node.assignee}</p>
                        </div>
                        {index < request.processNodes.length - 1 && (
                          <div className="w-8 h-0.5 bg-border mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'change' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-bg">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">变更编号</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">账号</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">变更类型</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">变更前</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">变更后</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">状态</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">操作人</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">时间</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredChanges.map((change) => (
                    <tr key={change.id} className="border-b border-border hover:bg-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-text-primary">{change.id}</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{change.username}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${change.changeType === 'permission' ? 'bg-warning/10 text-warning' : 'bg-primary-600/10 text-primary-600'}`}>
                          {change.changeType === 'permission' ? '权限变更' : '岗位变更'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{change.oldValue}</td>
                      <td className="px-4 py-3 text-sm text-success">{change.newValue}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(change.status)}`}>
                          {change.status === 'pending' ? '待审批' : change.status === 'approved' ? '已通过' : '已拒绝'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-text-secondary">{change.operator}</td>
                      <td className="px-4 py-3 text-sm text-text-muted">{change.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'departure' && (
            <div className="space-y-4">
              {departureAccounts.map((departure) => (
                <div key={departure.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-text-primary">{departure.employeeName}</span>
                        <span className="text-xs text-text-muted">{departure.employeeId}</span>
                      </div>
                      <p className="text-xs text-text-secondary">{departure.department} - 离职日期：{departure.departureDate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${departure.accountStatus === 'completed' ? 'text-success bg-success/10' : departure.accountStatus === 'checking' ? 'text-primary-600 bg-primary-600/10' : 'text-info bg-info/10'}`}>
                      {departure.accountStatus === 'completed' ? '已完成' : departure.accountStatus === 'checking' ? '核查中' : '待核查'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-text-muted">系统账号清单：</p>
                    {departure.systems.map((system) => (
                      <div key={system.systemName} className="flex items-center justify-between p-2 bg-card rounded border border-border">
                        <div>
                          <p className="text-sm text-text-primary">{system.systemName}</p>
                          <p className="text-xs text-text-muted">{system.username}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${system.status === 'deleted' ? 'text-success bg-success/10' : system.status === 'disabled' ? 'text-warning bg-warning/10' : 'text-danger bg-danger/10'}`}>
                            {system.status === 'deleted' ? '已删除' : system.status === 'disabled' ? '已禁用' : '活跃'}
                          </span>
                          {system.status !== 'deleted' && (
                            <button className="text-xs text-primary-600 hover:text-primary-700">
                              立即销户
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => setShowApplyModal(true)}
                className="w-full py-3 border border-dashed border-border rounded-lg text-sm text-text-secondary hover:text-primary-600 hover:border-primary-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                录入离职员工信息
              </button>
            </div>
          )}

          {activeTab === 'recon' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-secondary">对账日期：{reconResult.reconDate}</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  <RefreshCw className="w-4 h-4" />
                  一键发起对账
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                  <p className="text-xs text-text-secondary mb-1">在职员工</p>
                  <p className="text-xl font-bold text-text-primary">{reconResult.totalEmployees}</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                  <p className="text-xs text-text-secondary mb-1">系统账号</p>
                  <p className="text-xl font-bold text-text-primary">{reconResult.totalAccounts}</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                  <p className="text-xs text-text-secondary mb-1">离职未销户</p>
                  <p className="text-xl font-bold text-danger">{reconResult.orphanAccounts.length}</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                  <p className="text-xs text-text-secondary mb-1">一人多号</p>
                  <p className="text-xl font-bold text-warning">{reconResult.multiAccountUsers.length}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-danger rounded-full" />
                    离职未销户
                  </h4>
                  <div className="space-y-2">
                    {reconResult.orphanAccounts.map((account, index) => (
                      <div key={index} className="p-2 bg-bg rounded border border-border">
                        <p className="text-sm text-text-primary">{account.username}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-text-muted">{account.system}</span>
                          <span className="text-xs text-text-muted">{account.lastLogin}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-warning rounded-full" />
                    一人多号
                  </h4>
                  <div className="space-y-2">
                    {reconResult.multiAccountUsers.map((user, index) => (
                      <div key={index} className="p-2 bg-bg rounded border border-border">
                        <p className="text-sm text-text-primary">{user.employeeName}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-text-muted">{user.employeeId}</span>
                          <span className="text-xs text-primary-600">{user.accounts.length}个账号</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-info rounded-full" />
                    无主账号
                  </h4>
                  <div className="space-y-2">
                    {reconResult.unassignedAccounts.map((account, index) => (
                      <div key={index} className="p-2 bg-bg rounded border border-border">
                        <p className="text-sm text-text-primary">{account.username}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-text-muted">{account.system}</span>
                          <span className="text-xs text-text-muted">{account.createdAt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">账号申请</h3>
              <button onClick={() => setShowApplyModal(false)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">员工ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入员工ID"
                  value={applyForm.employeeId}
                  onChange={(e) => setApplyForm({ ...applyForm, employeeId: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">员工姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入员工姓名"
                  value={applyForm.employeeName}
                  onChange={(e) => setApplyForm({ ...applyForm, employeeName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">所属部门</label>
                <select
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  value={applyForm.department}
                  onChange={(e) => setApplyForm({ ...applyForm, department: e.target.value })}
                >
                  <option value="">请选择部门</option>
                  <option value="研发部">研发部</option>
                  <option value="财务部">财务部</option>
                  <option value="人力资源部">人力资源部</option>
                  <option value="市场部">市场部</option>
                  <option value="运营部">运营部</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">岗位</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  placeholder="请输入岗位"
                  value={applyForm.position}
                  onChange={(e) => setApplyForm({ ...applyForm, position: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">申请权限</label>
                <div className="flex flex-wrap gap-2">
                  {['代码访问', '测试环境', 'OA系统', '财务系统', 'HR系统'].map((perm) => (
                    <label
                      key={perm}
                      className={`flex items-center gap-2 px-3 py-2 border rounded-lg cursor-pointer transition-colors ${
                        applyForm.requestedPermissions.includes(perm)
                          ? 'bg-primary-50 border-primary-600 text-primary-700'
                          : 'bg-bg border-border hover:border-primary-600'
                      }`}
                      onClick={() => togglePermission(perm)}
                    >
                      <input
                        type="checkbox"
                        className="rounded text-primary-600 focus:ring-primary-600"
                        checked={applyForm.requestedPermissions.includes(perm)}
                        onChange={() => togglePermission(perm)}
                      />
                      <span className="text-sm text-text-secondary">{perm}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setShowApplyModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                取消
              </button>
              <button onClick={handleSubmitApplication} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                提交申请
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}