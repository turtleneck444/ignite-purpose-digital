import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone, QrCode, Heart } from "lucide-react";

export const DonationSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="donate" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Every Gift Matters
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your contribution provides food, clothing, and support to those in need. 
              Every donation, no matter the size, brings hope and dignity to our community.
            </p>
          </div>

          {/* Donation Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* CashApp */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-brand-lg border border-primary/20 hover:shadow-brand-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">CashApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Quick and easy mobile payments</p>
                <div className="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 mb-4">
                  <QrCode className="w-16 h-16 mx-auto text-gray-600" />
                  <p className="text-xs text-muted-foreground mt-2">Scan to donate</p>
                </div>
                <Button variant="outline" className="w-full">
                  Open CashApp
                </Button>
              </div>
            </div>

            {/* PayPal */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-brand-lg border border-primary/20 hover:shadow-brand-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">PayPal</h3>
                <p className="text-sm text-muted-foreground mb-4">Secure online payments</p>
                <div className="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 mb-4">
                  <QrCode className="w-16 h-16 mx-auto text-gray-600" />
                  <p className="text-xs text-muted-foreground mt-2">Scan to donate</p>
                </div>
                <Button variant="outline" className="w-full">
                  Donate with PayPal
                </Button>
              </div>
            </div>

            {/* Credit/Debit Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-brand-lg border border-primary/20 hover:shadow-brand-xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Credit/Debit</h3>
                <p className="text-sm text-muted-foreground mb-4">Secure card payments via Stripe</p>
                <Button variant="hero" className="w-full">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary/20">
            <div className="text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Your Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$25</div>
                  <div className="text-sm text-muted-foreground">Provides 10 warm meals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50</div>
                  <div className="text-sm text-muted-foreground">Supplies clothing for 1 person</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$100</div>
                  <div className="text-sm text-muted-foreground">Supports emergency shelter</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Ways to Help */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Other Ways to Help</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("help")}
                className="border-2 border-primary/20 hover:border-primary/40"
              >
                Volunteer Opportunities
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary/20 hover:border-primary/40"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
