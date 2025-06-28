'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor, Palette, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';


const colorSchemes = [
  {
    name: 'Red (Default)',
    primary: 'oklch(0.637 0.237 25.331)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    description: 'Bold and energetic',
  },
  {
    name: 'Rose',
    primary: 'oklch(0.645 0.246 16.439)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    description: 'Romantic and soft',
  },
  {
    name: 'Orange',
    primary: 'oklch(0.705 0.213 47.604)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    description: 'Warm and friendly',
  },
  {
    name: 'Blue',
    primary: 'oklch(0.623 0.214 259.815)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    description: 'Professional and trustworthy',
  },  
  {
    name: 'Yellow',
    primary: 'oklch(0.795 0.184 86.047)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    description: 'Bright and cheerful',
  },
  {
    name: 'Violet',
    primary: 'oklch(0.606 0.25 292.717)',
    primaryForeground: 'oklch(0.969 0.015 12.422)',
    description: 'Creative and modern',
  },
];


export function EnhancedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentColorScheme, setCurrentColorScheme] = useState('red');

  useEffect(() => {
    setMounted(true);
    // Get current color scheme from localStorage or default to red
    const savedScheme = localStorage.getItem('color-scheme') || 'red';
    setCurrentColorScheme(savedScheme);
  }, []);

  const applyColorScheme = (scheme: string) => {
    const root = document.documentElement;
    const colorConfig = colorSchemes.find((c) => c.name === scheme);

    if (colorConfig) {
      // Update CSS custom properties
      root.style.setProperty('--primary', colorConfig.primary);
      root.style.setProperty('--ring', colorConfig.primary);
      
      // Save to localStorage
      localStorage.setItem('color-scheme', scheme);
      setCurrentColorScheme(scheme);
    }
  };

  if (!mounted) {
    return null;
  }

  const currentScheme = colorSchemes.find(
    (s) => s.name === currentColorScheme
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent border-border hover:bg-accent relative w-10 h-10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <div
            className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background"
            style={{ backgroundColor: currentScheme?.primary }}
          />
          <span className="sr-only">Toggle theme and colors</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-card border">
        <DropdownMenuLabel className="text-foreground">
          Theme Mode
        </DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`cursor-pointer ${theme === 'light' ? 'bg-accent' : ''}`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
          {theme === 'light' && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`cursor-pointer ${theme === 'dark' ? 'bg-accent' : ''}`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
          {theme === 'dark' && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`cursor-pointer ${theme === 'system' ? 'bg-accent' : ''}`}
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
          {theme === 'system' && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-foreground flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Color Scheme
        </DropdownMenuLabel>

        {colorSchemes.map((scheme) => (
          <DropdownMenuItem
            key={scheme.name}
            onClick={() => applyColorScheme(scheme.name)}
            className={`cursor-pointer ${
              currentColorScheme === scheme.name ? 'bg-accent' : ''
            }`}
          >
            <div className="flex items-center gap-3 w-full">
              <div
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: scheme.primary }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{scheme.name}</span>
                  {scheme.name === 'Red (Default)' && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0">
                      Default
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {scheme.description}
                </p>
              </div>
              {currentColorScheme === scheme.name && (
                <Check className="h-4 w-4" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
