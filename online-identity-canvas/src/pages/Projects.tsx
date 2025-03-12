
import { Particles } from "@/components/ui/particles";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink, Github, Globe, Layers } from "lucide-react";
import { useState } from "react";
import YouTubeEmbed from "../components/YouTubeEmbed";

const projects = [
  {
    id: 1,
    title: "TraceX",
    description: "A comprehensive project tracking and management system with real-time updates, task management and team collaboration features.",
    videoId: "https://youtu.be/KKAPUkphgtY",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveLink: "https://youtu.be/KKAPUkphgtY",
    githubLink: "https://github.com/VidyutChakrabarti/TraceX",
    featured: true
  },
  {
    id: 2,
    title: "Covis",
    description: "A data visualization platform for COVID-19 statistics with interactive maps and charts, providing real-time pandemic insights.",
    videoId: "https://youtu.be/UuXL1Aasub0",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    liveLink: "https://youtu.be/UuXL1Aasub0",
    githubLink: "https://github.com/shehzansk/Covis",
    featured: true
  },
  {
    id: 3,
    title: "SolarGIS",
    description: "A Geographic Information System for solar energy analysis and planning, featuring map integrations and energy calculations.",
    videoId: "https://youtu.be/tluNHw39jIo",
    tags: ["Python", "GIS", "Spatial Analysis", "Data Visualization"],
    liveLink: "https://youtu.be/tluNHw39jIo",
    githubLink: "https://github.com/VidyutChakrabarti/SolarGIS",
    featured: true
  },
  {
    id: 4,
    title: "Railway Navigator",
    description: "An intelligent railway navigation and scheduling application with real-time updates and route optimization features.",
    videoId: "https://youtu.be/xfEutLil_GY?si=EmzPY-xPOOIdZk1_",
    tags: ["React", "Node.js", "Express", "MongoDB", "Maps API"],
    liveLink: "https://youtu.be/xfEutLil_GY?si=EmzPY-xPOOIdZk1_",
    githubLink: "https://github.com/NAKULMAK05/Railway-Navigator",
    featured: true
  },
  {
    id: 5,
    title: "Fitness Tracking Platform",
    description: "A mobile-responsive web application for tracking workouts, nutrition, and fitness goals with data visualization.",
    videoId: "",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 6,
    title: "Real Estate Listing Portal",
    description: "A property listing website with search, filtering, map integration, and virtual tours.",
    videoId: "",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  }
];

type CategoryType = 'all' | 'featured' | 'web' | 'mobile' | 'desktop';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'featured') return project.featured;
    
    // For demo purposes, assigning categories based on tags
    if (activeCategory === 'mobile' && project.tags.includes('React Native')) return true;
    if (activeCategory === 'web' && 
        (project.tags.includes('React') || project.tags.includes('Next.js'))) 
      return true;
    if (activeCategory === 'desktop' && project.tags.includes('Python')) return true;
    
    return false;
  });

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">My Projects</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore a collection of my latest projects, showcasing my skills in web development, 
              mobile applications, and more.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary/60 hover:bg-secondary'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveCategory('featured')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'featured' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary/60 hover:bg-secondary'
              }`}
            >
              Featured
            </button>
            <button 
              onClick={() => setActiveCategory('web')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'web' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary/60 hover:bg-secondary'
              }`}
            >
              Web Apps
            </button>
            <button 
              onClick={() => setActiveCategory('mobile')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'mobile' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary/60 hover:bg-secondary'
              }`}
            >
              Mobile Apps
            </button>
            <button 
              onClick={() => setActiveCategory('desktop')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'desktop' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary/60 hover:bg-secondary'
              }`}
            >
              Desktop Apps
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden">
                  {project.videoId ? (
                    <YouTubeEmbed videoId={project.videoId} title={project.title} />
                  ) : (
                    <div className="h-48">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-3">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary/80 transition-colors">
                        <Globe size={18} />
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary/80 transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-black text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-white hover:text-primary transition-colors font-medium"
                    >
                      View Demo <ArrowUpRight size={14} className="ml-1" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-white hover:text-primary transition-colors font-medium"
                    >
                      Code <Github size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Layers className="mx-auto text-primary/50 mb-4" size={48} />
              <h3 className="text-xl font-semibold">No projects found</h3>
              <p className="text-gray-400 mt-2">Try selecting a different category</p>
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export default Projects;
