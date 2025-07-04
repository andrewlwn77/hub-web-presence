import { Mail, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl text-foreground">N8NHub</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              N8NHub delivers Enterprise Automation Architecture solutions. 
              Founded by Andrew Lewin with 20+ years of technical leadership experience.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:andrew@n8nhub.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4 mr-2" />
                andrew@n8nhub.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About N8NHub
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                  Privacy & Terms
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} N8NHub.com - Founded by Andrew Lewin. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Enterprise Automation Architecture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
