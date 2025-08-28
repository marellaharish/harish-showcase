import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-xl blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow rounded-xl blur-3xl opacity-20"></div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="columns-2" >

            <div>
              <div className="fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground font-medium">👋 Hello, I'm</p>
                  <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="gradient-text">Harish Marella</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                    Full Stack Developer
                  </h2>
                </div>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I build <span className="text-primary font-semibold">fast</span>,
                  <span className="text-primary font-semibold"> scalable</span>, and
                  <span className="text-primary font-semibold"> user-friendly</span> web applications
                  that solve real-world problems.
                </p>
              </div>

              <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
                <Button className="hero-button group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  className="secondary-button group"
                  onClick={scrollToContact}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="relative w-[250px] h-[40vh] mx-auto mb-8">
              <img
                src="src/assets/profile-main.jpg"
                alt="Harish Marella - Professional Profile"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>


          </div>
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 mt-16"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-40 w-3 h-3 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;