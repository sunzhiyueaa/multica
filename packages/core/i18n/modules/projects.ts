import type { DashboardDict } from "../types";

export const projects: DashboardDict["projects"] = {
  status: {
    planning: "Planning",
    active: "Active",
    completed: "Completed",
    archived: "Archived",
    onHold: "On Hold",
  },
  priority: {
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low",
  },
  actions: {
    newProject: "New Project",
    editProject: "Edit Project",
    deleteProject: "Delete Project",
    archiveProject: "Archive Project",
  },
};
