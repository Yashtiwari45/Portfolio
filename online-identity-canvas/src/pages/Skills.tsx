
import { Particles } from "@/components/ui/particles";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Github,
  Layers,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  TestTube,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

type SkillCategory = "programming" | "frameworks" | "technical" | "soft";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("programming");

  const skills = {
    programming: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C", level: 85 },
      { name: "TypeScript", level: 80 },
    ],
    frameworks: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind", level: 85 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Next.js", level: 80 },
    ],
    technical: [
      { name: "Machine Learning", level: 75 },
      { name: "DBMS", level: 85 },
      { name: "OOPS", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Data Structures", level: 90 },
    ],
    soft: [
      { name: "Leadership", level: 85 },
      { name: "Event Management", level: 80 },
      { name: "Writing", level: 75 },
      { name: "Public Speaking", level: 80 },
      { name: "Time Management", level: 85 },
      { name: "Problem Solving", level: 90 },
    ],
  };

  const projects = [
    {
      icon: <Sparkles size={32} className="text-primary" />,
      title: "SolarGIS",
      description:
        "Comprehensive solar analysis tool offering detailed estimates of solar energy potential due to rooftop area, configuration of solar panels, and real-time weather data.",
      features: [
        "Advanced Shadow Modeling: Uses ray tracing and 3D representation to compute shadow coverage",
        "User-Centric Design: Enables users to input solar parameters such as tilt angle and azimuth",
        "Real-Time Insights: Provides dynamic visualizations, graphs and maps for informed decisions",
      ],
      github: "SolarGIS"
    },
    {
      icon: <Smartphone size={32} className="text-primary" />,
      title: "Railway Navigation App",
      description:
        "An AI solution that allows guiding users on how to find food stalls, restrooms, and the platform when in need.",
      features: [
        "Real-Time Updates: Provides information about how crowded is the estimated arrival of the train",
        "Alarms and Dashboard: Users can set alarms for upcoming stations and customize their dashboard",
        "Navigation options promise to make traveling efficient",
      ],
      github: "TrackVision-Navigator"
    },
    {
      icon: <FileCode2 size={32} className="text-primary" />,
      title: "Music Effect Generator",
      description:
        "Audio processing enables loading of audio files, either in MP3 or WAV, and allows an implementation of several effects.",
      features: [
        "Reduction of the sily aspect of speech effects, no effect or 3D audio and left filter",
        "Multithreading Support: Audio effects processing uses multithreading which ensures rapid processing",
        "Simple Interface: One feature on which everyone will be user-friendly and simple in designing",
      ],
      github: "MusicEffectGenerator"
    },
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "yasht3439",
      link: "https://leetcode.com/u/yasht3439/",
      description: "Solved 300+ problems across the platform"
    },
    {
      platform: "CodeChef",
      username: "yogeshwar_1234",
      link: "https://www.codechef.com/users/yogeshwar_1234",
      description: "1604 Max Rating, World Rank 188 in Starters 126 Division 2"
    },
    {
      platform: "CodeForces",
      username: "yasht415",
      link: "https://codeforces.com/profile/yasht415",
      description: "Regular participant in competitive programming contests"
    },
    {
      platform: "HackerEarth",
      username: "yogeshwar.tiwari",
      link: "https://www.hackerearth.com/@yogeshwar.tiwari",
      description: "Participant in hackathons and coding challenges"
    },
  ];

  return (
    <main className="relative min-h-screen">
      <Particles
        className="fixed inset-0 -z-10"
        quantity={150}
        staticity={30}
        ease={70}
        color="#00E5FF"
      />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)]" />
      <Navbar />

      <section className="container mx-auto px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
              My Skills & Projects
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              With expertise in multiple programming languages and frameworks, I build innovative solutions
              and solve complex problems efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-white/5">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Brain className="text-primary mr-2" size={24} />
                  <span>Technical Skills</span>
                </h2>

                <div className="flex mb-8 border-b border-white/10">
                  <button
                    onClick={() => setActiveCategory("programming")}
                    className={`px-4 py-2 text-sm font-medium relative ${
                      activeCategory === "programming"
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Programming
                    {activeCategory === "programming" && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveCategory("frameworks")}
                    className={`px-4 py-2 text-sm font-medium relative ${
                      activeCategory === "frameworks"
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Frameworks
                    {activeCategory === "frameworks" && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveCategory("technical")}
                    className={`px-4 py-2 text-sm font-medium relative ${
                      activeCategory === "technical"
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Technical
                    {activeCategory === "technical" && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveCategory("soft")}
                    className={`px-4 py-2 text-sm font-medium relative ${
                      activeCategory === "soft"
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Soft Skills
                    {activeCategory === "soft" && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                </div>

                <div className="space-y-5">
                  {skills[activeCategory].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-primary">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-700" indicatorColor="bg-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-white/5 h-full">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Cpu className="text-primary mr-2" size={24} />
                  <span>Coding Profiles</span>
                </h2>

                <div className="space-y-6">
                  {codingProfiles.map((profile, index) => (
                    <motion.div
                      key={profile.platform}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-secondary/40 rounded-lg p-4 border border-white/5 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-primary">{profile.platform}</h3>
                        <a 
                          href={profile.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-primary/10 px-2 py-1 rounded text-primary hover:bg-primary/20 transition-colors"
                        >
                          @{profile.username}
                        </a>
                      </div>
                      <p className="text-sm text-gray-300">{profile.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Layers className="text-primary mr-2" size={28} />
              <span>Featured Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors group"
                >
                  <div className="p-4 rounded-full bg-secondary/40 inline-block mb-4 group-hover:bg-primary/10 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={`https://github.com/${project.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Github size={12} />
                    <span>{project.github}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Want to work together?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm passionate about building impactful solutions and always open to new challenges.
              Let's collaborate and create something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Skills;
