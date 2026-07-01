import { create } from 'zustand';
import type {
  DashboardStats,
  RiskDistribution,
  RiskTrend,
  DepartmentRisk,
  RiskAlert,
  Account,
  PermissionMapping,
  AccountRequest,
  AccountChange,
  DepartureAccount,
  ReconResult,
  AnomalyRecord,
  WorkflowTicket,
  ModelConfig,
  RuleConfig,
  SystemLog,
  Employee,
  AuditTask,
  WorkPaper,
  WorkPaperTemplate,
  Evidence,
  ComplianceRule,
  ComplianceCheckResult,
  ComplianceGap,
  RecruitmentAudit,
  WorkMonitor,
  PersonnelChange,
  DepartureAudit,
  PersonnelArchive,
  AuditAIModel,
  AIExplanationReport,
  RiskHeatmapData,
  RiskTrendComparison,
  RiskMigration,
  RiskQuantification,
  MultimodalAnalysisTask,
  FraudClue,
  TextAnalysisResult,
  OCRResult,
  VoiceTranscriptionResult,
  CrossSystemAnalysis,
  RiskLevel,
} from '@/types';
import {
  dashboardStats as initialStats,
  riskDistribution as initialDistribution,
  riskTrend as initialTrend,
  departmentRisk as initialDeptRisk,
  highRiskAlerts as initialAlerts,
  accounts as initialAccounts,
  permissionMappings as initialMappings,
  accountRequests as initialRequests,
  accountChanges as initialChanges,
  departureAccounts as initialDepartures,
  reconResult as initialRecon,
  anomalyRecords as initialAnomalies,
  workflowTickets as initialTickets,
  modelConfigs as initialModels,
  ruleConfigs as initialRules,
  systemLogs as initialLogs,
  employees as initialEmployees,
  auditTasks as initialTasks,
  workPapers as initialWorkPapers,
  workPaperTemplates as initialTemplates,
  evidences as initialEvidences,
  complianceRules as initialComplianceRules,
  complianceCheckResults as initialCheckResults,
  complianceGaps as initialGaps,
  recruitmentAudits as initialRecruitmentAudits,
  workMonitors as initialWorkMonitors,
  personnelChanges as initialPersonnelChanges,
  departureAudits as initialDepartureAudits,
  personnelArchives as initialPersonnelArchives,
  auditAIModels as initialAIModels,
  aiExplanationReports as initialAIExplanations,
  riskHeatmapData as initialRiskHeatmapData,
  riskTrendComparisons as initialRiskTrendComparisons,
  riskMigrations as initialRiskMigrations,
  riskQuantifications as initialRiskQuantifications,
  multimodalTasks as initialMultimodalTasks,
  fraudClues as initialFraudClues,
  textAnalysisResults as initialTextAnalysisResults,
  ocrResults as initialOcrResults,
  voiceTranscriptionResults as initialVoiceTranscriptionResults,
  crossSystemAnalyses as initialCrossSystemAnalyses,
} from '@/data/mockData';

interface AuditStore {
  dashboardStats: DashboardStats;
  riskDistribution: RiskDistribution[];
  riskTrend: RiskTrend[];
  departmentRisk: DepartmentRisk[];
  highRiskAlerts: RiskAlert[];

  accounts: Account[];
  permissionMappings: PermissionMapping[];

  accountRequests: AccountRequest[];
  accountChanges: AccountChange[];
  departureAccounts: DepartureAccount[];
  reconResult: ReconResult;

  anomalyRecords: AnomalyRecord[];

  workflowTickets: WorkflowTicket[];

  modelConfigs: ModelConfig[];
  ruleConfigs: RuleConfig[];
  systemLogs: SystemLog[];

  employees: Employee[];

  auditTasks: AuditTask[];
  workPapers: WorkPaper[];
  workPaperTemplates: WorkPaperTemplate[];
  evidences: Evidence[];
  complianceRules: ComplianceRule[];
  complianceCheckResults: ComplianceCheckResult[];
  complianceGaps: ComplianceGap[];

  // 人力合规审计
  recruitmentAudits: RecruitmentAudit[];
  workMonitors: WorkMonitor[];
  personnelChanges: PersonnelChange[];
  departureAudits: DepartureAudit[];
  personnelArchives: PersonnelArchive[];

  // AI审计模型
  auditAIModels: AuditAIModel[];
  aiExplanationReports: AIExplanationReport[];

  // 风险热力图
  riskHeatmapData: RiskHeatmapData[];
  riskTrendComparisons: RiskTrendComparison[];
  riskMigrations: RiskMigration[];
  riskQuantifications: RiskQuantification[];

  // 多模态AI审计分析
  multimodalTasks: MultimodalAnalysisTask[];
  fraudClues: FraudClue[];
  textAnalysisResults: TextAnalysisResult[];
  ocrResults: OCRResult[];
  voiceTranscriptionResults: VoiceTranscriptionResult[];
  crossSystemAnalyses: CrossSystemAnalysis[];

  addEmployee: (employee: Omit<Employee, 'id'>) => void;
  updateEmployee: (id: string, updates: Partial<Employee>) => void;

  addAuditTask: (task: Omit<AuditTask, 'id'>) => void;
  updateAuditTask: (id: string, updates: Partial<AuditTask>) => void;
  addFindingToTask: (taskId: string, finding: Omit<import('@/types').AuditFinding, 'id' | 'createdAt'>) => void;

  addWorkPaper: (paper: Omit<WorkPaper, 'id'>) => void;
  updateWorkPaper: (id: string, updates: Partial<WorkPaper>) => void;

  addEvidence: (evidence: Omit<Evidence, 'id'>) => void;
  verifyEvidence: (id: string) => void;

  addComplianceRule: (rule: Omit<ComplianceRule, 'id'>) => void;
  runComplianceCheck: (ruleId: string, scenario: string) => void;
  addComplianceGap: (gap: Omit<ComplianceGap, 'id'>) => void;
  closeComplianceGap: (id: string) => void;

  addAccountRequest: (request: Omit<AccountRequest, 'id'>) => void;
  updateAccountRequestStatus: (id: string, status: AccountRequest['status']) => void;

  addAccountChange: (change: Omit<AccountChange, 'id'>) => void;
  updateAccountChangeStatus: (id: string, status: AccountChange['status']) => void;

  addDepartureAccount: (account: Omit<DepartureAccount, 'id'>) => void;
  updateSystemAccountStatus: (departureId: string, systemName: string, status: 'active' | 'disabled' | 'deleted') => void;

  addAnomalyRecord: (record: Omit<AnomalyRecord, 'id'>) => void;

  addWorkflowTicket: (ticket: Omit<WorkflowTicket, 'id'>) => void;
  updateTicketStatus: (id: string, status: WorkflowTicket['status']) => void;
  addRectificationRecord: (ticketId: string, record: Omit<{ id: string; content: string; createdAt: string; operator: string }, 'id'>) => void;
  submitReview: (ticketId: string, result: 'passed' | 'failed', comment: string) => void;

  addModelConfig: (config: Omit<ModelConfig, 'id'>) => void;
  setDefaultModel: (id: string) => void;
  testModelConnection: (id: string) => void;

  addRuleConfig: (rule: Omit<RuleConfig, 'id'>) => void;
  toggleRuleEnabled: (id: string) => void;
  updateRuleThreshold: (id: string, threshold: number) => void;

  addSystemLog: (log: Omit<SystemLog, 'id'>) => void;

  searchAccounts: (keyword: string) => Account[];
  searchAlerts: (keyword: string) => RiskAlert[];
  searchTickets: (keyword: string) => WorkflowTicket[];
  searchAnomalies: (keyword: string) => AnomalyRecord[];

  updateAIModelStatus: (id: string, status: AuditAIModel['status']) => void;
  generateAIExplanation: (modelId: string, caseId: string, caseTitle: string) => void;
  addMultimodalTask: (task: Partial<MultimodalAnalysisTask> & { 
    name: string; 
    type: MultimodalAnalysisTask['type']; 
    status: MultimodalAnalysisTask['status'];
    sourceType: string;
    sourceName: string;
    aiModel: string;
    confidence: number;
    cluesFound: number;
    createdAt: string;
    createdBy: string;
    riskLevel: RiskLevel;
  }) => void;
  updateMultimodalTask: (id: string, updates: Partial<MultimodalAnalysisTask>) => void;
}

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const useAuditStore = create<AuditStore>((set, get) => ({
  dashboardStats: initialStats,
  riskDistribution: initialDistribution,
  riskTrend: initialTrend,
  departmentRisk: initialDeptRisk,
  highRiskAlerts: initialAlerts,
  accounts: initialAccounts,
  permissionMappings: initialMappings,
  accountRequests: initialRequests,
  accountChanges: initialChanges,
  departureAccounts: initialDepartures,
  reconResult: initialRecon,
  anomalyRecords: initialAnomalies,
  workflowTickets: initialTickets,
  modelConfigs: initialModels,
  ruleConfigs: initialRules,
  systemLogs: initialLogs,
  employees: initialEmployees,
  auditTasks: initialTasks,
  workPapers: initialWorkPapers,
  workPaperTemplates: initialTemplates,
  evidences: initialEvidences,
  complianceRules: initialComplianceRules,
  complianceCheckResults: initialCheckResults,
  complianceGaps: initialGaps,

  // 人力合规审计
  recruitmentAudits: initialRecruitmentAudits,
  workMonitors: initialWorkMonitors,
  personnelChanges: initialPersonnelChanges,
  departureAudits: initialDepartureAudits,
  personnelArchives: initialPersonnelArchives,

  // AI审计模型
  auditAIModels: initialAIModels,
  aiExplanationReports: initialAIExplanations,

  // 风险热力图
  riskHeatmapData: initialRiskHeatmapData,
  riskTrendComparisons: initialRiskTrendComparisons,
  riskMigrations: initialRiskMigrations,
  riskQuantifications: initialRiskQuantifications,

  // 多模态AI审计分析
  multimodalTasks: initialMultimodalTasks,
  fraudClues: initialFraudClues,
  textAnalysisResults: initialTextAnalysisResults,
  ocrResults: initialOcrResults,
  voiceTranscriptionResults: initialVoiceTranscriptionResults,
  crossSystemAnalyses: initialCrossSystemAnalyses,

  addEmployee: (employee) =>
    set((state) => ({
      employees: [...state.employees, { ...employee, id: generateId() }],
    })),

  updateEmployee: (id, updates) =>
    set((state) => ({
      employees: state.employees.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    })),

  addAuditTask: (task) =>
    set((state) => ({
      auditTasks: [...state.auditTasks, { ...task, id: generateId() }],
    })),

  updateAuditTask: (id, updates) =>
    set((state) => ({
      auditTasks: state.auditTasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),

  addFindingToTask: (taskId, finding) =>
    set((state) => ({
      auditTasks: state.auditTasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              findings: [...(t.findings || []), { ...finding, id: generateId(), createdAt: new Date().toISOString().split('T')[0] }],
            }
          : t
      ),
    })),

  addWorkPaper: (paper) =>
    set((state) => ({
      workPapers: [...state.workPapers, { ...paper, id: generateId() }],
    })),

  updateWorkPaper: (id, updates) =>
    set((state) => ({
      workPapers: state.workPapers.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    })),

  addEvidence: (evidence) =>
    set((state) => ({
      evidences: [...state.evidences, { ...evidence, id: generateId() }],
    })),

  verifyEvidence: (id) =>
    set((state) => ({
      evidences: state.evidences.map((e) => (e.id === id ? { ...e, verified: true } : e)),
    })),

  addComplianceRule: (rule) =>
    set((state) => ({
      complianceRules: [...state.complianceRules, { ...rule, id: generateId() }],
    })),

  runComplianceCheck: (ruleId, scenario) => {
    const rule = get().complianceRules.find((r) => r.id === ruleId);
    if (!rule) return;
    set((state) => ({
      complianceCheckResults: [
        ...state.complianceCheckResults,
        {
          id: generateId(),
          ruleId,
          ruleTitle: rule.title,
          scenario,
          checkResult: Math.random() > 0.6 ? 'compliant' : 'non_compliant',
          checkTime: new Date().toISOString().split('T')[0],
        },
      ],
    }));
  },

  addComplianceGap: (gap) =>
    set((state) => ({
      complianceGaps: [...state.complianceGaps, { ...gap, id: generateId() }],
    })),

  closeComplianceGap: (id) =>
    set((state) => ({
      complianceGaps: state.complianceGaps.map((g) => (g.id === id ? { ...g, status: 'closed' } : g)),
    })),

  addAccountRequest: (request) =>
    set((state) => ({
      accountRequests: [...state.accountRequests, { ...request, id: generateId() }],
    })),

  updateAccountRequestStatus: (id, status) =>
    set((state) => ({
      accountRequests: state.accountRequests.map((r) => (r.id === id ? { ...r, status } : r)),
    })),

  addAccountChange: (change) =>
    set((state) => ({
      accountChanges: [...state.accountChanges, { ...change, id: generateId() }],
    })),

  updateAccountChangeStatus: (id, status) =>
    set((state) => ({
      accountChanges: state.accountChanges.map((c) => (c.id === id ? { ...c, status } : c)),
    })),

  addDepartureAccount: (account) =>
    set((state) => ({
      departureAccounts: [...state.departureAccounts, { ...account, id: generateId() }],
    })),

  updateSystemAccountStatus: (departureId, systemName, status) =>
    set((state) => ({
      departureAccounts: state.departureAccounts.map((da) =>
        da.id === departureId
          ? {
              ...da,
              systems: da.systems.map((sa) =>
                sa.systemName === systemName ? { ...sa, status, lastCheckedAt: new Date().toISOString() } : sa
              ),
            }
          : da
      ),
    })),

  addAnomalyRecord: (record) =>
    set((state) => ({
      anomalyRecords: [...state.anomalyRecords, { ...record, id: generateId() }],
    })),

  addWorkflowTicket: (ticket) =>
    set((state) => ({
      workflowTickets: [...state.workflowTickets, { ...ticket, id: generateId() }],
    })),

  updateTicketStatus: (id, status) =>
    set((state) => ({
      workflowTickets: state.workflowTickets.map((t) =>
        t.id === id ? { ...t, status, progress: status === '已销号' ? 100 : t.progress } : t
      ),
    })),

  addRectificationRecord: (ticketId, record) =>
    set((state) => ({
      workflowTickets: state.workflowTickets.map((t) =>
        t.id === ticketId
          ? {
              ...t,
              rectificationRecords: [...t.rectificationRecords, { ...record, id: generateId() }],
              progress: Math.min(100, t.progress + 25),
              status: '整改中',
            }
          : t
      ),
    })),

  submitReview: (ticketId, result, comment) =>
    set((state) => ({
      workflowTickets: state.workflowTickets.map((t) =>
        t.id === ticketId
          ? {
              ...t,
              reviewResults: [...(t.reviewResults || []), { id: generateId(), result, comment, reviewedAt: new Date().toISOString(), reviewer: 'admin' }],
              status: result === 'passed' ? '已销号' : '整改中',
            }
          : t
      ),
    })),

  addModelConfig: (config) =>
    set((state) => ({
      modelConfigs: state.modelConfigs.map((m) => ({ ...m, isDefault: false })).concat({ ...config, id: generateId() }),
    })),

  setDefaultModel: (id) =>
    set((state) => ({
      modelConfigs: state.modelConfigs.map((m) => ({ ...m, isDefault: m.id === id })),
    })),

  testModelConnection: (id) =>
    set((state) => ({
      modelConfigs: state.modelConfigs.map((m) =>
        m.id === id ? { ...m, status: m.status === 'connected' ? 'disconnected' : 'connected' } : m
      ),
    })),

  addRuleConfig: (rule) =>
    set((state) => ({
      ruleConfigs: [...state.ruleConfigs, { ...rule, id: generateId() }],
    })),

  toggleRuleEnabled: (id) =>
    set((state) => ({
      ruleConfigs: state.ruleConfigs.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)),
    })),

  updateRuleThreshold: (id, threshold) =>
    set((state) => ({
      ruleConfigs: state.ruleConfigs.map((r) => (r.id === id ? { ...r, threshold } : r)),
    })),

  addSystemLog: (log) =>
    set((state) => ({
      systemLogs: [...state.systemLogs, { ...log, id: generateId() }],
    })),

  searchAccounts: (keyword) => {
    const { accounts } = get();
    const lowerKeyword = keyword.toLowerCase();
    return accounts.filter(
      (a) =>
        a.username.toLowerCase().includes(lowerKeyword) ||
        a.name.toLowerCase().includes(lowerKeyword) ||
        a.department.toLowerCase().includes(lowerKeyword)
    );
  },

  searchAlerts: (keyword) => {
    const { highRiskAlerts } = get();
    const lowerKeyword = keyword.toLowerCase();
    return highRiskAlerts.filter(
      (a) =>
        a.title.toLowerCase().includes(lowerKeyword) ||
        a.department.toLowerCase().includes(lowerKeyword)
    );
  },

  searchTickets: (keyword) => {
    const { workflowTickets } = get();
    const lowerKeyword = keyword.toLowerCase();
    return workflowTickets.filter(
      (t) =>
        t.id.toLowerCase().includes(lowerKeyword) ||
        t.riskTitle.toLowerCase().includes(lowerKeyword) ||
        t.department.toLowerCase().includes(lowerKeyword)
    );
  },

  searchAnomalies: (keyword) => {
    const { anomalyRecords } = get();
    const lowerKeyword = keyword.toLowerCase();
    return anomalyRecords.filter(
      (a) =>
        a.target.toLowerCase().includes(lowerKeyword) ||
        a.department.toLowerCase().includes(lowerKeyword) ||
        a.anomalyType.toLowerCase().includes(lowerKeyword)
    );
  },

  updateAIModelStatus: (id, status) =>
    set((state) => ({
      auditAIModels: state.auditAIModels.map((m) =>
        m.id === id ? { ...m, status, lastDeployedAt: status === 'production' ? new Date().toISOString() : m.lastDeployedAt } : m
      ),
    })),

  generateAIExplanation: (modelId, caseId, caseTitle) => {
    const model = get().auditAIModels.find((m) => m.id === modelId);
    if (!model) return;
    const newReport: AIExplanationReport = {
      id: generateId(),
      modelId,
      modelName: model.name,
      caseId,
      caseTitle,
      riskLevel: 'high',
      confidence: 0.92,
      summary: '该案例基于多维度特征分析，识别为高风险异常。主要风险因素包括金额突增、关联方交易、时间集中性等特征。',
      keyFactors: [
        { id: generateId(), name: '金额异常度', weight: 0.35, description: '交易金额超出历史均值3个标准差', impact: 'positive', value: '+320%' },
        { id: generateId(), name: '关联方关系', weight: 0.28, description: '交易对手方存在隐性关联关系', impact: 'positive', value: '确认关联' },
        { id: generateId(), name: '时间集中度', weight: 0.22, description: '短期内密集发生多笔同类交易', impact: 'positive', value: '7天内12笔' },
        { id: generateId(), name: '历史合规性', weight: 0.15, description: '该部门历史合规记录良好', impact: 'negative', value: '良好' },
      ],
      evidence: [
        { id: generateId(), type: '交易记录', description: '异常交易明细数据', source: '财务系统', timestamp: '2024-06-15 10:30:00', relevance: 0.95 },
        { id: generateId(), type: '合同文本', description: '相关合同条款分析', source: '合同管理系统', timestamp: '2024-06-10 14:20:00', relevance: 0.82 },
      ],
      similarCases: [
        { id: 'CASE001', title: '某部门费用报销异常案', similarity: 0.87, outcome: '确认舞弊，已移送处理', date: '2024-03-15' },
        { id: 'CASE002', title: '关联交易未披露案', similarity: 0.76, outcome: '要求补充披露，责令整改', date: '2024-01-20' },
      ],
      auditRecommendations: [
        '建议立即对该交易进行专项核查',
        '建议延伸检查关联方资金流向',
        '建议评估内控流程有效性',
        '建议加强大额交易事前审批',
      ],
      generatedAt: new Date().toISOString(),
    };
    set((state) => ({
      aiExplanationReports: [newReport, ...state.aiExplanationReports],
    }));
  },

  addMultimodalTask: (task) =>
    set((state) => ({
      multimodalTasks: [
        {
          ...task,
          id: task.id || generateId(),
        },
        ...state.multimodalTasks,
      ],
    })),

  updateMultimodalTask: (id, updates) =>
    set((state) => ({
      multimodalTasks: state.multimodalTasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),
}));
