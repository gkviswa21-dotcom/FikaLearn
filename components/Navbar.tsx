
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewType } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAnchorLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        scrollToId(id);
      }, 100);
    } else {
      scrollToId(id);
    }
  };

  const navLinks = [
    { name: 'Features', type: 'anchor', id: 'features' },
    { name: 'Pricing', type: 'anchor', id: 'pricing' },
    { name: 'About', view: 'about' as ViewType },
    { name: 'Privacy', view: 'privacy' as ViewType },
    { name: 'Refund', view: 'refund' as ViewType },
    { name: 'Terms', view: 'terms' as ViewType },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${
          isScrolled ? 'pt-4' : 'pt-6 md:pt-10'
        }`}
      >
        <div 
          className={`
            relative flex items-center justify-between px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isScrolled 
              ? 'w-[95%] md:w-[90%] lg:w-[85%] bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 rounded-full py-2' 
              : 'w-full max-w-7xl bg-transparent py-4'
            }
          `}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-2 pl-2 cursor-pointer"
            onClick={() => onNavigate('home')}
            aria-label="Fikalearn Home"
          >
            <span className="text-xl font-bold tracking-tight text-[#121E1F]">Fikalearn</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6" role="navigation">
            {navLinks.map((link) => (
              link.type === 'anchor' ? (
                <button 
                  key={link.name}
                  onClick={(e) => handleAnchorLink(e, link.id!)}
                  aria-label={`Scroll to ${link.name}`}
                  className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-gray-600 hover:text-[#38A4BE]' : 'text-gray-400 hover:text-[#121E1F]'}`}
                >
                  {link.name}
                </button>
              ) : (
                <button 
                  key={link.name}
                  onClick={() => onNavigate(link.view!)}
                  aria-label={`Navigate to ${link.name} page`}
                  className={`text-sm font-medium transition-colors ${currentView === link.view ? 'text-[#38A4BE]' : 'text-gray-600 hover:text-[#38A4BE]'}`}
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block pr-1">
            <button 
              onClick={handleGetStarted}
              aria-label="Get Started with Fikalearn on Play Store"
              className={`
                transition-all duration-300 rounded-full text-sm font-medium hover:scale-105 active:scale-95
                ${isScrolled 
                  ? 'bg-[#121E1F] text-white px-5 py-2.5' 
                  : 'bg-[#121E1F] text-white px-6 py-3 hover:bg-[#245C68]'
                }
              `}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden pr-1">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-[#121E1F]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 lg:hidden flex flex-col space-y-6 overflow-y-auto pb-10"
          >
            {navLinks.map((link) => (
              link.type === 'anchor' ? (
                <button 
                  key={link.name}
                  onClick={(e) => { handleAnchorLink(e, link.id!); setMobileMenuOpen(false); }}
                  className="text-2xl font-medium text-[#121E1F] text-left"
                  aria-label={`Scroll to ${link.name}`}
                >
                  {link.name}
                </button>
              ) : (
                <button 
                  key={link.name}
                  onClick={() => { onNavigate(link.view!); setMobileMenuOpen(false); }} 
                  className={`text-2xl font-medium text-left ${currentView === link.view ? 'text-[#38A4BE]' : 'text-[#121E1F]'}`}
                  aria-label={`Navigate to ${link.name} page`}
                >
                  {link.name}
                </button>
              )
            ))}
            <div className="pt-4">
              <button 
                onClick={() => { handleGetStarted(); setMobileMenuOpen(false); }}
                className="bg-[#38A4BE] text-white w-full py-5 rounded-full text-lg font-medium shadow-lg shadow-[#38A4BE]/20"
                aria-label="Get Started Free on Play Store"
              >
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
