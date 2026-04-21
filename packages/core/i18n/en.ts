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
import { chat } from "./modules/chat";
import { modals } from "./modules/modals";

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
  chat,
  modals,
};
