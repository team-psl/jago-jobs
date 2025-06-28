import type React from 'react';
import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'JagoJobs - Find Your Dream Job in Bangladesh',
  description:
    "Bangladesh's leading job portal. Discover thousands of job opportunities, get career advice, and connect with top employers across Bangladesh.",
  keywords:
    'jobs bangladesh, career, employment, hiring, job search, dhaka jobs, chittagong jobs',
  authors: [{ name: 'JagoJobs Team' }],
  openGraph: {
    title: 'JagoJobs - Find Your Dream Job in Bangladesh',
    description: 'Discover thousands of job opportunities across Bangladesh',
    url: 'https://jagojobs.com',
    siteName: 'JagoJobs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JagoJobs - Job Portal Bangladesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JagoJobs - Find Your Dream Job in Bangladesh',
    description: 'Discover thousands of job opportunities across Bangladesh',
    images: ['/og-image.jpg'],
  },
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Header isHomePage={true} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
