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
    add: string;
    remove: string;
    back: string;
    next: string;
    submit: string;
    backTo: string;
    select: string;
    clear: string;
    unassigned: string;
    none: string;
    all: string;
    me: string;
    typeToSearch: string;
    noResultsFound: string;
    permanentDelete: string;
    cannotUndo: string;
    linkCopied: string;
    toggleSidebar: string;
    pinToSidebar: string;
    unpinFromSidebar: string;
    subscribe: string;
    unsubscribe: string;
    members: string;
    agents: string;
    filter: string;
    role: string;
    owner: string;
    admin: string;
    member: string;
    invite: string;
    pending: string;
    accepted: string;
    declined: string;
    to: string;
    copyLink: string;
    openLink: string;
    failedToCopy: string;
    below: string;
  };
  editor: {
    bold: string;
    italic: string;
    strike: string;
    code: string;
    link: string;
    quote: string;
    list: string;
    bulletList: string;
    orderedList: string;
    normalText: string;
    heading1: string;
    heading2: string;
    heading3: string;
    text: string;
    createSubIssue: string;
    subIssueCreated: string;
    subIssueCreateFailed: string;
  };
  myIssues: {
    scopes: {
      assigned: string;
      assignedDesc: string;
      created: string;
      createdDesc: string;
      myAgents: string;
      myAgentsDesc: string;
    };
    empty: {
      noIssues: string;
      hint: string;
    };
    display: {
      settings: string;
      ordering: string;
      ascending: string;
      descending: string;
      cardProperties: string;
      view: string;
      boardView: string;
      listView: string;
    };
    filter: {
      reset: string;
      issue: string;
      issues: string;
    };
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
    detail: {
      properties: string;
      parentIssue: string;
      details: string;
      tokenUsage: string;
      createdBy: string;
      created: string;
      updated: string;
      input: string;
      output: string;
      cache: string;
      runs: string;
      subIssueOf: string;
      subIssues: string;
      addSubIssues: string;
      activity: string;
      changeSubscribers: string;
      notFound: string;
      backToIssues: string;
      issueTitlePlaceholder: string;
      descriptionPlaceholder: string;
      searchPlaceholder: string;
      searching: string;
      noIssuesFound: string;
      typeToSearchIssues: string;
      addSubIssue: string;
    };
    dialogs: {
      deleteTitle: string;
      deleteDescription: string;
      deleteConfirm: string;
      deleting: string;
      setParentTitle: string;
      setParentDesc: string;
      addSubIssueTitle: string;
      addSubIssueDesc: string;
    };
    dates: {
      tomorrow: string;
      nextWeek: string;
      clearDate: string;
    };
    menu: {
      createSubIssue: string;
      setParentIssue: string;
      addSubIssue: string;
      copyLink: string;
    };
    timeline: {
      createdIssue: string;
      changedStatusFrom: string;
      changedPriorityFrom: string;
      selfAssigned: string;
      assignedTo: string;
      removedAssignee: string;
      changedAssignee: string;
      removedDueDate: string;
      setDueDateTo: string;
      renamedFromTo: string;
      updatedDescription: string;
      completedTask: string;
      taskFailed: string;
    };
    toast: {
      updateFailed: string;
      deleted: string;
      deleteFailed: string;
      statusUpdateFailed: string;
      setParentSuccess: string;
      addSubIssueSuccess: string;
      addSubIssueFailed: string;
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
    detail: {
      properties: string;
      issues: string;
      members: string;
      noIssues: string;
      noIssuesHint: string;
      deleteConfirm: string;
      deleteDescription: string;
      noLead: string;
      assignLead: string;
      noResults: string;
      progress: string;
      description: string;
      copyLink: string;
      linkCopied: string;
      deleted: string;
    };
    page: {
      title: string;
      searchPlaceholder: string;
      noProjects: string;
      createFirst: string;
      name: string;
      priority: string;
      status: string;
      progress: string;
      lead: string;
      created: string;
    };
    picker: {
      placeholder: string;
      noProject: string;
      removeFromProject: string;
      noProjectsYet: string;
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
    detail: {
      instructions: string;
      skills: string;
      tasks: string;
      env: string;
      customArgs: string;
      settings: string;
      archivedBanner: string;
      restore: string;
      archived: string;
      archiveAgent: string;
      archiveConfirm: string;
      archiveDescription: string;
      archiveAction: string;
    };
    page: {
      title: string;
      showActive: string;
      showArchived: string;
      noArchived: string;
      noActive: string;
      noAgents: string;
      createAgent: string;
      selectToView: string;
      updated: string;
      archivedToast: string;
      restored: string;
    };
    tabs: {
      instructionsTitle: string;
      instructionsDesc: string;
      instructionsPlaceholder: string;
      instructionsChars: string;
      instructionsNone: string;
      skillsTitle: string;
      skillsDesc: string;
      skillsAdd: string;
      skillsInfo: string;
      skillsNone: string;
      skillsNoneDesc: string;
      skillsPickerTitle: string;
      skillsPickerDesc: string;
      skillsAllAssigned: string;
      tasksTitle: string;
      tasksDesc: string;
      tasksNone: string;
      tasksNoneDesc: string;
      envTitle: string;
      envDesc: string;
      envDescEdit: string;
      envNone: string;
      envDuplicate: string;
      customArgsTitle: string;
      customArgsDesc: string;
      customArgsLaunch: string;
      settingsAvatar: string;
      settingsAvatarClick: string;
      settingsName: string;
      settingsDesc: string;
      settingsDescPlaceholder: string;
      settingsVisibility: string;
      settingsWorkspace: string;
      settingsWorkspaceDesc: string;
      settingsPrivate: string;
      settingsPrivateDesc: string;
      settingsMaxTasks: string;
      settingsRuntime: string;
      settingsRuntimeMine: string;
      settingsRuntimeAll: string;
      settingsRuntimeNone: string;
      settingsRuntimeSelect: string;
      settingsCloud: string;
      settingsNameRequired: string;
      settingsSaved: string;
      settingsSaveFailed: string;
      customArgsSaved: string;
      customArgsFailed: string;
      envSaved: string;
      envFailed: string;
      add: string;
      save: string;
      saveChanges: string;
      skillAddFailed: string;
      skillRemoveFailed: string;
      avatarUpdated: string;
      avatarFailed: string;
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
    detail: {
      runtimeMode: string;
      provider: string;
      status: string;
      lastSeen: string;
      device: string;
      daemonId: string;
      created: string;
      updated: string;
      owner: string;
      deleteTitle: string;
      deleteDescription: string;
      deleteConfirm: string;
      deleting: string;
      deleted: string;
      deleteFailed: string;
    };
    page: {
      title: string;
      onlineCount: string;
      selectToView: string;
      searchPlaceholder: string;
      noRuntimesMine: string;
      noRuntimesOwner: string;
      noRuntimesRegistered: string;
      registerHint: string;
      mine: string;
      all: string;
      allOwners: string;
      owner: string;
    };
    sections: {
      cliVersion: string;
      connectionTest: string;
      tokenUsage: string;
      metadata: string;
    };
    connection: {
      testConnection: string;
      testing: string;
      waitingDaemon: string;
      runningTest: string;
      connected: string;
      failed: string;
      timeout: string;
    };
    cli: {
      cliVersion: string;
      unknown: string;
      latest: string;
      available: string;
      update: string;
      waitingDaemon: string;
      updating: string;
      updateComplete: string;
      updateFailed: string;
      timeout: string;
      managedByDesktop: string;
      retry: string;
    };
    usage: {
      noUsage: string;
      input: string;
      output: string;
      cacheRead: string;
      cacheWrite: string;
      estimatedCost: string;
      date: string;
      model: string;
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
      description: string;
      namePlaceholder: string;
      createButton: string;
      creating: string;
      revokeTitle: string;
      revokeDescription: string;
      revokeButton: string;
      revokeConfirm: string;
      revoking: string;
      revoked: string;
      revokeFailed: string;
      createdTitle: string;
      createdDescription: string;
      copyToken: string;
      tokenCopied: string;
      done: string;
      lastUsed: string;
      neverUsed: string;
      created: string;
      expires: string;
      noTokens: string;
      loadFailed: string;
      createFailed: string;
      days: string;
      year: string;
      neverExpiry: string;
    };
    workspace: {
      name: string;
      slug: string;
    };
    members: {
      sectionTitle: string;
      pendingTitle: string;
      inviteTitle: string;
      invitePlaceholder: string;
      inviteButton: string;
      inviting: string;
      invited: string;
      inviteFailed: string;
      roleOwner: string;
      roleAdmin: string;
      roleMember: string;
      roleOwnerDesc: string;
      roleAdminDesc: string;
      roleMemberDesc: string;
      changeRole: string;
      remove: string;
      removeTitle: string;
      removeDescription: string;
      removed: string;
      removeFailed: string;
      revokeInvitation: string;
      revokeDescription: string;
      revoked: string;
      revokeFailed: string;
      noMembers: string;
      noPending: string;
      roleUpdated: string;
      roleUpdateFailed: string;
      memberUpdateFailed: string;
      onlyAdminsCanManage: string;
    };
    repositories: {
      sectionTitle: string;
      description: string;
      addButton: string;
      urlPlaceholder: string;
      descPlaceholder: string;
      saving: string;
      save: string;
      saved: string;
      saveFailed: string;
      onlyAdminsCanManage: string;
    };
    workspaceSettings: {
      sectionTitle: string;
      nameLabel: string;
      namePlaceholder: string;
      descLabel: string;
      descPlaceholder: string;
      contextLabel: string;
      contextPlaceholder: string;
      slugLabel: string;
      updateButton: string;
      updating: string;
      updated: string;
      updateFailed: string;
      onlyAdminsCanManage: string;
    };
    dangerZone: {
      sectionTitle: string;
      leaveTitle: string;
      leaveDescription: string;
      leaveSoleOwnerMember: string;
      leaveSoleOwner: string;
      leaveNormal: string;
      leaveButton: string;
      leaving: string;
      leaveFailed: string;
      deleteTitle: string;
      deleteDescription: string;
      deleteButton: string;
      deleting: string;
      deleteFailed: string;
      confirmLabel: string;
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
    page: {
      title: string;
      empty: string;
      emptyDescription: string;
      selectToView: string;
    };
    notification: {
      issueAssigned: string;
      unassigned: string;
      assigneeChanged: string;
      statusChanged: string;
      priorityChanged: string;
      dueDateChanged: string;
      newComment: string;
      mentioned: string;
      reviewRequested: string;
      taskCompleted: string;
      taskFailed: string;
      agentBlocked: string;
      agentCompleted: string;
      reactionAdded: string;
    };
    labels: {
      setStatusTo: string;
      setPriorityTo: string;
      assignedTo: string;
      removedAssignee: string;
      setDueDateTo: string;
      removedDueDate: string;
      reactedToComment: string;
    };
    time: {
      justNow: string;
    };
    toast: {
      markReadFailed: string;
      archiveFailed: string;
      markAllReadFailed: string;
      archiveAllFailed: string;
      archiveAllReadFailed: string;
      archiveCompletedFailed: string;
    };
    menu: {
      markAllRead: string;
      archiveAll: string;
      archiveAllRead: string;
      archiveCompleted: string;
    };
  };
  search: {
    dialogTitle: string;
    placeholder: string;
    noResults: string;
    quickActions: string;
    navigation: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
    recent: string;
    clearHistory: string;
  };
  chat: {
    newChat: string;
    expand: string;
    collapse: string;
    history: string;
    fab: {
      working: string;
      unreadSingular: string;
      unreadPlural: string;
      ask: string;
    };
    input: {
      placeholder: string;
      placeholderWithAgent: string;
      archived: string;
    };
    session: {
      noPrevious: string;
      noSessions: string;
      untitled: string;
      back: string;
      historyTitle: string;
      justNow: string;
      minutesAgo: string;
      hoursAgo: string;
      daysAgo: string;
    };
    agent: {
      noAgents: string;
      myAgents: string;
      others: string;
    };
    window: {
      restore: string;
      minimize: string;
    };
    empty: {
      welcomeAgent: string;
      welcomeDefault: string;
      tryAsking: string;
      prompts: {
        listTasks: string;
        summarize: string;
        planNext: string;
      };
    };
    timeline: {
      toolSingular: string;
      toolPlural: string;
      resultPrefix: string;
      truncated: string;
    };
  };
  modals: {
    common: {
      cancel: string;
      close: string;
      creating: string;
      createFailed: string;
      collapse: string;
      expand: string;
    };
    createIssue: {
      title: string;
      submit: string;
      titlePlaceholder: string;
      descriptionPlaceholder: string;
      headerNewIssue: string;
      headerNewSubIssue: string;
      issueCreated: string;
      viewIssue: string;
    };
    createProject: {
      title: string;
      submit: string;
      titlePlaceholder: string;
      descriptionPlaceholder: string;
      headerNewProject: string;
      leadLabel: string;
      assignLeadPlaceholder: string;
      noLead: string;
      projectCreated: string;
    };
    createWorkspace: {
      title: string;
      submit: string;
      description: string;
      back: string;
    };
  };
  layout: {
    workspaceLoader: {
      loading: string;
      loadingName: string;
    };
  };
  auth: {
    login: {
      title: string;
      emailPrompt: string;
      emailLabel: string;
      emailPlaceholder: string;
      continueButton: string;
      sendingCode: string;
      checkEmailTitle: string;
      checkEmailDesc: string;
      resendCode: string;
      resendIn: string;
      back: string;
      or: string;
      continueWithGoogle: string;
      errorEmailRequired: string;
      errorSendCode: string;
      errorInvalidCode: string;
      errorResend: string;
    };
    cli: {
      authorizeTitle: string;
      authorizeDesc: string;
      authorizeButton: string;
      authorizing: string;
      useDifferentAccount: string;
      errorAuthorize: string;
    };
    invite: {
      notFound: string;
      notFoundDesc: string;
      goToDashboard: string;
      joined: string;
      redirecting: string;
      declined: string;
      declinedDesc: string;
      joinTitle: string;
      invitedBy: string;
      roleAdmin: string;
      roleMember: string;
      alreadyHandled: string;
      expired: string;
      declineButton: string;
      declining: string;
      acceptButton: string;
      accepting: string;
      back: string;
      logOut: string;
    };
  };
  skills: {
    page: {
      title: string;
      createSkill: string;
      addFile: string;
      noSkills: string;
      noSkillsDesc: string;
      selectSkill: string;
      selectSkillDesc: string;
    };
    dialog: {
      addSkillTitle: string;
      addSkillDesc: string;
      addFileTitle: string;
      addFileDesc: string;
      deleteTitle: string;
      deleteDescription: string;
      createTab: string;
      importTab: string;
      nameLabel: string;
      descriptionLabel: string;
      urlLabel: string;
      supportedSources: string;
      creating: string;
      importing: string;
      importingFrom: string;
      fileAlreadyExists: string;
    };
    file: {
      files: string;
      noFiles: string;
      preview: string;
      edit: string;
      writeMd: string;
      fileContent: string;
      noContent: string;
      deleteSkill: string;
      deleteFile: string;
      skillNamePlaceholder: string;
      descriptionPlaceholder: string;
      filePathPlaceholder: string;
    };
    toast: {
      created: string;
      imported: string;
      saved: string;
      deleted: string;
      createFailed: string;
      saveFailed: string;
      deleteFailed: string;
      loadFilesFailed: string;
    };
  };
};