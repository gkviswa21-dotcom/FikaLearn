
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, CreditCard, RefreshCw } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'refund' | 'terms';
  onNavigate: (view: 'home' | 'privacy' | 'refund' | 'terms') => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-12">
            <header className="mb-20">
              <div className="inline-flex items-center gap-2 text-[#38A4BE] font-bold uppercase tracking-widest text-sm mb-6">
                <Shield size={20} /> Legal Center
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#121E1F] mb-8">Data Privacy Policy</h1>
              <p className="text-xl text-gray-400">Effective Date: October 2023</p>
            </header>

            <section className="space-y-8">
              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">1. Introduction</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  At FikaLearn, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, how we keep it secure, and the rights you have over your data. This applies to all users of the Fika Learn App.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">2. Information We Collect</h2>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-3">
                  <li><strong>Account Details:</strong> Name, email address, mobile number, and password.</li>
                  <li><strong>Payment Information:</strong> Billing address, transaction ID, and other payment-related data (handled through a secure 3rd party payment gateway).</li>
                  <li><strong>Learning Activity:</strong> Courses enrolled, progress, quiz scores, and usage analytics.</li>
                  <li><strong>Device & Technical Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
                  <li><strong>Support & Communication:</strong> Questions, feedback with screenshots, reviews, or messages sent to our support team.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">3. How We Use Your Data</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-4">We process your data to:</p>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-3">
                  <li>Create and manage your FikaLearn account.</li>
                  <li>Deliver and personalise learning content.</li>
                  <li>Process payments and send invoices or receipts.</li>
                  <li>Provide customer support and respond to enquiries.</li>
                  <li>Analyse trends to improve app performance and features.</li>
                </ul>
                <p className="mt-6 font-semibold text-[#121E1F]">We do not sell your personal information.</p>
              </div>

              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">4. Student’s Privacy</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  FikaLearn is intended for learners aged 10 and above. For users under 18, consent for the collection, use, and processing of data will be obtained from parents during in-app onboarding or through the enrolled institution.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">5. Security of Your Data</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  We use technical and organisational safeguards such as encryption, access controls, and secure servers to keep your data safe. However, it is recommended that users use strong passwords and keep them confidential. In case of a data breach, we will inform you promptly and comply with all legal requirements.
                </p>
              </div>

              <div className="pt-12 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">Contact Us</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  <strong>Chief Technology Officer</strong><br />
                  Email: support@dverselabs.com<br />
                  Working Hours: Monday – Saturday, 10:00 AM – 5:00 PM
                </p>
              </div>
            </section>
          </div>
        );

      case 'refund':
        return (
          <div className="space-y-12">
            <header className="mb-20">
              <div className="inline-flex items-center gap-2 text-[#38A4BE] font-bold uppercase tracking-widest text-sm mb-6">
                <RefreshCw size={20} /> Billing Support
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#121E1F] mb-8">Cancellation & Refund Policy</h1>
              <p className="text-xl text-gray-400">Last Updated: October 2023</p>
            </header>

            <section className="space-y-10">
              <div className="legal-section p-8 bg-gray-50 rounded-3xl">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">Cancellation Policy</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  You may cancel your subscription anytime via your Account Settings on the app. Upon cancellation, your access to learning content continues until the end of the current billing cycle.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                   <p className="text-sm font-bold text-[#121E1F] uppercase mb-2">Example Case</p>
                   <p className="text-gray-500 italic">"If you subscribe on June 1st and cancel on June 10th, your access remains valid until the end of June. You will not be billed for July."</p>
                </div>
              </div>

              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">Refund Policy</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  After payment is processed, Fika Learn follows a <strong>no-refund policy</strong> for monthly subscription plans.
                </p>
                <h3 className="text-lg font-bold text-[#121E1F] mb-2">Refunds will not be issued if:</h3>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-2 mb-8">
                  <li>The current billing cycle has already started.</li>
                  <li>The user fails to cancel before the renewal date.</li>
                </ul>

                <h3 className="text-lg font-bold text-[#121E1F] mb-2">Exceptions (Case-by-Case):</h3>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-2">
                  <li>Duplicate payments</li>
                  <li>Unauthorised or fraudulent transactions (proof required)</li>
                  <li>Technical issues preventing access (verified by support)</li>
                </ul>
              </div>

              <div className="legal-section bg-[#121E1F] text-white p-10 rounded-[2.5rem]">
                <h2 className="text-2xl font-bold mb-4">Auto-Renewal Notice</h2>
                <ul className="space-y-4 opacity-80">
                  <li>• All plans are billed automatically every month on the same date as original purchase.</li>
                  <li>• Cancellation must be completed before the next billing date to avoid renewal.</li>
                  <li>• Users are responsible for managing their subscription status.</li>
                </ul>
              </div>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-12">
            <header className="mb-20">
              <div className="inline-flex items-center gap-2 text-[#38A4BE] font-bold uppercase tracking-widest text-sm mb-6">
                <CreditCard size={20} /> Financials
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#121E1F] mb-8">Payment Terms & Conditions</h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="legal-section border border-gray-100 p-8 rounded-3xl">
                <h2 className="text-xl font-bold text-[#121E1F] mb-4">1. Advance Payment</h2>
                <p className="text-gray-500 leading-relaxed">
                  For large-scale institutions (100+ users), an advance of 50% must be paid before deployment. 
                  For fewer than 100 users, full payment (100%) must be made online through the application for instant access.
                </p>
              </div>

              <div className="legal-section border border-gray-100 p-8 rounded-3xl">
                <h2 className="text-xl font-bold text-[#121E1F] mb-4">2. Credit Period</h2>
                <p className="text-gray-500 leading-relaxed">
                  The remaining 50% of the invoice value must be paid within 15 days from the date of the invoice.
                </p>
              </div>

              <div className="legal-section bg-gray-50 p-8 rounded-3xl md:col-span-2">
                <h2 className="text-xl font-bold text-[#121E1F] mb-6">3. Bank & Transfer Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Account Holder</p>
                    <p className="font-bold">dVerse Technologies Pvt Ltd</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Jurisdiction</p>
                    <p className="font-bold">Chennai, India</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Taxes</p>
                    <p className="font-bold">GST charged extra at prevailing rates</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white pt-40 pb-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#121E1F] transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {renderContent()}
      </div>
    </motion.div>
  );
};

export default LegalPage;
