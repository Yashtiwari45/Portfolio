import { Particles } from "@/components/ui/particles";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar, Code2, GraduationCap, MapPin, UserCircle, Mail, Phone, Award, BookOpen, Github, Linkedin, Terminal, Clock, Heart, Coffee, Headphones, Target, Users } from "lucide-react";
const About = () => {
  return <main className="relative">
      <Particles className="fixed inset-0 -z-10" quantity={150} staticity={30} ease={70} color="#00E5FF" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)]" />
      <Navbar />
      
      <section className="container mx-auto px-6 pt-40 pb-20">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/3">
              <div className="relative w-full max-w-xs mx-auto md:mx-0">
                <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
                  <img src="/lovable-uploads/df65378c-3750-426c-bdba-a45388778aac.png" alt="Profile" className="object-cover w-full h-full" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center text-black font-bold">
                  <span className="text-xs">Passionate<br />Developer</span>
                </div>
              </div>
              
              {/* New content for the left side */}
              <div className="mt-8 space-y-6 bg-black/20 rounded-xl p-5 border border-primary/10 backdrop-blur-sm">
                <motion.div initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <UserCircle size={18} /> Contact Details
                  </h3>
                  <div className="pl-2 space-y-2">
                    <p className="flex items-center gap-2 text-sm">
                      <Mail size={14} className="text-primary" />
                      <span>yogeshwartiwari37@gmail.com</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="text-primary" />
                      <span>+91 9370548117</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-primary" />
                      <span>Nagpur, India</span>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }} className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Coffee size={18} /> Interests & Hobbies
                  </h3>
                  <div className="pl-2 grid grid-cols-2 gap-2">
                    <span className="text-sm bg-primary/10 px-2 py-1 rounded">Competitive Coding</span>
                    <span className="text-sm bg-primary/10 px-2 py-1 rounded">Chess</span>
                    <span className="text-sm bg-primary/10 px-2 py-1 rounded">Reading</span>
                    <span className="text-sm bg-primary/10 px-2 py-1 rounded">Anime</span>
                    <span className="text-sm bg-primary/10 px-2 py-1 rounded">Music</span>
                    <span className="text-sm bg-primary/10 px-2 py-1 rounded">Cricket</span>
                  </div>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Target size={18} /> Goals
                  </h3>
                  <div className="pl-2 space-y-2">
                    <p className="text-sm">Become a distinguished software engineer</p>
                    <p className="text-sm">Contribute to open-source projects</p>
                    <p className="text-sm">Master full-stack development</p>
                  </div>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.4
              }} className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Users size={18} /> Memberships
                  </h3>
                  <div className="pl-2 space-y-2">
                    <p className="text-sm">Computer Science Student Association</p>
                    <p className="text-sm">Competitive Programming Club</p>
                    <p className="text-sm">Developer Student Community</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">About Me</h1>
              <div className="h-1 w-20 bg-primary mb-6 rounded-full"></div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate developer with expertise in web development, machine learning, and problem-solving.
                My approach combines technical knowledge with creative thinking to build innovative solutions
                that meet user needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <UserCircle className="text-primary" size={20} />
                  <span>Computer Science Engineer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <span>Bachelor of Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span>Nagpur, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 className="text-primary" size={20} />
                  <span>Full Stack Developer</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Education</h2>
              <div className="space-y-6">
                <div className="relative pl-8 border-l border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center">
                    <GraduationCap className="text-primary mr-2" size={18} />
                    <h3 className="text-xl font-medium">Shri Ramdeobaba College of Engineering and Management</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Oct 2022 - May 2027</p>
                  <p className="text-gray-300">Bachelor of Technology - Computer Science And Engineering</p>
                  <p className="text-gray-400 text-sm mt-1">Courses: Computer Design, Data Structures, Machine Learning, Database and Management</p>
                </div>
                
                <div className="relative pl-8 border-l border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center">
                    <GraduationCap className="text-primary mr-2" size={18} />
                    <h3 className="text-xl font-medium">Disha Education</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">July 2020 - May 2022</p>
                  <p className="text-gray-300">Higher Secondary Education</p>
                  <p className="text-gray-400 text-sm mt-1">Warora, India</p>
                </div>
                
                <div className="relative pl-8 border-l border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center">
                    <GraduationCap className="text-primary mr-2" size={18} />
                    <h3 className="text-xl font-medium">Purushottam Das Bagla Convent</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Secondary Education</p>
                  <p className="text-gray-300">Chimur, Maharashtra</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">•</div>
                  <p className="text-gray-300">Rated 1680 (Max Rating) on CodeChef</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">•</div>
                  <p className="text-gray-300">Solved more than 300 problems across LeetCode and CodeForces platforms</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">•</div>
                  <p className="text-gray-300">Secured World Rank 188 in CodeChef Starters 126 Division 2</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">•</div>
                  <p className="text-gray-300">Top 10 (out of 100) teams in level Supervised Hackathon event in Mumbai</p>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors">
                  Get in Touch <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>;
};
export default About;