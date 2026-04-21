import type { DashboardDict } from "../types";

export const myIssues: DashboardDict["myIssues"] = {
  scopes: {
    assigned: "Assigned",
    assignedDesc: "Issues assigned to me",
    created: "Created",
    createdDesc: "Issues I created",
    myAgents: "My Agents",
    myAgentsDesc: "Issues assigned to my agents",
  },
  empty: {
    noIssues: "No issues assigned to you",
    hint: "Issues you create or are assigned to will appear here.",
  },
  display: {
    settings: "Display settings",
    ordering: "Ordering",
    ascending: "Ascending",
    descending: "Descending",
    cardProperties: "Card properties",
    view: "View",
    boardView: "Board view",
    listView: "List view",
  },
  filter: {
    reset: "Reset all filters",
    issue: "issue",
    issues: "issues",
  },
};