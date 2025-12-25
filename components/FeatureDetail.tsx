
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Zap, BookOpen, ShieldCheck, PlayCircle, Languages, Globe, Target } from 'lucide-react';
import { features } from './ProductShowcase';
import { ViewType } from '../App';

interface FeatureDetailProps {
  featureId: number;
  onNavigate: (view: ViewType) => void;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ featureId, onNavigate }) => {
  const feature = features.find(f => f.id === featureId);
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";

  if (!feature) return null;

  const handleCTA = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  const getDetailedContent = () => {
    switch (featureId) {
      case 0: // Question Paper View
        return {
          highlights: [
            { icon: <Clock />, title: "Real-time Timer", desc: "Simulate the 3-hour exam pressure with a non-intrusive countdown timer." },
            { icon: <Target />, title: "Precision Coverage", desc: "Questions weighted exactly as per the latest CBSE blueprints." },
            { icon: <BookOpen />, title: "Auto-Evaluation", desc: "Instant grading for objective sections with detailed marking scheme explanations." }
          ],
          deepDive: "Our Question Paper View is more than a list of questions; it's a full exam simulation engine. We've removed all distractions—no ads, no sidebars, no popups. Only you and the paper. It supports all major CBSE subjects including Science, Math, Social Studies, and Languages."
        };
      case 1: // Daily Quiz View
        return {
          highlights: [
            { icon: <Zap />, title: "Streak System", desc: "Build momentum with daily challenges that keep your mind sharp." },
            { icon: <ShieldCheck />, title: "Badges & Rewards", desc: "Gamified milestones that celebrate your consistency and accuracy." },
            { icon: <PlayCircle />, title: "Rapid Feedback", desc: "Learn from mistakes immediately with 'Solve Again' loops." }
          ],
          deepDive: "Consistency is the key to mastering the CBSE syllabus. The Daily Quiz view presents 5-10 high-impact questions every morning. These are tailored based on your past performance, focusing on areas where you need the most improvement to ensure balanced growth."
        };
      case 2: // Audio Recap
        return {
          highlights: [
            { icon: <Languages />, title: "Multi-language Support", desc: "Available in English and Tamil, ensuring concepts are understood in your native flow." },
            { icon: <Globe />, title: "Offline Listening", desc: "Download recaps to study without an active internet connection." },
            { icon: <Clock />, title: "3-Min Summaries", desc: "Every major chapter condensed into a high-retention 3-minute audio recap." }
          ],
          deepDive: "Turn 'dead time' into productive study sessions. Whether you're commuting or taking a break, our professionally voiced audio summaries in multiple languages use pedagogical techniques like spaced repetition and narrative summaries to help facts stick better than reading alone."
        };
      case 3: // Live AI Tutor
        return {
          highlights: [
            { icon: <Zap />, title: "Instant Clarity", desc: "Zero wait time. Get complex concepts explained in simple terms 24/7." },
            { icon: <ShieldCheck />, title: "Textbook Grounded", desc: "Unlike generic AI, our tutor is specifically trained on verified CBSE textbooks." },
            { icon: <BookOpen />, title: "Step-by-Step", desc: "Not just answers—get the logical steps to arrive at the solution." }
          ],
          deepDive: "The Live AI Tutor is your personal 24/7 study partner. It doesn't just give you the answer; it explains 'why' and 'how' in a way that matches your learning style. Trained specifically on curriculum data, it avoids generic confusion and provides reliable support for your toughest questions."
        };
      default:
        return { highlights: [], deepDive: "" };
    }
  };

  const content = getDetailedContent();

  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Navigation */}
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('home')}
          className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-[#121E1F] transition-all mb-20"
        >
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-50">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Features
        </motion.button>

        {/* Feature Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-[2rem] mb-10 shadow-lg text-white"
              style={{ backgroundColor: feature.color }}
            >
              {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#121E1F] mb-8 leading-[1.05]">
              {feature.title}
            </h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed tracking-tight">
              {feature.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[9/16] rounded-[3rem] overflow-hidden border-[10px] border-[#121E1F] shadow-2xl relative">
              <img src={feature.imgUrl} alt={feature.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Background Glow */}
            <div 
              className="absolute -inset-10 opacity-20 blur-[80px] -z-10 rounded-full" 
              style={{ backgroundColor: feature.color }}
            />
          </motion.div>
        </div>

        {/* Detailed Insights */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {content.highlights.map((item, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all">
                <div className="text-[#38A4BE] mb-6">
                   {React.cloneElement(item.icon as React.ReactElement, { size: 28, strokeWidth: 2.5 })}
                </div>
                <h3 className="text-xl font-bold text-[#121E1F] mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Deep Dive Text */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-[#121E1F] mb-10 tracking-tight">How it works.</h2>
          <p className="text-2xl text-gray-500 leading-relaxed font-medium tracking-tight">
            {content.deepDive}
          </p>
        </motion.section>

        {/* Final Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div>
            <h3 className="text-3xl font-bold text-[#121E1F] mb-2 tracking-tight">Ready to score better?</h3>
            <p className="text-xl text-gray-400 font-medium">Join 1000+ students already using {feature.title}.</p>
          </div>
          <button 
            onClick={handleCTA}
            className="bg-[#121E1F] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#245C68] transition-all transform hover:scale-105 shadow-xl shadow-black/5"
          >
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureDetail;
