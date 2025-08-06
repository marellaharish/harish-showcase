import { Code, Coffee, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const funFacts = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Code Enthusiast",
      description: "Passionate about clean, efficient code and modern development practices."
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary" />,
      title: "Coffee Lover",
      description: "Fueled by coffee and driven by the desire to build amazing things."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and turning ideas into reality."
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Global Mindset",
      description: "Working with teams worldwide to create impactful solutions."
    }
  ];

  const journey = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began learning web development with HTML, CSS, and JavaScript"
    },
    {
      year: "2021",
      title: "Full Stack Development",
      description: "Mastered React, Node.js, and modern development frameworks"
    },
    {
      year: "2022",
      title: "Professional Experience",
      description: "Started working on real-world projects and client solutions"
    },
    {
      year: "2024",
      title: "Senior Developer",
      description: "Leading projects and mentoring junior developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="section-container">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate full-stack developer with a love for creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi! I'm Harish, a full-stack developer based in India with a passion for 
                    creating digital experiences that make a difference. My journey into web 
                    development started with curiosity and has evolved into a deep love for 
                    solving complex problems through code.
                  </p>
                  <p>
                    I specialize in building scalable web applications using modern technologies 
                    like React, Next.js, TypeScript, and Node.js. I believe in writing clean, 
                    maintainable code and creating user experiences that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source projects, or sharing my knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <Card key={index} className="stagger-item border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group" style={{ animationDelay: `${0.1 * index}s` }}>
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {fact.icon}
                      </div>
                      <h4 className="font-semibold">{fact.title}</h4>
                      <p className="text-sm text-muted-foreground">{fact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold">My Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {journey.map((milestone, index) => (
                  <Card key={index} className="stagger-item relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group" style={{ animationDelay: `${0.1 * index}s` }}>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-sm font-bold text-primary-foreground">{milestone.year}</span>
                        </div>
                        <h4 className="font-semibold text-lg">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </CardContent>
                    
                    {/* Connecting line for larger screens */}
                    {index < journey.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;