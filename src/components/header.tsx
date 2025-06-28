'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EnhancedThemeToggle } from '@/components/enhanced-theme-toggle';
import {
  Search,
  Menu,
  Briefcase,
  User,
  Building2,
  MapPin,
  Heart,
  GraduationCap,
  Landmark,
  Calendar,
  Clock,
  Users,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

export function Header({ isHomePage }: { isHomePage?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <>
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-5">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-bold">
              Jago<span className="text-primary">Jobs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ">
            <Link
              href="/"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              href="/career-tips"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Career Tips
            </Link>
            {/* Add more links as needed */}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          {/* Search Bar - Desktop */}

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <EnhancedThemeToggle />

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Job Seeker Login */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-2 bg-transparent text-xs sm:text-sm"
                  >
                    <User className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Job Seeker</span>
                    <span className="sm:hidden">Seeker</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/auth/seeker/signin"
                      className="flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/auth/seeker/signup"
                      className="flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Sign Up
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Recruiter Login */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="gap-2 text-xs sm:text-sm">
                    <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Recruiter</span>
                    <span className="sm:hidden">Hire</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/auth/recruiter/signin"
                      className="flex items-center gap-2"
                    >
                      <Building2 className="h-4 w-4" />
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/auth/recruiter/signup"
                      className="flex items-center gap-2"
                    >
                      <Building2 className="h-4 w-4" />
                      Sign Up
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full mt-7">
                  {/* Search */}
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search jobs..."
                        className="pl-10 h-10"
                      />
                    </div>
                  </div>

                  {/* Scrollable Navigation */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-4 space-y-6 pb-4">
                      {/* Main Navigation */}
                      <nav className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          Navigation
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">Home</span>
                          </Link>
                          <Link
                            href="/jobs"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Search className="h-4 w-4" />
                            <span className="font-medium">Browse Jobs</span>
                          </Link>
                          <Link
                            href="/career-tips"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium">Career Tips</span>
                          </Link>
                        </div>
                      </nav>

                      {/* Quick Links */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          Quick Links
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/browse/company"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">
                              Browse by Company
                            </span>
                          </Link>
                          <Link
                            href="/browse/category"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">
                              Browse by Category
                            </span>
                          </Link>
                          <Link
                            href="/browse/location"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">
                              Browse by Location
                            </span>
                          </Link>
                          <Link
                            href="/jobs/government"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">Government Jobs</span>
                          </Link>
                          <Link
                            href="/jobs/ngo"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Heart className="h-4 w-4" />
                            <span className="font-medium">NGO Jobs</span>
                          </Link>
                          <Link
                            href="/jobs/diploma"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium">Diploma Jobs</span>
                          </Link>
                          <Link
                            href="/jobs/female"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Users className="h-4 w-4" />
                            <span className="font-medium">Female Jobs</span>
                          </Link>
                          <Link
                            href="/jobs/bank"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Landmark className="h-4 w-4" />
                            <span className="font-medium">Bank Jobs</span>
                          </Link>
                          <Link
                            href="/jobs/part-time"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">Part Time Jobs</span>
                          </Link>
                          <Link
                            href="/jobs/urgent"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">
                              Deadline Tonight
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sticky Auth Buttons */}
                  <div className="sticky bottom-0 bg-background border-t p-4">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Account
                      </h3>

                      {/* Job Seekers */}
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-foreground">
                          Job Seekers
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="bg-transparent"
                          >
                            <Link
                              href="/auth/seeker/signin"
                              onClick={() => setIsOpen(false)}
                            >
                              Sign In
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="bg-transparent"
                          >
                            <Link
                              href="/auth/seeker/signup"
                              onClick={() => setIsOpen(false)}
                            >
                              Sign Up
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Recruiters */}
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-foreground">
                          Recruiters
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <Button size="sm" asChild>
                            <Link
                              href="/auth/recruiter/signin"
                              onClick={() => setIsOpen(false)}
                            >
                              Sign In
                            </Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link
                              href="/auth/recruiter/signup"
                              onClick={() => setIsOpen(false)}
                            >
                              Sign Up
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    {!isHomePage && <div className="h-16"></div>}
   </>
  );
}
