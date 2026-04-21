import type { DashboardDict } from "../types";

export const chat: DashboardDict["chat"] = {
  newChat: "New conversation",
  expand: "Expand",
  collapse: "Collapse",
  history: "Conversation history",
  fab: {
    working: "Multica is working...",
    unreadSingular: "unread chat",
    unreadPlural: "unread chats",
    ask: "Ask Multica",
  },
  input: {
    placeholder: "Tell me what to do...",
    placeholderWithAgent: "Tell {agent} what to do...",
    archived: "This session is archived",
  },
  session: {
    noPrevious: "No previous chats",
    noSessions: "No chat sessions yet",
    untitled: "Untitled",
    back: "Back",
    historyTitle: "Chat History",
    justNow: "just now",
    minutesAgo: "m ago",
    hoursAgo: "h ago",
    daysAgo: "d ago",
  },
  agent: {
    noAgents: "No agents",
    myAgents: "My agents",
    others: "Others",
  },
  window: {
    restore: "Restore",
    minimize: "Minimize",
  },
  empty: {
    welcomeAgent: "Hi, I'm {agent}",
    welcomeDefault: "Welcome to Multica",
    tryAsking: "Try asking",
    prompts: {
      listTasks: "List my open tasks by priority",
      summarize: "Summarize what I did today",
      planNext: "Plan what to work on next",
    },
  },
  timeline: {
    toolSingular: "tool",
    toolPlural: "tools",
    resultPrefix: "result: ",
    truncated: "... (truncated)",
  },
};
