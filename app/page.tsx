import Hero from "@/components/sections/Hero";
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
      <SavingsComparison />
      <Services />
      <Stats />
      <WhyUs />
      <Projects />
      <ContactCTA />
    </>
  );
}
