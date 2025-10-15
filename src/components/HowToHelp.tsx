import { Shirt, UtensilsCrossed, HandHeart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const HowToHelp = () => {
  const ways = [
    {
      icon: Shirt,
      title: "Clothing Donations",
      description: "Gently used clothes, shoes, and blankets help those in need stay warm and dignified.",
      items: ["Gently used clothing", "Shoes and boots", "Blankets and sleeping bags", "Winter accessories"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UtensilsCrossed,
      title: "Food Donations",
      description: "Canned goods, bottled water, and hygiene items provide essential support.",
      items: ["Non-perishable canned goods", "Bottled water", "Hygiene products", "First aid supplies"],
      color: "from-primary to-primary-light"
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join us in making a difference by volunteering your time and skills.",
      items: ["Serve meals", "Sort donations", "Organize events", "Spread awareness"],
      color: "from-primary-light to-primary-lighter"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="help" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-6">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Get Involved
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">How You Can Help</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every contribution brings hope and dignity. Choose how you'd like to make a difference today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ways.map((way, index) => (
            <Card key={index} className="shadow-brand-lg hover:shadow-brand-2xl transition-all duration-300 group border-2 hover:border-primary">
              <CardHeader className="pb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${way.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-brand-md`}>
                  <way.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl">{way.title}</CardTitle>
                <CardDescription className="text-sm lg:text-base">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 lg:space-y-3">
                  {way.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 lg:gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-sm lg:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" onClick={scrollToContact} className="group">
            Contact Us to Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
