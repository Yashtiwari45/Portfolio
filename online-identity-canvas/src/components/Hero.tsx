import { Github, Linkedin, Code2, Terminal } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
const Hero = () => {
  const socialLinks = [{
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/Yashtiwari45"
  }, {
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/yogeshwar-tiwari-a62645265"
  }, {
    icon: <Code2 className="w-6 h-6" />,
    url: "https://leetcode.com/u/yasht3439/"
  }, {
    icon: <Terminal className="w-6 h-6" />,
    url: "https://www.codechef.com/users/yogeshwar_1234"
  }];
  return <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-primary">Yogeshwar Tiwari</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
              I'M A DEVELOPER
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Passionate developer with expertise in web development and problem solving. 
              Creating elegant solutions and turning ideas into reality.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <RainbowButton className="text-zinc-200 bg-neutral-950 hover:bg-neutral-800">
                Hire me
              </RainbowButton>
              <div className="flex items-center gap-6">
                {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                    {link.icon}
                  </a>)}
              </div>
            </div>
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative animate-slide-in">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent animate-glow-pulse" />
            <img src="/lovable-uploads/df65378c-3750-426c-bdba-a45388778aac.png" alt="Yogeshwar Tiwari" className="w-full h-full rounded-full object-cover border-4 border-primary/50" />
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;