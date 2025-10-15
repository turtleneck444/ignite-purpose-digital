import { useState } from "react";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Heart, 
  Users, 
  DollarSign, 
  MapPin, 
  Calendar,
  X,
  ArrowRight,
  Star,
  Shield,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      icon: Heart,
      title: "Donate Now",
      description: "Make a difference today",
      action: "donate",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our mission",
      action: "help",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "(123) 456-7890",
      action: "tel:1234567890",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch",
      action: "mailto:info@thebridgeproject.org",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Find our location",
      action: "contact",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Book a visit",
      action: "contact",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleAction = (action: string) => {
    if (action.startsWith('tel:') || action.startsWith('mailto:')) {
      window.open(action, '_self');
    } else {
      scrollToSection(action);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 flex items-center justify-center"
        >
          {/* Single Animated Ring */}
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
          
          {/* Icon */}
          <MessageSquare className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg relative z-10" />
        </button>
      </div>

      {/* Luxury Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal Content - Mobile Optimized */}
          <div className="relative w-full max-w-lg sm:max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-primary/20 animate-in fade-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-hidden">
            {/* Header - Compact */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl border-b border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">Quick Actions</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">How can we help you today?</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="p-4 sm:p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
              {/* Trust Indicators - Compact */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                  <Shield className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">501(c)(3)</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">24hr</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">Trusted</span>
                </div>
              </div>

              {/* Quick Actions Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleAction(action.action)}
                    className={`group relative ${action.bgColor} p-3 rounded-xl border-2 ${action.borderColor} hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                          {action.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>

              {/* Footer - Compact */}
              <div className="mt-4 pt-3 border-t border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MessageSquare className="w-3 h-3" />
                    <span>The Bridge Project</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Bridging hope to humanity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
