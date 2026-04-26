'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-20">
            <span className="text-[13px] font-medium text-zinc-500 uppercase tracking-tight">Our Workflow</span>
            <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tight leading-tight max-w-3xl mx-auto">
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

          {/* Progress Bar Representation */}
          <div className="mt-12 w-full h-[1px] bg-zinc-200 relative">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-[#d4c1ff]" />
          </div>

          {/* Detail List Section (Pixel style list) */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Discovery</h4>
              <ul className="space-y-3 text-sm font-normal text-[#5f6368]">
                <li>User of the Product</li>
                <li>Competitor & Market Analysis</li>
                <li>Business Goals</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Design</h4>
              <ul className="space-y-3 text-sm font-normal text-[#5f6368]">
                <li>Ideation & Wireframe</li>
                <li>Style Guide & Component Design</li>
                <li>Visual Design & Prototype</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Build</h4>
              <ul className="space-y-3 text-sm font-normal text-[#5f6368]">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Test & Publish</li>
              </ul>
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
