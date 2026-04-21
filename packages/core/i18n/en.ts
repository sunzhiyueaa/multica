import type { DashboardDict } from "./types";
import { common } from "./modules/common";
import { sidebar } from "./modules/sidebar";
import { issues } from "./modules/issues";
import { projects } from "./modules/projects";
import { autopilots } from "./modules/autopilots";
import { agents } from "./modules/agents";
import { runtimes } from "./modules/runtimes";
import { settings } from "./modules/settings";
import { inbox } from "./modules/inbox";
import { search } from "./modules/search";
import { chat } from "./modules/chat";
import { modals } from "./modules/modals";
import { editor } from "./modules/editor";
import { layout } from "./modules/layout";
import { auth } from "./modules/auth";
import { myIssues } from "./modules/my-issues";
import { skills } from "./modules/skills";

export const en: DashboardDict = {
  common,
  sidebar,
  issues,
  projects,
  autopilots,
  agents,
  runtimes,
  settings,
  inbox,
  search,
  chat,
  modals,
  editor,
  myIssues,
  layout,
  auth,
  skills,
};
