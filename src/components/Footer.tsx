import { Heart, Phone, Mail, Globe, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo-main.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="The Bridge Project" className="h-16 lg:h-20 mb-4 bg-white p-2 rounded-lg" />
            <p className="opacity-90 leading-relaxed text-sm lg:text-base">
              Bridging the gap between homelessness and humanity. Together, we bring hope and dignity to those in need.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm lg:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#impact" className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm lg:text-base">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#help" className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm lg:text-base">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#donate" className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm lg:text-base">
                  Donate Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-2 text-sm lg:text-base">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:1234567890" className="hover:opacity-100">(123) 456-7890</a>
              </li>
              <li className="flex items-start gap-2 text-sm lg:text-base">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@thebridgeproject.org" className="hover:opacity-100">info@thebridgeproject.org</a>
              </li>
              <li className="flex items-start gap-2 text-sm lg:text-base">
                <Globe className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>thebridgeproject.org</span>
              </li>
              <li className="flex items-start gap-2 text-sm lg:text-base">
                <Facebook className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="https://facebook.com/thebridgeproject" className="hover:opacity-100">@thebridgeproject</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4">Location</h3>
            <div className="opacity-90 space-y-3">
              <div className="flex items-start gap-2 text-sm lg:text-base">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Community Center<br />Open for visits and volunteers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="opacity-90 flex items-center gap-2 text-sm lg:text-base">
              © {currentYear} The Bridge Project. All rights reserved.
            </p>
            <p className="opacity-90 flex items-center gap-2 text-sm lg:text-base">
              Made with <Heart className="w-4 h-4 fill-pink-500 text-pink-500" /> for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
