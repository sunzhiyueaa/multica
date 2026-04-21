"use client";

import { STATUS_CONFIG, PRIORITY_CONFIG } from "@multica/core/issues/config";
import { useActorName } from "@multica/core/workspace/hooks";
import { useLocale, type DashboardDict } from "@multica/core/i18n";
import { StatusIcon, PriorityIcon } from "../../issues/components";
import type { InboxItem, InboxItemType, IssueStatus, IssuePriority } from "@multica/core/types";

export function getTypeLabel(t: DashboardDict, type: InboxItemType): string {
  const { notification } = t.inbox;
  switch (type) {
    case "issue_assigned":
      return notification.issueAssigned;
    case "unassigned":
      return notification.unassigned;
    case "assignee_changed":
      return notification.assigneeChanged;
    case "status_changed":
      return notification.statusChanged;
    case "priority_changed":
      return notification.priorityChanged;
    case "due_date_changed":
      return notification.dueDateChanged;
    case "new_comment":
      return notification.newComment;
    case "mentioned":
      return notification.mentioned;
    case "review_requested":
      return notification.reviewRequested;
    case "task_completed":
      return notification.taskCompleted;
    case "task_failed":
      return notification.taskFailed;
    case "agent_blocked":
      return notification.agentBlocked;
    case "agent_completed":
      return notification.agentCompleted;
    case "reaction_added":
      return notification.reactionAdded;
    default:
      return type;
  }
}

function shortDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function InboxDetailLabel({ item }: { item: InboxItem }) {
  const { getActorName } = useActorName();
  const { t } = useLocale();
  const { labels } = t.inbox;
  const details = item.details ?? {};

  switch (item.type) {
    case "status_changed": {
      if (!details.to) return <span>{getTypeLabel(t, item.type)}</span>;
      const label = STATUS_CONFIG[details.to as IssueStatus]?.label ?? details.to;
      return (
        <span className="inline-flex items-center gap-1">
          {labels.setStatusTo}
          <StatusIcon status={details.to as IssueStatus} className="h-3 w-3" />
          {label}
        </span>
      );
    }
    case "priority_changed": {
      if (!details.to) return <span>{getTypeLabel(t, item.type)}</span>;
      const label = PRIORITY_CONFIG[details.to as IssuePriority]?.label ?? details.to;
      return (
        <span className="inline-flex items-center gap-1">
          {labels.setPriorityTo}
          <PriorityIcon priority={details.to as IssuePriority} className="h-3 w-3" />
          {label}
        </span>
      );
    }
    case "issue_assigned": {
      if (details.new_assignee_id) {
        return <span>{labels.assignedTo} {getActorName(details.new_assignee_type ?? "member", details.new_assignee_id)}</span>;
      }
      return <span>{getTypeLabel(t, item.type)}</span>;
    }
    case "unassigned":
      return <span>{labels.removedAssignee}</span>;
    case "assignee_changed": {
      if (details.new_assignee_id) {
        return <span>{labels.assignedTo} {getActorName(details.new_assignee_type ?? "member", details.new_assignee_id)}</span>;
      }
      return <span>{getTypeLabel(t, item.type)}</span>;
    }
    case "due_date_changed": {
      if (details.to) return <span>{labels.setDueDateTo} {shortDate(details.to)}</span>;
      return <span>{labels.removedDueDate}</span>;
    }
    case "new_comment": {
      if (item.body) return <span>{item.body}</span>;
      return <span>{getTypeLabel(t, item.type)}</span>;
    }
    case "reaction_added": {
      const emoji = details.emoji;
      if (emoji) return <span>{labels.reactedToComment} {emoji}</span>;
      return <span>{getTypeLabel(t, item.type)}</span>;
    }
    default:
      return <span>{getTypeLabel(t, item.type) ?? item.type}</span>;
  }
}
