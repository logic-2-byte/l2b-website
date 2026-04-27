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
              className="w-full py-6 flex items-center justify-between text-left transition-all duration-300 bg-transparent text-black border-none hover:bg-transparent px-0 rounded-none shadow-none"
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
      <section className="relative min-h-[85vh] flex items-center justify-center pt-12 overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#d4c1ff]/30 via-[#fdfbff] to-white pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#d4c1ff] rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-[#d4c1ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center space-y-8 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              <span className="glass-underline">Empowering</span> Brands <br className="hidden md:block" /> 
              with Visual Excellence.
            </motion.h1>
            <motion.p 
              className="hero-description text-[#5f6368] max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Delivering fully functional websites, mobile apps, and eCommerce platforms designed to help your business thrive.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            variants={itemVariants}
          >
            <Link href="https://app.logic2byte.com" className="w-full sm:w-auto bg-black text-white hover:bg-[#2a2a2a] transition-all px-8 py-3 rounded-[2rem] font-medium text-base border border-black">
              Get Quote – For Free
            </Link>
            <Link href="/process" className="w-full sm:w-auto bg-white text-black border border-black hover:bg-zinc-50 transition-all px-8 py-3 rounded-[2rem] font-medium text-base flex items-center justify-center gap-2">
              Schedule a Call <ChevronRight className="w-5 h-5" />
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
              <h2 className="hero-title">Specialized products <br className="hidden md:block" /> for every business.</h2>
              <p className="text-[#5f6368] text-sm md:text-base max-w-2xl mx-auto font-normal">
                We build specialized platforms that help your business manage operations and grow faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Card 1 */}
              <div className="bg-[#e3e4e6] rounded-[2rem] pt-12 flex flex-col items-center h-[540px] overflow-hidden">
                <div className="px-8 space-y-4">
                  <h3 className="text-2xl md:text-[28px] font-medium text-black tracking-tight leading-tight">
                    Upgrade your business with <br /> Membership tools.
                  </h3>
                  <p className="text-[15px] text-[#3c4043] font-normal max-w-sm mx-auto">
                    Automated billing, member portals, and intelligent access control systems built for scale.
                  </p>
                  <Link href="/products" className="inline-block mt-2 border border-black rounded-full px-6 py-1.5 text-[14px] font-medium text-black hover:bg-black hover:text-white transition-all">
                    Learn more
                  </Link>
                </div>
                <div className="flex-1 w-full mt-10 relative flex items-end justify-center px-8">
                  <div className="w-full h-[85%] bg-zinc-200/80 rounded-t-3xl border-t border-x border-white/50 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-zinc-400/20 rounded-full blur-2xl" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f0f4ff] rounded-[2rem] pt-12 flex flex-col items-center h-[540px] overflow-hidden">
                <div className="px-8 space-y-4">
                  <h3 className="text-2xl md:text-[28px] font-medium text-black tracking-tight leading-tight">
                    Training Platforms.
                  </h3>
                  <p className="text-[15px] text-[#3c4043] font-normal max-w-sm mx-auto">
                    Scale your coaching with custom training and student management.
                  </p>
                  <Link href="/products" className="inline-block mt-2 border border-black rounded-full px-6 py-1.5 text-[14px] font-medium text-black hover:bg-black hover:text-white transition-all">
                    Learn more
                  </Link>
                </div>
                <div className="flex-1 w-full mt-10 relative flex items-end justify-center">
                  <div className="w-[85%] h-[90%] rounded-t-3xl overflow-hidden shadow-2xl border-t border-x border-white/60">
                    <img src="https://images.unsplash.com/photo-1517245318773-b7b71a162f33?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Process" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#e6e4fc] rounded-[2rem] pt-12 flex flex-col items-center h-[540px] overflow-hidden">
                <div className="px-8 space-y-4">
                  <h3 className="text-2xl md:text-[28px] font-medium text-black tracking-tight leading-tight">
                    Earn more with seamless <br /> Client Operations.
                  </h3>
                  <p className="text-[15px] text-[#3c4043] font-normal max-w-sm mx-auto">
                    Optimize your service-based business with scheduling and CRM.
                  </p>
                  <Link href="/products" className="inline-block mt-2 border border-black rounded-full px-6 py-1.5 text-[14px] font-medium text-black hover:bg-black hover:text-white transition-all">
                    Learn more
                  </Link>
                </div>
                <div className="flex-1 w-full mt-10 relative flex items-end justify-center px-8">
                  <div className="w-full h-[85%] bg-[#d4c1ff]/30 rounded-t-3xl border-t border-x border-white/60 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#d4c1ff]/40 rounded-full blur-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Open Letter Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#e3e4e6] rounded-[2rem] lg:rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="flex-1 space-y-8">
              <div className="w-12 h-12 bg-[#d4c1ff] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-sm">
                Q
              </div>
              <TypingText 
                text="Hey Startup Owner! Your success lives in your users' voices."
                className="text-4xl md:text-[52px] font-semibold text-black leading-[1.1] tracking-tight min-h-[3em]"
              />
            </div>
            
            <div className="flex-1 space-y-8 lg:pt-16">
              <p className="text-[#3c4043] text-[17px] md:text-lg leading-relaxed font-normal">
                Understanding what your users truly need is the cornerstone of building a successful product. We help you capture that voice and turn it into actionable growth.
              </p>
              <p className="text-[#3c4043] text-[17px] md:text-lg leading-relaxed font-normal">
                <strong className="text-black font-medium">That's where Logic2byte comes in.</strong> We bridge the gap between user experience and product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section -> Perks Style */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-[44px] font-semibold text-black tracking-tight leading-tight">
              Discover the world of Logic2byte.
            </h2>
            <p className="text-[#3c4043] text-[16px] md:text-[18px] font-normal leading-relaxed">
              Explore our core competencies and see how we deliver exceptional value across different digital domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { 
                title: 'SaaS Platforms', 
                desc: 'Unlock scalable and secure software solutions tailored to your business needs. We build powerful cloud applications that drive efficiency and growth.',
                link: 'Read article' 
              },
              { 
                title: 'E-commerce Built Fast', 
                desc: 'Launch your online store rapidly with our optimized e-commerce frameworks. Deliver seamless shopping experiences that maximize conversions and delight customers.',
                link: 'Read article' 
              },
              { 
                title: 'Portfolio Excellence', 
                desc: 'Showcase your work with stunning, high-performance portfolio websites. Stand out from the crowd with custom designs that truly represent your unique brand.',
                link: 'Read article' 
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-[2rem] p-10 md:p-12 flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[28px] md:text-[32px] font-semibold text-black leading-[1.15] tracking-tight mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[#3c4043] text-[15px] leading-relaxed mb-8 font-normal">
                    {item.desc}
                  </p>
                </div>
                <Link href="/products" className="inline-flex items-center text-[#d4c1ff] font-semibold text-[15px] group-hover:text-[#c4afff] transition-colors">
                  {item.link} <ChevronRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pixel-style E-commerce Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-6 lg:pr-10">
            <h2 className="text-4xl md:text-[56px] font-medium text-black leading-tight tracking-tight">E-commerce starts <br /> from ₹1000.</h2>
            <p className="text-[#3c4043] text-[17px] font-normal leading-relaxed max-w-md">
              Launch your store with essential features. Built for speed, security, and a seamless shopping experience for your customers.
            </p>
            <div className="pt-2">
              <Link href="https://app.logic2byte.com" className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-medium text-[15px] hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
                Get started
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full aspect-[4/3] lg:aspect-[1.1] bg-[#ece9ff] rounded-[3rem] relative overflow-hidden shadow-sm flex items-center justify-center">
            {/* Decorative sprinkles mimicking the reference style */}
            <div className="absolute top-12 left-12 w-2.5 h-8 rounded-full bg-[#00e5ff] rotate-45 border-2 border-black" />
            <div className="absolute top-20 right-24 w-2.5 h-8 rounded-full bg-[#ff4081] -rotate-12 border-2 border-black" />
            <div className="absolute bottom-32 left-20 w-2.5 h-8 rounded-full bg-[#00e5ff] rotate-12 border-2 border-black" />
            <div className="absolute bottom-20 right-20 w-2.5 h-8 rounded-full bg-[#d500f9] rotate-45 border-2 border-black" />
            <div className="absolute top-1/2 right-10 w-2.5 h-8 rounded-full bg-[#00e5ff] -rotate-45 border-2 border-black" />
            <div className="absolute top-8 right-1/2 w-2.5 h-8 rounded-full bg-[#ffff00] rotate-[60deg] border-2 border-black" />
            
            {/* Main placeholder mimicking a device layout */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[70%] bg-[#f8f9fa] rounded-t-[3rem] border-t-8 border-x-8 border-white shadow-2xl flex flex-col items-center">
              <div className="w-1/3 h-6 bg-zinc-200 rounded-b-2xl mt-0" />
              <div className="w-full h-full flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full bg-zinc-300/30 blur-xl" />
              </div>
            </div>
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
