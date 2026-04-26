'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const products = [
    { name: 'Gym Management' },
    { name: 'Salon Management' },
    { name: 'Spa Management' },
    { name: 'Clinic Management' },
    { name: 'Dental Clinic Management' },
    { name: 'Hospital Management' },
    { name: 'Pharmacy Management' },
    { name: 'School Management' },
    { name: 'College Management' },
    { name: 'Tuition Center Management' },
    { name: 'Coaching Center Management' },
    { name: 'Hotel Management' },
    { name: 'Hostel Management' },
    { name: 'Restaurant Management' },
    { name: 'Cafe Management' },
    { name: 'Retail Store Management' },
    { name: 'Supermarket Management' },
    { name: 'Inventory Management' },
    { name: 'Warehouse Management' },
    { name: 'Logistics Management' },
    { name: 'Courier Management' },
    { name: 'Laundry Management' },
    { name: 'Car Wash Management' },
    { name: 'Vehicle Service Center Management' },
    { name: 'Real Estate Management' },
    { name: 'Rental Property Management' },
    { name: 'Coworking Space Management' },
    { name: 'Event Management' },
    { name: 'Ticket Booking Management' },
    { name: 'Travel Agency Management' },
  ];

  // JSON-LD for Software Products
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": p.name,
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "599",
          "priceCurrency": "INR"
        }
      }
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-20">
            <span className="text-[13px] font-medium text-zinc-500 uppercase tracking-tight">Our Ecosystem</span>
            <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tight leading-tight max-w-3xl mx-auto">
              Specialized products <br /> for every business.
            </h1>
            <p className="text-sm md:text-base text-[#5f6368] max-w-lg mx-auto font-normal">
              Powerful management solutions starting from <span className="text-black font-semibold">₹599 monthly</span> only.
            </p>
          </div>

          {/* Product Grid - Compact Action Bar Style */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.name}
                variants={itemVariants}
                className="bg-[#f8f9fa] rounded-[2.5rem] p-10 flex flex-col h-[320px] relative overflow-hidden group border border-zinc-100/50 hover:border-zinc-200 transition-all duration-500"
              >
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#5f6368] font-normal leading-relaxed max-w-[280px]">
                    Streamline operations and grow your {product.name.split(' ')[0].toLowerCase()} business with advanced automation.
                  </p>
                  
                  {/* Integrated Action Row */}
                  <div className="flex items-center gap-4 pt-4">
                    <Link href={`/#contact?product=${product.name}`} className="inline-flex items-center justify-center bg-white border border-zinc-200 text-black px-6 py-2 rounded-full font-semibold text-[13px] hover:bg-zinc-50 transition-all">
                      Learn more
                    </Link>
                  </div>
                </div>

                {/* Subtle Background Glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#d4c1ff]/10 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <div className="mt-40 bg-[#d4c1ff] rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl shadow-purple-900/10">
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">Need a custom solution?</h2>
            <p className="text-black/70 text-lg font-medium max-w-2xl mx-auto">
              Our engineering team can build tailor-made platforms for your specific organizational requirements.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/#contact" className="bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
