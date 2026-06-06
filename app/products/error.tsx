'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCcw, Home } from 'lucide-react';

export default function MarketplaceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-24 text-center">
      <div className="space-y-6 max-w-md">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <RefreshCcw className="w-10 h-10 animate-spin-slow" />
        </div>
        <h1 className="text-3xl font-bold text-black tracking-tight">Something went wrong</h1>
        <p className="text-[#5f6368] text-lg">
          We couldn't load the marketplace data. Please check if the backend service is running and try again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
          >
            <RefreshCcw className="w-4 h-4" /> Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto bg-zinc-100 text-black px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
