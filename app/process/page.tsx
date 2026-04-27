'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-20">
            <span className="text-[13px] font-medium text-zinc-500 uppercase tracking-tight">Our Workflow</span>
            <h1 className="hero-title max-w-3xl mx-auto">
              Beyond brilliant <br /> from start to finish.
            </h1>
            <p className="text-sm md:text-base text-[#5f6368] max-w-lg mx-auto font-normal">
              We take on your new project and help you build something amazing with a process designed for results.
            </p>
          </div>

          {/* Pixel-style Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Panel 1: Discovery */}
            <div className="bg-[#f8f9fa] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end aspect-[4/5] md:aspect-auto h-full border border-zinc-100">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                  Discovery & <br /> Ideation phase.
                </h3>
                <p className="text-sm text-[#5f6368] font-normal leading-relaxed">
                  We reveal revelations and mold brands, websites, and products by engaging in a process of discovery and scrutiny.
                </p>
              </div>
            </div>

            {/* Panel 2: Image/Visual */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-auto h-full group border border-zinc-100">
              <div className="absolute inset-0 bg-zinc-100 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" 
                alt="Design Process"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Panel 3: Design & Build */}
            <div className="bg-[#f8f9fa] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end aspect-[4/5] md:aspect-auto h-full border border-zinc-100">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                  Exceptional <br /> visual personas.
                </h3>
                <p className="text-sm text-[#5f6368] font-normal leading-relaxed">
                  We narrate distinct brand narratives and sculpt user-centric digital journeys that ensure reliability and adapt over time.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline UI */}
          <div className="mt-32 relative">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 relative z-10 w-fit mx-auto">
              
              {/* Step 1 */}
              <div className="relative pt-0 md:pt-24">
                {/* Desktop Line - Extends to the next column across the gap */}
                <div className="hidden md:block absolute top-[23px] left-[24px] md:w-[calc(100%+4rem)] lg:w-[calc(100%+6rem)] h-[2px] bg-[#d4c1ff] z-0" />
                
                {/* Desktop Circle Node */}
                <div className="hidden md:flex absolute top-0 left-0 w-12 h-12 bg-white border-[3px] border-[#d4c1ff]/40 rounded-full items-center justify-center shadow-sm z-20">
                  <div className="w-4 h-4 bg-[#d4c1ff] rounded-full" />
                </div>
                
                {/* Mobile Line */}
                <div className="md:hidden absolute top-6 left-[11px] w-[2px] h-[calc(100%+2rem)] bg-[#d4c1ff]" />
                
                {/* Mobile Circle Node */}
                <div className="md:hidden absolute top-2 left-0 w-6 h-6 bg-white border-[3px] border-[#d4c1ff]/40 rounded-full shadow-sm flex items-center justify-center z-20">
                   <div className="w-2 h-2 bg-[#d4c1ff] rounded-full" />
                </div>
                
                <div className="pl-12 md:pl-0 space-y-6">
                  <h4 className="text-[26px] font-semibold text-black tracking-tight">Discovery</h4>
                  <ul className="space-y-4 text-[15px] font-normal text-[#5f6368]">
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> User of the Product</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Competitor & Market Analysis</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Business Goals</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pt-0 md:pt-24 mt-4 md:mt-0">
                {/* Desktop Line - Extends to the next column across the gap */}
                <div className="hidden md:block absolute top-[23px] left-[24px] md:w-[calc(100%+4rem)] lg:w-[calc(100%+6rem)] h-[2px] bg-[#d4c1ff] z-0" />
                
                <div className="hidden md:flex absolute top-0 left-0 w-12 h-12 bg-white border-[3px] border-[#d4c1ff]/40 rounded-full items-center justify-center shadow-sm z-20">
                  <div className="w-4 h-4 bg-[#d4c1ff] rounded-full" />
                </div>
                
                <div className="md:hidden absolute top-6 left-[11px] w-[2px] h-[calc(100%+2rem)] bg-[#d4c1ff]" />
                <div className="md:hidden absolute top-2 left-0 w-6 h-6 bg-white border-[3px] border-[#d4c1ff]/40 rounded-full shadow-sm flex items-center justify-center z-20">
                   <div className="w-2 h-2 bg-[#d4c1ff] rounded-full" />
                </div>

                <div className="pl-12 md:pl-0 space-y-6">
                  <h4 className="text-[26px] font-semibold text-black tracking-tight">Design</h4>
                  <ul className="space-y-4 text-[15px] font-normal text-[#5f6368]">
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Ideation & Wireframe</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Style Guide & Component Design</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Visual Design & Prototype</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pt-0 md:pt-24 mt-4 md:mt-0">
                <div className="hidden md:flex absolute top-0 left-0 w-12 h-12 bg-white border-[3px] border-[#d4c1ff]/40 rounded-full items-center justify-center shadow-sm z-20">
                  <div className="w-4 h-4 bg-[#d4c1ff] rounded-full" />
                </div>
                
                {/* Mobile line - no continuation after the last */}
                <div className="md:hidden absolute top-2 left-0 w-6 h-6 bg-white border-[3px] border-[#d4c1ff]/40 rounded-full shadow-sm flex items-center justify-center z-20">
                   <div className="w-2 h-2 bg-[#d4c1ff] rounded-full" />
                </div>

                <div className="pl-12 md:pl-0 space-y-6">
                  <h4 className="text-[26px] font-semibold text-black tracking-tight">Build</h4>
                  <ul className="space-y-4 text-[15px] font-normal text-[#5f6368]">
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Frontend Development</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Backend Development</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#d4c1ff] shrink-0"/> Test & Publish</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Final CTA - Pixel Style */}
          <div className="mt-40 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">Ready to build your story?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://app.logic2byte.com" className="bg-[#d4c1ff] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#c4afff] transition-all">
                Get Started
              </Link>
              <Link href="/case-study" className="bg-white text-black border border-zinc-200 px-10 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
