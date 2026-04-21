import type { DashboardDict } from "../types";

export const runtimes: DashboardDict["runtimes"] = {
  status: {
    connected: "Connected",
    disconnected: "Disconnected",
    connecting: "Connecting...",
  },
  update: {
    available: "Update available",
    upToDate: "Up to date",
    downloading: "Downloading update...",
  },
  actions: {
    install: "Install",
    uninstall: "Uninstall",
    restart: "Restart",
  },
};
