"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Heart,
  GraduationCap,
  Building2,
  Landmark,
  MapPin,
  Clock,
  Calendar,
  Briefcase,
  Code,
  Stethoscope,
  Truck,
} from "lucide-react"
import Link from "next/link"

const jobCategories = [
  {
    title: "Female Jobs",
    icon: Users,
    count: 1250,
    description: "Opportunities specifically for women",
    color: "from-pink-500 to-rose-600",
    href: "/jobs/female",
  },
  {
    title: "NGO Jobs",
    icon: Heart,
    count: 890,
    description: "Non-profit and social impact roles",
    color: "from-emerald-500 to-green-600",
    href: "/jobs/ngo",
  },
  {
    title: "Diploma Jobs",
    icon: GraduationCap,
    count: 2100,
    description: "Positions for diploma holders",
    color: "from-blue-500 to-cyan-600",
    href: "/jobs/diploma",
  },
  {
    title: "Government Jobs",
    icon: Building2,
    count: 450,
    description: "Public sector opportunities",
    color: "from-red-600 to-red-700",
    href: "/jobs/government",
  },
  {
    title: "Bank Jobs",
    icon: Landmark,
    count: 320,
    description: "Banking and financial services",
    color: "from-orange-500 to-amber-600",
    href: "/jobs/bank",
  },
  {
    title: "Browse by Location",
    icon: MapPin,
    count: 8500,
    description: "Find jobs in your area",
    color: "from-cyan-500 to-teal-600",
    href: "/jobs/location",
  },
  {
    title: "Part Time Jobs",
    icon: Clock,
    count: 1800,
    description: "Flexible working arrangements",
    color: "from-yellow-500 to-orange-600",
    href: "/jobs/part-time",
  },
  {
    title: "Deadline Tonight",
    icon: Calendar,
    count: 95,
    description: "Apply before it's too late",
    color: "from-red-500 to-red-600",
    href: "/jobs/urgent",
  },
  {
    title: "IT & Software",
    icon: Code,
    count: 3200,
    description: "Technology and development roles",
    color: "from-indigo-500 to-purple-600",
    href: "/jobs/it",
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    count: 1100,
    description: "Medical and healthcare positions",
    color: "from-emerald-500 to-teal-600",
    href: "/jobs/healthcare",
  },
  {
    title: "Garments/Textile",
    icon: Truck,
    count: 2800,
    description: "Manufacturing and textile industry",
    color: "from-teal-500 to-cyan-600",
    href: "/jobs/garments",
  },
  {
    title: "Sales & Marketing",
    icon: Briefcase,
    count: 1950,
    description: "Business development roles",
    color: "from-red-500 to-red-700",
    href: "/jobs/sales",
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
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
  },
}

const iconVariants = {
  hover: {
    scale: 1.1,
  }
}

const badgeVariants = {
  hover: {
    scale: 1.05,
  }
}

export function JobCategories() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            Explore Job{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover opportunities across diverse industries and find the perfect match for your skills
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {jobCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Link href={category.href}>
                  <Card className="group h-full cursor-pointer bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Background Gradient - more subtle in light mode */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      <div className="relative flex flex-col items-center text-center space-y-4">
                        <motion.div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-md`}
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </motion.div>

                        <div className="space-y-3">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300 text-foreground">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                          <motion.div
                            variants={badgeVariants}
                            whileHover="hover"
                          >
                            <Badge
                              variant="secondary"
                              className={`text-xs font-semibold bg-gradient-to-r ${category.color} text-white border-0 shadow-sm`}
                            >
                              {category.count.toLocaleString()} jobs
                            </Badge>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Categories
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
