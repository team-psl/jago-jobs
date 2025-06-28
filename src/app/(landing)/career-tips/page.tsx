"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Clock,
  User,
  Eye,
  BookOpen,
  TrendingUp,
  Star,
  Calendar,
  ArrowRight,
  Filter,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react"
import Image from "next/image"
import { CareerTipsHeroAnimation } from "./_components/career-tips-hero-animation"

const featuredArticles = [
  {
    id: 1,
    title: "10 Essential Skills Every Job Seeker Needs in 2024",
    excerpt: "Discover the most in-demand skills that employers are looking for and how to develop them effectively.",
    author: "Sarah Ahmed",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    views: 2450,
    category: "Skills Development",
    image: "/placeholder.svg?height=200&width=400&text=Skills+Development",
    featured: true,
    trending: true,
  },
  {
    id: 2,
    title: "How to Write a Resume That Gets You Hired",
    excerpt: "Step-by-step guide to creating a compelling resume that stands out to recruiters and hiring managers.",
    author: "Md. Rafiq Hassan",
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    views: 3200,
    category: "Resume Writing",
    image: "/placeholder.svg?height=200&width=400&text=Resume+Writing",
    featured: true,
    trending: false,
  },
  {
    id: 3,
    title: "Mastering the Art of Job Interviews in Bangladesh",
    excerpt: "Local insights and proven strategies to excel in job interviews with Bangladeshi companies.",
    author: "Fatima Khan",
    publishedAt: "2024-01-10",
    readTime: "15 min read",
    views: 1890,
    category: "Interview Tips",
    image: "/placeholder.svg?height=200&width=400&text=Interview+Tips",
    featured: true,
    trending: true,
  },
]

const recentArticles = [
  {
    id: 4,
    title: "Salary Negotiation Tips for Fresh Graduates",
    excerpt: "Learn how to negotiate your first salary confidently and professionally.",
    author: "Ahmed Rahman",
    publishedAt: "2024-01-08",
    readTime: "6 min read",
    views: 1250,
    category: "Salary & Benefits",
    image: "/placeholder.svg?height=150&width=300&text=Salary+Tips",
  },
  {
    id: 5,
    title: "Remote Work Best Practices for Bangladeshi Professionals",
    excerpt: "Essential tips for succeeding in remote work environments and maintaining productivity.",
    author: "Nusrat Jahan",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    views: 980,
    category: "Remote Work",
    image: "/placeholder.svg?height=150&width=300&text=Remote+Work",
  },
  {
    id: 6,
    title: "Building Your Professional Network in Dhaka",
    excerpt: "Strategies for expanding your professional network and making meaningful connections.",
    author: "Karim Uddin",
    publishedAt: "2024-01-03",
    readTime: "7 min read",
    views: 1450,
    category: "Networking",
    image: "/placeholder.svg?height=150&width=300&text=Networking",
  },
  {
    id: 7,
    title: "Career Change Guide: Switching Industries Successfully",
    excerpt: "How to transition to a new career field without starting from scratch.",
    author: "Rashida Begum",
    publishedAt: "2024-01-01",
    readTime: "11 min read",
    views: 2100,
    category: "Career Change",
    image: "/placeholder.svg?height=150&width=300&text=Career+Change",
  },
  {
    id: 8,
    title: "LinkedIn Optimization for Bangladeshi Job Seekers",
    excerpt: "Complete guide to creating a compelling LinkedIn profile that attracts recruiters.",
    author: "Tanvir Islam",
    publishedAt: "2023-12-28",
    readTime: "9 min read",
    views: 1750,
    category: "Social Media",
    image: "/placeholder.svg?height=150&width=300&text=LinkedIn+Tips",
  },
]

const categories = [
  { name: "All", count: 45 },
  { name: "Resume Writing", count: 8 },
  { name: "Interview Tips", count: 12 },
  { name: "Skills Development", count: 10 },
  { name: "Salary & Benefits", count: 6 },
  { name: "Remote Work", count: 4 },
  { name: "Networking", count: 5 },
]

const trendingTopics = [
  "AI and Job Market",
  "Remote Work Skills",
  "Digital Marketing",
  "Data Analysis",
  "Soft Skills",
  "Career Transition",
  "Freelancing Tips",
  "Industry Trends",
]

export default function CareerTipsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/10">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Career Tips & <span className="text-primary">News</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert advice, industry insights, and practical tips to accelerate your career growth in Bangladesh
              </p>

              {/* Search Bar */}
              <div className="max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search career tips..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 md:pl-12 h-10 md:h-12 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-bold text-foreground">150+</span>
                  <span className="text-muted-foreground">Articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-300" />
                  <span className="font-bold text-foreground">50+</span>
                  <span className="text-muted-foreground">Expert Authors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-500" />
                  <span className="font-bold text-foreground">Weekly</span>
                  <span className="text-muted-foreground">Updates</span>
                </div>
              </div>
            </div>

            {/* Professional Animation */}
            <div className="lg:order-last">
              <CareerTipsHeroAnimation />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 md:py-12">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Categories */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <Filter className="h-4 w-4 text-primary" />
                    </div>
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.name
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "hover:bg-muted/50 text-foreground hover:shadow-sm"
                      }`}
                    >
                      <span className="truncate">{category.name}</span>
                      <Badge variant="secondary" className="text-xs font-medium ml-2 shrink-0">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                    </div>
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trendingTopics.map((topic) => (
                      <Badge
                        key={topic}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-medium border-border/50"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 shadow-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-primary text-lg font-semibold">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get the latest career tips and industry news delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="text-sm border-border/50 focus:border-primary" 
                    />
                    <Button className="w-full text-sm font-medium shadow-sm">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2 space-y-10">
            {/* Featured Articles */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
              </div>

              <div className="space-y-8">
                {featuredArticles.map((article, index) => (
                  <Card
                    key={article.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
                  >
                    <div className={`${index === 0 ? "lg:flex" : "md:flex"} gap-0`}>
                      <div className={`${index === 0 ? "lg:w-1/2" : "md:w-2/5"} relative overflow-hidden`}>
                        <div className="aspect-video w-full">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {article.trending && (
                          <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-xs font-medium shadow-sm">
                            🔥 Trending
                          </Badge>
                        )}
                        {article.featured && (
                          <Badge className="absolute top-4 right-4 bg-primary text-xs font-medium shadow-sm">Featured</Badge>
                        )}
                      </div>

                      <div
                        className={`${index === 0 ? "lg:w-1/2" : "md:w-3/5"} p-8 flex flex-col justify-between`}
                      >
                        <div className="space-y-5">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs font-medium bg-muted/50">
                              {article.category}
                            </Badge>
                            <span className="hidden sm:inline text-border">•</span>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              <span className="text-xs font-medium">{article.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-tight">
                            {article.title}
                          </h3>

                          <p className="text-base text-muted-foreground line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 mt-6 border-t border-border/50 gap-4">
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted/50">
                                <User className="h-3 w-3" />
                              </div>
                              <span className="font-medium">{article.author}</span>
                            </div>
                            <span className="hidden sm:inline text-border">•</span>
                            <div className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted/50">
                                <Calendar className="h-3 w-3" />
                              </div>
                              <span className="font-medium">{new Date(article.publishedAt).toLocaleDateString()}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-4">
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Eye className="h-3.5 w-3.5" />
                              <span className="font-medium">{article.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-muted/50">
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-muted/50">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-muted/50">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Articles */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Recent Articles</h2>
                </div>
                <Button variant="outline" className="gap-2 bg-transparent text-sm font-medium border-border/50 hover:bg-muted/50">
                  <span className="hidden sm:inline">View All</span>
                  <span className="sm:hidden">All</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {recentArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden border-border/50"
                  >
                    <div className="relative overflow-hidden">
                      <div className="aspect-video w-full">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6 space-y-5 flex-1 flex flex-col">
                      <Badge variant="secondary" className="text-xs font-medium w-fit bg-muted/50">
                        {article.category}
                      </Badge>

                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 flex-1 leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{article.excerpt}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-5 border-t border-border/50 text-sm text-muted-foreground gap-4 mt-auto">
                        <div className="flex items-center gap-2 truncate">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted/50 shrink-0">
                            <User className="h-3 w-3" />
                          </div>
                          <span className="truncate font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <span className="font-medium">{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Eye className="h-3.5 w-3.5" />
                            <span className="font-medium">{article.views}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Load More */}
            <div className="text-center pt-8">
              <Button size="lg" variant="outline" className="gap-3 bg-transparent font-medium border-border/50 hover:bg-muted/50 shadow-sm">
                Load More Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
