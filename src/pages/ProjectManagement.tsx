import { useState } from 'react';
import { Plus, Search, Filter, Eye, Edit, Trash2, Users, Calendar, MapPin, Phone, Mail, Building2, Award, Clock } from 'lucide-react';
import { StatCard } from '@/components/common/StatCard';

interface Project {
  id: string;
  name: string;
  client: string;
  type: '年度审计' | '专项审计' | '尽职调查' | '合规检查';
  status: '准备中' | '进行中' | '已完成' | '已暂停';
  startDate: string;
  endDate: string;
  manager: string;
  teamMembers: string[];
  budget: number;
  progress: number;
  riskLevel: '低' | '中' | '高';
  partner: string;
}

interface Partner {
  id: string;
  name: string;
  type: '会计师事务所' | '律师事务所' | '咨询公司' | '技术服务商';
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  cooperationCount: number;
  rating: number;
  status: '合作中' | '暂停' | '终止';
  lastCooperationDate: string;
}

const mockProjects: Project[] = [
  {
    id: 'P001',
    name: '2024年度财务审计',
    client: '科创科技有限公司',
    type: '年度审计',
    status: '进行中',
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    manager: '张三',
    teamMembers: ['李四', '王五', '赵六'],
    budget: 500000,
    progress: 65,
    riskLevel: '中',
    partner: '毕马威会计师事务所',
  },
  {
    id: 'P002',
    name: '数据安全合规专项',
    client: '数字创新科技',
    type: '专项审计',
    status: '进行中',
    startDate: '2024-02-15',
    endDate: '2024-04-15',
    manager: '李四',
    teamMembers: ['张三', '钱七'],
    budget: 300000,
    progress: 40,
    riskLevel: '高',
    partner: '德勤咨询',
  },
  {
    id: 'P003',
    name: '投资尽职调查',
    client: ' Venture Capital',
    type: '尽职调查',
    status: '已完成',
    startDate: '2024-01-10',
    endDate: '2024-02-28',
    manager: '王五',
    teamMembers: ['赵六'],
    budget: 200000,
    progress: 100,
    riskLevel: '低',
    partner: '安永会计师事务所',
  },
  {
    id: 'P004',
    name: '个人信息保护合规检查',
    client: '智慧医疗科技',
    type: '合规检查',
    status: '准备中',
    startDate: '2024-04-01',
    endDate: '2024-05-31',
    manager: '赵六',
    teamMembers: ['张三', '李四'],
    budget: 150000,
    progress: 10,
    riskLevel: '中',
    partner: '金杜律师事务所',
  },
];

const mockPartners: Partner[] = [
  {
    id: 'PR001',
    name: '毕马威会计师事务所',
    type: '会计师事务所',
    contactPerson: '陈经理',
    phone: '021-12345678',
    email: 'chen@kpmg.com',
    address: '上海市静安区南京西路1266号',
    cooperationCount: 15,
    rating: 4.8,
    status: '合作中',
    lastCooperationDate: '2024-03-15',
  },
  {
    id: 'PR002',
    name: '德勤咨询有限公司',
    type: '咨询公司',
    contactPerson: '李总监',
    phone: '010-87654321',
    email: 'li@deloitte.com',
    address: '北京市朝阳区建国门外大街1号',
    cooperationCount: 8,
    rating: 4.6,
    status: '合作中',
    lastCooperationDate: '2024-02-28',
  },
  {
    id: 'PR003',
    name: '金杜律师事务所',
    type: '律师事务所',
    contactPerson: '王律师',
    phone: '0755-23456789',
    email: 'wang@kingwoodlaw.com',
    address: '深圳市福田区深南大道6000号',
    cooperationCount: 5,
    rating: 4.9,
    status: '合作中',
    lastCooperationDate: '2024-03-10',
  },
  {
    id: 'PR004',
    name: '安永会计师事务所',
    type: '会计师事务所',
    contactPerson: '刘经理',
    phone: '020-34567890',
    email: 'liu@ey.com',
    address: '广州市天河区珠江新城',
    cooperationCount: 12,
    rating: 4.7,
    status: '暂停',
    lastCooperationDate: '2024-01-20',
  },
];

export function ProjectManagement() {
  const [activeTab, setActiveTab] = useState<'projects' | 'partners'>('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const filteredProjects = mockProjects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPartners = mockPartners.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中':
      case '合作中':
        return 'bg-blue-100 text-blue-700';
      case '已完成':
        return 'bg-green-100 text-green-700';
      case '准备中':
        return 'bg-yellow-100 text-yellow-700';
      case '已暂停':
      case '暂停':
        return 'bg-orange-100 text-orange-700';
      case '终止':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case '高':
        return 'bg-red-100 text-red-700';
      case '中':
        return 'bg-yellow-100 text-yellow-700';
      case '低':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          title="项目总数"
          value="4"
          icon={<Building2 className="w-5 h-5" />}
          color="bg-blue-500"
        />
        <StatCard
          title="进行中项目"
          value="2"
          icon={<Clock className="w-5 h-5" />}
          color="bg-orange-500"
        />
        <StatCard
          title="合作方数量"
          value="4"
          icon={<Users className="w-5 h-5" />}
          color="bg-green-500"
        />
        <StatCard
          title="总预算"
          value="115万"
          icon={<Award className="w-5 h-5" />}
          color="bg-purple-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'projects'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              项目列表
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'partners'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              合作方管理
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              筛选
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors">
              <Plus className="w-4 h-4" />
              {activeTab === 'projects' ? '新建项目' : '添加合作方'}
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'projects' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      项目编号
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      项目名称
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      客户
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      类型
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      进度
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      风险等级
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      负责人
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-primary-600">
                        {project.id}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{project.name}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{project.client}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {project.type}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-primary-600"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="ml-2 text-xs text-gray-600">{project.progress}%</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${getRiskColor(project.riskLevel)}`}>
                          {project.riskLevel}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{project.manager}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      合作方编号
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      名称
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      类型
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      联系人
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      合作次数
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      评分
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredPartners.map((partner) => (
                    <tr key={partner.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-primary-600">
                        {partner.id}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{partner.name}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {partner.type}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{partner.contactPerson}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{partner.cooperationCount}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${
                                  i < Math.floor(partner.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 ml-1">{partner.rating}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(partner.status)}`}>
                          {partner.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedPartner(partner)}
                            className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">项目详情</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">项目编号</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedProject.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">项目名称</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedProject.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">客户名称</p>
                  <p className="text-gray-900">{selectedProject.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">项目类型</p>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {selectedProject.type}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">状态</p>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">风险等级</p>
                  <span className={`px-2 py-1 rounded text-xs ${getRiskColor(selectedProject.riskLevel)}`}>
                    {selectedProject.riskLevel}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">负责人</p>
                  <p className="text-gray-900">{selectedProject.manager}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">合作方</p>
                  <p className="text-gray-900">{selectedProject.partner}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">开始日期</p>
                  <p className="text-gray-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {selectedProject.startDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">结束日期</p>
                  <p className="text-gray-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {selectedProject.endDate}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">团队成员</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.teamMembers.map((member) => (
                    <span
                      key={member}
                      className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">项目进度</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-primary-600"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
                <p className="text-right mt-1 text-sm text-gray-600">{selectedProject.progress}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">预算</p>
                <p className="text-lg font-semibold text-gray-900">
                  ¥{selectedProject.budget.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">合作方详情</h2>
              <button
                onClick={() => setSelectedPartner(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">编号</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedPartner.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">名称</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedPartner.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">类型</p>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {selectedPartner.type}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">联系人</p>
                  <p className="text-gray-900">{selectedPartner.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">电话</p>
                  <p className="text-gray-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {selectedPartner.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">邮箱</p>
                  <p className="text-gray-900 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {selectedPartner.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">地址</p>
                  <p className="text-gray-900 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    {selectedPartner.address}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">合作次数</p>
                  <p className="text-gray-900">{selectedPartner.cooperationCount} 次</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">评分</p>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(selectedPartner.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-900 font-medium ml-1">{selectedPartner.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">状态</p>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedPartner.status)}`}>
                    {selectedPartner.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}