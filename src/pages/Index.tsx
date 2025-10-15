import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { HowToHelp } from "@/components/HowToHelp";
import { Donate } from "@/components/Donate";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { TopBar } from "@/components/TopBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Impact />
        <HowToHelp />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

export default Index;
