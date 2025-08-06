import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Settings,
  GitBranch,
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      color: "bg-blue-500/10 text-blue-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      color: "bg-green-500/10 text-green-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 78 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      color: "bg-purple-500/10 text-purple-500",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Prisma", level: 90 },
        { name: "Redis", level: 75 },
        { name: "Supabase", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Tools",
      color: "bg-orange-500/10 text-orange-500",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 90 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 78 },
        { name: "Linux", level: 82 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "Notion", "Slack", "Jira", 
    "GitHub", "Bitbucket", "NPM", "Yarn", "Webpack", "Vite"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use 
              to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className="stagger-item border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${0.1 * categoryIndex}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${0.1 * skillIndex}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="fade-in text-center space-y-8" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="stagger-item px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-8 text-center" style={{ animationDelay: '0.8s' }}>
            {[
              { number: "4+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Technologies Mastered" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={stat.label} className="stagger-item space-y-2" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;