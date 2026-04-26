import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Calculator from "@/components/sections/Calculator";
import Brands from "@/components/sections/Brands";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/Reviews";
import Projects from "@/components/sections/Projects";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Calculator />
      <Brands />
      <WhyUs />
      <Reviews />
      <Projects />
      <ContactCTA />
    </>
  );
}
