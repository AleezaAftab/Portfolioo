import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Monitor, ShoppingCart } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Weather Forecast",
      description: "Frontend weather application built with HTML, CSS, and JavaScript providing real-time weather data and forecasts with responsive design.",
      icon: Code,
      type: "Frontend Application",
      githubUrl: "https://github.com/aleezaaftab/weather-",
      liveUrl: "https://aleezaaftab.github.io/weather-/"
    },
    {
      title: "Digital Signage System",
      description: "Digital signage solution for managing LED TVs, fridges, ACs, and electronic equipment displays. Built for dynamic content management across multiple devices.",
      icon: Monitor,
      type: "Full Stack Application",
      githubUrl: "https://github.com/aleezaaftab/fyp",
      liveUrl: null
    },
    {
      title: "Online Shopping System",
      description: "Full stack e-commerce platform with product catalog, shopping cart, billing system, and database integration. Complete frontend, backend, and database implementation.",
      icon: ShoppingCart,
      type: "Full Stack Application",
      githubUrl: "https://github.com/aleezaaftab/shopping",
      liveUrl: null
    },
    {
      title: "Hostel Management System",
      description: "DBMS project for hostel operations including room allocation, student registration, fee management, and administrative controls using database systems.",
      icon: Database,
      type: "Database Management System",
      githubUrl: "https://github.com/aleezaaftab/dbms",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in full stack development, 
            mobile applications, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card card-gradient card-hover group relative overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {project.type}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Actions */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 btn-primary"
                      onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
                      disabled={!project.liveUrl}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12 fade-in-delay">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/aleezaaftab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};