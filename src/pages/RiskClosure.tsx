import { Plus, Search, Clock, User, AlertTriangle, CheckCircle2, ArrowRight, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuditStore } from '@/store';
import { StatusBadge } from '@/components/common/StatusBadge';

export function RiskClosure() {
  const { workflowTickets, updateTicketStatus, addRectificationRecord, submitReview } = useAuditStore();
  const [searchValue, setSearchValue] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showRectificationModal, setShowRectificationModal] = useState(false);
  const [rectificationContent, setRectificationContent] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewResult, setReviewResult] = useState<'passed' | 'failed'>('passed');
  const [reviewComment, setReviewComment] = useState('');

  const filteredTickets = workflowTickets.filter(
    (t) =>
      t.id.toLowerCase().includes(searchValue.toLowerCase()) ||
      t.riskTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
      t.department.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (a.status === '超期') return -1;
    if (b.status === '超期') return 1;
    if (a.status === '待整改') return -1;
    if (b.status === '待整改') return 1;
    return 0;
  });

  const statusCounts = {
    '待整改': workflowTickets.filter((t) => t.status === '待整改').length,
    '整改中': workflowTickets.filter((t) => t.status === '整改中').length,
    '待复查': workflowTickets.filter((t) => t.status === '待复查').length,
    '已销号': workflowTickets.filter((t) => t.status === '已销号').length,
    '超期': workflowTickets.filter((t) => t.status === '超期').length,
  };

  const currentTicket = selectedTicket ? workflowTickets.find((t) => t.id === selectedTicket) : null;

  const handleStartRectification = () => {
    if (selectedTicket) {
      updateTicketStatus(selectedTicket, '整改中');
    }
  };

  const handleSubmitRectification = () => {
    if (selectedTicket && rectificationContent) {
      addRectificationRecord(selectedTicket, {
        content: rectificationContent,
        createdAt: new Date().toISOString(),
        operator: 'admin',
      });
      setRectificationContent('');
      setShowRectificationModal(false);
      updateTicketStatus(selectedTicket, '待复查');
    }
  };

  const handleSubmitReview = () => {
    if (selectedTicket) {
      submitReview(selectedTicket, reviewResult, reviewComment);
      setReviewComment('');
      setShowReviewModal(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {Object.entries(statusCounts).map(([status, count]) => (
          <div key={status} className="bg-card rounded-lg p-4 shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-text-secondary" />
              <span className="text-xs text-text-secondary">{status}</span>
            </div>
            <p className={`text-xl font-bold ${status === '超期' ? 'text-danger' : status === '待整改' ? 'text-info' : 'text-text-primary'}`}>
              {count}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="搜索工单编号、风险标题、部门..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-600"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
            <option>全部状态</option>
            <option>待整改</option>
            <option>整改中</option>
            <option>待复查</option>
            <option>已销号</option>
            <option>超期</option>
          </select>
          <select className="px-3 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-600">
            <option>全部部门</option>
            <option>研发部</option>
            <option>财务部</option>
            <option>人力资源部</option>
            <option>市场部</option>
          </select>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            创建工单
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bg">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">工单编号</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">风险类型</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">风险标题</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">责任部门</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">整改截止</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">当前状态</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">处理进度</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase">操作</th>
                </tr>
              </thead>
              <tbody>
                {sortedTickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className={`border-b border-border hover:bg-bg/50 transition-colors cursor-pointer ${ticket.status === '超期' ? 'bg-danger/5' : ''}`}
                    onClick={() => setSelectedTicket(ticket.id)}
                  >
                    <td className="px-4 py-3 text-sm text-text-primary">{ticket.id}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-primary-600/10 text-primary-600 rounded text-xs font-medium">
                        {ticket.riskType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-text-secondary max-w-xs truncate">{ticket.riskTitle}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{ticket.department}</td>
                    <td className={`px-4 py-3 text-sm ${ticket.status === '超期' ? 'text-danger font-medium' : 'text-text-muted'}`}>
                      {ticket.deadline}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={ticket.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-bg rounded-full overflow-hidden">
                          <div className="h-full bg-primary-600 transition-all" style={{ width: `${ticket.progress}%` }} />
                        </div>
                        <span className="text-xs text-text-secondary">{ticket.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-primary-600 hover:text-primary-700">查看</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 py-3 border-t border-border px-4">
            <span className="text-xs text-text-muted">显示 1-{sortedTickets.length} 条，共 {workflowTickets.length} 条</span>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">上一页</button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs">1</button>
              <button className="px-3 py-1 border border-border rounded text-xs text-text-secondary hover:bg-bg">下一页</button>
            </div>
          </div>
        </div>

        {currentTicket && (
          <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-sm font-semibold text-text-primary">工单详情</h3>
              <button onClick={() => setSelectedTicket(null)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">工单编号</span>
                <span className="text-sm font-medium text-text-primary">{currentTicket.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">风险类型</span>
                <span className="px-2 py-1 bg-primary-600/10 text-primary-600 rounded text-xs font-medium">
                  {currentTicket.riskType}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">责任部门</span>
                <span className="text-sm text-text-primary">{currentTicket.department}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">整改截止</span>
                <span className={`text-sm ${currentTicket.status === '超期' ? 'text-danger font-medium' : 'text-text-primary'}`}>
                  {currentTicket.deadline}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">当前状态</span>
                <StatusBadge status={currentTicket.status} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">处理进度</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary-600" style={{ width: `${currentTicket.progress}%` }} />
                  </div>
                  <span className="text-sm text-text-primary">{currentTicket.progress}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">责任人</span>
                <span className="flex items-center gap-1 text-sm text-text-primary">
                  <User className="w-4 h-4" />
                  {currentTicket.assignee}
                </span>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-text-primary mb-2">风险标题</h4>
                <p className="text-sm text-text-secondary">{currentTicket.riskTitle}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-text-primary mb-2">整改要求</h4>
                <div className="p-3 bg-bg rounded-lg">
                  <p className="text-sm text-text-secondary whitespace-pre-wrap">{currentTicket.rectificationRequirements}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-text-primary mb-2">整改记录</h4>
                {currentTicket.rectificationRecords.length > 0 ? (
                  <div className="space-y-2">
                    {currentTicket.rectificationRecords.map((record) => (
                      <div key={record.id} className="p-3 bg-bg rounded-lg">
                        <p className="text-sm text-text-secondary">{record.content}</p>
                        <p className="text-xs text-text-muted mt-1">{record.operator} - {record.createdAt}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-text-muted">暂无整改记录</p>
                )}
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-text-primary mb-2">操作日志</h4>
                <div className="space-y-2">
                  {currentTicket.operationLogs.map((log) => (
                    <div key={log.id} className="flex items-start gap-2 text-xs">
                      <ArrowRight className="w-3 h-3 text-text-muted mt-0.5" />
                      <div>
                        <span className="text-text-primary">{log.action}</span>
                        <span className="text-text-muted"> - {log.operator} - {log.operatedAt}</span>
                        <p className="text-text-muted mt-0.5">{log.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex flex-col gap-2">
                {currentTicket.status === '待整改' && (
                  <button
                    onClick={handleStartRectification}
                    className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    开始整改
                  </button>
                )}
                {currentTicket.status === '整改中' && (
                  <button
                    onClick={() => setShowRectificationModal(true)}
                    className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    提交整改记录
                  </button>
                )}
                {currentTicket.status === '待复查' && (
                  <button
                    onClick={() => setShowReviewModal(true)}
                    className="w-full py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors"
                  >
                    发起复查
                  </button>
                )}
                {currentTicket.status === '超期' && (
                  <button className="w-full py-2 bg-danger text-white rounded-lg text-sm font-medium hover:bg-danger/90 transition-colors">
                    升级告警
                  </button>
                )}
                {currentTicket.status === '已销号' && (
                  <div className="w-full py-2 bg-success/10 text-success rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    工单已完成
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">创建整改工单</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">风险标题</label>
                <input type="text" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" placeholder="请输入风险标题" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">风险类型</label>
                <select className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600">
                  <option>权限异常</option>
                  <option>账号风险</option>
                  <option>交易异常</option>
                  <option>越权访问</option>
                  <option>登录异常</option>
                  <option>数据泄露</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">责任部门</label>
                <select className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600">
                  <option>研发部</option>
                  <option>财务部</option>
                  <option>人力资源部</option>
                  <option>市场部</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">整改截止日期</label>
                <input type="date" className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">整改要求</label>
                <textarea className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600" rows={4} placeholder="请输入整改要求" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                取消
              </button>
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                创建工单
              </button>
            </div>
          </div>
        </div>
      )}

      {showRectificationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">提交整改记录</h3>
              <button onClick={() => setShowRectificationModal(false)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">整改内容</label>
                <textarea
                  value={rectificationContent}
                  onChange={(e) => setRectificationContent(e.target.value)}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  rows={4}
                  placeholder="请输入整改完成情况"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setShowRectificationModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                取消
              </button>
              <button onClick={handleSubmitRectification} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                提交整改
              </button>
            </div>
          </div>
        </div>
      )}

      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg w-full max-w-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">复查工单</h3>
              <button onClick={() => setShowReviewModal(false)} className="text-text-muted hover:text-text-primary">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">复查结果</label>
                <div className="flex gap-4">
                  <label className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors ${reviewResult === 'passed' ? 'border-success bg-success/10 text-success' : 'border-border hover:border-success'}`}>
                    <input type="radio" name="review" checked={reviewResult === 'passed'} onChange={() => setReviewResult('passed')} className="hidden" />
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">复查通过</span>
                  </label>
                  <label className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors ${reviewResult === 'failed' ? 'border-danger bg-danger/10 text-danger' : 'border-border hover:border-danger'}`}>
                    <input type="radio" name="review" checked={reviewResult === 'failed'} onChange={() => setReviewResult('failed')} className="hidden" />
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm">复查不通过</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">复查意见</label>
                <textarea
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary-600"
                  rows={4}
                  placeholder="请输入复查意见"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setShowReviewModal(false)} className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg transition-colors">
                取消
              </button>
              <button onClick={handleSubmitReview} className="px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors">
                {reviewResult === 'passed' ? '确认销号' : '退回整改'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}