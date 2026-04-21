import type { DashboardDict } from "../types";

export const editor: DashboardDict["editor"] = {
  // Format marks
  bold: "Bold",
  italic: "Italic",
  strike: "Strikethrough",
  code: "Code",
  link: "Link",
  // Block elements
  quote: "Quote",
  // Lists
  list: "List",
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  // Headings and text
  normalText: "Normal Text",
  heading1: "Heading 1",
  heading2: "Heading 2",
  heading3: "Heading 3",
  text: "Text",
  // Sub-issue
  createSubIssue: "Create sub-issue from selection",
  subIssueCreated: "Created {identifier}",
  subIssueCreateFailed: "Failed to create sub-issue",
};