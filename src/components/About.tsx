import { CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo-main.jpg";

export const About = () => {
  const values = [
    "Compassion and dignity for all",
    "Community-driven solutions",
    "Transparency and accountability",
    "Sustainable impact and support"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block mb-4 lg:mb-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">
              Bridging the gap between homelessness and humanity
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is to provide hope, shelter, and support for those in need while connecting communities to give back with love and dignity.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
              Every contribution brings hope and dignity to individuals experiencing homelessness. Through clothing donations, food drives, and volunteer efforts, we're making a tangible difference in people's lives.
            </p>
            
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={logo} 
                alt="The Bridge Project - Bridging the gap between homelessness and humanity" 
                className="relative max-w-md w-full h-auto rounded-2xl shadow-brand-2xl bg-white p-8 lg:p-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
