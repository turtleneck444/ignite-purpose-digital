import { Users, Heart, Package, TrendingUp, Star, Sparkles, ArrowRight, Award, Target } from "lucide-react";

export const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Lives Transformed",
      description: "Individuals and families receiving life-changing support",
      growth: "+45% this year",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Package,
      number: "15,000+",
      label: "Meals Provided",
      description: "Nutritious meals and food packages distributed",
      growth: "+60% this year",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Heart,
      number: "200+",
      label: "Community Heroes",
      description: "Dedicated volunteers creating lasting change",
      growth: "+30% this year",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Community Recognition",
      description: "Awarded 'Non-Profit of the Year' by local chamber"
    },
    {
      icon: Target,
      title: "Zero Waste Initiative",
      description: "100% of donations reach those in need"
    },
    {
      icon: Star,
      title: "Volunteer Excellence",
      description: "4.9/5 rating from community partners"
    }
  ];

  return (
    <section id="impact" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/10 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-5">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-primary/10 to-primary/20 px-6 py-3 rounded-full border border-primary/20 shadow-brand-sm">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Making a Difference
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-5 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Together, we're creating <span className="text-primary font-semibold">real change</span> in our community. 
            Every donation, every volunteer hour, every act of kindness matters.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative ${stat.bgColor} p-8 lg:p-10 rounded-3xl shadow-brand-lg hover:shadow-brand-2xl transition-all duration-500 border-2 ${stat.borderColor} hover:border-primary/50 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Floating Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-brand-md`}>
                <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              
              {/* Animated Number */}
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {stat.number}
              </h3>
              
              {/* Label */}
              <h4 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </h4>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                {stat.description}
              </p>
              
              {/* Growth Indicator */}
              <div className="flex items-center gap-3 text-sm font-bold text-primary bg-white/80 px-4 py-2 rounded-full shadow-brand-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{stat.growth}</span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Recognition & Excellence</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to transparency and impact has earned recognition from the community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-brand-md hover:shadow-brand-lg transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
