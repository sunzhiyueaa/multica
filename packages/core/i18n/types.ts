export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export type DashboardDict = {
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    create: string;
    close: string;
    loading: string;
    error: string;
    retry: string;
    confirm: string;
    today: string;
    yesterday: string;
    tomorrow: string;
    search: string;
    noResults: string;
    viewAll: string;
    copy: string;
    copied: string;
  };
  sidebar: {
    inbox: string;
    myIssues: string;
    issues: string;
    projects: string;
    agents: string;
    runtimes: string;
    settings: string;
    pinned: string;
    workspace: string;
    configure: string;
    allItems: string;
    quickAdd: string;
  };
  issues: {
    status: {
      backlog: string;
      todo: string;
      inProgress: string;
      in_review: string;
      done: string;
      cancelled: string;
      closed: string;
    };
    priority: {
      urgent: string;
      high: string;
      medium: string;
      low: string;
      none: string;
    };
    view: {
      board: string;
      list: string;
      timeline: string;
    };
    actions: {
      assignToMe: string;
      assignTo: string;
      changeStatus: string;
      changePriority: string;
      addLabel: string;
      addComment: string;
      createSubtask: string;
      deleteIssue: string;
      duplicateIssue: string;
    };
    fields: {
      assignee: string;
      reporter: string;
      labels: string;
      dueDate: string;
      estimate: string;
      timeSpent: string;
      status: string;
      priority: string;
      project: string;
    };
    empty: {
      noIssues: string;
      createFirst: string;
    };
  };
  projects: {
    status: {
      planning: string;
      active: string;
      completed: string;
      archived: string;
      onHold: string;
    };
    priority: {
      critical: string;
      high: string;
      medium: string;
      low: string;
    };
    actions: {
      newProject: string;
      editProject: string;
      deleteProject: string;
      archiveProject: string;
    };
  };
  autopilots: {
    status: {
      idle: string;
      running: string;
      paused: string;
      error: string;
    };
    trigger: {
      manual: string;
      scheduled: string;
      webhook: string;
      event: string;
    };
    actions: {
      run: string;
      pause: string;
      resume: string;
      configure: string;
    };
  };
  agents: {
    status: {
      online: string;
      offline: string;
      busy: string;
    };
    tasks: {
      assigned: string;
      completed: string;
      failed: string;
    };
    fields: {
      type: string;
      runtime: string;
      capabilities: string;
    };
  };
  runtimes: {
    status: {
      connected: string;
      disconnected: string;
      connecting: string;
    };
    update: {
      available: string;
      upToDate: string;
      downloading: string;
    };
    actions: {
      install: string;
      uninstall: string;
      restart: string;
    };
  };
  settings: {
    tabs: {
      profile: string;
      appearance: string;
      tokens: string;
      general: string;
      repositories: string;
      members: string;
    };
    language: {
      title: string;
      description: string;
    };
    profile: {
      name: string;
      email: string;
      avatar: string;
    };
    appearance: {
      theme: string;
      themeLight: string;
      themeDark: string;
      themeSystem: string;
    };
    tokens: {
      title: string;
      createNew: string;
      noTokens: string;
    };
    workspace: {
      name: string;
      slug: string;
    };
  };
  inbox: {
    filters: {
      all: string;
      assigned: string;
      mentioned: string;
      subscribed: string;
    };
    actions: {
      markRead: string;
      markUnread: string;
      archive: string;
    };
  };
  chat: {
    newChat: string;
    expand: string;
    collapse: string;
    history: string;
  };
  modals: {
    createIssue: {
      title: string;
      submit: string;
    };
    createProject: {
      title: string;
      submit: string;
    };
    createWorkspace: {
      title: string;
      submit: string;
    };
  };
};