import { cookies } from "next/headers";
import { LocaleProvider } from "@multica/core/i18n";
import type { Locale } from "@multica/core/i18n";
import { WorkspaceLayoutClient } from "./WorkspaceLayoutClient";

async function getInitialLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const stored = cookieStore.get("multica-locale")?.value;
  if (stored === "en" || stored === "zh") return stored;
  return "en";
}

export default async function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ workspaceSlug: string }>;
}) {
  const initialLocale = await getInitialLocale();
  const { workspaceSlug } = await params;

  return (
    <LocaleProvider initialLocale={initialLocale}>
      <WorkspaceLayoutClient workspaceSlug={workspaceSlug}>
        {children}
      </WorkspaceLayoutClient>
    </LocaleProvider>
  );
}
