import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import profile from '../assets/profile.webp';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', to: isHome ? '#skills' : '/#skills' },
    { name: 'Projects', to: isHome ? '#projects' : '/#projects' },
    { name: 'Experience', to: isHome ? '#experience' : '/#experience' },
    { name: 'Interview Prep', to: '/interview-prep' },
    { name: 'Testimonials', to: isHome ? '#testimonials' : '/#testimonials' },
  ];

  const contactHref = isHome ? '#contact' : '/#contact';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-fg/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={profile}
              alt="Photo of Nagaraju Nali"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-display font-semibold text-fg">Nagaraju Nali</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm text-fg/70 hover:text-fg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-fg/70 hover:text-fg hover:bg-fg/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to={contactHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg text-sm font-medium rounded-full hover:bg-fg/90 transition-colors"
            >
              Contact Me
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-fg/70 hover:text-fg hover:bg-fg/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-fg hover:bg-fg/10 transition-colors"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-1 bg-bg/95 backdrop-blur-md border-b border-fg/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block px-3 py-2 rounded-md text-sm text-fg/70 hover:text-fg transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={contactHref}
            onClick={toggleMenu}
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg text-sm font-medium rounded-full"
          >
            Contact Me
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
