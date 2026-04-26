'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Search, Layout, Cpu, Globe, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <h2 ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-[#d4c1ff] ml-1 align-middle"
        style={{ display: isComplete ? "none" : "inline-block" }}
      />
    </h2>
  );
}

function AccordionItems() {
  const items = [
    { title: 'Consumers', content: 'Our e-commerce solutions are designed to provide the best shopping experience for end users, with lightning-fast load times and intuitive navigation.' },
    { title: 'Small & Medium Businesses', content: 'We empower SMBs with enterprise-grade tools that are affordable and easy to manage, helping them scale from local to global.' },
    { title: 'Government & Public Sectors', content: 'We conduct thorough testing and offer ongoing optimization post-launch. If something\'s off, we\'ll tweak it until it delivers results.' },
    { title: 'Large Enterprises', content: 'Scalable infrastructure and custom integrations for complex organizational needs and high-volume operations.' },
    { title: 'Banks & Credit Unions', content: 'Secure, compliant, and robust digital platforms tailored for financial institutions and fintech startups.' }
  ];

  const [openIndex, setOpenIndex] = useState(2);

  return (
    <div className="divide-y divide-zinc-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="group">
            <button 
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-6 flex items-center justify-between text-left transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#202124] group-hover:text-black transition-colors">
                {item.title}
              </h3>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-zinc-100 rotate-45' : 'bg-transparent hover:bg-zinc-50'}`}>
                <span className="text-2xl leading-none text-zinc-400 font-light">+</span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-[#5f6368] text-base md:text-lg leading-relaxed max-w-2xl font-normal">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const solutionsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: solutionsRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["80px", "0px"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <div className="flex flex-col w-full bg-white font-sans text-[#202124] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-12 overflow-hidden">
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center space-y-8 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-[80px] font-semibold tracking-tight text-black leading-[1.05]"
              variants={itemVariants}
            >
              Empowering brands <br /> 
              with visual excellence.
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-[#5f6368] max-w-2xl mx-auto leading-relaxed font-normal"
              variants={itemVariants}
            >
              Delivering fully functional websites, mobile apps, and eCommerce platforms designed to help your business thrive.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            variants={itemVariants}
          >
            <Link href="https://app.logic2byte.com" className="w-full sm:w-auto bg-[#d4c1ff] text-black hover:bg-[#c4afff] transition-all px-8 py-3 rounded-full font-semibold text-base">
              Get started
            </Link>
            <Link href="/process" className="w-full sm:w-auto text-black hover:bg-purple-50 transition-all px-8 py-3 rounded-full font-semibold text-base">
              Learn more
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <div className="bg-zinc-100/30" id="solutions">
        <motion.section 
          ref={solutionsRef}
          style={{ scale, opacity, borderRadius }}
          className="py-24 px-6 bg-white border-t border-zinc-100 origin-center"
        >
          <div className="container mx-auto max-w-7xl text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight">Our Specialized Solutions.</h2>
              <p className="text-[#5f6368] text-sm md:text-base max-w-2xl mx-auto font-normal">
                We build specialized platforms that help your business manage operations and grow faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-[#f8f9fa] rounded-[2rem] p-10 flex flex-col justify-between h-[500px] border border-zinc-100">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-[28px] font-semibold text-black leading-tight">
                    Upgrade your business with <br /> Membership tools.
                  </h3>
                  <p className="text-[14px] text-[#5f6368] leading-relaxed font-normal">
                    Automated billing, member portals, and intelligent access control systems built for scale.
                  </p>
                  <Link href="/products" className="inline-flex items-center text-[#d4c1ff] font-semibold text-[14px] group">
                    Learn more <ChevronRight className="w-4 h-4 mt-0.5" />
                  </Link>
                </div>
                <div className="w-full bg-white rounded-2xl h-48 flex items-center justify-center p-6 shadow-sm overflow-hidden">
                  <div className="w-full h-full bg-purple-50 rounded-lg animate-pulse" />
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-[2rem] overflow-hidden flex flex-col h-[500px] border border-zinc-100">
                <div className="flex-1 w-full relative">
                  <img src="https://images.unsplash.com/photo-1517245318773-b7b71a162f33?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Process" />
                </div>
                <div className="p-10 space-y-4 bg-white">
                  <h3 className="text-2xl font-semibold text-black leading-tight">Training Platforms.</h3>
                  <p className="text-[14px] text-[#5f6368] font-normal">
                    Scale your coaching with custom training and student management.
                  </p>
                  <Link href="/products" className="inline-flex items-center text-[#d4c1ff] font-semibold text-[14px] group">
                    Learn more <ChevronRight className="w-4 h-4 mt-0.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-[2rem] p-10 flex flex-col justify-between h-[500px] border border-zinc-100">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-[28px] font-semibold text-black leading-tight">
                    Earn more with seamless <br /> Client Operations.
                  </h3>
                  <p className="text-[14px] text-[#5f6368] leading-relaxed font-normal">
                    Optimize your service-based business with scheduling and CRM.
                  </p>
                  <Link href="/products" className="inline-flex items-center text-[#d4c1ff] font-semibold text-[14px] group">
                    Learn more <ChevronRight className="w-4 h-4 mt-0.5" />
                  </Link>
                </div>
                <div className="w-full bg-white rounded-2xl h-48 flex items-center justify-center p-6 shadow-sm overflow-hidden">
                  <div className="w-full h-full bg-purple-50/50 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Open Letter Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-10 h-10 bg-[#d4c1ff] rounded-full flex items-center justify-center text-black font-bold">
              Q
            </div>
            <TypingText 
              text="Hey Startup Owner! Your success lives in your users' voices."
              className="text-4xl md:text-6xl font-semibold text-black leading-tight tracking-tight min-h-[3em]"
            />
          </div>
          
          <div className="flex-1 space-y-8 lg:pt-16">
            <p className="text-[#5f6368] text-lg md:text-xl leading-relaxed font-normal">
              Understanding what your users truly need is the cornerstone of building a successful product. We help you capture that voice and turn it into actionable growth.
            </p>
            <p className="text-[#5f6368] text-lg md:text-xl leading-relaxed font-normal">
              <strong className="text-black font-bold">That's where Logic2byte comes in.</strong> We bridge the gap between user experience and product development.
            </p>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl text-center space-y-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">Discover the world of Logic2byte.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: 'SaaS Platforms', color: 'bg-blue-50', link: 'Read article' },
              { title: 'E-commerce Built Fast', color: 'bg-zinc-50', link: 'Read article' },
              { title: 'Portfolio Excellence', color: 'bg-purple-50', link: 'Read article' }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group cursor-pointer">
                <div className={`aspect-[4/3] rounded-[2rem] ${item.color} overflow-hidden border border-zinc-100`}>
                  <div className="w-full h-full bg-white/20 transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-black">{item.title}</h4>
                  <Link href="/products" className="inline-flex items-center text-[#d4c1ff] font-semibold text-[14px] group">
                    {item.link} <ChevronRight className="w-4 h-4 mt-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pink E-commerce Section */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-semibold text-black leading-tight">E-commerce starts <br /> from ₹1000.</h2>
            <p className="text-[#5f6368] text-lg font-normal leading-relaxed">
              Launch your store with essential features. Built for speed, security, and a seamless shopping experience for your customers.
            </p>
            <Link href="https://app.logic2byte.com" className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-zinc-800 transition-all">
              Get started
            </Link>
          </div>
          <div className="flex-1 w-full aspect-square bg-[#fce4ec] rounded-[3rem] overflow-hidden shadow-2xl shadow-pink-900/5">
            <div className="w-full h-full bg-white/40 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      {/* FAQ & Purpose */}
      <section className="py-24 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-12">
            <h2 className="text-3xl md-[40px] font-semibold text-black tracking-tight leading-tight">Who we serve.</h2>
            <div className="text-left">
              <AccordionItems />
            </div>
          </div>
          <div className="lg:w-1/3 space-y-12 lg:pt-20">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4c1ff]">Our Purpose</span>
              <p className="text-[#5f6368] text-lg leading-relaxed font-normal">
                Making premium digital solutions accessible and affordable for every business, regardless of size.
              </p>
            </div>
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4c1ff]">Our Mission</span>
              <p className="text-[#5f6368] text-lg leading-relaxed font-normal">
                To bridge the gap between complex technology and business goals through exceptional design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-[#f8f9fa] border-t border-zinc-100" id="contact">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-semibold text-black tracking-tight">Get in Touch.</h2>
            <p className="text-[#5f6368] text-lg font-normal">Tell us about your project and we'll get back to you.</p>
          </div>

          <form className="max-w-2xl mx-auto space-y-12">
            <div className="space-y-10">
              <input type="text" placeholder="Name" className="w-full py-4 bg-transparent border-b border-zinc-300 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-300 font-normal" />
              <input type="email" placeholder="Email" className="w-full py-4 bg-transparent border-b border-zinc-300 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-300 font-normal" />
              <textarea placeholder="Tell us about your project" rows={1} className="w-full py-4 bg-transparent border-b border-zinc-300 text-xl focus:outline-none focus:border-[#d4c1ff] transition-colors placeholder:text-zinc-200 resize-none font-normal" />
            </div>

            <div className="text-center">
              <button className="bg-[#d4c1ff] text-black px-12 py-3 rounded-full font-semibold text-lg hover:bg-[#c4afff] transition-all">
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
