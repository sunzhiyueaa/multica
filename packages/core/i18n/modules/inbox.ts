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
  page: {
    title: "Inbox",
    empty: "No notifications",
    emptyDescription: "Your inbox is empty",
    selectToView: "Select a notification to view details",
  },
  notification: {
    issueAssigned: "Assigned",
    unassigned: "Unassigned",
    assigneeChanged: "Assignee changed",
    statusChanged: "Status changed",
    priorityChanged: "Priority changed",
    dueDateChanged: "Due date changed",
    newComment: "New comment",
    mentioned: "Mentioned",
    reviewRequested: "Review requested",
    taskCompleted: "Task completed",
    taskFailed: "Task failed",
    agentBlocked: "Agent blocked",
    agentCompleted: "Agent completed",
    reactionAdded: "Reacted",
  },
  labels: {
    setStatusTo: "Set status to",
    setPriorityTo: "Set priority to",
    assignedTo: "Assigned to",
    removedAssignee: "Removed assignee",
    setDueDateTo: "Set due date to",
    removedDueDate: "Removed due date",
    reactedToComment: "Reacted to your comment",
  },
  time: {
    justNow: "just now",
  },
  toast: {
    markReadFailed: "Failed to mark as read",
    archiveFailed: "Failed to archive",
    markAllReadFailed: "Failed to mark all as read",
    archiveAllFailed: "Failed to archive all",
    archiveAllReadFailed: "Failed to archive read items",
    archiveCompletedFailed: "Failed to archive completed",
  },
  menu: {
    markAllRead: "Mark all as read",
    archiveAll: "Archive all",
    archiveAllRead: "Archive all read",
    archiveCompleted: "Archive completed",
  },
};
