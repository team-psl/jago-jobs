"use client"

import { motion } from "framer-motion"
import { Search, FileText, Handshake, Trophy } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search & Discover",
    description: "Browse thousands of job opportunities tailored to your skills and preferences",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: FileText,
    title: "Apply with Ease",
    description: "Submit your application with our streamlined process and track your progress",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Handshake,
    title: "Connect & Interview",
    description: "Get matched with employers and showcase your talents in interviews",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Trophy,
    title: "Land Your Dream Job",
    description: "Celebrate your success and start your new career journey with confidence",
    color: "from-orange-500 to-red-600",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const stepVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    }
  },
}



const iconVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    }
  }
}

export function HowItWorks() {
  return (
    <section className="py-20 bg-linear-to-br from-muted/20 via-background to-muted/10">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            How It{" "}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your journey to the perfect job is just four simple steps away
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - more visible in light mode */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-primary/10 via-primary/20 to-primary/10 dark:from-primary/20 dark:via-primary/30 dark:to-primary/20 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.div 
            className="grid gap-8 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  className="relative group"
                  variants={stepVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >

                  <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg border border-border hover:border-primary/20 transition-all duration-300 mt-6 lg:mt-0">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-r ${step.color} mb-6 shadow-sm`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
