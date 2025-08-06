import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:harish.marella@email.com", label: "Email" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-card border-t border-border">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="py-16 space-y-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">HM</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">Harish Marella</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Passionate about creating digital experiences that make a difference. 
                Let's build something amazing together and turn your ideas into reality.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <span className="font-medium">Email:</span><br />
                  <a 
                    href="mailto:harish.marella@email.com" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    harish.marella@email.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span><br />
                  <a 
                    href="tel:+15551234567" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
                <p>
                  <span className="font-medium">Location:</span><br />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="border-t border-border pt-8">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Stay Updated</h4>
                <p className="text-muted-foreground">
                  Get notified about my latest projects, blog posts, and tech insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors duration-300"
                />
                <Button className="hero-button px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© {currentYear} Harish Marella. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of ☕</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
                
                {/* Scroll to top button */}
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  variant="outline"
                  className="group"
                >
                  <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                  Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;