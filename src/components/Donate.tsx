import { DollarSign, Shield, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Donate = () => {
  const paymentMethods = [
    { name: "CashApp", info: "$TheBridgeProject", icon: "💵" },
    { name: "PayPal", info: "@thebridgeproject", icon: "💳" },
    { name: "Venmo", info: "@thebridgeproject", icon: "📱" },
    { name: "Credit/Debit", info: "Stripe (Coming Soon)", icon: "💎" }
  ];

  return (
    <section id="donate" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4 lg:mb-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Make an Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Make a Donation</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your generosity directly impacts lives. Every dollar provides food, shelter, and hope to those who need it most.
            </p>
          </div>

          <Card className="shadow-brand-2xl border-2 border-primary/20">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 gradient-primary rounded-2xl mx-auto mb-6 shadow-brand-lg">
                <DollarSign className="w-10 h-10 lg:w-12 lg:h-12 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl mb-3">Choose Your Donation Method</CardTitle>
              <CardDescription className="text-base lg:text-lg">
                Select the payment option that works best for you. All donations are secure and tax-deductible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 px-6 lg:px-8 pb-8">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="group p-6 lg:p-8 bg-secondary hover:bg-primary/5 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer shadow-brand-sm hover:shadow-brand-lg"
                  >
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{method.name}</h4>
                    <p className="text-muted-foreground font-medium">{method.info}</p>
                  </div>
                ))}
              </div>

              {/* Security Badges */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Secure Donations</p>
                    <p className="text-xs text-muted-foreground">Your information is protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Tax Deductible</p>
                    <p className="text-xs text-muted-foreground">EIN available upon request</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  Questions about donations? We're here to help.
                </p>
                <p className="text-primary font-bold text-base">
                  Contact us at{" "}
                  <a href="mailto:info@thebridgeproject.org" className="underline hover:text-primary-light transition-colors">
                    info@thebridgeproject.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact Message */}
          <div className="mt-8 lg:mt-12 text-center">
            <div className="inline-block bg-primary/10 border-2 border-primary/20 px-6 lg:px-8 py-4 lg:py-6 rounded-xl">
              <p className="text-base lg:text-lg font-semibold text-foreground">
                💙 <span className="text-primary">Your $50 donation</span> provides meals for a family of 4 for an entire week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
