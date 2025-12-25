
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import ProductShowcase from './components/ProductShowcase';
import FeatureGrid from './components/FeatureGrid';
import Pricing from './components/Pricing';
import MiniGame from './components/MiniGame';
import TrustStats from './components/TrustStats';
import Testimonials from './components/Testimonials';
import SamplePapers from './components/SamplePapers';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import AboutPage from './components/AboutPage';
import FeatureDetail from './components/FeatureDetail';

export type ViewType = 'home' | 'privacy' | 'refund' | 'terms' | 'about' | 'feature-detail';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [selectedFeatureId, setSelectedFeatureId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedFeatureId]);

  const handleNavigate = (newView: ViewType, featureId?: number) => {
    if (featureId !== undefined) {
      setSelectedFeatureId(featureId);
    }
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-[#38A4BE] selection:text-white">
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-multiply" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
      
      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <Hero />
            <Purpose />
            <ProductShowcase onLearnMore={(id) => handleNavigate('feature-detail', id)} />
            <FeatureGrid />
            <Pricing />
            <MiniGame />
            <TrustStats />
            <Testimonials />
            <SamplePapers />
            <FinalCTA />
          </>
        ) : view === 'about' ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : view === 'feature-detail' && selectedFeatureId !== null ? (
          <FeatureDetail featureId={selectedFeatureId} onNavigate={handleNavigate} />
        ) : (
          <LegalPage type={view as any} onNavigate={handleNavigate} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} currentView={view} />
    </div>
  );
}

export default App;
