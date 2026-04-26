'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-20">
            <span className="text-[13px] font-medium text-zinc-500 uppercase tracking-tight">Connect with us</span>
            <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tight leading-tight max-w-3xl mx-auto">
              Let's build something <br /> amazing together.
            </h1>
            <p className="text-sm md:text-base text-[#5f6368] max-w-lg mx-auto font-normal">
              Whether you have a question about our products or want to discuss a custom project, we're here to help.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Info Panel */}
            <motion.div variants={itemVariants} className="bg-[#f8f9fa] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between border border-zinc-100/50">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-black tracking-tight">Contact Information</h2>
                  <p className="text-[#5f6368] text-sm leading-relaxed max-w-sm">
                    Our team typically responds to inquiries within 24 business hours.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:bg-[#d4c1ff] transition-colors duration-500">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight">Email us</p>
                      <a href="mailto:hello@logic2byte.com" className="text-lg font-semibold text-black hover:text-[#d4c1ff] transition-colors">hello@logic2byte.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:bg-[#d4c1ff] transition-colors duration-500">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight">Call us</p>
                      <a href="tel:+910000000000" className="text-lg font-semibold text-black hover:text-[#d4c1ff] transition-colors">+91 (000) 000-0000</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:bg-[#d4c1ff] transition-colors duration-500">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight">Visit us</p>
                      <p className="text-lg font-semibold text-black">123 Tech Avenue, Innovation Hub</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-zinc-200">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#d4c1ff] rounded-full" />
                    <p className="text-sm font-semibold text-black">Follow our journey on social media</p>
                 </div>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-zinc-100 shadow-sm">
              <form className="space-y-10">
                <div className="space-y-1">
                   <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">Full Name</label>
                   <input type="text" placeholder="Your name" className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 font-normal" />
                </div>

                <div className="space-y-1">
                   <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">Email Address</label>
                   <input type="email" placeholder="email@example.com" className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 font-normal" />
                </div>

                <div className="space-y-1">
                   <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">Your Message</label>
                   <textarea rows={2} placeholder="How can we help you?" className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 resize-none font-normal" />
                </div>

                <div className="pt-6">
                  <button className="w-full bg-[#d4c1ff] text-black py-4 rounded-full font-semibold text-lg hover:bg-[#c4afff] transition-all flex items-center justify-center gap-2 group">
                    Send message
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-center text-xs text-[#5f6368] font-normal">
                  By clicking send, you agree to our terms and conditions.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-100">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <Link href="/" className="flex items-center gap-1">
            <div className="w-4 h-4 bg-[#d4c1ff] rounded-full" />
            <span className="font-semibold text-xl tracking-tight text-[#5f6368]">Logic2byte</span>
          </Link>
          <p className="text-[#5f6368] text-[13px] font-normal">© 2026 Logic2byte. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
