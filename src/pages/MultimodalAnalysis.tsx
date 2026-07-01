import { useState, useRef } from 'react';
import {
  Search, Plus, FileText, Mic, BarChart3, AlertTriangle, Eye,
  Upload, X, ChevronRight, Layers,
  Filter, Download, Activity, File, Trash2
} from 'lucide-react';
import { useAuditStore } from '@/store';
import type {
  MultimodalAnalysisTask,
  FraudClue,
  MultimodalTaskType,
  RiskLevel,
} from '@/types';

const taskTypeMap: Record<MultimodalTaskType, { label: string; color: string; icon: typeof FileText }> = {
  text_analysis: { label: '文本分析', color: 'text-info', icon: FileText },
  ocr_recognition: { label: '票据OCR', color: 'text-success', icon: BarChart3 },
  voice_transcription: { label: '语音转写', color: 'text-warning', icon: Mic },
  cross_system_analysis: { label: '跨系统分析', color: 'text-primary-600', icon: Layers },
};

const statusMap: Record<string, { label: string; color: string; dotColor: string }> = {
  pending: { label: '待处理', color: 'text-text-muted', dotColor: 'bg-text-muted' },
  processing: { label: '处理中', color: 'text-info', dotColor: 'bg-info' },
  completed: { label: '已完成', color: 'text-success', dotColor: 'bg-success' },
  failed: { label: '失败', color: 'text-danger', dotColor: 'bg-danger' },
};

const clueStatusMap: Record<string, { label: string; color: string }> = {
  new: { label: '新发现', color: 'bg-danger/10 text-danger' },
  investigating: { label: '核查中', color: 'bg-warning/10 text-warning' },
  confirmed: { label: '已确认', color: 'bg-success/10 text-success' },
  false_positive: { label: '误报', color: 'bg-text-muted/10 text-text-muted' },
};

const clueTypeMap: Record<string, string> = {
  related_transaction: '隐性关联交易',
  fake_invoice: '虚开发票线索',
  control_breakpoint: '内控流程断点',
  speech_anomaly: '业务话术异常',
  data_inconsistency: '数据不一致',
};

export function MultimodalAnalysis() {
  const {
    multimodalTasks,
    fraudClues,
    textAnalysisResults,
    ocrResults,
    voiceTranscriptionResults,
    crossSystemAnalyses,
    addMultimodalTask,
    updateMultimodalTask,
  } = useAuditStore();

  const [activeTab, setActiveTab] = useState<'tasks' | 'clues' | 'text' | 'ocr' | 'voice' | 'cross'>('tasks');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedTask, setSelectedTask] = useState<MultimodalAnalysisTask | null>(null);
  const [selectedClue, setSelectedClue] = useState<FraudClue | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadType, setUploadType] = useState<MultimodalTaskType>('text_analysis');
  const [taskName, setTaskName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredTasks = multimodalTasks.filter(
    (t) =>
      t.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      t.sourceName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const filteredClues = fraudClues.filter(
    (c) =>
      c.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      c.description.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const getRiskBadgeClass = (level: RiskLevel) => {
    if (level === 'high') return 'bg-danger/10 text-danger';
    if (level === 'medium') return 'bg-warning/10 text-warning';
    if (level === 'low') return 'bg-success/10 text-success';
    return 'bg-text-muted/10 text-text-muted';
  };

  const getRiskLabel = (level: RiskLevel) => {
    if (level === 'high') return '高风险';
    if (level === 'medium') return '中风险';
    if (level === 'low') return '低风险';
    return '正常';
  };

  // 文件选择处理
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  // 拖拽处理
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  // 删除已选文件
  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 模拟上传进度
  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  // 创建新的分析任务
  const handleCreateTask = () => {
    if (!taskName.trim()) {
      alert('请输入任务名称');
      return;
    }

    if (!selectedFile) {
      alert('请选择要上传的文件');
      return;
    }

    simulateUpload();

    const modelMap: Record<MultimodalTaskType, string> = {
      text_analysis: '语义分析-v3.2',
      ocr_recognition: '票据OCR-v2.5',
      voice_transcription: '语音转写-v1.8',
      cross_system_analysis: '数据比对-v2.1',
    };

    // 生成分析结果模板
    const resultTemplates: Record<MultimodalTaskType, string> = {
      text_analysis: `【文本语义分析结果】

一、文档概要
本次分析对文档 "${selectedFile.name}" 进行了深度语义解析，识别出以下关键信息：

二、关键实体识别
- 人物实体：3个（涉及关键决策人员）
- 机构实体：2个（关联方及子公司）
- 时间实体：5个（关键时间节点）
- 金额实体：4个（交易金额记录）

三、风险语句识别
- 发现 2 条疑似异常表述
- 发现 1 条潜在合规风险条款
- 发现 1 条数据不一致描述

四、AI模型置信度
本次分析置信度：92.3%

五、建议
建议对识别的风险语句进行人工复核，重点关注关联方交易条款。`,
      ocr_recognition: `【票据OCR识别结果】

一、票据基本信息
- 票据类型：增值税发票
- 发票代码：检测完成
- 发票号码：自动识别
- 开票日期：已提取

二、金额识别
- 价税合计：已精确识别
- 税额：已计算
- 不含税金额：已校验

三、验证状态
- 税务查验：通过
- 真伪验证：已确认
- 重复报销检查：无重复

四、OCR置信度
本次识别置信度：98.5%

五、建议
票据信息完整，建议纳入正常报销流程。`,
      voice_transcription: `【语音转写分析结果】

一、音频信息
- 文件名：${selectedFile.name}
- 时长：自动计算
- 发言人数：自动识别

二、转写内容
已完成语音转文字处理，识别出关键对话内容。

三、异常检测
- 话术异常：0处
- 情绪波动：正常
- 关键词触发：无敏感词

四、AI置信度
本次转写置信度：95.8%

五、建议
对话内容正常，无异常行为检测。`,
      cross_system_analysis: `【跨系统数据比对结果】

一、系统关联
- 比对系统：ERP、财务系统、业务系统
- 数据范围：本月交易数据

二、一致性检查
- 交易记录一致性：98.5%
- 金额匹配度：100%
- 时间戳同步：正常

三、异常发现
- 发现 1 处数据时间差
- 建议核实跨系统同步机制

四、AI置信度
本次比对置信度：96.2%

五、建议
整体数据一致性良好，建议优化跨系统同步时间窗口。`,
    };

    // 获取新创建的任务ID
    const newTaskId = `task-${Date.now()}`;

    addMultimodalTask({
      id: newTaskId,
      name: taskName,
      type: uploadType,
      status: 'processing',
      sourceType: taskTypeMap[uploadType].label,
      sourceName: selectedFile.name,
      aiModel: modelMap[uploadType],
      confidence: 0,
      cluesFound: 0,
      createdAt: new Date().toLocaleString('zh-CN'),
      createdBy: '当前用户',
      riskLevel: 'normal',
      result: undefined,
    });

    // 模拟分析过程：3秒后完成分析
    setTimeout(() => {
      // 随机生成置信度和发现线索数
      const confidence = 0.85 + Math.random() * 0.15;
      const cluesFound = uploadType === 'text_analysis' ? Math.floor(Math.random() * 3) + 1 : 0;
      const riskLevel: RiskLevel = cluesFound > 2 ? 'high' : cluesFound > 0 ? 'medium' : 'low';

      updateMultimodalTask(newTaskId, {
        status: 'completed',
        confidence: confidence,
        cluesFound: cluesFound,
        riskLevel: riskLevel,
        result: resultTemplates[uploadType],
      });
    }, 3000);

    // 显示成功提示
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
      <div style="position:fixed;top:20px;right:20px;background:#10b981;color:white;padding:16px 24px;border-radius:8px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
        <div style="display:flex;align-items:center;gap:8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span>分析任务已创建，正在处理中...</span>
        </div>
        <div style="margin-top:8px;font-size:12px;opacity:0.9;">
          任务名称：${taskName} | 文件：${selectedFile.name}
        </div>
      </div>
    `;
    document.body.appendChild(successDiv);

    // 3秒后移除提示
    setTimeout(() => {
      successDiv.remove();
    }, 3000);

    setShowUpload(false);
    setTaskName('');
    setSelectedFile(null);
    setUploadProgress(0);
  };

  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-text-secondary">分析任务</span>
          </div>
          <p className="text-xl font-bold text-text-primary">{multimodalTasks.length}</p>
          <p className="text-xs text-text-muted mt-1">
            本月新增 +12
          </p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-xs text-text-secondary">风险线索</span>
          </div>
          <p className="text-xl font-bold text-danger">{fraudClues.filter((c) => c.status !== 'false_positive').length}</p>
          <p className="text-xs text-text-muted mt-1">
            高风险 {fraudClues.filter((c) => c.riskLevel === 'high').length} 条
          </p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-info" />
            <span className="text-xs text-text-secondary">文本分析</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            {multimodalTasks.filter((t) => t.type === 'text_analysis').length}
          </p>
          <p className="text-xs text-text-muted mt-1">
            合同/公告/聊天
          </p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-success" />
            <span className="text-xs text-text-secondary">票据识别</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            {multimodalTasks.filter((t) => t.type === 'ocr_recognition').length}
          </p>
          <p className="text-xs text-text-muted mt-1">
            OCR准确率 98.5%
          </p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Mic className="w-4 h-4 text-warning" />
            <span className="text-xs text-text-secondary">语音转写</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            {multimodalTasks.filter((t) => t.type === 'voice_transcription').length}
          </p>
          <p className="text-xs text-text-muted mt-1">
            访谈记录分析
          </p>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="bg-card rounded-lg shadow-sm border border-border">
        <div className="p-5 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-1 bg-bg rounded-lg p-1">
              {[
                { key: 'tasks', label: '分析任务' },
                { key: 'clues', label: '舞弊线索' },
                { key: 'text', label: '文本分析' },
                { key: 'ocr', label: '票据OCR' },
                { key: 'voice', label: '语音转写' },
                { key: 'cross', label: '跨系统联动' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-card text-primary-600 shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="搜索任务/线索..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-border rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
                <Filter className="w-4 h-4" />
                筛选
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
                <Download className="w-4 h-4" />
                导出
              </button>
              {activeTab === 'tasks' && (
                <button
                  onClick={() => setShowUpload(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  新建分析
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* 分析任务列表 */}
          {activeTab === 'tasks' && (
            <div className="space-y-3">
              {filteredTasks.map((task) => {
                const typeInfo = taskTypeMap[task.type];
                const statusInfo = statusMap[task.status];
                const TypeIcon = typeInfo.icon;
                return (
                  <div
                    key={task.id}
                    className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                    onClick={() => setSelectedTask(task)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${typeInfo.color} bg-current/10`}>
                          <TypeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-medium text-text-primary">{task.name}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getRiskBadgeClass(task.riskLevel)}`}>
                              {getRiskLabel(task.riskLevel)}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted mt-1">
                            {typeInfo.label} · {task.sourceName} · {task.createdAt}
                          </p>
                          <p className="text-xs text-text-secondary mt-2">
                            AI模型: {task.aiModel} · 置信度: {(task.confidence * 100).toFixed(1)}% · 发现线索: {task.cluesFound} 条
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${statusInfo.dotColor}`}></span>
                          <span className={`text-xs ${statusInfo.color}`}>{statusInfo.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-text-muted" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 舞弊线索 */}
          {activeTab === 'clues' && (
            <div className="space-y-3">
              {filteredClues.map((clue) => (
                <div
                  key={clue.id}
                  className="bg-bg rounded-lg p-4 border border-border hover:border-primary-600/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedClue(clue)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded ${getRiskBadgeClass(clue.riskLevel)}`}>
                          {getRiskLabel(clue.riskLevel)}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                          {clueTypeMap[clue.type] || clue.type}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded ${clueStatusMap[clue.status]}`}>
                          {clueStatusMap[clue.status].label}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-text-primary mb-1">{clue.title}</h4>
                      <p className="text-xs text-text-secondary line-clamp-2">{clue.description}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-xs text-text-muted">
                          置信度: {(clue.confidence * 100).toFixed(1)}%
                        </span>
                        <span className="text-xs text-text-muted">
                          来源系统: {clue.sourceSystems.join(', ')}
                        </span>
                        <span className="text-xs text-text-muted">
                          发现时间: {clue.detectedAt}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 文本分析结果 */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              {textAnalysisResults.map((result) => (
                <div key={result.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">{result.documentType}</h4>
                      <p className="text-xs text-text-muted mt-1">
                        关键实体: {result.keyEntities.length} 个 · 风险语句: {result.riskSentences.length} 条
                      </p>
                    </div>
                    <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700">
                      <Eye className="w-3 h-3" />
                      查看全文
                    </button>
                  </div>
                  <div className="bg-card rounded p-3 mb-4">
                    <p className="text-xs text-text-secondary mb-2">语义摘要</p>
                    <p className="text-sm text-text-primary">{result.semanticSummary}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-text-secondary mb-2">关键实体</p>
                      <div className="flex flex-wrap gap-1.5">
                        {result.keyEntities.slice(0, 6).map((entity) => (
                          <span
                            key={entity.id}
                            className="text-xs px-2 py-1 bg-primary-600/10 text-primary-600 rounded"
                            title={entity.context}
                          >
                            {entity.type}: {entity.value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary mb-2">风险语句</p>
                      <div className="space-y-1.5">
                        {result.riskSentences.slice(0, 3).map((sentence) => (
                          <div key={sentence.id} className="flex items-start gap-2">
                            <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${getRiskBadgeClass(sentence.riskLevel)}`}>
                              {sentence.riskType}
                            </span>
                            <p className="text-xs text-text-secondary line-clamp-1">{sentence.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 票据OCR结果 */}
          {activeTab === 'ocr' && (
            <div className="space-y-4">
              {ocrResults.map((result) => (
                <div key={result.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-text-primary">{result.invoiceType}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          result.verificationStatus === 'verified' ? 'bg-success/10 text-success' :
                          result.verificationStatus === 'suspicious' ? 'bg-danger/10 text-danger' :
                          'bg-warning/10 text-warning'
                        }`}>
                          {result.verificationStatus === 'verified' ? '已验真' :
                           result.verificationStatus === 'suspicious' ? '存疑' : '未验真'}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">
                        发票代码: {result.invoiceCode} · 发票号码: {result.invoiceNumber}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-text-primary">¥{result.amount.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-xs text-text-muted">销售方</p>
                      <p className="text-text-primary text-xs mt-1">{result.seller}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">购买方</p>
                      <p className="text-text-primary text-xs mt-1">{result.buyer}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">开票日期</p>
                      <p className="text-text-primary text-xs mt-1">{result.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">税额</p>
                      <p className="text-text-primary text-xs mt-1">¥{result.taxAmount.toLocaleString()}</p>
                    </div>
                  </div>
                  {result.riskFlags.length > 0 && (
                    <div className="bg-danger/5 border border-danger/20 rounded p-3">
                      <p className="text-xs text-danger font-medium mb-2">风险标记</p>
                      <div className="flex flex-wrap gap-1.5">
                        {result.riskFlags.map((flag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-danger/10 text-danger rounded">
                            {flag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 语音转写结果 */}
          {activeTab === 'voice' && (
            <div className="space-y-4">
              {voiceTranscriptionResults.map((result) => (
                <div key={result.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">访谈记录转写</h4>
                      <p className="text-xs text-text-muted mt-1">
                        时长: {Math.floor(result.duration / 60)}分{result.duration % 60}秒 · 发言人数: {result.speakers.length}人
                      </p>
                    </div>
                    {result.anomalyDetection.length > 0 && (
                      <span className="text-xs px-2 py-1 bg-danger/10 text-danger rounded">
                        检测到 {result.anomalyDetection.length} 处异常
                      </span>
                    )}
                  </div>
                  <div className="bg-card rounded p-3 mb-4">
                    <p className="text-xs text-text-secondary mb-2">对话摘要</p>
                    <p className="text-sm text-text-primary">{result.summary}</p>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {result.transcription.slice(0, 6).map((segment) => (
                      <div key={segment.id} className="flex gap-3">
                        <span className="text-xs text-primary-600 font-medium flex-shrink-0 w-16">
                          {segment.speaker}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm text-text-primary">{segment.content}</p>
                          <p className="text-xs text-text-muted mt-0.5">
                            {Math.floor(segment.startTime / 60)}:{(segment.startTime % 60).toString().padStart(2, '0')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {result.anomalyDetection.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-danger font-medium mb-2">话术异常检测</p>
                      <div className="space-y-2">
                        {result.anomalyDetection.map((anomaly) => (
                          <div key={anomaly.id} className="flex items-start gap-2 bg-danger/5 rounded p-2">
                            <AlertTriangle className="w-3 h-3 text-danger flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs text-text-primary">{anomaly.description}</p>
                              <p className="text-xs text-text-muted mt-0.5">
                                位置: {anomaly.timePosition} · {anomaly.relatedContent}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 跨系统联动分析 */}
          {activeTab === 'cross' && (
            <div className="space-y-4">
              {crossSystemAnalyses.map((analysis) => (
                <div key={analysis.id} className="bg-bg rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">{analysis.analysisName}</h4>
                      <p className="text-xs text-text-muted mt-1">
                        关联系统: {analysis.systems.join(' + ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary-600">{(analysis.correlationScore * 100).toFixed(1)}%</p>
                      <p className="text-xs text-text-muted">数据一致性</p>
                    </div>
                  </div>
                  <div className="bg-card rounded p-3 mb-4">
                    <p className="text-xs text-text-secondary mb-2">分析结论</p>
                    <p className="text-sm text-text-primary">{analysis.conclusion}</p>
                  </div>
                  {analysis.inconsistencies.length > 0 && (
                    <div>
                      <p className="text-xs text-danger font-medium mb-2">
                        发现 {analysis.inconsistencies.length} 处数据不一致
                      </p>
                      <div className="space-y-2">
                        {analysis.inconsistencies.map((item) => (
                          <div key={item.id} className="bg-danger/5 border border-danger/20 rounded p-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className={`text-xs px-2 py-0.5 rounded ${getRiskBadgeClass(item.severity)}`}>
                                    {getRiskLabel(item.severity)}
                                  </span>
                                  <span className="text-sm font-medium text-text-primary">{item.type}</span>
                                </div>
                                <p className="text-xs text-text-secondary mt-1">{item.description}</p>
                                <p className="text-xs text-text-muted mt-1">
                                  影响系统: {item.affectedSystems.join(', ')}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-primary-600 mt-2">
                              建议: {item.suggestedAction}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 任务详情弹窗 */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg w-full max-w-3xl max-h-[80vh] overflow-hidden shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{selectedTask.name}</h3>
                <p className="text-xs text-text-secondary mt-1">
                  {taskTypeMap[selectedTask.type].label} · {selectedTask.createdAt}
                </p>
              </div>
              <button onClick={() => setSelectedTask(null)} className="text-text-muted hover:text-text-primary">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-text-primary">{selectedTask.cluesFound}</p>
                  <p className="text-xs text-text-muted">发现线索</p>
                </div>
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-primary-600">{(selectedTask.confidence * 100).toFixed(1)}%</p>
                  <p className="text-xs text-text-muted">AI置信度</p>
                </div>
                <div className="bg-bg rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-text-primary">{selectedTask.aiModel}</p>
                  <p className="text-xs text-text-muted">使用模型</p>
                </div>
                <div className="bg-bg rounded-lg p-3 text-center">
                  <span className={`text-sm px-2 py-1 rounded ${getRiskBadgeClass(selectedTask.riskLevel)}`}>
                    {getRiskLabel(selectedTask.riskLevel)}
                  </span>
                  <p className="text-xs text-text-muted mt-1">风险等级</p>
                </div>
              </div>
              {selectedTask.result && (
                <div className="bg-bg rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-medium text-text-primary mb-2">分析结果摘要</h4>
                  <p className="text-sm text-text-secondary">{selectedTask.result}</p>
                </div>
              )}
              <div>
                <h4 className="text-sm font-medium text-text-primary mb-3">关联线索</h4>
                <div className="space-y-2">
                  {fraudClues.filter((c) => c.taskId === selectedTask.id).map((clue) => (
                    <div
                      key={clue.id}
                      className="bg-bg rounded p-3 cursor-pointer hover:bg-bg/80"
                      onClick={() => {
                        setSelectedClue(clue);
                        setSelectedTask(null);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded ${getRiskBadgeClass(clue.riskLevel)}`}>
                            {getRiskLabel(clue.riskLevel)}
                          </span>
                          <span className="text-sm text-text-primary">{clue.title}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-text-muted" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 线索详情弹窗 */}
      {selectedClue && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg w-full max-w-3xl max-h-[80vh] overflow-hidden shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-text-primary">{selectedClue.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${getRiskBadgeClass(selectedClue.riskLevel)}`}>
                    {getRiskLabel(selectedClue.riskLevel)}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  {clueTypeMap[selectedClue.type] || selectedClue.type} · 发现于 {selectedClue.detectedAt}
                </p>
              </div>
              <button onClick={() => setSelectedClue(null)} className="text-text-muted hover:text-text-primary">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-2">线索描述</h4>
                <p className="text-sm text-text-secondary">{selectedClue.description}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">证据链</h4>
                <div className="space-y-3">
                  {selectedClue.evidence.map((ev) => (
                    <div key={ev.id} className="bg-bg rounded-lg p-3 border border-border">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-primary-600/10 text-primary-600 rounded">
                              {ev.type}
                            </span>
                            <span className="text-sm font-medium text-text-primary">{ev.description}</span>
                          </div>
                          <p className="text-xs text-text-muted mt-1">
                            来源: {ev.source} · {ev.timestamp} · 相关度: {(ev.relevance * 100).toFixed(0)}%
                          </p>
                        </div>
                      </div>
                      {ev.dataPreview && (
                        <div className="mt-2 p-2 bg-card rounded text-xs text-text-secondary font-mono">
                          {ev.dataPreview}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-2">关联实体</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedClue.relatedEntities.map((entity, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-bg rounded-full text-text-secondary">
                      {entity}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-primary-700 mb-2">审计建议</h4>
                <p className="text-sm text-primary-600">{selectedClue.recommendation}</p>
              </div>
            </div>
            <div className="p-4 border-t border-border flex justify-end gap-3 flex-shrink-0">
              <button className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg">
                标记误报
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">
                生成整改工单
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 新建分析弹窗 */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">新建多模态分析</h3>
              <button 
                onClick={() => {
                  setShowUpload(false);
                  setSelectedFile(null);
                  setTaskName('');
                  setUploadProgress(0);
                }} 
                className="text-text-muted hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="text-sm font-medium text-text-primary mb-2 block">分析类型</label>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(taskTypeMap) as MultimodalTaskType[]).map((type) => {
                    const info = taskTypeMap[type];
                    const Icon = info.icon;
                    return (
                      <button
                        key={type}
                        onClick={() => setUploadType(type)}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          uploadType === type
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-border hover:border-primary-600/30'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${info.color} mb-2`} />
                        <p className="text-sm font-medium text-text-primary">{info.label}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-text-primary mb-2 block">任务名称</label>
                <input
                  type="text"
                  placeholder="请输入任务名称"
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-text-primary mb-2 block">上传文件</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.mp3,.wav,.mp4"
                  onChange={handleFileSelect}
                />
                {!selectedFile ? (
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                      isDragging ? 'border-primary-600 bg-primary-50' : 'border-border hover:border-primary-600/50'
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-8 h-8 text-text-muted mx-auto mb-2" />
                    <p className="text-sm text-text-secondary">点击或拖拽文件到此处上传</p>
                    <p className="text-xs text-text-muted mt-1">
                      支持 PDF、Word、Excel、图片、音频等格式
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      单个文件最大 50MB
                    </p>
                  </div>
                ) : (
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <File className="w-5 h-5 text-primary-600" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">{selectedFile.name}</p>
                          <p className="text-xs text-text-muted">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveFile}
                        className="text-text-muted hover:text-danger transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="mt-3">
                        <div className="w-full bg-bg rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                        <p className="text-xs text-text-muted mt-1 text-center">{uploadProgress}% 上传中...</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowUpload(false);
                    setSelectedFile(null);
                    setTaskName('');
                    setUploadProgress(0);
                  }}
                  className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:bg-bg"
                >
                  取消
                </button>
                <button
                  onClick={handleCreateTask}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700"
                >
                  开始分析
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
