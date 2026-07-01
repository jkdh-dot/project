import { useState } from 'react';
import { FileText, BookOpen, Tag, Calendar, Users, CheckCircle, Search, Filter, Download } from 'lucide-react';

interface ReviewRecord {
  id: string;
  auditTaskId: string;
  auditTaskName: string;
  reviewType: 'regular' | 'special' | 'annual';
  date: string;
  participants: string[];
  findings: number;
  recommendations: number;
  status: 'draft' | 'reviewing' | 'completed';
}

interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  views: number;
  likes: number;
  status: 'published' | 'draft';
}

const reviewRecords: ReviewRecord[] = [
  { id: 'RR001', auditTaskId: 'AT001', auditTaskName: '2026年度财务报表审计', reviewType: 'annual', date: '2026-06-20', participants: ['张审计', '李复核', '王经理'], findings: 5, recommendations: 8, status: 'completed' },
  { id: 'RR002', auditTaskId: 'AT002', auditTaskName: 'IT权限治理专项审计', reviewType: 'special', date: '2026-06-15', participants: ['李审计', '赵经理'], findings: 3, recommendations: 5, status: 'completed' },
  { id: 'RR003', auditTaskId: 'AT003', auditTaskName: '数据安全合规审计', reviewType: 'regular', date: '2026-06-25', participants: ['王审计', '孙经理'], findings: 0, recommendations: 0, status: 'reviewing' },
];

const knowledgeItems: KnowledgeItem[] = [
  { id: 'KI001', title: '财务报表审计最佳实践指南', category: '审计方法', tags: ['财务', '报表', '最佳实践'], author: '张审计', createdAt: '2026-06-20', views: 156, likes: 23, status: 'published' },
  { id: 'KI002', title: 'IT权限审计流程详解', category: 'IT审计', tags: ['权限', 'IT', '流程'], author: '李审计', createdAt: '2026-06-18', views: 98, likes: 15, status: 'published' },
  { id: 'KI003', title: '数据安全合规检查清单', category: '合规审计', tags: ['数据安全', '合规', '检查清单'], author: '王审计', createdAt: '2026-06-15', views: 234, likes: 38, status: 'published' },
  { id: 'KI004', title: '异常交易识别方法论', category: '风险识别', tags: ['异常', '交易', '方法论'], author: '赵审计', createdAt: '2026-06-10', views: 178, likes: 29, status: 'published' },
  { id: 'KI005', title: '审计底稿标准化模板', category: '工具模板', tags: ['底稿', '模板', '标准化'], author: '孙审计', createdAt: '2026-06-05', views: 312, likes: 45, status: 'published' },
];

export function AuditReview() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'knowledge'>('reviews');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">审计复盘与知识库沉淀</h2>
          <p className="text-sm text-gray-500 mt-1">记录审计复盘结果，沉淀审计知识与经验</p>
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
            <FileText className="w-4 h-4" />
            新建复盘
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: '复盘记录', value: '3', icon: FileText, color: 'bg-blue-100 text-blue-600' },
          { label: '知识条目', value: '5', icon: BookOpen, color: 'bg-green-100 text-green-600' },
          { label: '累计发现', value: '8', icon: CheckCircle, color: 'bg-purple-100 text-purple-600' },
          { label: '累计建议', value: '13', icon: Tag, color: 'bg-orange-100 text-orange-600' },
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
            { key: 'reviews', label: '复盘记录', icon: FileText },
            { key: 'knowledge', label: '知识库', icon: BookOpen },
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
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {reviewRecords.map((record) => (
                <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        record.reviewType === 'annual' ? 'bg-red-100 text-red-600' :
                        record.reviewType === 'special' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {record.reviewType === 'annual' ? '年度复盘' : record.reviewType === 'special' ? '专项复盘' : '常规复盘'}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        record.status === 'completed' ? 'bg-green-100 text-green-600' :
                        record.status === 'reviewing' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {record.status === 'completed' ? '已完成' : record.status === 'reviewing' ? '复盘中' : '草稿'}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">{record.auditTaskName}</h4>
                    <p className="text-sm text-gray-500">任务ID: {record.auditTaskId}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{record.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{record.participants.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 ml-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">{record.findings}</p>
                      <p className="text-xs text-gray-500">审计发现</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">{record.recommendations}</p>
                      <p className="text-xs text-gray-500">改进建议</p>
                    </div>
                    <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                      <Download className="w-3 h-3" />
                      查看报告
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'knowledge' && (
            <div className="grid grid-cols-3 gap-4">
              {knowledgeItems.map((item) => (
                <div key={item.id} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      item.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.status === 'published' ? '已发布' : '草稿'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">{item.category}</span>
                    {item.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{item.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{item.views} 浏览</span>
                      <span className="text-xs text-gray-500">{item.likes} 点赞</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 px-3 py-2 text-xs bg-white border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                    查看详情
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}