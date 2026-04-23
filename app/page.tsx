import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import SavingsComparison from "@/components/sections/SavingsComparison";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SavingsComparison />
      <Services />
      <Stats />
      <WhyUs />
      <Projects />
      <ContactCTA />
    </>
  );
}
