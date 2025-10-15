import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="The Bridge Project" className="h-16 mb-4 brightness-0 invert" />
            <p className="opacity-90">
              Bridging the gap between homelessness and humanity. Together, we bring hope and dignity to those in need.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#impact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#help" className="opacity-90 hover:opacity-100 transition-opacity">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 opacity-90">
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@thebridgeproject.org</li>
              <li>Web: thebridgeproject.org</li>
              <li>Social: @thebridgeproject</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-90 flex items-center justify-center gap-2">
            © {currentYear} The Bridge Project. Made with <Heart className="w-4 h-4 fill-current" /> for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};
