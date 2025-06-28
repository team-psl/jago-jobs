import { HeroSection } from "./_components/hero-section";
import { FeaturedJobs } from "./_components/featured-jobs";
import { StatsSection } from "./_components/stats-section";
import { HowItWorks } from "./_components/how-it-works";
import { JobCategories } from "./_components/job-categories";
import { TestimonialsSection } from "./_components/testimonials-section";
import { NewsletterSection } from "./_components/newsletter-section";

export default function Home() {      
  return (
    <>
       <HeroSection />
        <FeaturedJobs />
        <StatsSection />
        <HowItWorks />
        <JobCategories />
        <TestimonialsSection />
        <NewsletterSection />
    </>
  )
}