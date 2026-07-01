export type RiskLevel = 'high' | 'medium' | 'low' | 'normal';

export type RiskType = '权限异常' | '账号风险' | '交易异常' | '越权访问' | '登录异常' | '数据泄露' | '合规风险';

export type WorkflowStatus = '待整改' | '整改中' | '待复查' | '已销号' | '超期';

export interface RiskAlert {
  id: string;
  title: string;
  type: RiskType;
  level: RiskLevel;
  department: string;
  createdAt: string;
  status: WorkflowStatus;
  description: string;
}

export interface Account {
  id: string;
  username: string;
  name: string;
  department: string;
  position: string;
  permissionLevel: string;
  riskLevel: RiskLevel;
  riskType?: string;
  approver?: string;
  responsiblePerson?: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'pending';
}

export interface PermissionMapping {
  permissionName: string;
  permissionLevel: string;
  approver: string;
  responsiblePerson: string;
  department: string;
  system: string;
}

export interface AccountRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  position: string;
  requestedPermissions: string[];
  status: 'pending' | 'approved' | 'rejected' | 'processing';
  createdAt: string;
  processNodes: ProcessNode[];
}

export interface ProcessNode {
  nodeName: string;
  assignee: string;
  status: 'completed' | 'current' | 'pending';
  completedAt?: string;
}

export interface AccountChange {
  id: string;
  accountId: string;
  username: string;
  changeType: 'permission' | 'position';
  oldValue: string;
  newValue: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  operator: string;
}

export interface DepartureAccount {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  departureDate: string;
  accountStatus: 'pending_check' | 'checking' | 'completed';
  systems: SystemAccount[];
}

export interface SystemAccount {
  systemName: string;
  username: string;
  status: 'active' | 'disabled' | 'deleted';
  lastCheckedAt?: string;
}

export interface ReconResult {
  id: string;
  reconDate: string;
  totalEmployees: number;
  totalAccounts: number;
  orphanAccounts: OrphanAccount[];
  multiAccountUsers: MultiAccountUser[];
  unassignedAccounts: UnassignedAccount[];
}

export interface OrphanAccount {
  username: string;
  system: string;
  lastLogin: string;
}

export interface MultiAccountUser {
  employeeId: string;
  employeeName: string;
  accounts: string[];
}

export interface UnassignedAccount {
  username: string;
  system: string;
  createdAt: string;
}

export interface AnomalyRecord {
  id: string;
  type: 'login' | 'transaction' | 'access';
  anomalyType: string;
  time: string;
  target: string;
  department: string;
  riskLevel: RiskLevel;
  summary: string;
  details: string;
}

export interface WorkflowTicket {
  id: string;
  riskId: string;
  riskType: RiskType;
  department: string;
  deadline: string;
  status: WorkflowStatus;
  progress: number;
  assignee: string;
  riskTitle: string;
  rectificationRequirements: string;
  rectificationRecords: RectificationRecord[];
  reviewResults?: ReviewResult[];
  operationLogs: OperationLog[];
}

export interface RectificationRecord {
  id: string;
  content: string;
  createdAt: string;
  operator: string;
}

export interface ReviewResult {
  id: string;
  result: 'passed' | 'failed';
  comment: string;
  reviewedAt: string;
  reviewer: string;
}

export interface OperationLog {
  id: string;
  action: string;
  operator: string;
  operatedAt: string;
  details: string;
}

export interface ModelConfig {
  id: string;
  name: string;
  apiUrl: string;
  modelId: string;
  apiKey: string;
  isDefault: boolean;
  status: 'connected' | 'disconnected' | 'testing';
}

export interface RuleConfig {
  id: string;
  name: string;
  type: 'permission' | 'transaction' | 'login';
  threshold: number;
  description: string;
  enabled: boolean;
}

export interface SystemLog {
  id: string;
  userId: string;
  username: string;
  action: string;
  module: string;
  operatedAt: string;
  details: string;
  ipAddress: string;
}

export interface DashboardStats {
  totalRisks: number;
  pendingTickets: number;
  accountHealth: number;
  transactionAnomalyRate: number;
}

export interface RiskDistribution {
  type: RiskType;
  count: number;
  percentage: number;
}

export interface RiskTrend {
  date: string;
  count: number;
}

export interface DepartmentRisk {
  department: string;
  riskCount: number;
  rank: number;
}

export interface PositionChange {
  id: string;
  position: string;
  department: string;
  changeDate: string;
  changeType: 'promotion' | 'transfer' | 'demotion' | 'new';
  reason?: string;
}

export interface AttendanceRecord {
  id: string;
  month: string;
  totalDays: number;
  attendanceDays: number;
  leaveDays: number;
  lateCount: number;
  absentCount: number;
}

export interface AwardRecord {
  id: string;
  name: string;
  type: 'performance' | 'innovation' | 'service' | 'team' | 'other';
  level: 'company' | 'department' | 'project';
  date: string;
  description?: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  department: string;
  position: string;
  status: 'active' | 'on_leave' | 'resigned';
  hireDate: string;
  tenure: number;
  positionChanges: PositionChange[];
  attendanceRecords: AttendanceRecord[];
  awardRecords: AwardRecord[];
}

export type AuditTaskType = 'annual_plan' | 'special' | 'challenge';
export type AuditTaskStatus = 'planning' | 'sampling' | 'fieldwork' | 'review' | 'completed' | 'overdue';
export type SamplingMethod = 'random' | 'stratified' | 'risk_based';

export interface AuditTask {
  id: string;
  name: string;
  type: AuditTaskType;
  status: AuditTaskStatus;
  department: string;
  businessLine: string;
  riskDimension: string;
  assignee: string;
  createdAt: string;
  deadline: string;
  progress: number;
  samplingConfig?: SamplingConfig;
  samplingResults?: SamplingResult[];
  findings?: AuditFinding[];
  workpapers?: string[];
  evidence?: string[];
  reviews?: ReviewRecord[];
  operationLogs: OperationLog[];
}

export interface SamplingConfig {
  method: SamplingMethod;
  populationSize: number;
  sampleSize: number;
  confidenceLevel: number;
  stratificationFields?: string[];
  riskFactors?: string[];
}

export interface SamplingResult {
  id: string;
  sampleNumber: number;
  itemId: string;
  itemName: string;
  status: 'normal' | 'anomaly' | 'pending';
  anomalyDescription?: string;
  selectedAt: string;
}

export interface AuditFinding {
  id: string;
  title: string;
  severity: RiskLevel;
  description: string;
  recommendation: string;
  evidenceId?: string;
  workpaperId?: string;
  linkedTicketId?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'resolved';
}

export interface ReviewRecord {
  id: string;
  reviewer: string;
  reviewLevel: 'first' | 'second' | 'final';
  result: 'passed' | 'rejected';
  comment?: string;
  reviewedAt: string;
}

export type WorkPaperType = 'financial' | 'internal_control' | 'it' | 'compliance' | 'other';
export type WorkPaperStatus = 'draft' | 'completed' | 'reviewing' | 'approved';

export interface WorkPaper {
  id: string;
  templateId: string;
  templateName: string;
  type: WorkPaperType;
  taskId: string;
  taskName: string;
  assignee: string;
  status: WorkPaperStatus;
  content: WorkPaperContent;
  versions: WorkPaperVersion[];
  reviews: ReviewRecord[];
  evidences: string[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkPaperTemplate {
  id: string;
  name: string;
  type: WorkPaperType;
  description: string;
  sections: WorkPaperSection[];
  fields: WorkPaperField[];
  isStandard: boolean;
}

export interface WorkPaperSection {
  id: string;
  title: string;
  order: number;
}

export interface WorkPaperField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'select' | 'textarea';
  sectionId: string;
  required: boolean;
  defaultValue?: string;
  options?: string[];
}

export interface WorkPaperContent {
  fields: Record<string, string>;
  attachments?: string[];
}

export interface WorkPaperVersion {
  id: string;
  versionNumber: number;
  content: WorkPaperContent;
  changedBy: string;
  changedAt: string;
  changeReason?: string;
}

export type EvidenceType = 'contract' | 'voucher' | 'log' | 'interview' | 'system_snapshot' | 'other';

export interface Evidence {
  id: string;
  name: string;
  type: EvidenceType;
  fileUrl: string;
  fileSize: number;
  taskId?: string;
  workpaperId?: string;
  findingId?: string;
  uploadedBy: string;
  uploadedAt: string;
  description?: string;
  verified: boolean;
}

export type RegulationCategory = 'tax' | 'finance' | 'industry' | 'internal_control' | 'data_security' | 'privacy' | 'other';

export interface ComplianceRule {
  id: string;
  code: string;
  title: string;
  category: RegulationCategory;
  content: string;
  source: string;
  effectiveDate: string;
  status: 'effective' | 'amended' | 'expired';
  auditScenarios: string[];
  keywords: string[];
  relatedRules?: string[];
}

export interface ComplianceCheckResult {
  id: string;
  ruleId: string;
  ruleTitle: string;
  scenario: string;
  checkResult: 'compliant' | 'non_compliant' | 'pending';
  deviationDetails?: string;
  affectedData?: string;
  checkTime: string;
  taskId?: string;
}

export interface ComplianceGap {
  id: string;
  ruleId: string;
  ruleTitle: string;
  category: RegulationCategory;
  gapDescription: string;
  affectedArea: string;
  severity: RiskLevel;
  recommendedAction: string;
  status: 'open' | 'remediating' | 'closed';
}

// ===== 人力合规审计类型 =====

export type RecruitmentStatus = 'pending' | 'background_check' | 'materials_review' | 'contract_signing' | 'onboarding' | 'completed' | 'rejected';
export type RecruitmentRiskType = 'discrimination' | 'illegal_fee' | 'fake_recruitment' | 'qualification_fraud' | 'work_permit' | 'visa_issue' | 'contract_issue';

export interface RecruitmentAudit {
  id: string;
  candidateId: string;
  candidateName: string;
  position: string;
  department: string;
  recruiter: string;
  status: RecruitmentStatus;
  backgroundCheck?: BackgroundCheck;
  materialsReview?: MaterialsReview;
  contractSigning?: ContractSigning;
  risks: RecruitmentRisk[];
  createdAt: string;
  updatedAt: string;
}

export interface BackgroundCheck {
  completed: boolean;
  completedAt?: string;
  items: {
    identity: boolean;
    education: boolean;
    employment: boolean;
    criminal: boolean;
    credit: boolean;
  };
  results: string[];
}

export interface MaterialsReview {
  completed: boolean;
  completedAt?: string;
  items: {
    idCard: boolean;
    diploma: boolean;
    certificate: boolean;
    healthCertificate: boolean;
    photos: boolean;
  };
  completeness: number;
  missingItems: string[];
}

export interface ContractSigning {
  completed: boolean;
  signedAt?: string;
  contractType: string;
  startDate: string;
  probationEndDate?: string;
  probationSalary?: number;
  formalSalary?: number;
  requiredClauses: {
    jobDescription: boolean;
    salary: boolean;
    workingHours: boolean;
    socialSecurity: boolean;
    confidentiality: boolean;
  };
}

export interface RecruitmentRisk {
  id: string;
  type: RecruitmentRiskType;
  severity: RiskLevel;
  description: string;
  discoveredAt: string;
  status: 'open' | 'mitigated' | 'accepted';
}

export type WorkMonitorType = 'attendance' | 'overtime' | 'leave' | 'protection' | 'salary';

export interface WorkMonitor {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  position: string;
  month: string;
  attendance: {
    normalDays: number;
    lateCount: number;
    earlyLeaveCount: number;
    absentDays: number;
    leaveDays: number;
  };
  overtime: {
    totalHours: number;
    weekendHours: number;
    holidayHours: number;
    compensated: boolean;
  };
  leaveAnalysis: {
    annualLeave: { used: number; remaining: number };
    sickLeave: number;
    maternityLeave: number;
    unpaidLeave: number;
  };
  compliance: WorkComplianceCheck[];
  anomalies: WorkAnomaly[];
  riskLevel: RiskLevel;
  createdAt: string;
}

export interface WorkComplianceCheck {
  type: WorkMonitorType;
  item: string;
  result: 'pass' | 'fail' | 'warning';
  details?: string;
}

export interface WorkAnomaly {
  id: string;
  type: string;
  description: string;
  severity: RiskLevel;
  detectedAt: string;
  status: 'pending' | 'confirmed' | 'resolved';
}

export type PersonnelChangeType = 'promotion' | 'transfer' | 'demotion' | 'loan' | 'standby' | 'probation_change';

export interface PersonnelChange {
  id: string;
  employeeId: string;
  employeeName: string;
  changeType: PersonnelChangeType;
  fromDepartment: string;
  toDepartment: string;
  fromPosition: string;
  toPosition: string;
  fromSalary: number;
  toSalary: number;
  effectiveDate: string;
  reason: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  salarySyncStatus: 'pending' | 'synced' | 'error';
  createdAt: string;
}

export type DepartureType = 'resignation' | 'dismissal' | 'retirement' | 'contract_end' | 'death';

export interface DepartureAudit {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  position: string;
  departureType: DepartureType;
  departureDate: string;
  exitChecklist: ExitChecklist;
  accountRecovery: AccountRecovery[];
  compensation: CompensationRecord;
  complianceChecks: DepartureComplianceCheck[];
  risks: DepartureRisk[];
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
  completedAt?: string;
}

export interface ExitChecklist {
  workHandover: {
    completed: boolean;
    items: string[];
    signedAt?: string;
  };
  assetReturn: {
    completed: boolean;
    assets: { name: string; returned: boolean; returnedAt?: string }[];
  };
  accountDisable: {
    completed: boolean;
    accounts: { system: string; disabled: boolean; disabledAt?: string }[];
  };
  feeSettlement: {
    completed: boolean;
    items: { type: string; settled: boolean; amount?: number }[];
  };
  nonCompeteReminder: {
    completed: boolean;
    remindedAt?: string;
    validUntil?: string;
  };
  confidentialityReminder: {
    completed: boolean;
    remindedAt?: string;
  };
}

export interface AccountRecovery {
  system: string;
  accountName: string;
  status: 'pending' | 'disabled' | 'deleted';
  disabledAt?: string;
  deletedAt?: string;
  responsiblePerson: string;
}

export interface CompensationRecord {
  finalSalary: number;
  unpaidSalary: number;
  annualLeaveCompensation: number;
  overtimeCompensation: number;
  severancePay: number;
  otherCompensations: { item: string; amount: number }[];
  totalAmount: number;
  complianceCheck: 'pass' | 'warning' | 'fail';
  issues?: string[];
}

export interface DepartureComplianceCheck {
  item: string;
  requirement: string;
  result: 'compliant' | 'non_compliant' | 'not_applicable';
  evidence?: string;
  notes?: string;
}

export interface DepartureRisk {
  id: string;
  type: string;
  severity: RiskLevel;
  description: string;
  discoveredAt: string;
  status: 'open' | 'mitigated' | 'accepted';
}

export type ArchivePermission = 'view' | 'edit' | 'admin' | 'none';

export interface PersonnelArchive {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  documents: ArchiveDocument[];
  dataClassification: 'public' | 'internal' | 'confidential' | 'strictly_confidential';
  accessLogs: ArchiveAccessLog[];
  privacyRequests: PrivacyRequest[];
  lastUpdated: string;
}

export interface ArchiveDocument {
  id: string;
  name: string;
  type: 'contract' | 'id_document' | 'education' | 'certificate' | 'performance' | 'discipline' | 'other';
  uploadedAt: string;
  uploadedBy: string;
  fileSize: number;
  status: 'active' | 'archived' | 'deleted';
  retentionPeriod?: string;
}

export interface ArchiveAccessLog {
  id: string;
  accessorId: string;
  accessorName: string;
  accessorRole: string;
  action: 'view' | 'download' | 'edit' | 'delete';
  documentId?: string;
  timestamp: string;
  ipAddress: string;
}

export interface PrivacyRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'access' | 'correction' | 'deletion' | 'portability';
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  submittedAt: string;
  processedAt?: string;
  response?: string;
  processedBy?: string;
}

// ===== AI审计模型类型 =====

export type ModelType = 'anomaly_detection' | 'fraud_detection' | 'text_semantic' | 'ocr_recognition' | 'voice_transcription' | 'risk_prediction';
export type ModelStatus = 'draft' | 'training' | 'testing' | 'production' | 'deprecated' | 'rollback';
export type ExplanationType = 'feature_importance' | 'rule_based' | 'case_based' | 'hybrid';

export interface AuditAIModel {
  id: string;
  name: string;
  type: ModelType;
  description: string;
  status: ModelStatus;
  currentVersion: string;
  versions: ModelVersion[];
  metrics: ModelMetrics;
  trainingLogs: TrainingLog[];
  inferenceLogs: InferenceLog[];
  explanationConfig: ExplanationConfig;
  creator: string;
  createdAt: string;
  lastDeployedAt?: string;
  dataSource: string[];
  useCases: string[];
}

export interface ModelVersion {
  id: string;
  version: string;
  description: string;
  metrics: ModelMetrics;
  trainedAt: string;
  trainedBy: string;
  trainingDatasetSize: number;
  isProduction: boolean;
  rollbackAvailable: boolean;
  changeLog: string;
}

export interface ModelMetrics {
  precision: number;
  recall: number;
  f1Score: number;
  falsePositiveRate: number;
  falseNegativeRate: number;
  accuracy: number;
  auc?: number;
  detectionCount?: number;
  auditVerifiedCount?: number;
}

export interface TrainingLog {
  id: string;
  version: string;
  epoch: number;
  loss: number;
  trainAccuracy: number;
  valAccuracy: number;
  timestamp: string;
  duration: number;
}

export interface InferenceLog {
  id: string;
  modelId: string;
  modelVersion: string;
  inputType: string;
  inputSize: number;
  result: string;
  confidence: number;
  latency: number;
  timestamp: string;
  verified?: boolean;
  verifier?: string;
}

export interface ExplanationConfig {
  enabled: boolean;
  type: ExplanationType;
  template: string;
  topFeatures: number;
  showConfidence: boolean;
  showEvidence: boolean;
}

export interface AIExplanationReport {
  id: string;
  modelId: string;
  modelName: string;
  caseId: string;
  caseTitle: string;
  riskLevel: RiskLevel;
  confidence: number;
  summary: string;
  keyFactors: ExplanationFactor[];
  evidence: ExplanationEvidence[];
  similarCases: SimilarCase[];
  auditRecommendations: string[];
  generatedAt: string;
}

export interface ExplanationFactor {
  id: string;
  name: string;
  weight: number;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  value: string;
}

export interface ExplanationEvidence {
  id: string;
  type: string;
  description: string;
  source: string;
  timestamp: string;
  relevance: number;
}

export interface SimilarCase {
  id: string;
  title: string;
  similarity: number;
  outcome: string;
  date: string;
}

// ===== 风险热力图类型 =====

export interface RiskHeatmapData {
  id: string;
  period: string;
  type: 'enterprise' | 'department' | 'process';
  dimensions: RiskDimension[];
  cells: RiskHeatmapCell[];
  generatedAt: string;
  totalRisks: number;
  highRiskCount: number;
  mediumRiskCount: number;
  lowRiskCount: number;
}

export interface RiskDimension {
  id: string;
  name: string;
  weight: number;
  description: string;
}

export interface RiskHeatmapCell {
  id: string;
  rowLabel: string;
  colLabel: string;
  riskScore: number;
  riskLevel: RiskLevel;
  riskCount: number;
  highRiskCount: number;
  mediumRiskCount: number;
  lowRiskCount: number;
  trend: 'up' | 'down' | 'stable';
  trendChange: number;
  aiConfidence: number;
}

export interface RiskTrendComparison {
  period: string;
  totalRisks: number;
  highRiskCount: number;
  mediumRiskCount: number;
  lowRiskCount: number;
  averageScore: number;
  closedCount: number;
  closureRate: number;
}

export interface RiskMigration {
  id: string;
  riskId: string;
  riskTitle: string;
  fromLevel: RiskLevel;
  toLevel: RiskLevel;
  fromDepartment: string;
  toDepartment: string;
  fromPeriod: string;
  toPeriod: string;
  reason: string;
  changedAt: string;
}

export interface RiskQuantification {
  id: string;
  riskId: string;
  riskTitle: string;
  department: string;
  process: string;
  impactScore: number;
  probabilityScore: number;
  aiConfidence: number;
  overallScore: number;
  riskLevel: RiskLevel;
  weights: {
    impact: number;
    probability: number;
    aiConfidence: number;
  };
  quantifiedAt: string;
}

// ===== 多模态AI审计分析类型 =====

export type MultimodalTaskType = 'text_analysis' | 'ocr_recognition' | 'voice_transcription' | 'cross_system_analysis';
export type MultimodalTaskStatus = 'pending' | 'processing' | 'completed' | 'failed';
export type FraudClueType = 'related_transaction' | 'fake_invoice' | 'control_breakpoint' | 'speech_anomaly' | 'data_inconsistency';

export interface MultimodalAnalysisTask {
  id: string;
  name: string;
  type: MultimodalTaskType;
  status: MultimodalTaskStatus;
  sourceType: string;
  sourceName: string;
  fileSize?: number;
  aiModel: string;
  confidence: number;
  result?: string;
  cluesFound: number;
  createdAt: string;
  completedAt?: string;
  createdBy: string;
  riskLevel: RiskLevel;
}

export interface FraudClue {
  id: string;
  taskId: string;
  type: FraudClueType;
  title: string;
  description: string;
  riskLevel: RiskLevel;
  confidence: number;
  evidence: ClueEvidence[];
  sourceSystems: string[];
  detectedAt: string;
  status: 'new' | 'investigating' | 'confirmed' | 'false_positive';
  relatedEntities: string[];
  recommendation: string;
}

export interface ClueEvidence {
  id: string;
  type: string;
  description: string;
  source: string;
  timestamp: string;
  relevance: number;
  dataPreview?: string;
}

export interface TextAnalysisResult {
  id: string;
  taskId: string;
  documentType: string;
  keyEntities: TextEntity[];
  riskSentences: RiskSentence[];
  semanticSummary: string;
  contractClauses?: ContractClause[];
}

export interface TextEntity {
  id: string;
  type: 'person' | 'company' | 'amount' | 'date' | 'location' | 'contract';
  value: string;
  context: string;
  confidence: number;
}

export interface RiskSentence {
  id: string;
  content: string;
  riskType: string;
  riskLevel: RiskLevel;
  position: string;
  reason: string;
}

export interface ContractClause {
  id: string;
  title: string;
  content: string;
  riskLevel: RiskLevel;
  reviewNote: string;
}

export interface OCRResult {
  id: string;
  taskId: string;
  invoiceType: string;
  invoiceCode: string;
  invoiceNumber: string;
  amount: number;
  taxAmount: number;
  seller: string;
  buyer: string;
  date: string;
  items: InvoiceItem[];
  verificationStatus: 'verified' | 'unverified' | 'suspicious';
  riskFlags: string[];
}

export interface InvoiceItem {
  id: string;
  name: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxRate: string;
}

export interface VoiceTranscriptionResult {
  id: string;
  taskId: string;
  duration: number;
  speakers: SpeakerInfo[];
  transcription: TranscriptSegment[];
  anomalyDetection: SpeechAnomaly[];
  summary: string;
}

export interface SpeakerInfo {
  id: string;
  speakerLabel: string;
  role?: string;
  totalDuration: number;
  speechCount: number;
}

export interface TranscriptSegment {
  id: string;
  speaker: string;
  startTime: number;
  endTime: number;
  content: string;
  emotion?: string;
}

export interface SpeechAnomaly {
  id: string;
  type: string;
  description: string;
  timePosition: string;
  severity: RiskLevel;
  relatedContent: string;
}

export interface CrossSystemAnalysis {
  id: string;
  taskId: string;
  analysisName: string;
  systems: string[];
  dataPoints: DataPoint[];
  inconsistencies: InconsistencyItem[];
  correlationScore: number;
  conclusion: string;
}

export interface DataPoint {
  id: string;
  system: string;
  entity: string;
  field: string;
  value: string;
  timestamp: string;
}

export interface InconsistencyItem {
  id: string;
  type: string;
  description: string;
  affectedSystems: string[];
  severity: RiskLevel;
  suggestedAction: string;
}