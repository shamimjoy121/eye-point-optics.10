'use client';

import Link from 'next/link';

export default function AccessoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4">
        <div>
          <h1 className="text-3xl font-black text-amber-300 flex items-center gap-2">
            👝 Eyewear Accessories
          </h1>
          <p className="text-slate-400 text-sm mt-1">চশমার বক্স, ক্লিনার ও প্রয়োজনীয় অনুষঙ্গ</p>
        </div>
        <Link href="/" className="text-cyan-400 hover:underline text-sm font-semibold">
          ← Back to Home
        </Link>
      </div>

      {/* প্রোডাক্ট গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-4 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400 transition">
          <div className="h-40 bg-slate-900/60 rounded-xl flex items-center justify-center text-4xl mb-3">👝</div>
          <h3 className="font-bold text-white text-lg">Hard Leather Case</h3>
          <p className="text-amber-400 font-bold mt-1">৳ ৩৫০</p>
          <button className="cyan-btn w-full mt-4 py-2 text-sm">Order Now</button>
        </div>
      </div>
    </div>
  );
}