import Link from 'next/link';
import { ArrowRight, Fingerprint, Users, CreditCard, Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/global/Badges';

export default function GymManagementSystemPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Product Hero */}
      <section className="pt-24 pb-20 px-6 bg-black text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Badge variant="brand" className="mb-6">Logic2Byte Products</Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Complete Gym Management, <br className="hidden md:block"/><span className="text-brand">Simplified.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10">
            Manage members, payments, and attendance from one powerful system.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-brand text-black hover:bg-brand-hover transition-colors px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-brand/20">
            Book Demo
          </Link>
        </div>
      </section>

      {/* Smart System Highlight */}
      <section className="py-24 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-zinc-200">
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4">
                <Fingerprint className="w-8 h-8 text-brand" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Smart Biometric Integration</h2>
              <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                The system integrates seamlessly with biometric devices to automatically allow or restrict entry based on active membership status.
              </p>
              <p className="text-zinc-500">
                No more manual checking or unauthorized entries. Let the system handle your front desk automatically.
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Abstract Device */}
                <div className="bg-white rounded-2xl border-4 border-zinc-800 shadow-2xl p-6 relative z-10">
                   <div className="w-full aspect-square border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center mb-6 bg-zinc-50">
                      <Fingerprint className="w-24 h-24 text-zinc-400/50" />
                   </div>
                   <div className="h-4 w-3/4 bg-brand rounded-full mx-auto" />
                   <div className="h-4 w-1/2 bg-zinc-200 rounded-full mx-auto mt-3" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand/20 rounded-full blur-2xl z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need</h2>
            <p className="text-zinc-600 text-lg">Powerful features to run your operations smoothly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pl-4 pr-4">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Member & Subscription Management</h3>
                <p className="text-zinc-600">Easily track active, expiring, and inactive members. Handle renewals in just a few clicks.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Fingerprint className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Biometric Attendance System</h3>
                <p className="text-zinc-600">Hardware paired with our software to record real-time attendance and block defaulters.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Payment Tracking & Reports</h3>
                <p className="text-zinc-600">Automate payment reminders and generate detailed financial reports to gauge growth.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multi-Device Support</h3>
                <p className="text-zinc-600">Access the admin dashboard via web, and allow members to check their status on a mobile-friendly view.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-zinc-400 text-lg">A seamless automated flow for your front desk.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0"></div>
            
            {[ 
              { step: 1, title: 'Member Registers', desc: 'Add details safely into the system via admin.' },
              { step: 2, title: 'Subscription Activated', desc: 'Plan is assigned and fee is collected.' },
              { step: 3, title: 'Biometric Linked', desc: 'Fingerprint is matched to their profile.' },
              { step: 4, title: 'Entry Automated', desc: 'Walk-ins are verified instantly by the scanner.' }
            ].map((item) => (
              <div key={item.step} className="bg-black border border-zinc-800 rounded-2xl p-6 relative z-10 w-full md:w-64 text-center group hover:border-brand transition-colors">
                <div className="w-12 h-12 bg-zinc-800 text-white group-hover:bg-brand group-hover:text-black transition-colors rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-zinc-700">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">Core Benefits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center">
                 <ShieldCheck className="w-8 h-8 text-black mb-3" />
                 <span className="font-semibold text-sm">Reduce manual work</span>
               </div>
               <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center">
                 <ShieldCheck className="w-8 h-8 text-black mb-3" />
                 <span className="font-semibold text-sm">Improve accuracy</span>
               </div>
               <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center">
                 <ShieldCheck className="w-8 h-8 text-black mb-3" />
                 <span className="font-semibold text-sm">Increase control</span>
               </div>
               <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center">
                 <ShieldCheck className="w-8 h-8 text-black mb-3" />
                 <span className="font-semibold text-sm">Better member experience</span>
               </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-brand relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black tracking-tight">Start managing your gym smarter</h2>
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white hover:bg-zinc-800 transition-colors px-10 py-4 rounded-xl font-bold text-lg shadow-2xl">
            Request Product Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
