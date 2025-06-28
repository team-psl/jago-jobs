"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, ExternalLink, Star, Bookmark, Eye, Users, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Bangladesh",
    location: "Dhaka",
    type: "Full-time",
    salary: "৳80K - ৳120K",
    posted: "2h ago",
    logo: "/placeholder.svg?height=48&width=48",
    tags: ["React", "Node.js", "TypeScript"],
    urgent: true,
    featured: true,
    rating: 4.8,
    applicants: 45,
    views: 1200,
    trending: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio Pro",
    location: "Chittagong",
    type: "Full-time",
    salary: "৳60K - ৳90K",
    posted: "1d ago",
    logo: "/placeholder.svg?height=48&width=48",
    tags: ["Figma", "UI/UX", "Prototyping"],
    urgent: false,
    featured: true,
    rating: 4.9,
    applicants: 32,
    views: 890,
    trending: false,
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "Growth Agency BD",
    location: "Dhaka",
    type: "Full-time",
    salary: "৳70K - ৳100K",
    posted: "3h ago",
    logo: "/placeholder.svg?height=48&width=48",
    tags: ["Digital Marketing", "SEO", "Analytics"],
    urgent: true,
    featured: true,
    rating: 4.7,
    applicants: 28,
    views: 650,
    trending: true,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Dhaka",
    type: "Remote",
    salary: "৳90K - ৳140K",
    posted: "5h ago",
    logo: "/placeholder.svg?height=48&width=48",
    tags: ["Python", "ML", "SQL"],
    urgent: false,
    featured: true,
    rating: 4.8,
    applicants: 89,
    views: 1500,
    trending: true,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Sylhet",
    type: "Full-time",
    salary: "৳75K - ৳110K",
    posted: "1d ago",
    logo: "/placeholder.svg?height=48&width=48",
    tags: ["AWS", "Docker", "K8s"],
    urgent: false,
    featured: true,
    rating: 4.6,
    applicants: 23,
    views: 420,
    trending: false,
  },
  {
    id: 6,
    title: "Business Analyst",
    company: "Finance Corp",
    location: "Dhaka",
    type: "Full-time",
    salary: "৳55K - ৳85K",
    posted: "6h ago",
    logo: "/placeholder.svg?height=48&width=48",
    tags: ["Excel", "SQL", "BI"],
    urgent: true,
    featured: false,
    rating: 4.5,
    applicants: 67,
    views: 780,
    trending: false,
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
  },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    }
  },
  tap: {
    scale: 0.95,
  }
}

export function FeaturedJobs() {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-3">
            <Zap className="h-3.5 w-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wide">Hot Jobs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Top Jobs Right Now</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Premium opportunities from Bangladesh's leading companies
          </p>
        </motion.div>

        {/* Job Cards Grid */}
        <motion.div 
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="group"
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="relative h-full bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-lg object-cover border"
                        />
                        {job.featured && (
                          <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full p-0.5">
                            <Star className="w-2.5 h-2.5 fill-current" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground text-sm leading-tight truncate group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          {job.trending && (
                            <div className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-primary text-white px-1.5 py-0.5 rounded text-xs font-medium">
                              🔥
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{job.company}</p>
                      </div>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-col gap-1 items-end flex-shrink-0">
                      {job.urgent && (
                        <Badge className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xs px-2 py-0.5 animate-pulse">
                          Urgent
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{job.posted}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="font-bold text-green-600 dark:text-green-400 text-sm">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span>{job.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{job.applicants}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{job.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {job.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex-1"
                    >
                      <Button asChild size="sm" className="w-full h-8 text-xs font-medium">
                        <Link href={`/jobs/${job.id}`}>
                          Apply Now
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 border hover:border-primary hover:bg-primary/5 bg-transparent"
                      >
                        <Bookmark className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Zap className="mr-2 h-4 w-4" />
              View All Premium Jobs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
