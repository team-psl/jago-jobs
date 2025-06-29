"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Rakib Hossain",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "JagoJobs helped me land my dream job in just two weeks. The process was seamless and the UI is fantastic!",
  },
  {
    name: "Nusrat Akter",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "The new design feels so fresh! I love the animations and how easy it is to browse jobs by category.",
  },
  {
    name: "Mahmudul Hasan",
    role: "HR Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "As an employer, posting jobs and finding the right candidates has never been this intuitive. Great work!",
  },
  {
    name: "Fatima Begum",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Found my perfect remote position through JagoJobs. The platform is incredibly user-friendly and modern!",
  },
  {
    name: "Ahmed Khan",
    role: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "The job matching algorithm is spot-on! I received relevant opportunities that perfectly matched my skills.",
  },
  {
    name: "Sadia Rahman",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote: "As a recruiter, the candidate filtering and communication tools have streamlined our hiring process significantly.",
  },
  {
    name: "Imran Ali",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    quote: "The application tracking feature is amazing. I can easily manage multiple job applications in one place.",
  },
  {
    name: "Aisha Chowdhury",
    role: "Content Writer",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    quote: "JagoJobs connected me with top-tier companies. The interview preparation resources were incredibly helpful.",
  },
  {
    name: "Zahid Islam",
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The salary insights and company reviews helped me make informed decisions about my career move.",
  },
  {
    name: "Nadia Sultana",
    role: "Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    quote: "Love the mobile app! I can search and apply for jobs on the go. The notifications keep me updated perfectly.",
  },
  {
    name: "Omar Farooq",
    role: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    quote: "The technical assessment integration is brilliant. It saves time for both candidates and employers.",
  },
  {
    name: "Lubna Ahmed",
    role: "Business Analyst",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    quote: "JagoJobs helped me transition from a different industry. The career guidance section was invaluable.",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), {
      threshold: 0.1,
    })
    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-20 bg-linear-to-br from-muted/20 via-background to-muted/10 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            What Our{" "}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Success stories from job seekers and employers across Bangladesh
          </p>
        </div>

        {/* Desktop Infinite Scroll - Hidden on Mobile */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Left Edge Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right Edge Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-6 will-change-transform"
            animate={{
              x: [0, -(350 + 24) * testimonials.length], // Calculate exact distance: card width + gap
            }}
            transition={{
              duration: 180, // 3 minutes for one complete cycle (slower for better performance)
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((t, idx) => (
              <Card
                key={`${t.name}-${idx}`}
                className="min-w-[350px] max-w-[350px] bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-200"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-border">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>

                  <p className="leading-relaxed text-foreground text-sm">&ldquo;{t.quote}&rdquo;</p>

                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {testimonials.slice(0, 6).map((t, idx) => (
              <Card
                key={t.name}
                className={`transition-all duration-500 bg-card border border-border hover:border-primary/20 hover:shadow-lg will-change-transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-border">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground text-sm truncate">{t.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                    </div>
                  </div>

                  <p className="leading-relaxed text-foreground text-sm line-clamp-3">&ldquo;{t.quote}&rdquo;</p>

                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
