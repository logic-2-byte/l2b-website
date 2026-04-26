'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-full md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-1">
              <div className="w-5 h-5 bg-[#d4c1ff] rounded-full" />
              <span className="font-semibold text-xl tracking-tight text-[#5f6368]">Logic2byte</span>
            </Link>
            <p className="text-[#5f6368] text-sm leading-relaxed font-normal max-w-sm">
              Empowering brands with visual excellence through premium software development and scalable digital solutions.
            </p>
          </div>
          
          {/* Resources Column */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-bold text-black uppercase tracking-tight">Resources</h4>
            <ul className="space-y-4 text-sm text-[#5f6368] font-normal">
              <li><Link href="/products" className="hover:text-black transition-colors">Products</Link></li>
              <li><Link href="/process" className="hover:text-black transition-colors">Our Process</Link></li>
              <li><Link href="/#solutions" className="hover:text-black transition-colors">Solutions</Link></li>
              <li><Link href="/#contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-bold text-black uppercase tracking-tight">Product</h4>
            <ul className="space-y-4 text-sm text-[#5f6368] font-normal">
              <li><Link href="https://app.logic2byte.com" className="hover:text-black transition-colors">Login</Link></li>
              <li><Link href="https://app.logic2byte.com" className="hover:text-black transition-colors">Get Started</Link></li>
              <li><Link href="/products" className="hover:text-black transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Contact Column - Spans 2 on small mobile for better fit if needed, but 1 is usually fine in 2-col grid */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-bold text-black uppercase tracking-tight">Contact</h4>
            <ul className="space-y-4 text-sm text-[#5f6368] font-normal">
              <li>
                <a href="mailto:support@logic2byte.com" className="hover:text-black transition-colors break-words">
                  support@logic2byte.com
                </a>
              </li>
              <li className="leading-relaxed">123 Tech Avenue, <br /> Innovation Hub</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#5f6368] text-[13px] font-normal order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} Logic2byte. All rights reserved.
          </p>
          <div className="flex gap-8 text-[13px] text-[#5f6368] font-normal order-1 md:order-2">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
