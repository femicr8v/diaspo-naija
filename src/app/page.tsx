import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Audience } from "@/components/audience";
import { Features } from "@/components/features";
import { Newsletter } from "@/components/newsletter";
import { Navigation } from "@/components/navigation";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { MentorshipCTA } from "@/components/mentorship-cta";
import { EmpoweringInnovators } from "@/components/empowering-innovators";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <EmpoweringInnovators />
      <Features />
      <HowItWorks />
      <Audience />
      <MentorshipCTA />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
