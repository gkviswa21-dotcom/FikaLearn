
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'privacy' | 'refund' | 'terms' | 'about') => void;
  currentView: string;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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

  const handleLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  return (
    <footer className="bg-[#121E1F] pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          
          <div className="flex flex-col gap-6 cursor-pointer" onClick={() => onNavigate('home')}>
             <div className="text-white font-bold text-2xl tracking-tight">Fikalearn</div>
             <p className="text-gray-400 max-w-xs">
               Empowering the next generation of thinkers and doers with calm, confident learning tools.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold">Product</h4>
              <button onClick={(e) => handleLink(e, 'features')} className="text-left text-gray-400 hover:text-white transition-colors">Features</button>
              <button onClick={(e) => handleLink(e, 'pricing')} className="text-left text-gray-400 hover:text-white transition-colors">Pricing</button>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold">Company</h4>
              <button onClick={() => onNavigate('about')} className="text-left text-gray-400 hover:text-white transition-colors">About Us</button>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold">Legal</h4>
              <button onClick={() => onNavigate('privacy')} className="text-left text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => onNavigate('terms')} className="text-left text-gray-400 hover:text-white transition-colors">Terms & Conditions</button>
              <button onClick={() => onNavigate('refund')} className="text-left text-gray-400 hover:text-white transition-colors">Refund Policy</button>
            </div>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
           <p className="text-sm text-gray-500">
             © {new Date().getFullYear()} Fikalearn Inc. All rights reserved.
           </p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <div className="w-5 h-5 bg-gray-700 rounded-full opacity-50 hover:opacity-100 cursor-pointer"></div>
              <div className="w-5 h-5 bg-gray-700 rounded-full opacity-50 hover:opacity-100 cursor-pointer"></div>
              <div className="w-5 h-5 bg-gray-700 rounded-full opacity-50 hover:opacity-100 cursor-pointer"></div>
           </div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div className="absolute -bottom-10 left-0 right-0 text-center select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] leading-none font-bold text-white tracking-tighter">FIKALEARN</h1>
      </div>
    </footer>
  );
};

export default Footer;
