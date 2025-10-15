import { DollarSign, Shield, Lock, Heart, ArrowRight, CheckCircle, Star, CreditCard, Smartphone, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Donate = () => {
  const paymentMethods = [
    {
      name: "CashApp",
      info: "$TheBridgeProject",
      icon: (
        <svg viewBox="0 0 120 40" className="w-20 h-8">
          <rect width="120" height="40" rx="8" fill="#00D632"/>
          <text x="60" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">Cash</text>
        </svg>
      ),
      link: "https://cash.app/$TheBridgeProject",
      description: "Quick mobile payments"
    },
    {
      name: "PayPal",
      info: "@thebridgeproject",
      icon: (
        <svg viewBox="0 0 120 40" className="w-20 h-8">
          <rect width="120" height="40" rx="8" fill="#0070BA"/>
          <text x="60" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">PayPal</text>
        </svg>
      ),
      link: "https://paypal.me/thebridgeproject",
      description: "Secure online payments"
    },
    {
      name: "Venmo",
      info: "@thebridgeproject",
      icon: (
        <svg viewBox="0 0 120 40" className="w-20 h-8">
          <rect width="120" height="40" rx="8" fill="#3D95CE"/>
          <text x="60" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">Venmo</text>
        </svg>
      ),
      link: "https://venmo.com/thebridgeproject",
      description: "Easy peer-to-peer payments"
    },
    {
      name: "Credit/Debit Card",
      info: "Secure Stripe processing",
      icon: "💳",
      link: "#contact",
      description: "Direct card payments"
    }
  ];

  const impactExamples = [
    {
      amount: "$25",
      impact: "Provides 10 warm meals",
      icon: Heart
    },
    {
      amount: "$50",
      impact: "Supplies clothing for 1 person",
      icon: Star
    },
    {
      amount: "$100",
      impact: "Supports emergency shelter",
      icon: Shield
    }
  ];

  return (
    <section id="donate" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/3 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/3 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-6 lg:mb-8">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Make an Impact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-foreground">
              Make a Donation
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your generosity directly impacts lives. Every dollar provides food, shelter, and hope to those who need it most.
            </p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {paymentMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative bg-white/95 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-brand-lg hover:shadow-brand-2xl transition-all duration-500 border-2 border-border hover:border-primary/50 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Professional Platform Icon */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-brand-md">
                    {typeof method.icon === 'string' ? (
                      <span className="text-3xl lg:text-4xl">{method.icon}</span>
                    ) : (
                      method.icon
                    )}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {method.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {method.description}
                  </p>
                </div>

                {/* Payment Info */}
                <div className="text-center mb-6">
                  <p className="text-lg font-bold text-primary mb-2">
                    {method.info}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to donate</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  Donate Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            ))}
          </div>

          {/* Impact Examples */}
          <div className="mb-16 lg:mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Your Impact</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how your donation makes a real difference in people's lives
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {impactExamples.map((example, index) => (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-brand-md hover:shadow-brand-lg transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <example.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {example.amount}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {example.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Trust */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-brand-lg border border-primary/10 mb-12">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Secure Donations</h4>
                  <p className="text-sm text-muted-foreground">Your information is protected with bank-level security</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Tax Deductible</h4>
                  <p className="text-sm text-muted-foreground">501(c)(3) certified - EIN available upon request</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-primary/10 rounded-2xl p-6 lg:p-8 border border-primary/20">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">Questions About Donations?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help with any questions about donating or our impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="mailto:info@thebridgeproject.org">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:1234567890">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
