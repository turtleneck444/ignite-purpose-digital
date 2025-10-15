import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-main.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b shadow-brand-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection("hero")}>
            <img 
              src={logo} 
              alt="The Bridge Project - Bridging the gap between homelessness and humanity" 
              className="h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-semibold text-sm xl:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-semibold text-sm xl:text-base"
            >
              Our Impact
            </button>
            <button
              onClick={() => scrollToSection("help")}
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-semibold text-sm xl:text-base"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-semibold text-sm xl:text-base"
            >
              Contact
            </button>
            <a href="tel:1234567890" className="hidden xl:flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors font-semibold">
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </a>
            <Button variant="hero" size="lg" onClick={() => scrollToSection("donate")} className="ml-4">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-3 border-t animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-semibold"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-semibold"
            >
              Our Impact
            </button>
            <button
              onClick={() => scrollToSection("help")}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-semibold"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-semibold"
            >
              Contact
            </button>
            <a 
              href="tel:1234567890" 
              className="flex items-center gap-2 py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </a>
            <Button variant="hero" size="lg" className="w-full mt-4" onClick={() => scrollToSection("donate")}>
              Donate Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
