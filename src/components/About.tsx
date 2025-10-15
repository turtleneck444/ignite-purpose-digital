import logo from "@/assets/logo.png";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bridging the gap between homelessness and humanity
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is to provide hope, shelter, and support for those in need while connecting communities to give back with love and dignity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every contribution brings hope and dignity to individuals experiencing homelessness. Through clothing donations, food drives, and volunteer efforts, we're making a tangible difference in people's lives.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="The Bridge Project - Bridging the gap" 
              className="max-w-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
