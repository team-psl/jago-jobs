"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Stay{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Updated</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Subscribe to our newsletter and never miss the latest job openings or career tips.
          </p>

          <form
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks for subscribing!")
            }}
          >
            <div className="relative w-full sm:max-w-sm">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="pl-10 h-12 border-2 border-border focus:border-primary transition-all bg-background"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 transition-all">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
