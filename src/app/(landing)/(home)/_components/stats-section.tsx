"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Users, Briefcase, Award, Building2, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"

const stats = [
  {
    icon: Briefcase,
    value: 15000,
    label: "Active Jobs",
    suffix: "+",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Building2,
    value: 8500,
    label: "Companies",
    suffix: "+",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    value: 100000,
    label: "Job Seekers",
    suffix: "+",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Award,
    value: 95,
    label: "Success Rate",
    suffix: "%",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: MapPin,
    value: 64,
    label: "Districts Covered",
    suffix: "",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: TrendingUp,
    value: 250,
    label: "Daily Hires",
    suffix: "+",
    color: "from-indigo-500 to-purple-600",
  },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="stats-section" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join Bangladesh's fastest-growing job platform and be part of our success story
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-md hover:shadow-lg border border-border hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  whileHover={{ opacity: 0.1 }}
                />

                <div className="relative">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>

                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-foreground">
                      {isInView ? <CountUp end={stat.value} /> : 0}
                      <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
