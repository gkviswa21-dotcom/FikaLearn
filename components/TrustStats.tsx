import React from 'react';
import { Stat } from '../types';
import { motion } from 'framer-motion';

const stats: Stat[] = [
  { value: "1000+", label: "Active Students" },
  { value: "1L+", label: "Papers Generated" },
  { value: "98%", label: "See Progress" },
];

const TrustStats: React.FC = () => {
  return (
    <section className="py-32 md:py-44 border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <h3 className="text-6xl md:text-7xl font-semibold tracking-tighter text-[#121E1F] mb-4">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;