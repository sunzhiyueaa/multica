import type { DashboardDict } from "./types";

const common = {
  save: "保存",
  cancel: "取消",
  delete: "删除",
  edit: "编辑",
  create: "创建",
  close: "关闭",
  loading: "加载中...",
  error: "错误",
  retry: "重试",
  confirm: "确认",
  today: "今天",
  yesterday: "昨天",
  tomorrow: "明天",
  search: "搜索",
  noResults: "未找到结果",
  viewAll: "查看全部",
  copy: "复制",
  copied: "已复制！",
  add: "添加",
  remove: "移除",
  back: "返回",
  next: "下一步",
  submit: "提交",
  backTo: "返回",
  select: "选择",
  clear: "清除",
  unassigned: "未分配",
  none: "无",
  all: "全部",
  me: "我",
  typeToSearch: "输入以搜索",
  noResultsFound: "未找到结果",
  permanentDelete: "将永久删除",
  cannotUndo: "此操作无法撤销。",
  linkCopied: "链接已复制",
  toggleSidebar: "切换侧边栏",
  pinToSidebar: "固定到侧边栏",
  unpinFromSidebar: "从侧边栏取消固定",
  subscribe: "订阅",
  unsubscribe: "取消订阅",
  members: "成员",
  agents: "代理",
  filter: "筛选",
  role: "角色",
  owner: "所有者",
  admin: "管理员",
  member: "成员",
  invite: "邀请",
  pending: "待处理",
  accepted: "已接受",
  declined: "已拒绝",
  to: "到",
};

const sidebar = {
  inbox: "收件箱",
  myIssues: "我的问题",
  issues: "问题",
  projects: "项目",
  agents: "代理",
  runtimes: "运行时",
  settings: "设置",
  pinned: "已固定",
  workspace: "工作区",
  configure: "配置",
  allItems: "所有项目",
  quickAdd: "快速添加",
};

const issues = {
  status: {
    backlog: "待办列表",
    todo: "待办",
    inProgress: "进行中",
    in_review: "审核中",
    done: "已完成",
    cancelled: "已取消",
    closed: "已关闭",
  },
  priority: {
    urgent: "紧急",
    high: "高",
    medium: "中",
    low: "低",
    none: "无优先级",
  },
  view: {
    board: "看板",
    list: "列表",
    timeline: "时间线",
  },
  actions: {
    assignToMe: "分配给我",
    assignTo: "分配给...",
    changeStatus: "更改状态",
    changePriority: "更改优先级",
    addLabel: "添加标签",
    addComment: "添加评论",
    createSubtask: "创建子任务",
    deleteIssue: "删除问题",
    duplicateIssue: "复制问题",
  },
  fields: {
    assignee: "负责人",
    reporter: "报告人",
    labels: "标签",
    dueDate: "截止日期",
    estimate: "预估时间",
    timeSpent: "已用时间",
    status: "状态",
    priority: "优先级",
    project: "项目",
  },
  empty: {
    noIssues: "暂无问题",
    createFirst: "创建第一个问题以开始",
  },
  detail: {
    properties: "属性",
    parentIssue: "父问题",
    details: "详情",
    tokenUsage: "Token 使用量",
    createdBy: "创建者",
    created: "创建时间",
    updated: "更新时间",
    input: "输入",
    output: "输出",
    cache: "缓存",
    runs: "运行次数",
    subIssueOf: "子问题属于",
    subIssues: "子问题",
    addSubIssues: "添加子问题",
    activity: "活动",
    changeSubscribers: "更改订阅者...",
    notFound: "此问题不存在或已在此工作区中删除。",
    backToIssues: "返回问题列表",
    issueTitlePlaceholder: "问题标题",
    descriptionPlaceholder: "添加描述...",
    searchPlaceholder: "搜索问题...",
    searching: "搜索中...",
    noIssuesFound: "未找到问题。",
    typeToSearchIssues: "输入以搜索问题",
    addSubIssue: "添加子问题",
  },
  dialogs: {
    deleteTitle: "删除问题",
    deleteDescription: "将永久删除此问题及其所有评论。此操作无法撤销。",
    deleteConfirm: "删除",
    deleting: "删除中...",
    setParentTitle: "设置父问题",
    setParentDesc: "搜索一个问题作为此问题的父问题",
    addSubIssueTitle: "添加子问题",
    addSubIssueDesc: "搜索一个问题作为子问题",
  },
  dates: {
    tomorrow: "明天",
    nextWeek: "下周",
    clearDate: "清除日期",
  },
  menu: {
    createSubIssue: "创建子问题",
    setParentIssue: "设置父问题...",
    addSubIssue: "添加子问题...",
    copyLink: "复制链接",
  },
  timeline: {
    createdIssue: "创建了此问题",
    changedStatusFrom: "将状态从",
    changedPriorityFrom: "将优先级从",
    selfAssigned: "自己分配了此问题",
    assignedTo: "分配给",
    removedAssignee: "移除了负责人",
    changedAssignee: "更改了负责人",
    removedDueDate: "移除了截止日期",
    setDueDateTo: "设置截止日期为",
    renamedFromTo: "将问题从",
    updatedDescription: "更新了描述",
    completedTask: "完成了任务",
    taskFailed: "任务失败",
  },
  toast: {
    updateFailed: "更新问题失败",
    deleted: "问题已删除",
    deleteFailed: "删除问题失败",
    statusUpdateFailed: "更新状态失败",
    setParentSuccess: "已设置",
    addSubIssueSuccess: "已添加",
    addSubIssueFailed: "添加子问题失败",
  },
};

const projects = {
  status: {
    planning: "规划中",
    active: "进行中",
    completed: "已完成",
    archived: "已归档",
    onHold: "暂停",
  },
  priority: {
    critical: "紧急",
    high: "高",
    medium: "中",
    low: "低",
  },
  actions: {
    newProject: "新建项目",
    editProject: "编辑项目",
    deleteProject: "删除项目",
    archiveProject: "归档项目",
  },
};

const autopilots = {
  status: {
    idle: "空闲",
    running: "运行中",
    paused: "已暂停",
    error: "错误",
  },
  trigger: {
    manual: "手动",
    scheduled: "定时",
    webhook: "Webhook",
    event: "事件触发",
  },
  actions: {
    run: "运行",
    pause: "暂停",
    resume: "继续",
    configure: "配置",
  },
};

const agents = {
  status: {
    online: "在线",
    offline: "离线",
    busy: "忙碌",
  },
  tasks: {
    assigned: "已分配任务",
    completed: "已完成任务",
    failed: "失败任务",
  },
  fields: {
    type: "类型",
    runtime: "运行时",
    capabilities: "能力",
  },
};

const runtimes = {
  status: {
    connected: "已连接",
    disconnected: "已断开",
    connecting: "连接中...",
  },
  update: {
    available: "有可用更新",
    upToDate: "已是最新版本",
    downloading: "正在下载更新...",
  },
  actions: {
    install: "安装",
    uninstall: "卸载",
    restart: "重启",
  },
};

const settings = {
  tabs: {
    profile: "个人资料",
    appearance: "外观",
    tokens: "API 令牌",
    general: "通用",
    repositories: "仓库",
    members: "成员",
  },
  language: {
    title: "语言",
    description: "选择您的首选语言",
  },
  profile: {
    name: "姓名",
    email: "邮箱",
    avatar: "头像",
  },
  appearance: {
    theme: "主题",
    themeLight: "浅色",
    themeDark: "深色",
    themeSystem: "跟随系统",
  },
  tokens: {
    title: "API 令牌",
    createNew: "创建新令牌",
    noTokens: "暂无令牌",
  },
  workspace: {
    name: "工作区名称",
    slug: "URL 标识",
  },
};

const inbox = {
  filters: {
    all: "全部",
    assigned: "分配给我",
    mentioned: "提及我",
    subscribed: "我订阅的",
  },
  actions: {
    markRead: "标记为已读",
    markUnread: "标记为未读",
    archive: "归档",
  },
};

const chat = {
  newChat: "新对话",
  expand: "展开",
  collapse: "收起",
  history: "对话历史",
};

const modals = {
  createIssue: {
    title: "创建问题",
    submit: "创建问题",
  },
  createProject: {
    title: "创建项目",
    submit: "创建项目",
  },
  createWorkspace: {
    title: "创建工作区",
    submit: "创建工作区",
  },
};

export const zh: DashboardDict = {
  common,
  sidebar,
  issues,
  projects,
  autopilots,
  agents,
  runtimes,
  settings,
  inbox,
  chat,
  modals,
};
