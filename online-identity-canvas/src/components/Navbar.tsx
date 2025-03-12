
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Portfolio<span className="text-white">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary after:w-full' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-primary after:w-full' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'text-primary after:w-full' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              className={`nav-link ${isActive('/skills') ? 'text-primary after:w-full' : ''}`}
            >
              Skills
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'text-primary after:w-full' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              className={`nav-link ${isActive('/skills') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
