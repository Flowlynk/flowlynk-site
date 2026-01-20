import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Hero from "./ui/sections/Hero";
import HowItWorks from "./ui/sections/HowItWorks";
import Services from "./ui/sections/Services";
import WhyFlowlynk from "./ui/sections/WhyFlowlynk";
import About from "./ui/sections/About";
import FinalCTA from "./ui/sections/FinalCTA";
import Contact from "./ui/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <WhyFlowlynk />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
