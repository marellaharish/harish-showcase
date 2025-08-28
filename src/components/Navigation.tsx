import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "glass shadow-md" : "bg-transparent"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            className="flex items-center gap-3"
            onClick={() => scrollToSection("#home")}
          >
            <Avatar className="h-9 w-9 ring-2 ring-primary/20">
              <AvatarImage src="/src/assets/profile-main.jpg" alt="Harish" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <span className="text-base sm:text-lg font-semibold text-foreground">Harish</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Harish_CV.pdf"
              download
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-card-foreground hover:border-primary/50 hover:shadow-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border">
            <div className="section-container py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="/Harish_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-card-foreground hover:border-primary/50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;