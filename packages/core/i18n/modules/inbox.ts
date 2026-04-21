import type { DashboardDict } from "../types";

export const inbox: DashboardDict["inbox"] = {
  filters: {
    all: "All",
    assigned: "Assigned to me",
    mentioned: "Mentioned",
    subscribed: "Subscribed",
  },
  actions: {
    markRead: "Mark as read",
    markUnread: "Mark as unread",
    archive: "Archive",
  },
};
