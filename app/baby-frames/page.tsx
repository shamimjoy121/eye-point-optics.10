'use client';

import Link from 'next/link';

export default function BabyFramesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">
            👓 Baby Frames Collection
          </h1>
          <p className="text-slate-400 text-sm mt-1">বাচ্চাদের জন্য আরামদায়ক চশমার ফ্রেম</p>
        </div>
        <Link href="/" className="text-cyan-400 hover:underline text-sm font-semibold">
          ← Back to Home
        </Link>
      </div>

      {/* প্রোডাক্ট গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-4 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400 transition">
          <div className="h-40 bg-slate-900/60 rounded-xl flex items-center justify-center text-4xl mb-3">👓</div>
          <h3 className="font-bold text-white text-lg">Kids Soft Flexible Frame</h3>
          <p className="text-cyan-400 font-bold mt-1">৳ ১,২০০</p>
          <button className="cyan-btn w-full mt-4 py-2 text-sm">Order Now</button>
        </div>
      </div>
    </div>
  );
}