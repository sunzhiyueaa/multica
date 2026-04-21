# Dashboard 完整 i18n 转换设计

## 背景

已有 i18n 基础设施（`packages/core/i18n/`），包含：
- types.ts — Locale 和 DashboardDict 类型定义
- context.tsx — LocaleProvider 和 useLocale hook
- 11 个 modules（common、sidebar、issues、projects、autopilots、agents、runtimes、settings、inbox、chat、modals）
- en.ts 和 zh.ts 字典

已转换组件（5个）：
- app-sidebar.tsx
- priority-picker.tsx
- status-picker.tsx
- settings-page.tsx
- appearance-tab.tsx

待转换：约 100+ 组件文件，300+ 英文字符串。

## 目标

将 packages/views 中所有硬编码英文 UI 文本转换为 i18n，实现 Dashboard 全中文支持。

## 方法

### 转换流程

1. 扫描组件文件中的英文文本
2. 遇到新文本 → 扩展对应 module 字典 → 更新 types.ts 类型定义
3. 组件引入 `useLocale()` → 用 `t.xxx` 替换硬编码字符串
4. 完成后统一运行 `make check` 验证

### 字典扩展原则

- 通用文本 → 添加到 `common` module
- 模块特定文本 → 添加到对应 module
- 保持语义化键名，如 `t.issues.empty.noSubissues`
- 按 needs 扩展，不预先设计所有结构

### 组件改造模式

```tsx
// Before
<Button>Delete</Button>
<span>No results found</span>
<DialogTitle>Delete issue</DialogTitle>

// After
const { t } = useLocale();
<Button>{t.common.delete}</Button>
<span>{t.common.noResults}</span>
<DialogTitle>{t.issues.actions.deleteIssue}</DialogTitle>
```

## 优先转换文件

按字符串数量排序，优先处理高频核心组件：

| 文件 | 预估字符串 |
|------|-----------|
| issue-detail.tsx | ~30 |
| search-command.tsx | ~25 |
| members-tab.tsx | ~20 |
| skills-page.tsx | ~20 |
| runtime-detail.tsx | ~15 |
| autopilot-detail-page.tsx | ~15 |
| autopilots-page.tsx | ~15 |
| tokens-tab.tsx | ~10 |

后续按模块顺序处理：
1. Issues 模块剩余组件
2. Projects 模块
3. Settings 其他标签页
4. Agents 模块
5. Runtimes 模块
6. Autopilots 模块
7. Skills 模块
8. 通用组件

## 验证

全部转换完成后统一运行：

```bash
make check
```

包含：typecheck、unit tests、Go tests、E2E。

## 注意事项

- 保持翻译准确、简洁，符合中文 UI 习惯
- 时间/日期相关文本可复用 common 模块的 today/yesterday/tomorrow
- 确保所有新键同时添加到 en.ts 和 zh.ts
- types.ts 类型必须与实际字典结构一致