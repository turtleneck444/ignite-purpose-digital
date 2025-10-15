import { DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Donate = () => {
  const paymentMethods = [
    { name: "CashApp", info: "$TheBridgeProject" },
    { name: "PayPal", info: "@thebridgeproject" },
    { name: "Venmo", info: "@thebridgeproject" },
    { name: "Credit/Debit", info: "Stripe (Coming Soon)" }
  ];

  return (
    <section id="donate" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h2>
            <p className="text-xl text-muted-foreground">
              Your generosity directly impacts lives. Choose your preferred donation method below.
            </p>
          </div>

          <Card className="shadow-brand-xl">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl">Scan to Donate</CardTitle>
              <CardDescription className="text-lg">
                Every gift matters. Your donation provides food, clothing, and hope.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-secondary rounded-lg border-2 border-border hover:border-primary transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold mb-2">{method.name}</h4>
                    <p className="text-muted-foreground">{method.info}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  All donations are tax-deductible. Thank you for your support!
                </p>
                <p className="text-primary font-semibold">
                  For questions about donations, contact us at{" "}
                  <a href="mailto:info@thebridgeproject.org" className="underline hover:text-primary-light">
                    info@thebridgeproject.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
