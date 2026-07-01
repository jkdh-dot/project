# 科创企业人力财务风控审计系统

## 项目概述

本项目是一套面向中小型科创企业的专业级人力财务风控审计系统，实现IT权限治理、账号全生命周期管控、异常行为监控、风险闭环整改的全流程线上化。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **样式方案**: Tailwind CSS 3
- **路由管理**: React Router 6
- **状态管理**: Zustand
- **图表库**: Chart.js + react-chartjs-2
- **图标库**: Lucide React

## 项目结构

```
d:\project\
├── src/
│   ├── components/           # 通用组件
│   │   ├── common/          # 基础组件
│   │   │   ├── StatCard.tsx        # 指标卡片组件
│   │   │   ├── RiskBadge.tsx       # 风险等级标签
│   │   │   └── StatusBadge.tsx     # 状态标签
│   │   ├── Header.tsx       # 顶部状态栏
│   │   └── Sidebar.tsx      # 左侧导航栏
│   ├── data/                # 模拟数据
│   │   └── mockData.ts      # 各模块模拟数据
│   ├── pages/               # 页面组件
│   │   ├── Dashboard.tsx        # 审计驾驶舱首页
│   │   ├── DAGovernance.tsx     # DA治理模块
│   │   ├── AIAcquisition.tsx    # AI获取模块
│   │   ├── MEMonitoring.tsx     # ME监控模块
│   │   ├── RiskClosure.tsx      # 风险闭环模块
│   │   └── SystemSettings.tsx   # 系统设置页
│   ├── store/               # 状态管理
│   │   └── index.ts         # Zustand store
│   ├── types/               # TypeScript类型定义
│   │   └── index.ts         # 全局类型定义
│   ├── App.tsx              # 应用入口
│   ├── main.tsx             # React入口
│   └── index.css            # 全局样式
├── index.html               # HTML模板
├── package.json             # 依赖配置
├── vite.config.ts           # Vite配置
├── tailwind.config.js       # Tailwind配置
├── postcss.config.js        # PostCSS配置
├── tsconfig.json            # TypeScript配置
└── PROJECT_GUIDE.md         # 项目说明文档
```

## 核心功能模块

### 1. 审计驾驶舱 (首页)
- 核心指标卡：风险总数、待整改工单、账号健康度、交易异常率
- 图表展示：风险类型分布饼图、近30天风险趋势折线图、部门风险排名柱状图
- 最新高风险告警列表
- 快捷操作入口

### 2. DA治理模块 (数据权限治理)
- 账号清单上传与权限排查
- 风险明细列表（支持搜索、筛选、排序、分页）
- 权责映射表
- 导出权限治理报告

### 3. AI获取模块 (账号全生命周期管控)
- 账号申请：表单填写、流程节点展示
- 变更管理：权限调整、岗位变更
- 离职销户：全系统账号核查、销户状态跟踪
- 月度对账：在职员工与系统账号对账

### 4. ME监控模块 (异常行为监控)
- 异常登录监控
- 大额交易监控
- 越权访问监控
- 告警明细下钻查看

### 5. 风险闭环模块 (整改全流程管理)
- 工单状态统计
- 工单列表与详情侧边栏
- 整改流程：创建→整改中→待复查→已销号
- 超期工单自动标红

### 6. 系统设置页
- 模型配置：添加企业自有大模型/开源DS模型
- 规则配置：自定义风险检测规则
- 操作日志：全量系统操作记录
- 数据管理：备份与导出

## 视觉设计规范

- **主色调**: 深邃藏蓝 #0A2463
- **背景色**: 浅灰 #F8FAFC
- **卡片色**: 纯白 #FFFFFF
- **状态色**: 高风险橙 #F97316、中风险黄 #F59E0B、成功绿 #10B981、错误红 #EF4444
- **布局**: 左侧固定侧边栏(240px) + 顶部状态栏 + 右侧主内容区

## 启动方式

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 对接说明

### 后端API对接

当前系统使用前端模拟数据，如需对接真实后端服务，需要修改以下文件：

1. **src/store/index.ts** - 将模拟数据替换为API调用
2. **src/data/mockData.ts** - 可删除或保留作为测试数据

### 接口规范建议

```typescript
// 通用响应格式
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

// 分页响应格式
interface PaginatedResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}
```

### 模型配置对接

系统支持接入企业自有大模型，配置项包括：
- API请求地址
- 模型ID
- API密钥
- 连接状态测试

## 注意事项

1. 系统为纯前端项目，数据存储在内存中，刷新后重置
2. 生产环境需对接真实后端服务
3. 文件上传功能目前为前端模拟实现，需后端支持
4. 导出功能使用前端模拟，需后端API支持真实导出