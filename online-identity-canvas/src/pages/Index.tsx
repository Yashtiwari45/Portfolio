
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Particles } from "@/components/ui/particles";

const Index = () => {
  return (
    <main className="relative">
      <Particles
        className="fixed inset-0 -z-10"
        quantity={150}
        staticity={30}
        ease={70}
        color="#00E5FF"
      />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)]" />
      <Navbar />
      <Hero />
    </main>
  );
};

export default Index;
