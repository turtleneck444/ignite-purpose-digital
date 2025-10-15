import { Heart, Users, Shield, Star, ArrowRight } from "lucide-react";

export const TopBar = () => {
  const announcements = [
    "5,000+ Lives Transformed",
    "501(c)(3) Certified",
    "24/7 Community Support",
    "100% Donations Go to Those in Need"
  ];

  return (
    <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-light text-white py-2 px-4 relative overflow-hidden z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/90 to-primary-light/90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>
      
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Left Side - Branding */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-white/90" />
            <span className="text-xs font-semibold">The Bridge Project</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-white/80">
            <Shield className="w-3 h-3" />
            <span>501(c)(3)</span>
          </div>
        </div>

        {/* Center - Mobile Announcements */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="text-xs text-white/90">5,000+ Lives</span>
          <span className="text-xs text-white/60">•</span>
          <span className="text-xs text-white/90">24/7 Support</span>
        </div>

        {/* Center - Desktop Announcements */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3 h-3 text-yellow-300" />
            <span>Making a Difference</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Users className="w-3 h-3 text-white/90" />
            <span>Join Our Mission</span>
          </div>
        </div>

        {/* Right Side - Call to Action */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1 text-xs text-white/90">
            <span>Need Help?</span>
            <ArrowRight className="w-3 h-3" />
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};
