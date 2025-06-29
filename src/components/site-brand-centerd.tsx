import { cn } from '@/lib/utils';
import React from 'react';
import Brand from "./Brand";

export default function SiteBrandCentered({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-4 overflow-hidden', className)}>
        <Brand className="w-48 h-15" />
    </div>
  );
}
