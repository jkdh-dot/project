import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { DAGovernance } from '@/pages/DAGovernance';
import { AIAcquisition } from '@/pages/AIAcquisition';
import { MEMonitoring } from '@/pages/MEMonitoring';
import { RiskClosure } from '@/pages/RiskClosure';
import { SystemSettings } from '@/pages/SystemSettings';
import { EmployeeManagement } from '@/pages/EmployeeManagement';
import { AuditTaskManagement } from '@/pages/AuditTaskManagement';
import { WorkingPaperHub } from '@/pages/WorkingPaperHub';
import { ComplianceLibrary } from '@/pages/ComplianceLibrary';
import { HumanResourceCompliance } from '@/pages/HumanResourceCompliance';
import { AIModelManagement } from '@/pages/AIModelManagement';
import { RiskHeatmap } from '@/pages/RiskHeatmap';
import { MultimodalAnalysis } from '@/pages/MultimodalAnalysis';
import { SmartAssistant } from '@/pages/SmartAssistant';
import { DataLineage } from '@/pages/DataLineage';
import { PermissionControl } from '@/pages/PermissionControl';
import { SelfServiceReports } from '@/pages/SelfServiceReports';
import { RectificationVerification } from '@/pages/RectificationVerification';
import { InternalControl } from '@/pages/InternalControl';
import { AuditReview } from '@/pages/AuditReview';
import { ProjectManagement } from '@/pages/ProjectManagement';
import { EfficiencyAnalysis } from '@/pages/EfficiencyAnalysis';

const pageTitles: Record<string, string> = {
  '/audit-tasks': '审计任务管理',
  '/working-paper-hub': '底稿与证据中台',
  '/compliance-library': '合规法规库',
  '/hr-compliance': '人力合规审计',
  '/ai-model-management': 'AI审计模型',
  '/risk-heatmap': '风险热力图',
  '/multimodal-analysis': '多模态分析',
  '/smart-assistant': 'RankAI',
  '/data-lineage': '数据血缘',
  '/permission-control': '权限管控',
  '/self-service-reports': '自助报表',
  '/rectification-verification': '整改验证',
  '/internal-control': '内控缺陷',
  '/audit-review': '审计复盘',
  '/project-management': '项目管理',
  '/efficiency-analysis': '效率分析',
  '/da-governance': 'DA治理',
  '/ai-acquisition': 'AI获取',
  '/me-monitoring': 'ME监控',
  '/risk-closure': '风险闭环',
  '/employee-management': '员工信息管理',
  '/system-settings': '系统设置',
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg">
        <Sidebar />
        <div className="ml-[240px]">
          <Header title={pageTitles[window.location.pathname] || '审计驾驶舱'} />
          <main className="pt-16 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/audit-tasks" />} />
              <Route path="/audit-tasks" element={<AuditTaskManagement />} />
              <Route path="/working-paper-hub" element={<WorkingPaperHub />} />
              <Route path="/compliance-library" element={<ComplianceLibrary />} />
              <Route path="/hr-compliance" element={<HumanResourceCompliance />} />
              <Route path="/ai-model-management" element={<AIModelManagement />} />
              <Route path="/risk-heatmap" element={<RiskHeatmap />} />
              <Route path="/multimodal-analysis" element={<MultimodalAnalysis />} />
              <Route path="/smart-assistant" element={<SmartAssistant />} />
              <Route path="/data-lineage" element={<DataLineage />} />
              <Route path="/permission-control" element={<PermissionControl />} />
              <Route path="/self-service-reports" element={<SelfServiceReports />} />
              <Route path="/rectification-verification" element={<RectificationVerification />} />
              <Route path="/internal-control" element={<InternalControl />} />
              <Route path="/audit-review" element={<AuditReview />} />
              <Route path="/project-management" element={<ProjectManagement />} />
              <Route path="/efficiency-analysis" element={<EfficiencyAnalysis />} />
              <Route path="/da-governance" element={<DAGovernance />} />
              <Route path="/ai-acquisition" element={<AIAcquisition />} />
              <Route path="/me-monitoring" element={<MEMonitoring />} />
              <Route path="/risk-closure" element={<RiskClosure />} />
              <Route path="/employee-management" element={<EmployeeManagement />} />
              <Route path="/system-settings" element={<SystemSettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;