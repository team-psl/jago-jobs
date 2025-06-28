'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ModernHeroAnimation() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(cardInterval);
  }, []);

  const jobCards = [
    {
      title: 'Senior Developer',
      company: 'TechCorp BD',
      salary: '৳120K',
      color: 'from-blue-500 to-blue-600',
      icon: '💻',
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      salary: '৳80K',
      color: 'from-purple-500 to-purple-600',
      icon: '🎨',
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Pro',
      salary: '৳150K',
      color: 'from-green-500 to-green-600',
      icon: '📊',
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[600px] opacity-85">
      {/* Background Elements */}
      <div className="absolute inset-0 ">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/30 rounded-2xl rotate-12"
          animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/30 rounded-full"
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/30 rounded-lg rotate-45"
          animate={{ y: [0, -8, 0], rotate: [45, 50, 45] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />
      </div>

      {/* Main Illustration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-2 left-1/3 transform">
          {jobCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : index * 8,
                scale: activeCard === index ? 1 : 0.9,
                x: activeCard === index ? 0 : index * 4,
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="absolute"
              style={{
                zIndex: activeCard === index ? 10 : 1,
              }}
            >
              <div
                className={`bg-gradient-to-r ${card.color} p-4 rounded-xl shadow-2xl text-white min-w-[180px] backdrop-blur-sm border border-white/20`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{card.icon}</span>
                  <h4 className="font-bold text-sm">{card.title}</h4>
                </div>
                <p className="text-xs opacity-90">{card.company}</p>
                <p className="text-lg font-bold mt-1">{card.salary}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative">
          {/* Job Seeker (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-20"
          >
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              className="drop-shadow-xl"
            >
              <g>
                <rect
                  x="70"
                  y="140"
                  width="60"
                  height="100"
                  rx="30"
                  fill="url(#suitGradient)"
                />
                <circle cx="100" cy="90" r="35" fill="url(#skinGradient)" />
                <path
                  d="M65 75 Q100 60 135 75 Q135 85 100 80 Q65 85 65 75"
                  fill="url(#hairGradient)"
                />
                <circle cx="90" cy="85" r="4" fill="#2d3748" />
                <circle cx="110" cy="85" r="4" fill="#2d3748" />
                <circle cx="91" cy="84" r="1.5" fill="white" />
                <circle cx="111" cy="84" r="1.5" fill="white" />
                <path
                  d="M90 100 Q100 110 110 100"
                  stroke="#2d3748"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="60"
                  cy="180"
                  rx="12"
                  ry="35"
                  fill="url(#skinGradient)"
                  transform="rotate(-15 60 180)"
                />
                <ellipse
                  cx="140"
                  cy="180"
                  rx="12"
                  ry="35"
                  fill="url(#skinGradient)"
                  transform="rotate(15 140 180)"
                />
                <motion.rect
                  x="75"
                  y="200"
                  width="50"
                  height="35"
                  rx="8"
                  fill="url(#briefcaseGradient)"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                />
                <rect
                  x="80"
                  y="205"
                  width="40"
                  height="25"
                  rx="4"
                  fill="#1a202c"
                />
                <rect
                  x="85"
                  y="210"
                  width="30"
                  height="15"
                  rx="2"
                  fill="url(#screenGradient)"
                />
              </g>
            </svg>
          </motion.div>

          {/* Recruiter (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-0 top-20"
          >
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              className="drop-shadow-xl"
            >
              <g>
                <ellipse
                  cx="100"
                  cy="190"
                  rx="35"
                  ry="80"
                  fill="url(#dressGradient)"
                />
                <circle cx="100" cy="90" r="35" fill="url(#skinGradient2)" />
                <path
                  d="M65 75 Q100 55 135 75 Q135 90 100 80 Q65 90 65 75"
                  fill="url(#hairGradient2)"
                />
                <circle cx="90" cy="85" r="4" fill="#2d3748" />
                <circle cx="110" cy="85" r="4" fill="#2d3748" />
                <circle cx="91" cy="84" r="1.5" fill="white" />
                <circle cx="111" cy="84" r="1.5" fill="white" />
                <path
                  d="M90 100 Q100 110 110 100"
                  stroke="#2d3748"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="60"
                  cy="170"
                  rx="12"
                  ry="35"
                  fill="url(#skinGradient2)"
                  transform="rotate(-15 60 170)"
                />
                <ellipse
                  cx="140"
                  cy="170"
                  rx="12"
                  ry="35"
                  fill="url(#skinGradient2)"
                  transform="rotate(15 140 170)"
                />
                <motion.rect
                  x="70"
                  y="200"
                  width="60"
                  height="40"
                  rx="8"
                  fill="url(#laptopGradient)"
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: 'easeInOut',
                  }}
                />
                <rect
                  x="75"
                  y="205"
                  width="50"
                  height="30"
                  rx="4"
                  fill="#1a202c"
                />
                <rect
                  x="80"
                  y="210"
                  width="40"
                  height="20"
                  rx="2"
                  fill="url(#screenGradient2)"
                />
              </g>
            </svg>
          </motion.div>

          {/* Central Connection */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
              <div className="text-4xl">🤝</div>
            </div>
          </motion.div>

          {/* Floating Job Cards */}

          {/* Success Indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -bottom-10 -right-10"
          >
            <div className="bg-green-500 text-white p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>

          {/* Notification Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-10 right-10"
          >
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              New Job!
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-10 left-10"
          >
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15K+</div>
                <div className="text-xs text-muted-foreground">Active Jobs</div>
              </div>
            </div>
          </motion.div>

          {/* Gradients */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="suitGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient
                id="dressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient
                id="skinGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient
                id="skinGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
              <linearGradient
                id="hairGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient
                id="hairGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
              <linearGradient
                id="briefcaseGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient
                id="laptopGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
              <linearGradient
                id="screenGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient
                id="screenGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
