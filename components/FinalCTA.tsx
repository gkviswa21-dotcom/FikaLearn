
import React from 'react';

const FinalCTA: React.FC = () => {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";

  const handleRedirect = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  return (
    <section className="py-40 md:py-64 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#121E1F] mb-10 leading-tight">
          Start your child’s <br/>confident learning journey.
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 mb-16">
          No subscriptions. No pressure. Just progress.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={handleRedirect}
            className="w-full sm:w-auto bg-[#38A4BE] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#2B7687] transition-all shadow-sm"
          >
            Start 7-Day Free Access
          </button>
          <button 
            onClick={handleRedirect}
            className="w-full sm:w-auto bg-transparent border border-gray-200 text-[#121E1F] px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Download the App
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
