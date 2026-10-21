"use client";

import { useSyncExternalStore } from "react";
import {
  readServerTheme,
  readTheme,
  subscribeTheme,
  type ThemeMode,
  writeTheme,
} from "@/lib/theme";

export function useThemeMode() {
  const mode = useSyncExternalStore(subscribeTheme, readTheme, readServerTheme);

  const setMode = (next: ThemeMode) => writeTheme(next);
  const toggle = () => writeTheme(mode === "dark" ? "light" : "dark");

  return { mode, setMode, toggle };
}
