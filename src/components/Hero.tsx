import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient">AA</span>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-gradient">Aleeza Aftab</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Web Developer
            </h2>
          </div>


          {/* Short Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Recent BSIT graduate with hands-on experience in developing web applications using 
              <span className="text-primary font-medium"> Node.js, Express.js, MongoDB, and React.js</span>. 
              Fast learner with strong problem-solving abilities, focused on building scalable, real-world software solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 fade-in-delay">
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-primary px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/aleeza-aftab-34b783321"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
              
              <a
                href="https://github.com/aleezaaftab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};