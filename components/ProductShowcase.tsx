
import React, { useRef, useState, useEffect } from 'react';
import { FileText, CheckCircle, Headphones, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export const features = [
  {
    id: 0,
    title: "Question Paper View",
    subtitle: "Unlimited Practice Sets",
    description: "A distraction-free interface with a built-in exam timer. Focus entirely on your questions and time management, just like the real exam environment.",
    icon: <FileText className="w-5 h-5 text-white" />,
    color: "#245C68",
    imgUrl: "https://github.com/Vishwanath-Kannan/video01/blob/main/FikaLearn%20-%20Sample%20Chapter%20Questions%2020.png?raw=true"
  },
  {
    id: 1,
    title: "Daily Quiz View",
    subtitle: "Study Every Day",
    description: "Build a habit with bite-sized daily challenges. Track your streak, earn badges, and improve incrementally every single day.",
    icon: <CheckCircle className="text-white w-5 h-5" />,
    color: "#38A4BE",
    imgUrl: "https://github.com/Vishwanath-Kannan/video01/blob/main/FikaLearn%20-%20Quiz%20questions.png?raw=true"
  },
  {
    id: 2,
    title: "Audio Recap",
    subtitle: "Learn Anywhere",
    description: "Turn your commute into study time. Access high-quality audio summaries in multiple languages for every chapter in the syllabus.",
    icon: <Headphones className="text-white w-5 h-5" />,
    color: "#2B7687",
    imgUrl: "https://github.com/Vishwanath-Kannan/video01/blob/main/FikaLearn%20-%20Now%20playing%20Audio.png?raw=true"
  },
  {
    id: 3,
    title: "Live AI Tutor",
    subtitle: "Clear Doubts Instantly",
    description: "Stuck on a problem? Get explanations and answers based on your learning style.",
    icon: <MessageCircle className="text-white w-5 h-5" />,
    color: "#121E1F",
    imgUrl: "https://github.com/Vishwanath-Kannan/video01/blob/main/FikaLearn%20-%20Ask%20Gyaan%20Home%20screen.png?raw=true"
  }
];

interface ProductShowcaseProps {
  onLearnMore: (id: number) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onLearnMore }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold text-[#121E1F] mb-6 tracking-tight leading-tight"
          >
            Designed for <span className="text-[#38A4BE]">focus</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            Every interaction is crafted to keep students in the flow state, removing friction between learning and understanding.
          </motion.p>
        </div>

        {/* Desktop Sticky Layout */}
        <div className="hidden lg:flex items-start">
            {/* Left: Scrollable Text */}
            <div className="w-1/2 flex flex-col py-[20vh]">
                {features.map((feature, index) => (
                    <FeatureTextBlock 
                        key={feature.id} 
                        feature={feature} 
                        index={index} 
                        setActiveFeature={setActiveFeature}
                        isActive={activeFeature === index}
                        onLearnMore={onLearnMore}
                    />
                ))}
            </div>

            {/* Right: Sticky Phone */}
            <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center pl-10">
                <div className="relative w-[320px] aspect-[9/19]">
                     {/* Phone Frame */}
                    <div className="absolute inset-0 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-[#121E1F] z-20 pointer-events-none ring-1 ring-black/5 overflow-hidden">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-6 bg-black rounded-b-2xl z-30"></div>
                        {/* Shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent z-40 rounded-[2.5rem]"></div>
                    </div>
                    
                    {/* Changing Screen Images */}
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-gray-900 z-10">
                        <AnimatePresence mode="popLayout">
                            <motion.img 
                                key={activeFeature}
                                src={features[activeFeature].imgUrl}
                                alt={features[activeFeature].title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-20">
            {features.map((feature) => (
                <MobileFeatureBlock key={feature.id} feature={feature} onLearnMore={onLearnMore} />
            ))}
        </div>
      </div>
    </section>
  );
};

const FeatureTextBlock: React.FC<any> = ({ feature, index, setActiveFeature, isActive, onLearnMore }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) setActiveFeature(index);
    }, [isInView, index, setActiveFeature]);

    return (
        <motion.div 
            ref={ref}
            className={`min-h-[80vh] flex flex-col justify-center transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20 blur-[1px]'}`}
        >
            <div className="max-w-md">
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 shadow-sm transition-colors duration-500"
                  style={{ backgroundColor: feature.color }}
                >
                  {React.cloneElement(feature.icon, { className: "w-7 h-7 text-white" })}
                </div>
                <h3 className="text-sm font-bold text-[#38A4BE] uppercase tracking-wider mb-4">
                    {feature.subtitle}
                </h3>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#121E1F] mb-6 leading-[1.1]">
                    {feature.title}
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                    {feature.description}
                </p>
                <div className="mt-8">
                     <button 
                        onClick={() => onLearnMore(feature.id)}
                        className="text-[#38A4BE] font-medium flex items-center gap-2 group hover:text-[#245C68] transition-colors text-lg"
                     >
                        Learn more <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                </div>
            </div>
        </motion.div>
    )
}

const MobileFeatureBlock: React.FC<any> = ({ feature, onLearnMore }) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="bg-gray-50 rounded-[2.5rem] p-8 pb-0 overflow-hidden relative border border-gray-100">
                <div className="flex justify-center relative z-10">
                     <img 
                        src={feature.imgUrl} 
                        alt={feature.title} 
                        className="w-[200px] h-[400px] object-cover rounded-t-[2rem] shadow-2xl translate-y-8 border-[6px] border-[#121E1F]"
                     />
                </div>
            </div>

            <div className="px-2">
                 <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 shadow-sm"
                  style={{ backgroundColor: feature.color }}
                >
                   {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xs font-bold text-[#38A4BE] uppercase tracking-wider mb-3">
                    {feature.subtitle}
                </h3>
                <h2 className="text-3xl font-semibold text-[#121E1F] mb-4 leading-tight">
                    {feature.title}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                    {feature.description}
                </p>
                <div className="mt-6">
                     <button 
                        onClick={() => onLearnMore(feature.id)}
                        className="text-[#38A4BE] font-medium flex items-center gap-2 group hover:text-[#245C68] transition-colors text-lg"
                     >
                        Learn more <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase;
