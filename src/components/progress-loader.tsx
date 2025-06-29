'use client';

import { ProgressProvider } from '@bprogress/next/app';
// import { useTheme } from "next-themes";

export default function ProgressLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { theme } = useTheme()
  return (
    <ProgressProvider
      height="3px"
      color={'#fb2c36'}
      options={{ showSpinner: false }}
      shallowRouting
      delay={70}
    >
      {children}
    </ProgressProvider>
  );
}
