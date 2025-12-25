import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    name: "Lakshmi R.",
    role: "Mother of Class 10 Student",
    quote: "My daughter studies independently now. The structured practice sets have removed the exam fear completely.",
    rating: 4.5
  },
  {
    name: "Prakash S.",
    role: "Class 12 Student",
    quote: "Audio revisions in Tamil were a lifesaver during my commute. Concepts stick better when you listen.",
    rating: 5
  },
  {
    name: "Dr. Ananthi K.",
    role: "Parent",
    quote: "Finally, a platform that doesn't feel like a game. It's serious preparation presented simply.",
    rating: 4.5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 md:py-52 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-medium text-[#121E1F] text-center mb-24 tracking-tight">
            Trusted by families.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="flex gap-1.5 mb-8">
                 {[...Array(5)].map((_, i) => (
                   <Star 
                    key={i} 
                    size={18} 
                    className={`${i < Math.floor(t.rating) ? 'text-[#38A4BE] fill-[#38A4BE]' : 'text-gray-200 fill-gray-200'}`} 
                   />
                 ))}
              </div>
              <blockquote className="text-xl text-[#121E1F] leading-relaxed mb-10 flex-1">
                “{t.quote}”
              </blockquote>
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                    {/* Placeholder Avatar */}
                    <img src={`https://picsum.photos/100/100?random=${index}`} alt={t.name} className="w-full h-full object-cover opacity-80" />
                 </div>
                 <div>
                    <div className="font-semibold text-base text-[#121E1F]">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;