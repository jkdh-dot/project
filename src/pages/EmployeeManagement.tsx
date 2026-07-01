import { Search, Filter, Plus, User, Calendar, TrendingUp, Award, Clock, MapPin, Building2, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuditStore } from '@/store';
import type { Employee } from '@/types';

export function EmployeeManagement() {
  const { employees } = useAuditStore();
  const [searchValue, setSearchValue] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const departments = [...new Set(employees.map((e) => e.department))];

  const filteredEmployees = employees.filter((e) => {
    const matchSearch =
      e.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      e.employeeId.toLowerCase().includes(searchValue.toLowerCase()) ||
      e.department.toLowerCase().includes(searchValue.toLowerCase());
    const matchDepartment = !filterDepartment || e.department === filterDepartment;
    const matchStatus = !filterStatus || e.status === filterStatus;
    return matchSearch && matchDepartment && matchStatus;
  });

  const getStatusBadge = (status: Employee['status']) => {
    switch (status) {
      case 'active':
        return <span className="flex items-center gap-1 text-xs text-success"><CheckCircle2 className="w-3 h-3" />在职</span>;
      case 'on_leave':
        return <span className="flex items-center gap-1 text-xs text-info">休假中</span>;
      case 'resigned':
        return <span className="flex items-center gap-1 text-xs text-text-muted"><XCircle className="w-3 h-3" />已离职</span>;
      default:
        return <span className="text-xs text-text-muted">{status}</span>;
    }
  };

  const getChangeTypeLabel = (type: string) => {
    switch (type) {
      case 'promotion':
        return '晋升';
      case 'transfer':
        return '调岗';
      case 'demotion':
        return '降职';
      case 'new':
        return '入职';
      default:
        return type;
    }
  };

  const getAwardTypeLabel = (type: string) => {
    switch (type) {
      case 'performance':
        return '绩效奖';
      case 'innovation':
        return '创新奖';
      case 'service':
        return '服务奖';
      case 'team':
        return '团队奖';
      case 'other':
        return '其他';
      default:
        return type;
    }
  };

  const getAwardLevelLabel = (level: string) => {
    switch (level) {
      case 'company':
        return '公司级';
      case 'department':
        return '部门级';
      case 'project':
        return '项目级';
      default:
        return level;
    }
  };

  const totalActiveEmployees = employees.filter((e) => e.status === 'active').length;
  const avgTenure = (employees.reduce((sum, e) => sum + e.tenure, 0) / employees.length).toFixed(1);
  const totalAwards = employees.reduce((sum, e) => sum + e.awardRecords.length, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">在职员工</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalActiveEmployees}</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">平均司龄</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{avgTenure} <span className="text-sm font-normal">年</span></p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">累计获奖</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{totalAwards}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-5 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="搜索员工姓名、工号、部门..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-text-muted" />
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              >
                <option value="">全部部门</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
              >
                <option value="">全部状态</option>
                <option value="active">在职</option>
                <option value="on_leave">休假中</option>
                <option value="resigned">已离职</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            添加员工
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">工号</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">姓名</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">部门</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">岗位</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">入职日期</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">司龄</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">状态</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-text-secondary uppercase">操作</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-border hover:bg-bg transition-colors cursor-pointer"
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <td className="py-3 px-4 text-sm text-text-primary">{employee.employeeId}</td>
                  <td className="py-3 px-4 text-sm text-text-primary font-medium">{employee.name}</td>
                  <td className="py-3 px-4 text-sm text-text-secondary">{employee.department}</td>
                  <td className="py-3 px-4 text-sm text-text-secondary">{employee.position}</td>
                  <td className="py-3 px-4 text-sm text-text-secondary">{employee.hireDate}</td>
                  <td className="py-3 px-4 text-sm text-text-secondary">{employee.tenure} 年</td>
                  <td className="py-3 px-4">{getStatusBadge(employee.status)}</td>
                  <td className="py-3 px-4">
                    <button className="text-sm text-primary-600 hover:text-primary-700">查看详情</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-600/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{selectedEmployee.name}</h3>
                  <p className="text-sm text-text-secondary">{selectedEmployee.employeeId}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="text-text-muted hover:text-text-primary"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">部门</p>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-text-secondary" />
                    <p className="text-sm text-text-primary">{selectedEmployee.department}</p>
                  </div>
                </div>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">岗位</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-text-secondary" />
                    <p className="text-sm text-text-primary">{selectedEmployee.position}</p>
                  </div>
                </div>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">入职日期</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-text-secondary" />
                    <p className="text-sm text-text-primary">{selectedEmployee.hireDate}</p>
                  </div>
                </div>
                <div className="p-4 bg-bg rounded-lg">
                  <p className="text-xs text-text-muted mb-1">在职年限</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-text-secondary" />
                    <p className="text-sm text-text-primary font-medium">{selectedEmployee.tenure} 年</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary-600" />
                  岗位变迁记录
                </h4>
                <div className="space-y-3">
                  {selectedEmployee.positionChanges.map((change, index) => (
                    <div key={change.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary-600' : 'bg-border'}`} />
                        {index < selectedEmployee.positionChanges.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 p-3 bg-bg rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-text-primary">{change.position}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            change.changeType === 'promotion' ? 'bg-success/10 text-success' :
                            change.changeType === 'new' ? 'bg-primary-600/10 text-primary-600' :
                            'bg-bg text-text-secondary'
                          }`}>
                            {getChangeTypeLabel(change.changeType)}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary">{change.department}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-text-muted">
                          <span>{change.changeDate}</span>
                          {change.reason && <span>- {change.reason}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-info" />
                  出勤记录（近6个月）
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-text-secondary">月份</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">应出勤</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">实际出勤</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">请假</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">迟到</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">缺勤</th>
                        <th className="text-center py-2 px-3 text-xs font-semibold text-text-secondary">出勤率</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmployee.attendanceRecords.map((record) => {
                        const rate = ((record.attendanceDays / record.totalDays) * 100).toFixed(1);
                        return (
                          <tr key={record.id} className="border-b border-border">
                            <td className="py-2 px-3 text-sm text-text-secondary">{record.month}</td>
                            <td className="py-2 px-3 text-sm text-text-center text-text-primary">{record.totalDays}</td>
                            <td className="py-2 px-3 text-sm text-text-center text-text-primary">{record.attendanceDays}</td>
                            <td className="py-2 px-3 text-sm text-text-center text-text-secondary">{record.leaveDays}</td>
                            <td className="py-2 px-3 text-sm text-text-center text-text-secondary">{record.lateCount}</td>
                            <td className="py-2 px-3 text-sm text-text-center text-text-secondary">{record.absentCount}</td>
                            <td className="py-2 px-3 text-sm text-text-center text-text-primary">{rate}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-warning" />
                  所获奖励
                </h4>
                {selectedEmployee.awardRecords.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedEmployee.awardRecords.map((award) => (
                      <div key={award.id} className="p-4 bg-bg rounded-lg border-l-4 border-warning">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-text-primary">{award.name}</span>
                          <span className="text-xs text-text-muted">{award.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-text-secondary">
                          <span>{getAwardTypeLabel(award.type)}</span>
                          <span>{getAwardLevelLabel(award.level)}</span>
                        </div>
                        {award.description && (
                          <p className="text-xs text-text-muted mt-2">{award.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-text-muted">暂无奖励记录</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-md overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">添加员工</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-text-muted hover:text-text-primary"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">姓名</label>
                <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">工号</label>
                <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">部门</label>
                <select className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600">
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">岗位</label>
                <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">入职日期</label>
                <input type="date" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                添加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}