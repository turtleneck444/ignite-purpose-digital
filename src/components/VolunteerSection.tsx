import { Button } from "@/components/ui/button";
import { Users, Heart, Clock, MapPin, Phone, Mail } from "lucide-react";

export const VolunteerSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="help" className="py-16 lg:py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Become part of our community of volunteers who are bridging the gap between homelessness and humanity. 
              Your time and compassion can change lives.
            </p>
          </div>

          {/* Volunteer Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Clothing Donations */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-brand-lg border border-primary/20 hover:shadow-brand-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Clothing Donations</h3>
                <p className="text-sm text-muted-foreground">Help provide warmth and dignity</p>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-foreground">
                  <strong>What we need:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• Gently used clothes</li>
                    <li>• Shoes and boots</li>
                    <li>• Blankets and coats</li>
                    <li>• New underwear and socks</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Food Donations */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-brand-lg border border-primary/20 hover:shadow-brand-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Food Donations</h3>
                <p className="text-sm text-muted-foreground">Help fight hunger in our community</p>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-foreground">
                  <strong>What we need:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• Canned goods</li>
                    <li>• Bottled water</li>
                    <li>• Hygiene items</li>
                    <li>• Non-perishable foods</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-brand-lg border border-primary/20 hover:shadow-brand-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground">Give your time and skills</p>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-foreground">
                  <strong>How you can help:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• Food distribution</li>
                    <li>• Clothing sorting</li>
                    <li>• Outreach events</li>
                    <li>• Administrative support</li>
                  </ul>
                </div>
                <Button variant="hero" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">
                Ready to make a difference? Contact us to learn more about volunteer opportunities and donation drop-off locations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-sm text-muted-foreground">(123) 456-7890</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">info@thebridgeproject.org</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Local drop-off points</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="shadow-brand-lg"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
