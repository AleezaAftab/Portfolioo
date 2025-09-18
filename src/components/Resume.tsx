import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, FileText, Calendar } from "lucide-react";

export const Resume = () => {
  const handleDownloadCV = () => {
    // Create a link element to download the CV file
    const link = document.createElement('a');
    link.href = '/Aleeza_Aftab_CV.docx';
    link.download = 'Aleeza_Aftab_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    // In a real application, this would open the CV in a new tab
    // For now, we'll redirect to the portfolio website
    window.open("https://aleezaaftab.github.io/Portfolioo/", "_blank");
  };

  const resumeHighlights = [
    {
      icon: Award,
      title: "Education",
      content: "BSIT from University of Punjab",
      detail: "CGPA: 3.41/4.00 (2022-2025)"
    },
    {
      icon: Briefcase,
      title: "Experience",
      content: "4+ Major Projects Completed",
      detail: "Including Digital Signage System"
    },
    {
      icon: FileText,
      title: "Skills",
      content: "Full Stack Development",
      detail: "MERN Stack, C++"
    },
    {
      icon: Calendar,
      title: "Availability",
      content: "Open for Opportunities",
      detail: "Ready to start immediately"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resume & <span className="text-gradient">CV</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a comprehensive overview of my education, skills, and professional experience.
          </p>
        </div>

        {/* Resume Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Highlights */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Resume Highlights</h3>
            <div className="space-y-4">
              {resumeHighlights.map((item, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.content}</p>
                      <p className="text-sm text-primary font-medium">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-8 fade-in-delay">
            {/* Download CV Button */}
            <div className="text-center">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="btn-primary px-12 py-4 text-lg"
              >
                <Download className="h-6 w-6 mr-3" />
                Download CV
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-gradient text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">3.41</div>
                  <div className="text-sm text-muted-foreground">CGPA / 4.00</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};