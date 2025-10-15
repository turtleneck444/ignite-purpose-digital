import { Users, Heart, Package, TrendingUp } from "lucide-react";

export const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "People Helped",
      description: "Individuals receiving support each month",
      growth: "+45% this year"
    },
    {
      icon: Package,
      number: "15,000+",
      label: "Meals Provided",
      description: "Hot meals and food packages distributed",
      growth: "+60% this year"
    },
    {
      icon: Heart,
      number: "200+",
      label: "Active Volunteers",
      description: "Dedicated community members making a difference",
      growth: "+30% this year"
    }
  ];

  return (
    <section id="impact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-6">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Making a Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Our Impact</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're creating real change in our community. Every donation, every volunteer hour, every act of kindness matters.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card p-6 lg:p-8 rounded-xl shadow-brand-lg hover:shadow-brand-2xl transition-all duration-300 group border-2 border-border hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <h4 className="text-lg lg:text-xl font-semibold mb-2">{stat.label}</h4>
              <p className="text-sm lg:text-base text-muted-foreground mb-4">{stat.description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <TrendingUp className="w-4 h-4" />
                <span>{stat.growth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Signal */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-block gradient-primary text-primary-foreground px-6 lg:px-8 py-4 lg:py-6 rounded-xl shadow-brand-xl">
            <p className="text-base lg:text-lg font-semibold">
              <span className="text-2xl lg:text-3xl font-bold block mb-2">100%</span>
              of donations go directly to helping those in need
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
