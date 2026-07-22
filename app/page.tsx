'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* হিরো সেকশন */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Nikunja-2, Dhaka
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          স্পষ্ট দৃষ্টি ও প্রিমিয়াম চশমার নির্ভরযোগ্য প্রতিষ্ঠান
        </h1>
        <p className="text-slate-400 text-lg">
          প্রফেশনাল আই টেস্ট, ব্র্যান্ডেড ফ্রেম, সানগ্লাস এবং কন্টাক্ট লেন্সের জন্য আপনার বিশ্বস্ত শোরুম—আই পয়েন্ট অপটিক্স।
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/eye-test"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30"
          >
            আই টেস্ট অ্যাপয়েন্টমেন্ট
          </Link>
          <Link
            href="/frames"
            className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-xl transition"
          >
            কালেকশন দেখুন
          </Link>
        </div>
      </section>

      {/* সার্ভিস গ্রিড */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-3">
          <div className="text-3xl">👁️</div>
          <h3 className="text-xl font-bold text-white">বিশেষজ্ঞ আই টেস্ট</h3>
          <p className="text-slate-400 text-sm">
            অভিজ্ঞ চক্ষু বিশেষজ্ঞ দ্বারা আধুনিক ডিজিটাল মেশিনে চোখের নিখুঁত পাওয়ার পরীক্ষা।
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-3">
          <div className="text-3xl">👓</div>
          <h3 className="text-xl font-bold text-white">প্রিমিয়াম ফ্রেম</h3>
          <p className="text-slate-400 text-sm">
            হালকা ও টেকসই অ্যান্টি-ব্লু লাইট এবং মেটাল/এসিটেট ফ্রেমের বিশাল কালেকশন।
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-3">
          <div className="text-3xl">🕶️</div>
          <h3 className="text-xl font-bold text-white">ট্রেন্ডি সানগ্লাস</h3>
          <p className="text-slate-400 text-sm">
            ১০০% UV প্রটেকশন সহ পোলারাইজড ফ্যাশনেবল সানগ্লাস।
          </p>
        </div>
      </section>
    </main>
  );
}