import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail,
  Phone, 
  Clock
} from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+92 304 5117536",
      href: "tel:+923045117536",
      color: "text-blue-400"
    },
    {
      icon: Mail,
      title: "Email",
      value: "aleezaaftab338@gmail.com",
      href: "mailto:aleezaaftab338@gmail.com",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about web development and technology.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-foreground">{info.title}</h4>
                      {info.href === "#" ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


            {/* Availability */}
            <Card className="card-gradient p-6">
              <CardContent className="flex items-center space-x-4 p-0">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Clock className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Availability</h4>
                  <p className="text-muted-foreground">Open for new opportunities</p>
                  <p className="text-sm text-green-400 font-medium">Ready to start immediately</p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};