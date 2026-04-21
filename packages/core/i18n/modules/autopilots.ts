import type { DashboardDict } from "../types";

export const autopilots: DashboardDict["autopilots"] = {
  status: {
    idle: "Idle",
    running: "Running",
    paused: "Paused",
    error: "Error",
  },
  trigger: {
    manual: "Manual",
    scheduled: "Scheduled",
    webhook: "Webhook",
    event: "Event",
  },
  actions: {
    run: "Run",
    pause: "Pause",
    resume: "Resume",
    configure: "Configure",
  },
};
