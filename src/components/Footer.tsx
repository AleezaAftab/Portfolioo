import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aleezaaftab",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aleeza-aftab-34b783321",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
            >
              Aleeza Aftab
            </button>
            <p className="text-muted-foreground">
              Web Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Resume", href: "#resume" },
                { label: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <div className="text-muted-foreground">
            <span>© {currentYear} Aleeza Aftab. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};