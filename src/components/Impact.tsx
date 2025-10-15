import { Users, Heart, Package } from "lucide-react";

export const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "People Helped",
      description: "Individuals receiving support each month"
    },
    {
      icon: Package,
      number: "15,000+",
      label: "Meals Provided",
      description: "Hot meals and food packages distributed"
    },
    {
      icon: Heart,
      number: "200+",
      label: "Active Volunteers",
      description: "Dedicated community members making a difference"
    }
  ];

  return (
    <section id="impact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're creating real change in our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
