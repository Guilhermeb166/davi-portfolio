"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { type ReactNode, useMemo } from "react";
import { useThemeMode } from "@/hooks/useThemeMode";

export function AppProviders({ children }: { children: ReactNode }) {
  const { mode } = useThemeMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
        typography: { fontFamily: "inherit" },
      }),
    [mode],
  );

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
