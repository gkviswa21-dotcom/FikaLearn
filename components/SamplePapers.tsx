
import React from 'react';
import { Download, FileText } from 'lucide-react';
import { SamplePaper } from '../types';

const samples: SamplePaper[] = [
  { title: "Paper Set 01", subject: "Science" },
  { title: "Paper Set 02", subject: "Science" },
  { title: "Paper Set 03", subject: "Science" },
  { title: "Paper Set 04", subject: "Science" },
  { title: "Paper Set 05", subject: "Science" },
  { title: "Paper Set 06", subject: "Science" },
];

const SamplePapers: React.FC = () => {
  return (
    <section id="samples" className="py-32 md:py-52 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
           <h2 className="text-3xl font-medium text-[#121E1F] mb-6">Try a sample paper.</h2>
           <p className="text-gray-500 text-lg">Experience the quality of our curated questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <div 
                key={index} 
                className="group relative bg-white rounded-3xl border border-gray-100 p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#38A4BE]/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-20 h-24 bg-gray-50 border border-gray-200 rounded-xl mb-6 flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform duration-300">
                 <FileText className="text-gray-400 group-hover:text-[#38A4BE] transition-colors" size={32} />
                 <div className="absolute -right-3 -top-3 w-8 h-8 bg-[#121E1F] rounded-full text-white text-[10px] flex items-center justify-center font-bold shadow-lg">PDF</div>
              </div>
              <h3 className="text-xs font-bold text-[#38A4BE] uppercase tracking-widest mb-2">{sample.subject}</h3>
              <h4 className="text-xl font-medium text-[#121E1F] mb-8">{sample.title}</h4>
              
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-[#121E1F] transition-colors bg-gray-50 px-6 py-3 rounded-full group-hover:bg-gray-100">
                <Download size={16} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamplePapers;
