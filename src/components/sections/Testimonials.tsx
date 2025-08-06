import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      image: "SJ", // Placeholder for actual image
      content: "Harish is an exceptional developer who consistently delivers high-quality code. His attention to detail and ability to solve complex problems make him an invaluable team member. The e-commerce platform he built exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      image: "MC",
      content: "Working with Harish was a game-changer for our startup. His full-stack expertise and modern development practices helped us launch our product 3 months ahead of schedule. I highly recommend him for any web development project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      company: "DesignStudio",
      image: "ER",
      content: "Harish has an incredible ability to translate design concepts into pixel-perfect, responsive web applications. His collaboration skills and technical expertise make the design-to-development handoff seamless. A true professional!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-secondary">
      <div className="section-container">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What clients and colleagues say about working with me and the 
              impact of our collaborations.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="stagger-item relative border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-bold text-primary-foreground">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-8 text-center" style={{ animationDelay: '0.6s' }}>
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "100%", label: "Project Success Rate" },
              { number: "24h", label: "Response Time" }
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

export default Testimonials;