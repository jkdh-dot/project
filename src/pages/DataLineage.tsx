import { useState } from 'react';
import { Database, ArrowRight, Search, Filter, Download, RefreshCw, ZoomIn, ZoomOut, Home, GitBranch, Eye, Lock, FileText } from 'lucide-react';

interface DataNode {
  id: string;
  name: string;
  type: 'source' | 'transform' | 'storage' | 'report';
  system: string;
  status: 'active' | 'warning' | 'error';
  dataVolume?: string;
  lastUpdated?: string;
}

interface DataRelation {
  from: string;
  to: string;
  type: 'read' | 'write' | 'transform';
}

const dataNodes: DataNode[] = [
  { id: 'S1', name: 'OA系统', type: 'source', system: 'OA', status: 'active', dataVolume: '50GB', lastUpdated: '2026-06-25 14:30' },
  { id: 'S2', name: 'HR系统', type: 'source', system: 'HR', status: 'active', dataVolume: '20GB', lastUpdated: '2026-06-25 14:00' },
  { id: 'S3', name: '财务系统', type: 'source', system: 'Finance', status: 'active', dataVolume: '100GB', lastUpdated: '2026-06-25 15:00' },
  { id: 'S4', name: 'CRM系统', type: 'source', system: 'CRM', status: 'warning', dataVolume: '30GB', lastUpdated: '2026-06-25 10:00' },
  { id: 'T1', name: '数据抽取层', type: 'transform', system: 'ETL', status: 'active', lastUpdated: '2026-06-25 15:30' },
  { id: 'T2', name: '数据清洗层', type: 'transform', system: 'ETL', status: 'active', lastUpdated: '2026-06-25 15:35' },
  { id: 'T3', name: '数据转换层', type: 'transform', system: 'ETL', status: 'warning', lastUpdated: '2026-06-25 14:00' },
  { id: 'S5', name: '数据仓库', type: 'storage', system: 'DW', status: 'active', dataVolume: '500GB', lastUpdated: '2026-06-25 15:40' },
  { id: 'S6', name: '数据集市', type: 'storage', system: 'DM', status: 'active', dataVolume: '150GB', lastUpdated: '2026-06-25 15:45' },
  { id: 'R1', name: '审计报表', type: 'report', system: 'BI', status: 'active', lastUpdated: '2026-06-25 16:00' },
  { id: 'R2', name: '风险仪表盘', type: 'report', system: 'BI', status: 'active', lastUpdated: '2026-06-25 16:05' },
  { id: 'R3', name: '合规报告', type: 'report', system: 'BI', status: 'active', lastUpdated: '2026-06-25 16:10' },
];

const dataRelations: DataRelation[] = [
  { from: 'S1', to: 'T1', type: 'read' },
  { from: 'S2', to: 'T1', type: 'read' },
  { from: 'S3', to: 'T1', type: 'read' },
  { from: 'S4', to: 'T1', type: 'read' },
  { from: 'T1', to: 'T2', type: 'transform' },
  { from: 'T2', to: 'T3', type: 'transform' },
  { from: 'T3', to: 'S5', type: 'write' },
  { from: 'S5', to: 'S6', type: 'transform' },
  { from: 'S6', to: 'R1', type: 'read' },
  { from: 'S6', to: 'R2', type: 'read' },
  { from: 'S6', to: 'R3', type: 'read' },
];

const lineageDetails = [
  { id: 'L001', source: 'OA系统.员工表', target: 'HR系统.员工主数据', transformation: '字段映射、去重', frequency: '实时', status: '正常', lastRun: '2026-06-25 14:30' },
  { id: 'L002', source: '财务系统.交易表', target: '数据仓库.交易事实表', transformation: '汇总、关联', frequency: '小时', status: '正常', lastRun: '2026-06-25 15:00' },
  { id: 'L003', source: 'CRM系统.客户表', target: '数据仓库.客户维度表', transformation: '清洗、标准化', frequency: '日', status: '延迟', lastRun: '2026-06-24 23:00' },
  { id: 'L004', source: '数据仓库.风险指标', target: 'BI报表.风险热力图', transformation: '聚合、计算', frequency: '小时', status: '正常', lastRun: '2026-06-25 16:00' },
];

const dataQuality = [
  { id: 'DQ001', dataset: '员工主数据', completeness: 98.5, accuracy: 99.2, consistency: 97.8, timeliness: 96.5, status: 'good' },
  { id: 'DQ002', dataset: '交易事实表', completeness: 99.1, accuracy: 99.5, consistency: 98.9, timeliness: 98.2, status: 'good' },
  { id: 'DQ003', dataset: '客户维度表', completeness: 95.2, accuracy: 96.8, consistency: 94.5, timeliness: 92.1, status: 'warning' },
  { id: 'DQ004', dataset: '风险指标数据', completeness: 97.8, accuracy: 98.5, consistency: 97.2, timeliness: 95.8, status: 'good' },
];

export function DataLineage() {
  const [selectedNode, setSelectedNode] = useState<DataNode | null>(null);
  const [activeTab, setActiveTab] = useState<'graph' | 'details' | 'quality'>('graph');

  const getNodeColor = (type: DataNode['type'], status: DataNode['status']) => {
    const baseColors = {
      source: 'bg-blue-500',
      transform: 'bg-orange-500',
      storage: 'bg-green-500',
      report: 'bg-purple-500',
    };
    if (status === 'error') return 'bg-red-500';
    if (status === 'warning') return 'bg-yellow-500';
    return baseColors[type];
  };

  const getNodeIcon = (type: DataNode['type']) => {
    const icons = {
      source: Database,
      transform: GitBranch,
      storage: Database,
      report: FileText,
    };
    return icons[type];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">全链路数据血缘与溯源</h2>
          <p className="text-sm text-gray-500 mt-1">追踪数据从源头到应用的完整流转路径</p>
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
            <Download className="w-4 h-4" />
            导出
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-xl shadow-sm">
          <div className="flex border-b border-gray-200">
            {[
              { key: 'graph', label: '血缘图谱' },
              { key: 'details', label: '链路详情' },
              { key: 'quality', label: '数据质量' },
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
            {activeTab === 'graph' && (
              <div className="relative h-[500px] bg-gray-50 rounded-xl">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Home className="w-4 h-4" />
                  </button>
                </div>

                <svg className="w-full h-full">
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
                    </marker>
                  </defs>

                  {dataRelations.map((relation, index) => {
                    const fromNode = dataNodes.find((n) => n.id === relation.from);
                    const toNode = dataNodes.find((n) => n.id === relation.to);
                    if (!fromNode || !toNode) return null;

                    const positions: Record<string, { x: number; y: number }> = {
                      S1: { x: 100, y: 80 },
                      S2: { x: 200, y: 80 },
                      S3: { x: 300, y: 80 },
                      S4: { x: 400, y: 80 },
                      T1: { x: 250, y: 180 },
                      T2: { x: 250, y: 280 },
                      T3: { x: 250, y: 380 },
                      S5: { x: 250, y: 450 },
                      S6: { x: 250, y: 520 },
                      R1: { x: 150, y: 600 },
                      R2: { x: 250, y: 600 },
                      R3: { x: 350, y: 600 },
                    };

                    const fromPos = positions[relation.from];
                    const toPos = positions[relation.to];

                    return (
                      <line
                        key={index}
                        x1={fromPos.x}
                        y1={fromPos.y}
                        x2={toPos.x}
                        y2={toPos.y - 20}
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                    );
                  })}
                </svg>

                {dataNodes.map((node) => {
                  const Icon = getNodeIcon(node.type);
                  const positions: Record<string, { x: number; y: number }> = {
                    S1: { x: 100, y: 80 },
                    S2: { x: 200, y: 80 },
                    S3: { x: 300, y: 80 },
                    S4: { x: 400, y: 80 },
                    T1: { x: 250, y: 180 },
                    T2: { x: 250, y: 280 },
                    T3: { x: 250, y: 380 },
                    S5: { x: 250, y: 450 },
                    S6: { x: 250, y: 520 },
                    R1: { x: 150, y: 600 },
                    R2: { x: 250, y: 600 },
                    R3: { x: 350, y: 600 },
                  };

                  const pos = positions[node.id];

                  return (
                    <div
                      key={node.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110 ${
                        selectedNode?.id === node.id ? 'ring-2 ring-primary-600 ring-offset-2' : ''
                      }`}
                      style={{ left: pos.x, top: pos.y }}
                      onClick={() => setSelectedNode(node)}
                    >
                      <div className={`w-16 h-16 rounded-xl ${getNodeColor(node.type, node.status)} flex flex-col items-center justify-center text-white`}>
                        <Icon className="w-6 h-6" />
                        <span className="text-xs mt-1 text-center px-1">{node.name.split('系统')[0]}</span>
                      </div>
                      {node.status !== 'active' && (
                        <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${node.status === 'warning' ? 'bg-yellow-400' : 'bg-red-500'}`} />
                      )}
                    </div>
                  );
                })}

                <div className="absolute bottom-4 left-4 flex items-center gap-6 bg-white/90 px-4 py-2 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-500" />
                    <span className="text-xs text-gray-600">数据源</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500" />
                    <span className="text-xs text-gray-600">数据处理</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500" />
                    <span className="text-xs text-gray-600">数据存储</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500" />
                    <span className="text-xs text-gray-600">数据应用</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">链路ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">源数据</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">目标数据</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">转换规则</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">更新频率</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">状态</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">最后运行</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineageDetails.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-800">{item.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-800">{item.source}</td>
                        <td className="py-3 px-4 text-sm text-gray-800">{item.target}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{item.transformation}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{item.frequency}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            item.status === '正常' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{item.lastRun}</td>
                        <td className="py-3 px-4">
                          <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                            <Eye className="w-3 h-3" />
                            查看
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'quality' && (
              <div className="space-y-4">
                {dataQuality.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-800">{item.dataset}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'good' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {item.status === 'good' ? '良好' : '需关注'}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">完整性</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.completeness}%` }} />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{item.completeness}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">准确性</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${item.accuracy}%` }} />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{item.accuracy}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">一致性</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${item.consistency}%` }} />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{item.consistency}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">及时性</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${item.timeliness}%` }} />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{item.timeliness}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-80 bg-white rounded-xl shadow-sm p-4">
          {selectedNode ? (
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">节点详情</h3>
              <div className={`w-16 h-16 rounded-xl ${getNodeColor(selectedNode.type, selectedNode.status)} flex items-center justify-center text-white mx-auto mb-4`}>
                {(() => {
                  const Icon = getNodeIcon(selectedNode.type);
                  return <Icon className="w-8 h-8" />;
                })()}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 text-center mb-1">{selectedNode.name}</h4>
              <p className="text-sm text-gray-500 text-center mb-4">{selectedNode.system}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">状态</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedNode.status === 'active' ? 'bg-green-100 text-green-600' :
                    selectedNode.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {selectedNode.status === 'active' ? '运行中' : selectedNode.status === 'warning' ? '警告' : '错误'}
                  </span>
                </div>
                {selectedNode.dataVolume && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">数据量</span>
                    <span className="text-sm text-gray-800">{selectedNode.dataVolume}</span>
                  </div>
                )}
                {selectedNode.lastUpdated && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">最后更新</span>
                    <span className="text-sm text-gray-800">{selectedNode.lastUpdated}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">类型</span>
                  <span className="text-sm text-gray-800">
                    {selectedNode.type === 'source' ? '数据源' :
                     selectedNode.type === 'transform' ? '数据处理' :
                     selectedNode.type === 'storage' ? '数据存储' : '数据应用'}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  <Eye className="w-4 h-4" />
                  查看详情
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                  <Lock className="w-4 h-4" />
                  权限管理
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <Database className="w-12 h-12 mb-3" />
              <p className="text-sm">点击图谱中的节点查看详情</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: '数据节点数', value: '12', icon: Database },
          { label: '数据链路数', value: '11', icon: ArrowRight },
          { label: '数据质量达标率', value: '97.3%', icon: FileText },
          { label: '最近更新节点', value: '8', icon: RefreshCw },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-600" />
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
    </div>
  );
}