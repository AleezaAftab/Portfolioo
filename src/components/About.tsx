import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate web developer with a strong foundation in modern technologies and a commitment to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-foreground leading-relaxed">
                I'm a recent BSIT graduate from the University of Punjab, Gujranwala Campus, 
                with a CGPA of 3.41/4.00. My journey in web development has been driven by 
                curiosity and a passion for solving real-world problems through code.
              </p>
              <p className="text-foreground leading-relaxed">
                I specialize in building scalable web applications using modern technologies 
                like React.js, Node.js, Express.js, and MongoDB. My approach combines technical 
                expertise with creative problem-solving to deliver solutions that make a difference.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">What Drives Me</h3>
              <p className="text-foreground leading-relaxed">
                I'm passionate about continuous learning and staying up-to-date with the latest 
                technologies. I believe in writing clean, maintainable code and creating user 
                experiences that are both functional and delightful.
              </p>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="space-y-6 fade-in-delay">
            <div className="grid gap-6">
              <Card className="card-gradient card-hover p-6">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Education</h4>
                    <p className="text-muted-foreground">BS Information Technology</p>
                    <p className="text-sm text-primary">University of Punjab (2022-2025)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient card-hover p-6">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Specialization</h4>
                    <p className="text-muted-foreground">Full Stack Development</p>
                    <p className="text-sm text-primary">MERN Stack</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center fade-in-delay">
          <Card className="card-gradient max-w-2xl mx-auto p-8">
            <CardContent className="space-y-4 p-0">
              <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+92 304 5117536</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">aleezaaftab338@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};