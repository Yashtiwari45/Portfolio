import { Particles } from "@/components/ui/particles";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { AtSign, Clock, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  return <main className="relative min-h-screen">
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
      }}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Get In Touch</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-gray-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-gray-500" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-gray-500" placeholder="Project Inquiry" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-secondary/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-gray-500 resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isSubmitting ? <>
                      <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div>
                      Sending...
                    </> : <>
                      <Send size={18} /> Send Message
                    </>}
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-white/5 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-300">yasht3439@gmail.com</p>
                      <p className="text-gray-400 text-sm mt-1">Send me an email anytime!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-300">+91 9322526204</p>
                      <p className="text-gray-400 text-sm mt-1">Monday to Friday, 8am to 7pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-gray-300">Nagpur, India</p>
                      <p className="text-gray-400 text-sm mt-1">Available for remote work worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    
                    
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-white/5">
                <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
                <p className="text-gray-300 text-sm mb-6">Follow me on social media for updates on my latest projects and thoughts.</p>
                
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-secondary/40 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-3 bg-secondary/40 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-3 bg-secondary/40 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-3 bg-secondary/40 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                    <AtSign size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>;
};
export default Contact;