import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Brain,
  Zap,
  Layers,
  GitBranch,
  Cloud,
  Monitor,
  Palette
} from "lucide-react";

const SkillsNew = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gray-800" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-400" },
        { name: "Vue.js", level: 85, color: "bg-green-500" }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 88, color: "bg-yellow-500" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "FastAPI", level: 82, color: "bg-teal-500" },
        { name: "GraphQL", level: 78, color: "bg-pink-500" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      description: "Managing data efficiently and securely",
      gradient: "from-purple-500 to-violet-500",
      skills: [
        { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
        { name: "MongoDB", level: 85, color: "bg-green-700" },
        { name: "Supabase", level: 90, color: "bg-emerald-600" },
        { name: "Redis", level: 80, color: "bg-red-600" },
        { name: "Prisma", level: 85, color: "bg-indigo-600" }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Deploying and scaling applications",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 82, color: "bg-orange-500" },
        { name: "Docker", level: 85, color: "bg-blue-600" },
        { name: "Vercel", level: 92, color: "bg-black" },
        { name: "GitHub Actions", level: 80, color: "bg-gray-800" },
        { name: "Terraform", level: 75, color: "bg-purple-600" }
      ]
    }
  ];

  const expertise = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description: "Building intelligent applications with modern AI tools",
      items: ["OpenAI API", "Langchain", "Vector Databases", "RAG Systems"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Cross-platform mobile solutions",
      items: ["React Native", "Expo", "Progressive Web Apps", "Responsive Design"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive user experiences",
      items: ["Figma", "Design Systems", "User Research", "Prototyping"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
      items: ["Code Splitting", "Caching", "Bundle Optimization", "Core Web Vitals"]
    }
  ];

  const achievements = [
    { number: "5+", label: "Years Experience", icon: <Monitor className="w-5 h-5" /> },
    { number: "100+", label: "Projects Delivered", icon: <Layers className="w-5 h-5" /> },
    { number: "25+", label: "Technologies", icon: <GitBranch className="w-5 h-5" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="space-y-20">
          {/* Header */}
          <div className="text-center space-y-6 fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Code2 className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about cutting-edge technologies and delivering exceptional digital experiences
              through clean, efficient, and scalable code.
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="stagger-item group p-6 hover:shadow-lg transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${0.2 + (0.1 * skillIndex)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Areas of <span className="gradient-text">Expertise</span></h3>
              <p className="text-muted-foreground">Specialized knowledge in modern development practices</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((area, index) => (
                <Card 
                  key={area.title}
                  className="stagger-item p-6 text-center hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30 group"
                  style={{ animationDelay: `${0.7 + (0.1 * index)}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {area.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{area.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {area.items.map((item) => (
                        <Badge 
                          key={item} 
                          variant="secondary" 
                          className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label} 
                  className="stagger-item text-center space-y-3 group"
                  style={{ animationDelay: `${0.9 + (0.1 * index)}s` }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;