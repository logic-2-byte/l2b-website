'use client';

import { useEffect } from 'react';

export default function PricingScrollHandler() {
  useEffect(() => {
    if (window.location.hash === '#pricing') {
      const element = document.getElementById('pricing');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return null;
}
