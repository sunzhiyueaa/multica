import type { DashboardDict } from "../types";

export const settings: DashboardDict["settings"] = {
  tabs: {
    profile: "Profile",
    appearance: "Appearance",
    tokens: "API Tokens",
    general: "General",
    repositories: "Repositories",
    members: "Members",
  },
  language: {
    title: "Language",
    description: "Choose your preferred language",
  },
  profile: {
    name: "Name",
    email: "Email",
    avatar: "Avatar",
  },
  appearance: {
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
  },
  tokens: {
    title: "API Tokens",
    createNew: "Create new token",
    noTokens: "No tokens yet",
  },
  workspace: {
    name: "Workspace name",
    slug: "URL slug",
  },
};
