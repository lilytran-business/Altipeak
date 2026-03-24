/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  MessageSquare, 
  Euro, 
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    relationship: 'Member',
    candidateName: '',
    candidateEmail: '',
    candidatePhone: '',
    targetLocation: ''
  });

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const requiredFields = Object.values(formData);
    if (requiredFields.some(field => field.trim() === '')) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    alert('Form Submitted Successfully! Our team will contact you soon.');
    // Reset form
    setFormData({
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      relationship: 'Member',
      candidateName: '',
      candidateEmail: '',
      candidatePhone: '',
      targetLocation: ''
    });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#00AEEF] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Placeholder for Altipeak Logo */}
            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center">
              <span className="text-white font-extrabold text-xl">A</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-black">Altipeak<span className="text-[#00AEEF]">International</span></span>
          </div>
          <a 
            href="https://altipeakfranchising.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-600 hover:text-[#00AEEF] transition-colors flex items-center gap-1"
          >
            Back to Main Site <ExternalLink size={14} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00AEEF]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00AEEF]/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#00AEEF] uppercase bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full">
              Exclusive Franchise Referral Program
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-black">
              LOVE ALTIPEAK? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#00AEEF]">HELP US GROW & EARN €10,000!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Turn your network into net worth. Refer a qualified franchise candidate and receive a <span className="text-black font-bold">€10,000 Finder's Fee</span> upon signing.
            </p>
            <button 
              onClick={scrollToForm}
              className="group relative px-8 py-4 bg-[#00AEEF] text-white font-bold rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#00AEEF]/20 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Refer a Partner Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h2>
            <div className="w-20 h-1 bg-[#00AEEF] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Users className="text-[#00AEEF]" size={32} />,
                title: "Submit a Referral",
                desc: "Fill out the form below with your contact's details and your information."
              },
              {
                step: "02",
                icon: <MessageSquare className="text-[#00AEEF]" size={32} />,
                title: "We Connect",
                desc: "Our dedicated Franchise Team connects with your lead to discuss the Altipeak opportunity."
              },
              {
                step: "03",
                icon: <Euro className="text-[#00AEEF]" size={32} />,
                title: "You Get Paid",
                desc: "Receive your €10,000 Finder's Fee the moment they sign their Franchise Agreement."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#00AEEF]/30 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#00AEEF]/10 rounded-xl group-hover:bg-[#00AEEF]/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-100">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section ref={formRef} className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-black/5">
            <div className="p-8 md:p-12 border-b border-gray-100 bg-gradient-to-r from-[#00AEEF]/5 to-transparent">
              <h2 className="text-3xl font-bold mb-2 text-black">Referral Submission Form</h2>
              <p className="text-gray-500">Please provide accurate details to ensure smooth processing.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
              {/* Part A: Referrer */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-[#00AEEF] text-white flex items-center justify-center font-bold text-sm">A</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-[#00AEEF]">Your Details (The Referrer)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      name="referrerName"
                      value={formData.referrerName}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name="referrerEmail"
                      value={formData.referrerEmail}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      name="referrerPhone"
                      value={formData.referrerPhone}
                      onChange={handleInputChange}
                      placeholder="+00 000 000 000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Relationship to Altipeak</label>
                    <select 
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all appearance-none"
                    >
                      <option value="Member">Member</option>
                      <option value="Staff">Staff</option>
                      <option value="Partner">Partner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Part B: Candidate */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-[#00AEEF] text-white flex items-center justify-center font-bold text-sm">B</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-[#00AEEF]">Candidate Details (The Prospect)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Candidate Name</label>
                    <input 
                      type="text" 
                      name="candidateName"
                      value={formData.candidateName}
                      onChange={handleInputChange}
                      placeholder="Prospect's full name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Candidate Email</label>
                    <input 
                      type="email" 
                      name="candidateEmail"
                      value={formData.candidateEmail}
                      onChange={handleInputChange}
                      placeholder="prospect@email.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Candidate Phone</label>
                    <input 
                      type="tel" 
                      name="candidatePhone"
                      value={formData.candidatePhone}
                      onChange={handleInputChange}
                      placeholder="+00 000 000 000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Target Location (City/Country)</label>
                    <input 
                      type="text" 
                      name="targetLocation"
                      value={formData.targetLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. London, UK"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#00AEEF] text-white font-extrabold text-lg rounded-xl hover:bg-[#00AEEF]/90 transition-all active:scale-[0.98] shadow-lg shadow-[#00AEEF]/20"
                >
                  Submit Referral
                </button>
                <p className="text-center text-gray-400 text-sm mt-6">
                  By submitting, you agree to our Referral Program Terms & Conditions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">A</span>
              </div>
              <span className="font-bold tracking-tighter uppercase text-black">Altipeak</span>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-gray-400 text-sm">Copyright © 2025 Altipeak International.</p>
              <a href="#" className="text-xs text-gray-400 hover:text-[#00AEEF] transition-colors">Privacy Policy</a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="mailto:referrals@altipeakfranchising.com" className="flex items-center gap-2 text-[#00AEEF] hover:underline font-semibold">
                <Mail size={16} /> referrals@altipeakfranchising.com
              </a>
              <div className="flex gap-4">
                <Phone size={16} className="text-gray-400" />
                <MapPin size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
