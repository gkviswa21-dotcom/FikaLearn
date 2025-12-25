
import React from 'react';
import { Check, Zap, Star, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: "Day Pass",
    price: "20",
    duration: "24 hours",
    description: "Intense full access for a single day push.",
    features: [
      "Unlimited Practice Papers",
      "Advanced Gyaan AI Chat",
      "3 Min Recap & Quiz",
      "Progress Dashboard"
    ],
    cta: "Get Pass",
    highlight: false,
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: "Monthly",
    price: "499",
    duration: "month",
    description: "The most popular choice for consistent growth.",
    features: [
      "Unlimited Practice Papers",
      "Advanced Gyaan AI Chat",
      "3 Min Recap & Quiz",
      "Progress Dashboard"
    ],
    cta: "Start Monthly",
    highlight: true,
    icon: <Star className="w-5 h-5 text-white" />
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "Institutional",
    description: "Bulk access and custom tools for schools.",
    features: [
      "Everything in Monthly, plus",
      "Teacher Dashboard access",
      "School-wide deployment",
      "Dedicated account manager",
      "Custom branding options"
    ],
    cta: "Contact Now",
    highlight: false,
    icon: <ShieldCheck className="w-5 h-5" />,
    isContact: true
  }
];

const Pricing: React.FC = () => {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.flutter_fika_learn&hl=en";
  const CONTACT_EMAIL = "mailto:support@dverselabs.com?subject=Enterprise Inquiry - Fikalearn";

  const handleCTAClick = (isContact?: boolean) => {
    if (isContact) {
      window.location.href = CONTACT_EMAIL;
    } else {
      window.open(PLAY_STORE_URL, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-sm font-semibold text-[#38A4BE] mb-6"
          >
            Simple Pricing
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-[#121E1F] mb-6 tracking-tight"
          >
            Invest in your <span className="text-[#38A4BE]">future</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-medium"
          >
            Choose the plan that fits your learning pace. Clear value, zero noise.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative flex flex-col h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-500
                ${plan.highlight 
                  ? 'bg-[#121E1F] text-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] md:scale-105 z-10' 
                  : 'bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]'
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#38A4BE] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-white/10' : 'bg-[#E8F3F6] text-[#38A4BE]'}`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">
                    {plan.price !== "Custom" ? `₹${plan.price}` : plan.price}
                  </span>
                  <span className={`text-lg font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/{plan.duration}</span>
                </div>
              </div>

              <div className="flex-1 mb-10 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#38A4BE]' : 'text-[#38A4BE]'}`} />
                    <span className={`text-[15px] font-medium leading-tight ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleCTAClick(plan.isContact)}
                className={`
                w-full py-4 rounded-2xl font-bold text-sm transition-all transform active:scale-[0.98] flex items-center justify-center gap-2
                ${plan.highlight 
                  ? 'bg-white text-[#121E1F] hover:bg-gray-100' 
                  : 'bg-[#121E1F] text-white hover:bg-[#245C68] shadow-lg shadow-black/5'
                }
              `}>
                {plan.isContact && <Mail size={16} />}
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm font-medium">
            Questions about institutional plans? <a href="mailto:support@dverselabs.com" className="text-[#38A4BE] underline underline-offset-4 decoration-1">Talk to an advisor</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
