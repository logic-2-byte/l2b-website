'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-zinc-100 py-3 md:py-4 px-6 text-center">
      <p className="text-[12px] md:text-[13px] text-[#202124] font-medium tracking-tight">
        Get premium management solutions starting at just <span className="font-bold">₹599 monthly</span> only. Limited time offer. 
        <Link href="/products" className="inline-flex items-center text-[#d4c1ff] font-bold ml-1.5 hover:underline group">
          Shop Products <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </p>
    </div>
  );
}
