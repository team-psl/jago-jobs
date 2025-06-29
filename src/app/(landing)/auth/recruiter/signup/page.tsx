/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Building2, ArrowLeft, Globe, Users } from "lucide-react"

import { Checkbox } from "@/components/ui/checkbox"

export default function RecruiterSignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    industry: "",
    website: "",
    location: "",
    description: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    console.log("Recruiter sign up:", formData)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-linear-to-br from-background to-muted/30">

      <div className="container py-24 max-sm:px-0">
        <div className="max-w-2xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex max-sm:hidden items-center gap-2 text-foreground/70 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Card className="shadow-xl max-sm:border-none max-sm:bg-transparent max-sm:shadow-none bg-card/80 backdrop-blur-sm">

            <CardHeader className="text-center space-y-2 mb-2">
              <div className="flex justify-center">
                <img src="/jago-jobs-logo.png" alt="Logo" className="w-16 h-16 rounded-3xl" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-card-foreground">Find Top Talent</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Create your recruiter account and start hiring the best candidates
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3 ">
                <Button variant="outline" className="h-11 bg-transparent">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-11 bg-transparent">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or create account with email</span>
                </div>
              </div>

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className="pl-10 h-11"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="pl-10 h-11"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="pl-10 h-11"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Company Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-foreground">
                      Company Name
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="companyName"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={(e) => updateFormData("companyName", e.target.value)}
                        className="pl-10 h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-foreground">
                        Company Size
                      </Label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => updateFormData("companySize", value)}
                      >
                        <SelectTrigger className="!h-11 !w-full">
                          <div className="flex items-center">
                            <Users className="mr-3 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select company size" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-foreground">
                        Industry
                      </Label>
                      <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                        <SelectTrigger className="!h-11 !w-full">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance & Banking</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-foreground">
                        Company Website
                      </Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://company.com"
                          value={formData.website}
                          onChange={(e) => updateFormData("website", e.target.value)}
                          className="pl-10 h-11"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-foreground">
                        Location
                      </Label>
                      <Select value={formData.location} onValueChange={(value) => updateFormData("location", value)}>
                        <SelectTrigger className="!h-11 !w-full ">
                          <div className="flex items-center">
                            <MapPin className="mr-3 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select location" />
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

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-foreground">
                      Company Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of your company..."
                      value={formData.description}
                      onChange={(e) => updateFormData("description", e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Security</h3>
                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-foreground">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={(e) => updateFormData("password", e.target.value)}
                          className="pl-10 pr-10 h-11"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-foreground">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={formData.confirmPassword}
                          onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                          className="pl-10 pr-10 h-11"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 leading-relaxed">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm leading-relaxed text-foreground">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button type="submit" className="w-full h-11" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Recruiter Account"}
                </Button>
              </form>

              <div className="text-center text-sm">
                <span className="text-foreground/70">Already have an account? </span>
                <Link href="/auth/recruiter/signin" className="text-primary hover:text-primary/80 font-medium">
                  Sign in here
                </Link>
              </div>

              <div className="text-center">
                <Link href="/auth/seeker/signup" className="text-sm text-foreground/60 hover:text-primary">
                  Are you a job seeker? Create job seeker account
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
