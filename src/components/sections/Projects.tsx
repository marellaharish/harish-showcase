import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      liveDemo: "#",
      github: "#",
      role: "Full Stack Developer",
      achievements: ["30% faster loading times", "99.9% uptime", "5-star user rating"]
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveDemo: "#",
      github: "#",
      role: "Lead Developer",
      achievements: ["Real-time collaboration", "Mobile responsive", "10k+ active users"]
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by AI with natural language processing and context-aware responses.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase", "TypeScript"],
      liveDemo: "#",
      github: "#",
      role: "Frontend Lead",
      achievements: ["95% accuracy rate", "Sub-second responses", "Multi-language support"]
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with data visualization, real-time metrics, and customizable reports.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
      role: "Full Stack Developer",
      achievements: ["Handle 1M+ data points", "Interactive visualizations", "Custom reporting"]
    },
    {
      title: "Social Media Platform",
      description: "A modern social media platform with features like posts, stories, messaging, and content moderation.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "GraphQL", "Redis", "AWS"],
      liveDemo: "#",
      github: "#",
      role: "Mobile Developer",
      achievements: ["Cross-platform compatibility", "Real-time messaging", "Content moderation AI"]
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS"],
      liveDemo: "#",
      github: "#",
      role: "Backend Developer",
      achievements: ["Course completion tracking", "Interactive quizzes", "Student progress analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="section-container">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring web applications, mobile apps, 
              and innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="stagger-item group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-glow h-48">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveDemo} className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Role */}
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {project.role}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center space-x-2">
                          <ArrowRight className="w-3 h-3 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveDemo} className="flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="fade-in text-center" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Want to see more?</h3>
              <p className="text-muted-foreground">
                Check out my GitHub for more projects and open source contributions.
              </p>
              <Button className="hero-button" asChild>
                <a href="#" className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>View All Projects</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;