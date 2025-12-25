
import React, { useState } from 'react';
import { Layers, Bot, GraduationCap, Mic, ChevronLeft, ChevronRight } from 'lucide-react';
import { Feature } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const features: Feature[] = [
  {
    title: "Unlimited Practice Papers",
    description: "8000+ curated questions tailored to CBSE syllabus.",
    icon: <Layers strokeWidth={1.5} />,
    strikethrough: false
  },
  {
    title: "Live AI Tutor",
    description: "24/7 doubt solving with instant explanations.",
    icon: <Bot strokeWidth={1.5} />,
    strikethrough: false
  },
  {
    title: "Supports Teachers",
    description: "Empowering educators, not replacing them.",
    icon: <GraduationCap strokeWidth={1.5} />,
    strikethrough: true
  },
  {
    title: "Audio Recaps in Multiple Languages",
    description: "Revision made easy in English + Tamil.",
    icon: <Mic strokeWidth={1.5} />,
    strikethrough: false
  }
];

const FeatureGrid: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Safe modulo operation for infinite looping in both directions
  const featureIndex = ((page % features.length) + features.length) % features.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      filter: "blur(4px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      filter: "blur(4px)"
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-24 md:py-48 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] mb-6">
                Everything you need. <br />
                <span className="text-gray-400">Nothing you don't.</span>
            </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[340px] md:max-w-[420px] h-[480px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                filter: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute top-0 left-0 w-full h-full bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing border border-white/50"
            >
               {/* Card Content Top */}
               <div>
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1D1D1F] shadow-sm mb-8">
                    {React.cloneElement(features[featureIndex].icon as React.ReactElement, { size: 28 })}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-6 tracking-tight leading-tight">
                      {features[featureIndex].title}
                  </h3>
               </div>

               {/* Card Content Bottom */}
               <div className="text-xl text-gray-500 font-medium leading-relaxed">
                  {features[featureIndex].strikethrough ? (
                        <span className="relative inline-block">
                        Empowering educators,{' '}
                        <span className="relative inline-block text-gray-400">
                          replacing them.
                          <motion.svg
                            viewBox="0 0 100 10"
                            className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                          >
                            <motion.path
                              d="M0 5 H100"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="text-gray-300 opacity-80"
                            />
                          </motion.svg>
                        </span>
                      </span>
                  ) : (
                      features[featureIndex].description
                  )}
               </div>
               
               {/* Card Counter */}
               <div className="absolute top-10 right-10 text-xs font-bold text-gray-300 tracking-widest">
                  0{featureIndex + 1} / 0{features.length}
               </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Desktop Navigation Arrows */}
            <button 
                className="hidden md:flex absolute top-1/2 -left-24 -translate-y-1/2 w-14 h-14 rounded-full bg-[#F5F5F7] items-center justify-center text-[#1D1D1F] hover:bg-[#E8E8ED] hover:scale-110 transition-all z-10"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                className="hidden md:flex absolute top-1/2 -right-24 -translate-y-1/2 w-14 h-14 rounded-full bg-[#F5F5F7] items-center justify-center text-[#1D1D1F] hover:bg-[#E8E8ED] hover:scale-110 transition-all z-10"
                onClick={() => paginate(1)}
            >
                <ChevronRight size={24} />
            </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-16 flex gap-3">
            {features.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        const diff = idx - featureIndex;
                        if (diff !== 0) paginate(diff);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === featureIndex ? 'w-10 bg-[#1D1D1F]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;
