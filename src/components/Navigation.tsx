import { useState } from "react";
import { Menu, X, Phone, Heart, Users, Clock, ArrowRight, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-main.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setIsImpactOpen(false);
    }
  };

  const handleImpactClick = () => {
    if (isImpactOpen) {
      scrollToSection("impact");
    } else {
      setIsImpactOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-brand-lg">
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
            <div className="relative">
              <button
                onClick={handleImpactClick}
                onMouseEnter={() => setIsImpactOpen(true)}
                onMouseLeave={() => setIsImpactOpen(false)}
                className="px-4 py-2 text-foreground hover:text-primary transition-colors font-semibold text-sm xl:text-base flex items-center gap-1"
              >
                Our Impact
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isImpactOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {/* Megamenu */}
              {isImpactOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-brand-2xl border border-primary/20 animate-in fade-in slide-in-from-top duration-300"
                  onMouseEnter={() => setIsImpactOpen(true)}
                  onMouseLeave={() => setIsImpactOpen(false)}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Column 1: Clothing Donations */}
                      <div className="group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Heart className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">Clothing Donations</h3>
                            <p className="text-sm text-muted-foreground">Provide warmth and dignity</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Gently used clothes & shoes</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Blankets & winter coats</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>New underwear & socks</span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                          onClick={() => scrollToSection("help")}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>

                      {/* Column 2: Food Donations */}
                      <div className="group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">Food Donations</h3>
                            <p className="text-sm text-muted-foreground">Fight hunger in our community</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Canned goods & bottled water</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Hygiene items & toiletries</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Non-perishable foods</span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                          onClick={() => scrollToSection("help")}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>

                      {/* Column 3: Volunteer */}
                      <div className="group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Clock className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">Volunteer</h3>
                            <p className="text-sm text-muted-foreground">Give your time and skills</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Food distribution support</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Clothing sorting & outreach</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            <span>Administrative support</span>
                          </div>
                        </div>
                        <Button 
                          variant="hero" 
                          size="sm" 
                          className="w-full mt-4 group-hover:scale-105 transition-all duration-300"
                          onClick={() => scrollToSection("help")}
                        >
                          Sign Up
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>

                    {/* Overview Link */}
                    <div className="mt-8 pt-6 border-t border-primary/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">View Our Full Impact</h4>
                            <p className="text-sm text-muted-foreground">See comprehensive statistics and success stories</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={() => scrollToSection("impact")}
                          className="group"
                        >
                          View Overview
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
