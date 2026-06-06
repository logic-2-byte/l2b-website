'use client';

import { usePathname } from 'next/navigation';
import PromoBar from './PromoBar';

export default function PromoBarWrapper() {
  const pathname = usePathname();
  
  // Don't show promo bar on products pages
  if (pathname?.startsWith('/products')) {
    return null;
  }

  return <PromoBar />;
}
