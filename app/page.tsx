import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'Aviator Gold Edition', price: '৳ ৪,৫০০', img: '🕶️' },
    { id: 2, name: 'Wayfarer Matte Black', price: '৳ ৩,৯০০', img: '🕶️' },
    { id: 3, name: 'Clubmaster Vintage', price: '৳ ২,৭০০', img: '🕶️' },
    { id: 4, name: 'Hexagonal Trendy', price: '৳ ২,৮০০', img: '🕶️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-amber-950 text-slate-100 flex flex-col justify-between">
      
      {/* মূল হিরো সেকশন */}
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8 flex-grow">
        
        {/* সার্চ এবং ট্যাগলাইন */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold tracking-[0.25em] text-xs uppercase mb-3">Premium Eyewear</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            FIND YOUR PERFECT LOOK
          </h1>
          
          {/* সার্চ বার */}
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white/5 border border-amber-500/30 rounded-full px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-sm"
            />
            <button className="absolute right-2 top-2 bg-amber-500 hover:bg-amber-600 text-slate-950 p-2 rounded-full transition-colors">
              🔍
            </button>
          </div>
        </div>

        {/* প্রোডাক্ট গ্রিড সেকশন */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-amber-400 tracking-widest uppercase mb-8 text-center md:text-left">
            Featured Frames
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-slate-900/60 backdrop-blur border border-amber-500/20 rounded-2xl p-4 md:p-6 flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-amber-400/50 shadow-lg hover:shadow-amber-500/5"
              >
                <div className="bg-slate-950/80 rounded-xl h-36 md:h-48 flex items-center justify-center text-4xl md:text-6xl border border-amber-500/10 mb-4">
                  {product.img}
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-slate-200 line-clamp-1 mb-1">{product.name}</h3>
                  <p className="text-amber-400 font-bold text-xs md:text-sm mb-4">{product.price}</p>
                </div>
                <Link href="/contact">
                  <button className="w-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-semibold text-xs md:text-sm py-2.5 rounded-lg hover:bg-amber-500 hover:text-slate-950 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* ফুটার সোশ্যাল আইকন */}
      <footer className="border-t border-amber-500/10 bg-slate-950/60 py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">© 2026 Eye Point Optics. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400 text-lg">
            <a href="#" className="hover:text-amber-400 transition-colors">📘 Facebook</a>
            <a href="#" className="hover:text-amber-400 transition-colors">📸 Instagram</a>
            <a href="#" className="hover:text-amber-400 transition-colors">🎥 YouTube</a>
          </div>
        </div>
      </footer>

    </div>
  );
}