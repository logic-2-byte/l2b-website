export default function ProductsLoading() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Skeleton */}
          <div className="text-center space-y-4 mb-20 animate-pulse">
            <div className="mx-auto w-32 h-6 bg-zinc-100 rounded-full mb-4" />
            <div className="mx-auto w-2/3 h-16 bg-zinc-100 rounded-2xl" />
            <div className="mx-auto w-1/2 h-6 bg-zinc-100 rounded-full mt-4" />
          </div>

          {/* Product Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="bg-zinc-50 rounded-[2.5rem] pt-12 flex flex-col items-center h-[580px] overflow-hidden animate-pulse"
              >
                <div className="px-8 space-y-6 w-full flex flex-col items-center">
                  <div className="w-3/4 h-10 bg-zinc-200 rounded-lg" />
                  <div className="w-5/6 h-12 bg-zinc-200/50 rounded-lg" />
                  
                  <div className="flex gap-3 pt-4 w-full justify-center">
                    <div className="w-24 h-10 bg-zinc-200 rounded-full" />
                    <div className="w-24 h-10 bg-zinc-200 rounded-full" />
                  </div>
                </div>

                <div className="flex-1 w-full mt-12 px-10">
                  <div className="w-full h-full bg-white/40 rounded-t-[2.5rem] border-t border-x border-zinc-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
