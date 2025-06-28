"use client"

import { useEffect } from "react"

const colorSchemes = {
  red: {
    primary: "0 84% 60%",
    primaryForeground: "0 0% 98%",
  },
  blue: {
    primary: "221 83% 53%",
    primaryForeground: "0 0% 98%",
  },
  green: {
    primary: "142 76% 36%",
    primaryForeground: "0 0% 98%",
  },
  purple: {
    primary: "262 83% 58%",
    primaryForeground: "0 0% 98%",
  },
  orange: {
    primary: "25 95% 53%",
    primaryForeground: "0 0% 98%",
  },
}

export function ColorSchemeProvider() {
  useEffect(() => {
    // Apply saved color scheme on mount
    const savedScheme = localStorage.getItem("color-scheme") || "red"
    applyColorScheme(savedScheme)

    // Listen for storage changes (for cross-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "color-scheme" && e.newValue) {
        applyColorScheme(e.newValue)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const applyColorScheme = (scheme: string) => {
    const root = document.documentElement
    const colors = colorSchemes[scheme as keyof typeof colorSchemes]

    if (colors) {
      root.style.setProperty("--primary", colors.primary)
      root.style.setProperty("--primary-foreground", colors.primaryForeground)
      root.style.setProperty("--ring", colors.primary)
    }
  }

  return null
}
