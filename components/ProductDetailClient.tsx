'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Shield, Zap, Star, Loader2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { MARKETPLACE_DATA } from '@/lib/data';
import PricingScrollHandler from '@/components/PricingScrollHandler';

interface Plan {
  id: number;
  name: string;
  price: number;
  currency: string;
  durationMonths: number;
  features: string[];
  products: number[];
  code: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  slug: string;
}

export default function ProductDetailClient({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';
        const res = await fetch(`${apiUrl}/api/public/marketplace`);
        if (res.ok) {
          const data = await res.json();
          const currentProduct = data.products.find((p: any) => p.slug === slug);
          if (currentProduct) {
            setProduct(currentProduct);
            const productPlans = data.plans.filter((plan: any) => plan.products.includes(currentProduct.id));
            setPlans(productPlans);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        // Silent fallback
      }

      // Fallback to local data
      const localProduct = MARKETPLACE_DATA.products.find(p => p.slug === slug);
      if (localProduct) {
        setProduct(localProduct);
        const localPlans = MARKETPLACE_DATA.plans.filter(plan => plan.products.includes(localProduct.id));
        setPlans(localPlans);
      } else {
        setProduct(null);
      }
      setLoading(false);
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-[#d4c1ff]" />
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": "https://logic2byte.com/l2blogo.png",
    "brand": {
      "@type": "Brand",
      "name": "Logic2byte"
    },
    "offers": plans.length > 0 ? {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": Math.min(...plans.map(p => p.price)),
      "highPrice": Math.max(...plans.map(p => p.price)),
      "offerCount": plans.length
    } : undefined
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PricingScrollHandler />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-20">
            <Link 
              href="/products" 
              className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-black transition-colors mb-4"
            >
              <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Back to Products
            </Link>
            <h1 className="hero-title max-w-4xl mx-auto">
              {product.name}
            </h1>
            <p className="text-[#5f6368] text-lg md:text-xl max-w-2xl mx-auto font-normal">
              {product.description}
            </p>
          </div>

          {/* Product Specific Content */}
          {slug === 'gym-management-system' && (
            <div className="mb-24 bg-zinc-50 rounded-[2.5rem] p-8 md:p-16 border border-zinc-100 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#d4c1ff]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Smart Biometric Integration</h2>
                <p className="text-xl text-[#5f6368] leading-relaxed">
                  The system integrates seamlessly with biometric devices to automatically allow or restrict entry based on active membership status.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#8b5cf6]" />
                    <span>Real-time Attendance</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#8b5cf6]" />
                    <span>Automatic Entry Block</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="bg-white rounded-2xl border-4 border-zinc-800 shadow-2xl p-6 relative z-10 aspect-[4/5] flex flex-col items-center justify-center space-y-6">
                    <div className="w-24 h-24 rounded-full bg-zinc-50 flex items-center justify-center border-2 border-dashed border-zinc-200">
                      <Shield className="w-12 h-12 text-[#d4c1ff]" />
                    </div>
                    <div className="h-4 w-3/4 bg-zinc-100 rounded-full" />
                    <div className="h-4 w-1/2 bg-zinc-50 rounded-full" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4c1ff]/20 rounded-full blur-3xl z-0"></div>
                </div>
              </div>
            </div>
          )}

          {/* Subscription Plans Section */}
          <div className="space-y-12" id="pricing">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Subscription Plans</h2>
                <p className="text-[#5f6368] text-base">Choose the plan that best fits your business needs.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative group p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
                    plan.price > 0 
                      ? 'border-[#d4c1ff] bg-[#faf5ff] shadow-xl shadow-purple-900/5' 
                      : 'border-zinc-100 bg-white hover:border-zinc-200'
                  }`}
                >
                  {plan.price > 9000 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                      <div className={`p-2 rounded-lg ${plan.price > 0 ? 'bg-[#d4c1ff]/20 text-[#8b5cf6]' : 'bg-zinc-100 text-zinc-400'}`}>
                        {plan.price > 0 ? <Zap className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                      </div>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-black">{plan.currency === 'INR' ? '₹' : plan.currency}{plan.price.toLocaleString()}</span>
                      <span className="text-zinc-500 text-sm font-medium">/{plan.durationMonths === 12 ? 'year' : plan.durationMonths === 1 ? 'month' : `${plan.durationMonths} months`}</span>
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#5f6368]">
                          <CheckCircle2 className="w-5 h-5 text-[#8b5cf6] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <Link 
                      href={`/contact?product=${product.slug}&plan=${plan.code}`}
                      className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        plan.price > 0
                          ? 'bg-black text-white hover:bg-zinc-800'
                          : 'bg-zinc-100 text-black hover:bg-zinc-200'
                      }`}
                    >
                      Get Started Now <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Custom Plan Card */}
              <div className="p-8 rounded-[2.5rem] border border-dashed border-zinc-200 flex flex-col justify-center items-center text-center space-y-6 group hover:bg-zinc-50/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center">
                  <Star className="w-6 h-6 text-zinc-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black">Enterprise Solution</h3>
                  <p className="text-sm text-[#5f6368]">Need custom features or white-labeling? Let's talk.</p>
                </div>
                <Link href="/#contact" className="text-sm font-bold text-[#8b5cf6] hover:underline">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
