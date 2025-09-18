import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal,
  Layers,
  Users,
  Clock,
  MessageSquare
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C++", "JavaScript", "TypeScript"],
      color: "text-blue-400"
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "Bootstrap", "React.js", "Tailwind CSS"],
      color: "text-green-400"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      color: "text-purple-400"
    },
    {
      title: "Development Tools",
      icon: Terminal,
      skills: ["VS Code", "Git", "XAMPP", "Cursor AI", "VMware"],
      color: "text-orange-400"
    },
    {
      title: "Other Technologies",
      icon: Layers,
      skills: ["Kali Linux", "Cisco Packet Tracer", "MATLAB"],
      color: "text-cyan-400"
    }
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: Code2, color: "text-blue-400" },
    { name: "Teamwork", icon: Users, color: "text-green-400" },
    { name: "Time Management", icon: Clock, color: "text-purple-400" },
    { name: "Communication", icon: MessageSquare, color: "text-pink-400" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to build exceptional web applications.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 fade-in">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="skill-card card-gradient card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className={`h-6 w-6 skill-icon ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="fade-in-delay">
          <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Card key={index} className="skill-card card-gradient card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <skill.icon className={`h-8 w-8 skill-icon ${skill.color}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-foreground">{skill.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};