import Link from "next/link"
import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Jago<span className="text-primary">Jobs</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Bangladesh&apos;s leading job portal connecting talented professionals with top employers across the country.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">For Job Seekers</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/jobs" className="text-muted-foreground hover:text-foreground">
                Browse Jobs
              </Link>
              <Link href="/resume-builder" className="text-muted-foreground hover:text-foreground">
                Resume Builder
              </Link>
              <Link href="/career-tips" className="text-muted-foreground hover:text-foreground">
                Career Tips
              </Link>
              <Link href="/salary-guide" className="text-muted-foreground hover:text-foreground">
                Salary Guide
              </Link>
              <Link href="/job-alerts" className="text-muted-foreground hover:text-foreground">
                Job Alerts
              </Link>
            </nav>
          </div>

          {/* Employers */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">For Employers</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/post-job" className="text-muted-foreground hover:text-foreground">
                Post a Job
              </Link>
              <Link href="/employer-dashboard" className="text-muted-foreground hover:text-foreground">
                Employer Dashboard
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                Pricing Plans
              </Link>
              <Link href="/talent-search" className="text-muted-foreground hover:text-foreground">
                Search Talent
              </Link>
              <Link href="/employer-resources" className="text-muted-foreground hover:text-foreground">
                Resources
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest job opportunities and career tips delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} JagoJobs. All rights reserved.</p>
            <nav className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
