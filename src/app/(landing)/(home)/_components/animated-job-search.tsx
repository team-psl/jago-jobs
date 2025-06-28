"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export function AnimatedJobSearch() {
  // Animation variants for staggered entrance
  const groupVariant = (i: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" as const, stiffness: 60 },
    },
  })

  // Floating/bounce animation for floating elements and icons
  const floatTransition = {
    y: [0, -10, 0],
    transition: { repeat: Infinity, repeatType: "loop" as const, duration: 2, ease: [0.4, 0, 0.2, 1] as const },
  }
  const bounceTransition = {
    y: [0, -8, 0],
    transition: { repeat: Infinity, repeatType: "loop" as const, duration: 1.2, ease: [0.4, 0, 0.2, 1] as const },
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <motion.svg
        viewBox="0 0 500 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Circle */}
        <circle cx="250" cy="200" r="180" fill="url(#backgroundGradient)" className="animate-pulse" />

        {/* Person 1 - Left */}
        <motion.g
          variants={groupVariant(0)}
          initial="hidden"
          animate="visible"
        >
          <circle cx="180" cy="150" r="25" fill="url(#skinGradient)" />
          <rect x="160" y="175" width="40" height="60" rx="20" fill="url(#shirtGradient1)" />
          <rect x="165" y="235" width="30" height="40" rx="15" fill="url(#pantsGradient)" />
          <circle cx="175" cy="140" r="15" fill="url(#hairGradient1)" />
          {/* Briefcase */}
          <motion.rect
            x="200"
            y="190"
            width="25"
            height="18"
            rx="3"
            fill="url(#briefcaseGradient)"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.g>

        {/* Person 2 - Center */}
        <motion.g
          variants={groupVariant(1)}
          initial="hidden"
          animate="visible"
        >
          <circle cx="250" cy="160" r="28" fill="url(#skinGradient2)" />
          <rect x="225" y="188" width="50" height="70" rx="25" fill="url(#shirtGradient2)" />
          <rect x="235" y="258" width="30" height="45" rx="15" fill="url(#pantsGradient2)" />
          <ellipse cx="250" cy="145" rx="20" ry="12" fill="url(#hairGradient2)" />
          {/* Laptop */}
          <motion.rect
            x="220"
            y="200"
            width="60"
            height="35"
            rx="5"
            fill="url(#laptopGradient)"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 2, ease: [0.4, 0, 0.2, 1] }}
          />
          <rect x="225" y="205" width="50" height="25" rx="2" fill="#1e293b" />
        </motion.g>

        {/* Person 3 - Right */}
        <motion.g
          variants={groupVariant(2)}
          initial="hidden"
          animate="visible"
        >
          <circle cx="320" cy="170" r="24" fill="url(#skinGradient3)" />
          <rect x="300" y="194" width="40" height="55" rx="20" fill="url(#shirtGradient3)" />
          <rect x="305" y="249" width="30" height="40" rx="15" fill="url(#pantsGradient3)" />
          <circle cx="320" cy="160" r="18" fill="url(#hairGradient3)" />
          {/* Phone */}
          <motion.rect
            x="340"
            y="185"
            width="12"
            height="20"
            rx="6"
            fill="url(#phoneGradient)"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.g>

        {/* Floating Elements */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 2, ease: [0.4, 0, 0.2, 1] }}
        >
          <circle cx="150" cy="100" r="8" fill="url(#floatingGradient1)" opacity="0.7" />
          <circle cx="350" cy="80" r="6" fill="url(#floatingGradient2)" opacity="0.7" />
          <circle cx="380" cy="120" r="10" fill="url(#floatingGradient3)" opacity="0.7" />
        </motion.g>

        {/* Job Icons Floating */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <rect x="100" y="120" width="20" height="20" rx="4" fill="url(#iconGradient1)" />
          <rect x="380" y="160" width="18" height="18" rx="4" fill="url(#iconGradient2)" />
          <rect x="120" y="280" width="22" height="22" rx="4" fill="url(#iconGradient3)" />
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="skinGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>

          <linearGradient id="skinGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="shirtGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          <linearGradient id="shirtGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          <linearGradient id="shirtGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="pantsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          <linearGradient id="pantsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>

          <linearGradient id="pantsGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>

          <linearGradient id="hairGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="hairGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          <linearGradient id="hairGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c2d12" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>

          <linearGradient id="briefcaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>

          <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          <linearGradient id="floatingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <linearGradient id="floatingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="floatingGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
