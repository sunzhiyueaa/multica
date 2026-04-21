import type { DashboardDict } from "../types";

export const modals: DashboardDict["modals"] = {
  common: {
    cancel: "Cancel",
    close: "Close",
    creating: "Creating...",
    createFailed: "Failed to create",
    collapse: "Collapse",
    expand: "Expand",
  },
  createIssue: {
    title: "Create issue",
    submit: "Create Issue",
    titlePlaceholder: "Issue title",
    descriptionPlaceholder: "Add description...",
    headerNewIssue: "New issue",
    headerNewSubIssue: "New sub-issue",
    issueCreated: "Issue created",
    viewIssue: "View issue",
  },
  createProject: {
    title: "Create project",
    submit: "Create Project",
    titlePlaceholder: "Project title",
    descriptionPlaceholder: "Add description...",
    headerNewProject: "New project",
    leadLabel: "Lead",
    assignLeadPlaceholder: "Assign lead...",
    noLead: "No lead",
    projectCreated: "Project created",
  },
  createWorkspace: {
    title: "Create workspace",
    submit: "Create workspace",
    description: "Workspaces are shared environments where teams can work on projects and issues.",
    back: "Back",
  },
};
