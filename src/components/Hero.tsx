import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Diverse volunteers and community members working together to help the homeless" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl xl:max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-6 lg:mb-8">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-brand-md">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Trusted Non-Profit</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-brand-md">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">5,000+ Lives Impacted</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
            Together, we can bring hope to the homeless.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-10 text-muted-foreground leading-relaxed max-w-2xl">
            We provide food, clothing, and support to the homeless and less fortunate. 
            <span className="text-primary font-semibold block mt-2">Every gift matters.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => scrollToSection("donate")}
              className="group"
            >
              Donate Now 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("help")}
            >
              Get Involved
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">5,000+</div>
              <div className="text-xs lg:text-sm text-muted-foreground font-medium">People Helped</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-xs lg:text-sm text-muted-foreground font-medium">Volunteers</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">15K+</div>
              <div className="text-xs lg:text-sm text-muted-foreground font-medium">Meals Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
