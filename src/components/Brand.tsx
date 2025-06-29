/* eslint-disable @next/next/no-img-element */
'use client';

import { cn } from "@/lib/utils";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Brand({className}: {className?: string}) {
  const { theme } = useTheme();
  const [clientLoaded, setClientLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
    // Add a small delay to trigger the animation after client loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!clientLoaded) {
    return <div className={cn('w-36 md:w-44 h-15 flex items-center justify-center', className)}></div>;
  }

  return (
    <div className={cn('w-36 md:w-44 h-15 flex items-center justify-center', className)}>
      <img
        src={
          theme === 'dark'
            ? '/jagojobs-logo-dark.png'
            : '/jagojobs-logo-light.png'
        }
        alt="Logo"
        className={`w-full transition-all duration-300 linear ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
}
