
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Lightbulb, Compass, Rocket, GraduationCap, Users, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: 'home' | 'privacy' | 'refund' | 'terms' | 'about') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const handleCTA = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#38A4BE] selection:text-white">
      {/* Decorative background element */}
      <div className="fixed top-0 right-0 w-[60vw] h-[60vh] bg-[#38A4BE]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-48">
        {/* Navigation / Back Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16 md:mb-24"
        >
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-[#121E1F] transition-all"
          >
            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Home
          </button>
        </motion.div>

        {/* Section 01 — Hero */}
        <section className="mb-48 md:mb-64">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[#38A4BE] font-bold tracking-[0.2em] uppercase text-xs mb-8">Our Story</span>
              <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-[#121E1F] mb-12 leading-[0.95] lg:max-w-4xl">
                Clarity for every <span className="text-gray-300">student</span>.
              </h1>
              <p className="text-2xl md:text-4xl text-gray-500 font-medium leading-[1.2] tracking-tight max-w-3xl">
                FikaLearn is an exam-preparation platform built for CBSE students who need precision and confidence during last-minute revision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 02 — The Problem (Refined) */}
        <section className="mb-48 md:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-8">
                The Context
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold text-[#121E1F] mb-8 tracking-tight leading-tight">
                Modern exams meet <br/>legacy methods.
              </h2>
              <div className="space-y-6 text-xl text-gray-500 font-medium leading-relaxed">
                <p>
                  Modern CBSE exams focus on competency and application, yet students still struggle with scattered notes and bloated content.
                </p>
                <p>
                  Teachers lack the rapid tools needed to assess readiness in those critical final weeks. We saw a gap between learning and scoring that needed to be closed.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative aspect-video rounded-[3rem] bg-gray-50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#38A4BE]/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
                    <Compass size={120} strokeWidth={1} className="text-[#38A4BE] opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div className="space-y-2">
                     <div className="h-1 w-12 bg-[#38A4BE] rounded-full" />
                     <p className="text-sm font-bold text-[#121E1F] uppercase tracking-widest">Assessment Gap</p>
                   </div>
                   <p className="text-gray-400 text-sm max-w-[200px] text-right">The bridge between textbook and exam paper is often broken.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 03 & 04 — Our Approach & Offers (Dark Mode Apple Aesthetic) */}
        <section className="mb-48 md:mb-64 py-32 px-8 md:px-24 bg-[#121E1F] rounded-[4rem] text-white relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#38A4BE]/20 rounded-full blur-[100px]" />
          
          <div className="max-w-4xl mb-32 relative z-10">
            <motion.span {...fadeInUp} className="text-[#38A4BE] font-bold tracking-[0.2em] uppercase text-xs block mb-8">The Solution</motion.span>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-7xl font-semibold mb-10 tracking-tight leading-[1.1]">
              Built for the <br/><span className="text-[#38A4BE]">Flow State</span>.
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-2xl text-gray-400 font-medium leading-relaxed">
              FikaLearn strips away the noise. We focus on what matters most before exams: rapid self-assessment, textbook-aligned practice, and instant resolution.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {[
              { 
                icon: <Target className="w-8 h-8 text-[#38A4BE]" />, 
                title: "Competency Driven", 
                desc: "Practice questions that mimic the modern CBSE board pattern, focusing on application rather than rote memory." 
              },
              { 
                icon: <Sparkles className="w-8 h-8 text-[#38A4BE]" />, 
                title: "Gyaan AI", 
                desc: "Our textbook-trained intelligence provides instant, curriculum-accurate answers to your toughest doubts." 
              },
              { 
                icon: <Users className="w-8 h-8 text-[#38A4BE]" />, 
                title: "Classroom Ready", 
                desc: "Deployable on smart boards and TVs, helping teachers lead effective group revision sessions effortlessly." 
              },
              { 
                icon: <GraduationCap className="w-8 h-8 text-[#38A4BE]" />, 
                title: "NEP Aligned", 
                desc: "Structured according to the New Education Policy to foster conceptual depth and exam readiness." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 07 — Our Mission (Powerful Centered Statement) */}
        <section className="mb-48 md:mb-64">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="flex justify-center mb-12">
              <div className="w-20 h-20 bg-[#E8F3F6] rounded-[2rem] flex items-center justify-center text-[#38A4BE]">
                <Rocket size={40} />
              </div>
            </motion.div>
            <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-gray-400 font-bold tracking-[0.3em] uppercase text-sm mb-12">Our Mission</motion.h2>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <p className="text-4xl md:text-7xl font-semibold text-[#121E1F] leading-[1.1] tracking-tighter">
                To make preparation <span className="text-[#38A4BE]">faster</span>, understanding <span className="text-[#38A4BE]">clearer</span>, and results <span className="text-[#38A4BE]">inevitable</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 08 — Looking Ahead (Footer-like finish) */}
        <section className="pb-24">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl mx-auto p-12 md:p-20 rounded-[4rem] bg-gray-50 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38A4BE]/30 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-semibold text-[#121E1F] mb-8 tracking-tight">Looking Ahead</h3>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              We continue to evolve with every feedback from students and teachers, working toward a future where exams feel less like a hurdle and more like a milestone of mastery.
            </p>
            <div className="mt-12 flex justify-center gap-4">
               <button 
                 onClick={handleCTA}
                 className="bg-[#121E1F] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#245C68] transition-all transform hover:scale-105 shadow-xl shadow-black/5"
               >
                 Join the Journey
               </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
