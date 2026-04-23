import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Process />
      <Projects />
      <FAQ />
      <ContactCTA />
    </>
  );
}
