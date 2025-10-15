import { Shirt, UtensilsCrossed, HandHeart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const HowToHelp = () => {
  const ways = [
    {
      icon: Shirt,
      title: "Clothing Donations",
      description: "Gently used clothes, shoes, and blankets help those in need stay warm and dignified.",
      items: ["Gently used clothing", "Shoes and boots", "Blankets and sleeping bags", "Winter accessories"]
    },
    {
      icon: UtensilsCrossed,
      title: "Food Donations",
      description: "Canned goods, bottled water, and hygiene items provide essential support.",
      items: ["Non-perishable canned goods", "Bottled water", "Hygiene products", "First aid supplies"]
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join us in making a difference by volunteering your time and skills.",
      items: ["Serve meals", "Sort donations", "Organize events", "Spread awareness"]
    }
  ];

  return (
    <section id="help" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How You Can Help</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every contribution brings hope and dignity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <Card key={index} className="shadow-brand-lg hover:shadow-brand-xl transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <way.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{way.title}</CardTitle>
                <CardDescription className="text-base">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {way.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
