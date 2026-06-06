'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, ChevronRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedInterest, setSelectedInterest] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const product = searchParams.get('product');
    const service = searchParams.get('service');
    const plan = searchParams.get('plan');

    let defaultInterest = '';
    let defaultMessage = '';

    if (product) {
      if (product === 'gym-management-system') defaultInterest = 'gym-erp';
      else if (product === 'yoga-studio-management') defaultInterest = 'yoga-erp';
      else if (product === 'turf-booking-system') defaultInterest = 'turf-erp';
      else if (product === 'school-management-system') defaultInterest = 'school-erp';
      else if (product === 'dance-studio-management') defaultInterest = 'dance-erp';
      else if (product === 'ecommerce-erp-system') defaultInterest = 'ecommerce-erp';
    } else if (service) {
      if (service === 'custom-web-development') defaultInterest = 'web-dev';
      else if (service === 'custom-mobile-apps') defaultInterest = 'app-dev';
      else if (service === 'custom-software-erp') defaultInterest = 'custom-software';
    }

    if (plan) {
      defaultMessage = `Hi, I'm interested in signing up for the Enterprise plan: ${plan}. Please get back to me.`;
    }

    if (defaultInterest) {
      setSelectedInterest(defaultInterest);
    }
    if (defaultMessage) {
      setMessage(defaultMessage);
    }
  }, [searchParams]);

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
              Our enterprise onboarding team typically responds to requests within 24 business hours.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:bg-[#d4c1ff] transition-colors duration-500">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div className="space-y-1">
                <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight">Email us</p>
                <a href="mailto:support@logic2byte.com" className="text-lg font-semibold text-black hover:text-[#d4c1ff] transition-colors">support@logic2byte.com</a>
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
              <p className="text-sm font-semibold text-black">Start your journey with Logic2byte</p>
           </div>
        </div>
      </motion.div>

      {/* Form Panel */}
      <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-zinc-100 shadow-sm">
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
             <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">Full Name</label>
             <input type="text" placeholder="Your name" className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 font-normal" />
          </div>

          <div className="space-y-1">
             <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">Email Address</label>
             <input type="email" placeholder="email@example.com" className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 font-normal" />
          </div>

          <div className="space-y-1">
             <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">I am interested in...</label>
             <select 
               value={selectedInterest} 
               onChange={(e) => setSelectedInterest(e.target.value)}
               className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors font-normal text-black appearance-none outline-none"
             >
               <option value="" disabled>Select a product or service</option>
               <optgroup label="SaaS ERP Subscriptions">
                 <option value="gym-erp">Gym Management ERP</option>
                 <option value="yoga-erp">Yoga Studio Manager</option>
                 <option value="turf-erp">Turf Booking Arena</option>
                 <option value="school-erp">School Management ERP</option>
                 <option value="dance-erp">Dance Studio Academy</option>
                 <option value="ecommerce-erp">Ecommerce ERP & Store</option>
               </optgroup>
               <optgroup label="Custom Software Services">
                 <option value="web-dev">Websites & Portfolios Development</option>
                 <option value="app-dev">Mobile App Development</option>
                 <option value="custom-software">Custom Software & Integrations</option>
               </optgroup>
               <option value="general">General Enquiry</option>
             </select>
          </div>

          <div className="space-y-1">
             <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight ml-1">Your Message</label>
             <textarea 
               rows={2} 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               placeholder="How can we help you?" 
               className="w-full py-4 bg-transparent border-b border-zinc-200 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 resize-none font-normal" 
             />
          </div>

          <div className="pt-6">
            <button className="w-full bg-[#d4c1ff] text-black py-4 rounded-full font-semibold text-lg hover:bg-[#c4afff] transition-all flex items-center justify-center gap-2 group border-none cursor-pointer">
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
  );
}

export default function ContactPage() {
  return (
    <div className="w-full bg-white font-sans text-[#202124]">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-20">
            <span className="text-[13px] font-medium text-zinc-500 uppercase tracking-tight">Connect with us</span>
            <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tight leading-tight max-w-3xl mx-auto">
              Let's build something <br /> amazing together.
            </h1>
            <p className="text-sm md:text-base text-[#5f6368] max-w-lg mx-auto font-normal">
              Get enterprise onboarding access to our subscription ERP solutions or request a custom digital product.
            </p>
          </div>

          <Suspense fallback={
            <div className="flex items-center justify-center py-24">
              <Loader2 className="w-8 h-8 animate-spin text-[#d4c1ff]" />
            </div>
          }>
            <ContactForm />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
