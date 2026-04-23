import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Projects />
      <ContactCTA />
    </>
  );
}
