import type { DashboardDict } from "../types";

export const agents: DashboardDict["agents"] = {
  status: {
    online: "Online",
    offline: "Offline",
    busy: "Busy",
  },
  tasks: {
    assigned: "Assigned tasks",
    completed: "Completed tasks",
    failed: "Failed tasks",
  },
  fields: {
    type: "Type",
    runtime: "Runtime",
    capabilities: "Capabilities",
  },
};
