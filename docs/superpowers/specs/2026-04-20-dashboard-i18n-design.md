# Dashboard 中文翻译设计方案

## 背景

Landing page 已有完整的中文翻译系统（`apps/web/features/landing/i18n/`），但 Dashboard（主应用界面）目前全是英文硬编码。用户需要在 Dashboard 中也支持中文，并在设置中提供中英文切换按钮。

## 架构决策

### 位置

翻译系统放在 `packages/core/i18n/`，理由：
- 纯逻辑层（翻译字典 + locale store），无 UI 依赖
- views 和 apps 都能从 core 导入
- 与现有 landing i18n 模式一致，便于理解

### 与 Landing i18n 的关系

**双系统共享 locale cookie**

- Landing page 保持现有独立 i18n 系统
- Dashboard 新建 `packages/core/i18n/`
- 两者读取同一个 cookie `multica-locale`
- 各自有独立的 Provider 和翻译字典

理由：
- Landing 翻译量大且仅用于 marketing site
- Dashboard 翻译完全不同（UI 文案 vs marketing 内容）
- 分开可按需加载，减少包体积

### 字典组织

**按模块拆分**

```
packages/core/i18n/
├── index.ts              # 导出 Provider、hooks、types
├── context.tsx           # LocaleProvider + useLocale hook
├── types.ts              # Locale type + DashboardDict type 定义
├── modules/
│   ├── common.ts         # 通用词汇（按钮、操作、时间等）
│   ├── sidebar.ts        # 侧边栏导航、工作区切换
│   ├── issues.ts         # Issue 相关（状态、优先级、操作）
│   ├── projects.ts       # 项目相关
│   ├── autopilots.ts     # Autopilot 相关
│   ├── agents.ts         # Agent 相关
│   ├── runtimes.ts       # 运行时相关
│   ├── settings.ts       # 设置页面
│   ├── inbox.ts          # 收件箱
│   ├── chat.ts           # 聊天窗口
│   └── modals.ts         # 各种弹窗（创建 Issue、项目等）
├── zh.ts                 # 中文字典（导入各模块合并）
└── en.ts                 # 英文字典（导入各模块合并）
```

### Config 层改造

现有 `STATUS_CONFIG`, `PRIORITY_CONFIG` 等硬编码英文 label。

**方案：Config 保持静态，组件层取翻译**

- Config 保留 iconColor、hoverBg 等样式属性
- 移除 label 属性
- 组件通过 `t.issues.status.backlog` 获取翻译文本

理由：改动最小，config 保持纯静态配置职责。

### 语言切换 UI

**位置：Settings > Appearance Tab**

新增 Language 区块，与 Theme 区块并列：
- 两个按钮：English / 中文
- 当前语言高亮显示
- 点击切换，立即生效

## 数据流

1. 初始化：读取 `multica-locale` cookie，默认 `en`
2. 切换：用户点击语言按钮 → `setLocale(newLocale)` → 更新 cookie → Provider 重载字典 → 组件重渲染
3. 使用：组件通过 `const { t } = useLocale()` 获取翻译，访问 `t.sidebar.inbox` 等

## 翻译模块划分

| 模块 | 翻译条数 | 内容 |
|------|---------|------|
| common | ~30 | Save, Cancel, Delete, Loading, Error, Today, Yesterday 等 |
| sidebar | ~20 | Inbox, My Issues, Issues, Projects, Agents, Runtimes, Settings, Pinned, Workspace, Configure |
| issues | ~50 | 状态(7)、优先级(5)、视图切换、评论、任务状态 |
| projects | ~20 | 状态(5)、优先级(5)、操作 |
| autopilots | ~30 | 触发类型、执行状态、操作 |
| agents | ~25 | 详情页、任务状态、设置标签页 |
| runtimes | ~15 | 状态、更新提示 |
| settings | ~40 | 标签页标题、Profile/Appearance/Tokens/General/Repositories/Members 内容 |
| inbox | ~20 | 通知类型标签（Assigned, Mentioned 等）、操作 |
| chat | ~10 | 新对话、展开/收起、会话历史 |
| modals | ~25 | 创建 Issue/项目/工作区弹窗 |

**总计：约 250-300 条翻译**

## 实施步骤

1. 创建 `packages/core/i18n/` 目录结构和基础文件
2. 编写英文和中文翻译字典（各模块）
3. 创建 LocaleProvider 和 useLocale hook
4. 改造 Settings Appearance Tab 添加语言切换
5. 改造 sidebar 导航使用翻译
6. 改造 status/priority pickers 使用翻译（移除 config label）
7. 改造其他组件使用翻译
8. 在 Web app 的 layout 中注入 LocaleProvider
9. 测试验证

## 组件改造示例

### Sidebar 导航

```tsx
// Before
const personalNav = [
  { key: "inbox", label: "Inbox", icon: Inbox },
  { key: "myIssues", label: "My Issues", icon: CircleUser },
];

// After
const { t } = useLocale();
const personalNav = [
  { key: "inbox", label: t.sidebar.inbox, icon: Inbox },
  { key: "myIssues", label: t.sidebar.myIssues, icon: CircleUser },
];
```

### Status Picker

```tsx
// Before
<span>{STATUS_CONFIG[status].label}</span>

// After
const { t } = useLocale();
<span>{t.issues.status[status]}</span>
```

### Appearance Tab

```tsx
// 新增 Language 区块
<section className="space-y-4">
  <h2 className="text-sm font-semibold">{t.settings.language.title}</h2>
  <div className="flex gap-4">
    {['en', 'zh'].map((l) => (
      <button
        key={l}
        onClick={() => setLocale(l)}
        className={locale === l ? 'ring-2 ring-brand' : ''}
      >
        {l === 'en' ? 'English' : '中文'}
      </button>
    ))}
  </div>
</section>
```

## 测试要点

- 语言切换立即生效，所有 UI 文本正确更新
- Cookie 正确设置，刷新页面后语言保持
- Landing page 和 Dashboard 共享同一 cookie，切换一处另一处也生效
- 所有 pickers（status、priority、assignee 等）显示正确翻译
- 新创建的 Issue/Project 等弹窗使用翻译
- Desktop app 也能正确使用翻译系统