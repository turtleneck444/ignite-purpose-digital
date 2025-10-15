import { Shirt, UtensilsCrossed, HandHeart, ArrowRight, Sparkles, CheckCircle, Star, Users, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowToHelp = () => {
  const ways = [
    {
      icon: Shirt,
      title: "Clothing Donations",
      description: "Provide warmth and dignity through gently used clothing and essential items.",
      items: ["Gently used clothing", "Shoes and boots", "Blankets and sleeping bags", "Winter accessories"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      impact: "200+ items distributed monthly"
    },
    {
      icon: UtensilsCrossed,
      title: "Food Donations",
      description: "Fight hunger with nutritious meals and essential supplies for our community.",
      items: ["Non-perishable canned goods", "Bottled water", "Hygiene products", "First aid supplies"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      impact: "500+ meals served weekly"
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our community of dedicated volunteers making a lasting difference.",
      items: ["Serve meals", "Sort donations", "Organize events", "Spread awareness"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-700",
      impact: "200+ active volunteers"
    }
  ];

  const quickActions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "(123) 456-7890",
      action: "tel:1234567890"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "info@thebridgeproject.org",
      action: "mailto:info@thebridgeproject.org"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Find drop-off locations",
      action: "#contact"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="help" className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6 lg:mb-8">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Get Involved
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-foreground">
            How You Can Help
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every contribution brings hope and dignity. Choose how you'd like to make a difference today.
          </p>
        </div>

        {/* Enhanced Ways to Help Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-brand-lg hover:shadow-brand-2xl transition-all duration-500 border-2 border-border hover:border-primary/50 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Professional Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-brand-md">
                <way.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {way.title}
              </h3>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                {way.description}
              </p>
              
              {/* Impact Badge */}
              <div className="inline-flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full shadow-brand-sm mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">{way.impact}</span>
              </div>
              
              {/* Items List */}
              <div className="space-y-3 mb-8">
                {way.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm lg:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Action Button */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with us and begin making a difference today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.action}
                className="group relative bg-primary/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-brand-xl transition-all duration-500 border-2 border-primary/30 hover:scale-105 overflow-hidden"
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center scale-110 transition-all duration-300">
                      <action.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-primary transition-colors duration-300">
                      {action.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                </div>

                {/* Always Visible Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl opacity-100 transition-opacity duration-500"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-3xl transform rotate-2"></div>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact} 
              className="relative group shadow-brand-2xl"
            >
              <Users className="w-6 h-6 mr-3" />
              Join Our Mission Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
