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
