import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';
import React from 'react';

export default function SiteBrandCentered({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-4 overflow-hidden', className)}>
      <div className="flex items-center space-x-2 shrink-0">
        <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary">
          <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
        </div>
        <span className="text-lg sm:text-xl font-bold">
          Jago<span className="text-primary">Jobs</span>
        </span>
      </div>
    </div>
  );
}
