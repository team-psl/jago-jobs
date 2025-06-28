"use client"

import { useEffect, useState } from "react"

export function CareerTipsHeroAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeElement, setActiveElement] = useState(0)

  useEffect(() => {
    setIsAnimating(true)

    // Cycle through different elements
    const elementInterval = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % 4)
    }, 2500)

    // Floating animation
    const floatInterval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => setIsAnimating(true), 100)
    }, 4000)

    return () => {
      clearInterval(elementInterval)
      clearInterval(floatInterval)
    }
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px]">
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle cx="200" cy="200" r="160" fill="url(#backgroundGradient)" className="animate-pulse" opacity="0.1" />

        {/* Desk/Table */}
        <rect x="50" y="320" width="300" height="25" rx="12" fill="url(#deskGradient)" />
        <rect x="60" y="345" width="280" height="10" rx="5" fill="url(#shadowGradient)" opacity="0.3" />

        {/* Monitor/Screen */}
        <g className={`transition-transform duration-1000 ${isAnimating ? "translate-y-1" : ""}`}>
          {/* Monitor Stand */}
          <rect x="190" y="280" width="20" height="40" rx="2" fill="url(#standGradient)" />
          <rect x="170" y="315" width="60" height="8" rx="4" fill="url(#standGradient)" />

          {/* Monitor Screen */}
          <rect x="120" y="180" width="160" height="100" rx="8" fill="url(#monitorGradient)" />
          <rect x="125" y="185" width="150" height="90" rx="4" fill="#1a202c" />

          {/* Screen Content - Career Dashboard */}
          <rect x="130" y="190" width="140" height="80" rx="2" fill="url(#screenGradient)" />

          {/* Dashboard Elements */}
          <rect x="135" y="195" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.9)" />
          <rect x="135" y="202" width="70" height="2" rx="1" fill="rgba(255,255,255,0.7)" />
          <rect x="135" y="208" width="60" height="2" rx="1" fill="rgba(255,255,255,0.7)" />

          {/* Progress Bars */}
          <rect x="135" y="220" width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="135" y="220" width="30" height="4" rx="2" fill="url(#progressGradient)" />

          <rect x="135" y="230" width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="135" y="230" width="35" height="4" rx="2" fill="url(#progressGradient2)" />

          {/* Chart */}
          <rect x="200" y="215" width="60" height="40" rx="2" fill="rgba(255,255,255,0.1)" />
          <path
            d="M205 245 L215 235 L225 240 L235 225 L245 230 L255 220"
            stroke="url(#chartGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Keyboard */}
        <g className={`transition-transform duration-1000 delay-200 ${isAnimating ? "translate-x-1" : ""}`}>
          <rect x="140" y="290" width="120" height="25" rx="4" fill="url(#keyboardGradient)" />
          {/* Keys */}
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x={145 + (i % 6) * 18}
              y={295 + Math.floor(i / 6) * 8}
              width="15"
              height="6"
              rx="1"
              fill="rgba(255,255,255,0.8)"
            />
          ))}
        </g>

        {/* Mouse */}
        <g className={`transition-transform duration-1000 delay-300 ${isAnimating ? "-translate-y-0.5" : ""}`}>
          <ellipse cx="280" cy="300" rx="12" ry="18" fill="url(#mouseGradient)" />
          <rect x="278" y="290" width="4" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
        </g>

        {/* Coffee Cup */}
        <g className={`transition-transform duration-1000 delay-400 ${isAnimating ? "translate-x-1" : ""}`}>
          <ellipse cx="320" cy="305" rx="15" ry="10" fill="url(#cupGradient)" />
          <rect x="305" y="285" width="30" height="20" rx="15" fill="url(#cupGradient)" />
          <ellipse cx="320" cy="285" rx="15" ry="4" fill="url(#coffeeGradient)" />

          {/* Steam */}
          <path
            d="M315 275 Q315 270 317 270 Q317 275 315 275"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M320 273 Q320 268 322 268 Q322 273 320 273"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse delay-300"
          />
          <path
            d="M325 275 Q325 270 327 270 Q327 275 325 275"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse delay-500"
          />
        </g>

        {/* Notebook/Planner */}
        <g className={`transition-transform duration-1000 delay-500 ${isAnimating ? "-translate-y-1" : ""}`}>
          <rect x="80" y="280" width="50" height="35" rx="3" fill="url(#notebookGradient)" />
          <rect x="85" y="285" width="40" height="25" rx="1" fill="white" />
          {/* Lines on notebook */}
          <rect x="88" y="290" width="34" height="1" fill="rgba(0,0,0,0.2)" />
          <rect x="88" y="295" width="30" height="1" fill="rgba(0,0,0,0.2)" />
          <rect x="88" y="300" width="32" height="1" fill="rgba(0,0,0,0.2)" />

          {/* Pen */}
          <rect
            x="125"
            y="275"
            width="3"
            height="25"
            rx="1.5"
            fill="url(#penGradient)"
            transform="rotate(15 126.5 287.5)"
          />
        </g>

        {/* Floating Knowledge Elements */}
        <g className="animate-float">
          {/* Skills Badge */}
          <g className={`transition-opacity duration-500 ${activeElement === 0 ? "opacity-100" : "opacity-40"}`}>
            <circle cx="100" cy="120" r="20" fill="url(#skillsGradient)" />
            <text x="100" y="115" fontSize="8" fill="white" textAnchor="middle" className="font-bold">
              SKILLS
            </text>
            <text x="100" y="125" fontSize="6" fill="white" textAnchor="middle">
              +95%
            </text>
          </g>

          {/* Career Growth Arrow */}
          <g className={`transition-opacity duration-500 ${activeElement === 1 ? "opacity-100" : "opacity-40"}`}>
            <circle cx="320" cy="100" r="20" fill="url(#growthGradient)" />
            <path
              d="M310 105 L320 95 L330 105 M320 95 L320 110"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Resume/CV Icon */}
          <g className={`transition-opacity duration-500 ${activeElement === 2 ? "opacity-100" : "opacity-40"}`}>
            <circle cx="80" cy="200" r="20" fill="url(#resumeGradient)" />
            <rect x="72" y="192" width="16" height="20" rx="2" fill="white" />
            <rect x="75" y="196" width="10" height="1" fill="url(#resumeGradient)" />
            <rect x="75" y="199" width="8" height="1" fill="url(#resumeGradient)" />
            <rect x="75" y="202" width="9" height="1" fill="url(#resumeGradient)" />
            <rect x="75" y="205" width="7" height="1" fill="url(#resumeGradient)" />
          </g>

          {/* Interview Success */}
          <g className={`transition-opacity duration-500 ${activeElement === 3 ? "opacity-100" : "opacity-40"}`}>
            <circle cx="340" cy="220" r="20" fill="url(#interviewGradient)" />
            <path
              d="M332 220 L338 226 L348 214"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="340" cy="220" r="12" stroke="white" strokeWidth="1.5" fill="none" />
          </g>
        </g>

        {/* Article/Tips Cards */}
        <g className="animate-float">
          <rect x="50" y="60" width="40" height="30" rx="6" fill="url(#cardGradient1)" className="animate-pulse" />
          <rect x="53" y="66" width="34" height="2" rx="1" fill="white" opacity="0.9" />
          <rect x="53" y="71" width="28" height="1" rx="0.5" fill="white" opacity="0.7" />
          <rect x="53" y="75" width="30" height="1" rx="0.5" fill="white" opacity="0.7" />
          <rect x="53" y="79" width="25" height="1" rx="0.5" fill="white" opacity="0.7" />

          <rect
            x="310"
            y="350"
            width="40"
            height="30"
            rx="6"
            fill="url(#cardGradient2)"
            className="animate-pulse delay-500"
          />
          <rect x="313" y="356" width="34" height="2" rx="1" fill="white" opacity="0.9" />
          <rect x="313" y="361" width="28" height="1" rx="0.5" fill="white" opacity="0.7" />
          <rect x="313" y="365" width="30" height="1" rx="0.5" fill="white" opacity="0.7" />
          <rect x="313" y="369" width="25" height="1" rx="0.5" fill="white" opacity="0.7" />
        </g>

        {/* Success Notification */}
        <g className="animate-float delay-1000">
          <circle cx="360" cy="160" r="12" fill="url(#successGradient)" />
          <path
            d="M355 160 L359 164 L365 156"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b4513" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>

          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>

          <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d3748" />
            <stop offset="100%" stopColor="#1a202c" />
          </linearGradient>

          <linearGradient id="standGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a5568" />
            <stop offset="100%" stopColor="#2d3748" />
          </linearGradient>

          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="progressGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="keyboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>

          <linearGradient id="mouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>

          <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3f4f6" />
          </linearGradient>

          <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="notebookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="resumeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="interviewGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="cardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          <linearGradient id="cardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
