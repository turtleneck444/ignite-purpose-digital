import { useState } from "react";
import { Phone, Mail, Globe, Facebook, MapPin, Clock, MessageCircle, Users, Heart, Star, CheckCircle, ArrowRight, Send, Calendar, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send to a backend
    toast({
      title: "Message Sent Successfully! ✓",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "", interest: "general" });
  };

  const contactInfo = [
    { 
      icon: Phone, 
      label: "Phone", 
      value: "(123) 456-7890", 
      href: "tel:1234567890",
      description: "Call us for immediate assistance",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "info@thebridgeproject.org", 
      href: "mailto:info@thebridgeproject.org",
      description: "Send us a detailed message",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: MapPin, 
      label: "Address", 
      value: "123 Community St, City, State 12345", 
      href: "https://maps.google.com",
      description: "Visit our community center",
      color: "from-red-500 to-red-600"
    },
    { 
      icon: Clock, 
      label: "Hours", 
      value: "Mon-Fri: 9AM-5PM, Sat: 10AM-3PM", 
      href: "#",
      description: "We're here to help",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Volunteer Opportunities",
      description: "Join our team of dedicated volunteers",
      action: "Volunteer Now",
      color: "from-primary to-primary-light"
    },
    {
      icon: Heart,
      title: "Donation Drop-off",
      description: "Bring your donations to our center",
      action: "Schedule Drop-off",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Calendar,
      title: "Schedule a Visit",
      description: "Tour our facilities and meet our team",
      action: "Book a Tour",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const responseTimes = [
    { method: "Phone Call", time: "Immediate", icon: Phone },
    { method: "Email", time: "Within 24 hours", icon: Mail },
    { method: "Social Media", time: "Within 12 hours", icon: MessageCircle },
    { method: "In-Person Visit", time: "During business hours", icon: MapPin }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/8 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-5">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-brand-sm">
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-5 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions or want to get involved? We're here to help and respond within 24 hours.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-12 lg:mb-16">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-brand-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl">Send Us a Message</CardTitle>
                    <CardDescription className="text-sm">We typically respond within 24 hours</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="h-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(123) 456-7890"
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you? Please provide details about your inquiry..."
                      rows={4}
                      className="resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full h-12 text-base font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="shadow-brand-xl border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 p-4">
                <CardTitle className="text-lg lg:text-xl flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription className="text-sm">Multiple ways to reach us</CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-xs text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium text-sm mb-1">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions - Full Width */}
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-brand-xl border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 p-6">
              <CardTitle className="text-xl lg:text-2xl flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Get involved today</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {action.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                          {action.action}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
