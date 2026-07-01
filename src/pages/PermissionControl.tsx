import { useState } from 'react';
import { Lock, Users, Shield, FileText, Search, Filter, Plus, Edit2, Trash2, Eye, Check, AlertTriangle, Key, Database } from 'lucide-react';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  users: number;
  status: 'active' | 'inactive';
}

interface UserPermission {
  id: string;
  userId: string;
  userName: string;
  department: string;
  position: string;
  roles: string[];
  directPermissions: string[];
  lastUpdated: string;
}

interface DataPolicy {
  id: string;
  name: string;
  type: 'classification' | 'encryption' | 'access_control' | 'retention';
  description: string;
  scope: string;
  status: 'active' | 'draft' | 'disabled';
  lastApplied: string;
}

const roles: Role[] = [
  { id: 'R001', name: '系统管理员', description: '拥有系统全部权限', permissions: ['用户管理', '权限管理', '系统设置', '数据导出', '审计日志'], users: 2, status: 'active' },
  { id: 'R002', name: '审计主管', description: '负责审计任务分配和审核', permissions: ['审计任务管理', '审核底稿', '审批工单', '查看报表'], users: 3, status: 'active' },
  { id: 'R003', name: '审计员', description: '执行审计任务', permissions: ['审计任务执行', '底稿编制', '证据上传', '风险识别'], users: 10, status: 'active' },
  { id: 'R004', name: '部门负责人', description: '查看本部门审计情况', permissions: ['查看部门报表', '审批整改', '查看风险'], users: 8, status: 'active' },
  { id: 'R005', name: '普通用户', description: '基础权限', permissions: ['查看通知', '提交申请'], users: 130, status: 'active' },
];

const userPermissions: UserPermission[] = [
  { id: 'UP001', userId: 'U001', userName: '张审计', department: '审计部', position: '审计主管', roles: ['审计主管'], directPermissions: ['数据导出'], lastUpdated: '2026-06-25' },
  { id: 'UP002', userId: 'U002', userName: '李审计', department: '审计部', position: '审计员', roles: ['审计员'], directPermissions: [], lastUpdated: '2026-06-20' },
  { id: 'UP003', userId: 'U003', userName: '王经理', department: '财务部', position: '财务主管', roles: ['部门负责人'], directPermissions: [], lastUpdated: '2026-06-15' },
  { id: 'UP004', userId: 'U004', userName: '赵专员', department: '人力资源部', position: 'HR专员', roles: ['普通用户'], directPermissions: ['员工信息查看'], lastUpdated: '2026-06-10' },
];

const dataPolicies: DataPolicy[] = [
  { id: 'DP001', name: '数据分类分级策略', type: 'classification', description: '按照数据安全法要求进行数据分类分级', scope: '全系统', status: 'active', lastApplied: '2026-06-25' },
  { id: 'DP002', name: '敏感数据加密策略', type: 'encryption', description: '对敏感字段进行AES-256加密存储', scope: '用户信息、财务数据', status: 'active', lastApplied: '2026-06-20' },
  { id: 'DP003', name: '访问控制策略', type: 'access_control', description: '基于角色的访问控制（RBAC）', scope: '全系统', status: 'active', lastApplied: '2026-06-18' },
  { id: 'DP004', name: '数据留存策略', type: 'retention', description: '审计数据留存7年，日志留存6个月', scope: '审计数据、系统日志', status: 'active', lastApplied: '2026-06-15' },
];

const accessLogs = [
  { id: 'AL001', userId: 'U001', userName: '张审计', action: '访问敏感数据', resource: '财务系统.交易表', time: '2026-06-25 15:30:00', status: '允许' },
  { id: 'AL002', userId: 'U002', userName: '李审计', action: '导出报表', resource: '审计报表.风险汇总', time: '2026-06-25 14:20:00', status: '允许' },
  { id: 'AL003', userId: 'U005', userName: '周普通', action: '访问敏感数据', resource: '财务系统.工资表', time: '2026-06-25 13:10:00', status: '拒绝' },
];

export function PermissionControl() {
  const [activeTab, setActiveTab] = useState<'roles' | 'users' | 'policies' | 'access'>('roles');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">精细化权限与数据安全管控</h2>
          <p className="text-sm text-gray-500 mt-1">管理角色权限、用户授权和数据安全策略</p>
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
            添加
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: '角色数量', value: '5', icon: Shield, color: 'bg-blue-100 text-blue-600' },
          { label: '授权用户', value: '153', icon: Users, color: 'bg-green-100 text-green-600' },
          { label: '安全策略', value: '4', icon: Lock, color: 'bg-purple-100 text-purple-600' },
          { label: '访问拒绝', value: '3', icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
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
            { key: 'roles', label: '角色管理', icon: Shield },
            { key: 'users', label: '用户授权', icon: Users },
            { key: 'policies', label: '安全策略', icon: Lock },
            { key: 'access', label: '访问日志', icon: Eye },
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
          {activeTab === 'roles' && (
            <div className="space-y-4">
              {roles.map((role) => (
                <div key={role.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium text-gray-800">{role.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        role.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {role.status === 'active' ? '启用' : '禁用'}
                      </span>
                      <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-full">{role.users} 人</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((perm, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-primary-50 text-primary-600 rounded-full">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">用户ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">姓名</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">部门</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">职位</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">角色</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">直接权限</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">最后更新</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {userPermissions.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-800">{item.userId}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{item.userName}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{item.department}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{item.position}</td>
                      <td className="py-3 px-4">
                        {item.roles.map((role, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-primary-50 text-primary-600 rounded-full">
                            {role}
                          </span>
                        ))}
                      </td>
                      <td className="py-3 px-4">
                        {item.directPermissions.length > 0 ? (
                          item.directPermissions.map((perm, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              {perm}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-400">无</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{item.lastUpdated}</td>
                      <td className="py-3 px-4">
                        <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                          <Edit2 className="w-3 h-3" />
                          编辑权限
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="grid grid-cols-2 gap-4">
              {dataPolicies.map((policy) => {
                const typeLabels: Record<string, string> = {
                  classification: '数据分类',
                  encryption: '数据加密',
                  access_control: '访问控制',
                  retention: '数据留存',
                };
                const typeIcons = {
                  classification: Database,
                  encryption: Key,
                  access_control: Lock,
                  retention: FileText,
                };
                const TypeIcon = typeIcons[policy.type];
                return (
                  <div key={policy.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        policy.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <TypeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{policy.name}</h4>
                        <span className="text-xs text-gray-500">{typeLabels[policy.type]}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{policy.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">适用范围</p>
                        <p className="text-sm text-gray-800">{policy.scope}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        policy.status === 'active' ? 'bg-green-100 text-green-600' :
                        policy.status === 'draft' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {policy.status === 'active' ? '生效中' : policy.status === 'draft' ? '草稿' : '已禁用'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'access' && (
            <div className="space-y-4">
              {accessLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        log.status === '允许' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {log.status === '允许' ? <Check className="w-3 h-3 inline" /> : <AlertTriangle className="w-3 h-3 inline" />}
                        {log.status}
                      </span>
                      <span className="text-sm font-medium text-gray-800">{log.action}</span>
                    </div>
                    <p className="text-sm text-gray-600">资源: {log.resource}</p>
                    <p className="text-xs text-gray-500 mt-1">用户: {log.userName} ({log.userId})</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{log.time}</p>
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