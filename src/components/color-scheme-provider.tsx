'use client';

import { useEffect } from 'react';

const colorSchemes = {
  red: {
    primary: 'oklch(0.637 0.237 25.331)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    ring: 'oklch(0.637 0.237 25.331)',
  },
  rose: {
    primary: 'oklch(0.645 0.246 16.439)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    ring: 'oklch(0.645 0.246 16.439)',
  },
  orange: {
    primary: 'oklch(0.705 0.213 47.604)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    ring: 'oklch(0.705 0.213 47.604)',
  },
  blue: {
    primary: 'oklch(0.623 0.214 259.815)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    ring: 'oklch(0.623 0.214 259.815)',
  },
  yellow: {
    primary: 'oklch(0.795 0.184 86.047)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    ring: 'oklch(0.795 0.184 86.047)',
  },
  violet: {
    primary: 'oklch(0.606 0.25 292.717)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    ring: 'oklch(0.606 0.25 292.717)',
  },
};

export function ColorSchemeProvider() {
  useEffect(() => {
    // Apply saved color scheme on mount
    const savedScheme = localStorage.getItem('color-scheme') || 'red';
    applyColorScheme(savedScheme);

    // Listen for storage changes (for cross-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'color-scheme' && e.newValue) {
        applyColorScheme(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const applyColorScheme = (scheme: string) => {
    const root = document.documentElement;
    const colors = colorSchemes[scheme as keyof typeof colorSchemes];

    if (colors) {
      root.style.setProperty('--primary', colors.primary);
      root.style.setProperty('--primary-foreground', colors.primaryForeground);
      root.style.setProperty('--ring', colors.ring);
    }
  };

  return null;
}
