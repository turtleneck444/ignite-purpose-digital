import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Heart, Star, CheckCircle } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl xl:max-w-5xl">
          {/* Professional Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 mb-8 lg:mb-10 mt-8 lg:mt-12 animate-in fade-in slide-in-from-top duration-700">
            <div className="flex items-center gap-2 bg-white/98 backdrop-blur-md px-5 py-3 rounded-full shadow-brand-xl border border-primary/30 hover:shadow-brand-2xl transition-all duration-300 hover:scale-105">
              <Shield className="w-5 h-5 text-primary drop-shadow-sm" />
              <span className="text-sm font-bold text-foreground drop-shadow-sm">501(c)(3) Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/98 backdrop-blur-md px-5 py-3 rounded-full shadow-brand-xl border border-primary/30 hover:shadow-brand-2xl transition-all duration-300 hover:scale-105">
              <Award className="w-5 h-5 text-primary drop-shadow-sm" />
              <span className="text-sm font-bold text-foreground drop-shadow-sm">5,000+ Lives Transformed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/98 backdrop-blur-md px-5 py-3 rounded-full shadow-brand-xl border border-primary/30 hover:shadow-brand-2xl transition-all duration-300 hover:scale-105">
              <Star className="w-5 h-5 text-primary drop-shadow-sm" />
              <span className="text-sm font-bold text-foreground drop-shadow-sm">Community Trusted</span>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-8 lg:mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-brand-2xl border border-white/20">
              {/* The Bridge Project Badge */}
              <div className="inline-block mb-4">
                <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  The Bridge Project
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-foreground">
                <span className="block lg:inline">Together, we can bring</span>
                <span className="block text-primary animate-pulse">hope to the homeless</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-3xl">
                We provide food, clothing, and support to the homeless and less fortunate. 
                <span className="block mt-2 text-primary font-semibold">Every gift matters.</span>
              </p>
            </div>
          </div>

          {/* Ways to Help */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 lg:mb-10 animate-in fade-in slide-in-from-left duration-1000 delay-400">
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-primary/30 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 hover:scale-105 hover:bg-white/98 group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 drop-shadow-sm" />
              </div>
              <span className="text-sm font-bold text-foreground drop-shadow-sm">Clothing Donations</span>
            </div>
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-primary/30 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 hover:scale-105 hover:bg-white/98 group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 drop-shadow-sm" />
              </div>
              <span className="text-sm font-bold text-foreground drop-shadow-sm">Food Donations</span>
            </div>
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-primary/30 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 hover:scale-105 hover:bg-white/98 group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="w-5 h-5 text-primary flex-shrink-0 drop-shadow-sm" />
              </div>
              <span className="text-sm font-bold text-foreground drop-shadow-sm">Volunteer</span>
            </div>
          </div>
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12 lg:mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => scrollToSection("donate")}
              className="group shadow-brand-xl hover:shadow-brand-2xl transition-all duration-300 hover:scale-105 drop-shadow-lg"
            >
              Donate Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("help")}
              className="border-2 border-primary/20 hover:border-primary/40 shadow-brand-md hover:shadow-brand-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/80 hover:bg-white/90"
            >
              Get Involved
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
