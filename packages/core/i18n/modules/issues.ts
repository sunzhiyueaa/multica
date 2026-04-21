import type { DashboardDict } from "../types";

export const issues: DashboardDict["issues"] = {
  status: {
    backlog: "Backlog",
    todo: "Todo",
    inProgress: "In Progress",
    in_review: "In Review",
    done: "Done",
    cancelled: "Cancelled",
    closed: "Closed",
  },
  priority: {
    urgent: "Urgent",
    high: "High",
    medium: "Medium",
    low: "Low",
    none: "No priority",
  },
  view: {
    board: "Board",
    list: "List",
    timeline: "Timeline",
  },
  actions: {
    assignToMe: "Assign to me",
    assignTo: "Assign to...",
    changeStatus: "Change status",
    changePriority: "Change priority",
    addLabel: "Add label",
    addComment: "Add comment",
    createSubtask: "Create subtask",
    deleteIssue: "Delete issue",
    duplicateIssue: "Duplicate issue",
  },
  fields: {
    assignee: "Assignee",
    reporter: "Reporter",
    labels: "Labels",
    dueDate: "Due date",
    estimate: "Estimate",
    timeSpent: "Time spent",
    status: "Status",
    priority: "Priority",
    project: "Project",
  },
  empty: {
    noIssues: "No issues yet",
    createFirst: "Create your first issue to get started",
  },
};
