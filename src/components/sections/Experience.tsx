import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      logo: "TC", // You can replace with actual logo
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA (Remote)",
      duration: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications and mentoring junior developers. Architected microservices solutions that improved system performance by 40%.",
      responsibilities: [
        "Led a team of 5 developers in building enterprise-level applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Designed and developed REST APIs serving 100k+ daily requests",
        "Mentored 3 junior developers, improving team productivity by 30%"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
      website: "#"
    },
    {
      company: "InnovateLab",
      logo: "IL",
      position: "Full Stack Developer",
      location: "New York, NY (Hybrid)",
      duration: "2022 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple client projects, focusing on modern web technologies and best practices. Collaborated with cross-functional teams to deliver high-quality solutions.",
      responsibilities: [
        "Built responsive web applications using React and TypeScript",
        "Developed RESTful APIs and GraphQL endpoints",
        "Optimized application performance resulting in 50% faster load times",
        "Collaborated with UI/UX designers to implement pixel-perfect designs"
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB", "Azure"],
      website: "#"
    },
    {
      company: "StartupX",
      logo: "SX",
      position: "Frontend Developer",
      location: "Austin, TX (Remote)",
      duration: "2021 - 2022",
      type: "Contract",
      description: "Focused on creating engaging user interfaces and improving user experience. Worked closely with the product team to implement new features and optimize existing ones.",
      responsibilities: [
        "Developed modern, responsive web interfaces using React",
        "Implemented state management using Redux and Context API",
        "Integrated third-party APIs and payment gateways",
        "Improved code quality by implementing testing strategies"
      ],
      technologies: ["React", "Redux", "Tailwind CSS", "Jest", "Cypress"],
      website: "#"
    },
    {
      company: "DevAgency",
      logo: "DA",
      position: "Junior Developer",
      location: "Boston, MA (On-site)",
      duration: "2020 - 2021",
      type: "Full-time",
      description: "Started my professional journey, learning from experienced developers and contributing to various client projects. Gained valuable experience in full-stack development.",
      responsibilities: [
        "Assisted in developing web applications using HTML, CSS, and JavaScript",
        "Learned React and modern development practices",
        "Participated in code reviews and team meetings",
        "Contributed to bug fixes and feature implementations"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Express.js", "MySQL"],
      website: "#"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "🏆"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      badge: "⚛️"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2021",
      badge: "💻"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2021",
      badge: "📊"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey building amazing products and working with 
              talented teams across different industries.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company} 
                className="stagger-item border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold text-primary-foreground">{exp.logo}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <span className="font-medium">{exp.company}</span>
                          <a href={exp.website} className="hover:text-primary transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="fade-in space-y-8" style={{ animationDelay: '0.6s' }}>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">Certifications & Achievements</h3>
              <p className="text-muted-foreground">
                Continuous learning and professional development milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.name} 
                  className="stagger-item text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {cert.badge}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;