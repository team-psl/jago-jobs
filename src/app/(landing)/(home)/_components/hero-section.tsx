"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, TrendingUp, Users, Crown, ArrowRight } from "lucide-react"
import { ModernHeroAnimation } from "./modern-hero-animation"
import { motion } from "framer-motion"

export function HeroSection() {
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)

  const texts = ["Dream Job", "Perfect Career", "Next Opportunity", "Future Role"]

  // Typing animation effect with backspace
  useEffect(() => {
    const text = texts[textIndex]
    let currentIndex = 0
    let isDeleting = false

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex <= text.length) {
          setCurrentText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          // Finished typing, wait then start deleting
          clearInterval(typingInterval)
          setTimeout(() => {
            isDeleting = true
            const deleteInterval = setInterval(() => {
              if (currentIndex > 0) {
                currentIndex--
                setCurrentText(text.slice(0, currentIndex))
              } else {
                // Finished deleting, move to next word
                clearInterval(deleteInterval)
                setTextIndex((prev) => (prev + 1) % texts.length)
              }
            }, 50) // Faster deletion speed
          }, 2000) // Pause before deleting
        }
      }
    }, 100) // Typing speed

    return () => clearInterval(typingInterval)
  }, [textIndex])

  const handleSearch = () => {
    console.log("Searching for:", { jobTitle, location })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs - more subtle in light mode */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl animate-pulse delay-1000" />

        {/* Additional floating orbs */}
        <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-primary/10 dark:bg-primary/20 blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 h-24 w-24 rounded-full bg-primary/8 dark:bg-primary/15 blur-xl animate-float delay-500" />

        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-bounce opacity-40 dark:opacity-60`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 300}ms`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          >
            <div className={`h-2 w-2 rounded-full bg-primary/60`} />
          </div>
        ))}

        {/* Grid pattern overlay - lighter in light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container relative z-10 ">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              {/* Premium Badge - better contrast in light mode */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-yellow-300 animate-pulse" />
                  <span className="text-2xl">
                    <img src="https://cdn.ipwhois.io/flags/bd.svg" alt="Bangladesh" width={20} height={20} />
                  </span>
                </div>
                <div className="h-6 w-px bg-primary-foreground/40" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-wider">#1 JOB PORTAL</span>
                  <span className="text-xs opacity-90">IN BANGLADESH</span>
                </div>
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>

              {/* Properly Sized Heading - better contrast */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                  <span className="block text-foreground">Find Your</span>
                  <span className="block text-primary min-h-[1.2em] relative">
                    {currentText}
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 text-muted-foreground">
                    in Bangladesh
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
              >
                Join <span className="font-bold text-primary">100,000+</span> professionals who found their perfect
                career match. Discover opportunities, get expert advice, and connect with top employers.
              </motion.p>
            </div>

            {/* Clean Search Form - better light mode styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="w-full max-w-2xl"
            >
              <div className="bg-card rounded-2xl p-6 border shadow-lg dark:shadow-xl">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1">
                    <div className="relative group/input">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within/input:text-primary transition-colors duration-300" />
                      <Input
                        placeholder="Job title, skills, or company..."
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="pl-12 h-12 text-base border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl bg-background"
                      />
                    </div>
                  </div>
                  <div className="sm:w-56">
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="h-12 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl bg-background">
                        <div className="flex items-center">
                          <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
                          <SelectValue placeholder="Choose Location" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">Dhaka Division</SelectItem>
                        <SelectItem value="chittagong">Chittagong Division</SelectItem>
                        <SelectItem value="sylhet">Sylhet Division</SelectItem>
                        <SelectItem value="rajshahi">Rajshahi Division</SelectItem>
                        <SelectItem value="khulna">Khulna Division</SelectItem>
                        <SelectItem value="barisal">Barisal Division</SelectItem>
                        <SelectItem value="rangpur">Rangpur Division</SelectItem>
                        <SelectItem value="mymensingh">Mymensingh Division</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="w-full mt-4 h-12 text-base transition-all duration-300 transform hover:scale-[1.02] rounded-xl group"
                >
                  <Search className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Search Dream Jobs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>

            {/* Enhanced Stats - better visibility in light mode */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="flex flex-wrap gap-8 text-sm"
            >
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-400/50" />
                <span className="font-bold text-xl text-foreground">15,000+</span>
                <span className="text-muted-foreground font-medium">Active Jobs</span>
                <TrendingUp className="h-4 w-4 text-green-500 group-hover:animate-bounce" />
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse delay-300 shadow-sm shadow-blue-400/50" />
                <span className="font-bold text-xl text-foreground">8,500+</span>
                <span className="text-muted-foreground font-medium">Companies</span>
                <Briefcase className="h-4 w-4 text-blue-500 group-hover:animate-bounce" />
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse delay-500 shadow-sm shadow-primary/50" />
                <span className="font-bold text-xl text-foreground">100,000+</span>
                <span className="text-muted-foreground font-medium">Success Stories</span>
                <Users className="h-4 w-4 text-primary group-hover:animate-bounce" />
              </div>
            </motion.div>
          </motion.div>

          {/* Modern Animation */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="relative lg:order-last"
          >
            <ModernHeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
