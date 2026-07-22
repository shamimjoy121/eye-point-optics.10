'use client';

export default function FramesPage() {
  const frames = [
    { id: 1, name: 'Classic Matte Black Acetate', price: '৳১,800', tag: 'Best Seller' },
    { id: 2, name: 'Ultra Light Titanium Square', price: '৳২,500', tag: 'Premium' },
    { id: 3, name: 'Transparent TR90 Flex', price: '৳১,200', tag: 'Trendy' },
    { id: 4, name: 'Retro Browline Frame', price: '৳১,600', tag: 'Classic' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black text-white">চশমার ফ্রেম কালেকশন</h1>
        <p className="text-slate-400">আপনার চেহারার সাথে মানানসই সেরা ডিজাইনের ফ্রেম বেছে নিন</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {frames.map((frame) => (
          <div key={frame.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-blue-500/50 transition">
            <div className="aspect-video bg-slate-950 rounded-xl flex items-center justify-center text-4xl border border-slate-800/80">
              👓
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
                {frame.tag}
              </span>
              <h3 className="text-lg font-bold text-white mt-2">{frame.name}</h3>
              <p className="text-emerald-400 font-bold text-xl mt-1">{frame.price}</p>
            </div>
            <a
              href={`https://wa.me/8801779666030?text=${encodeURIComponent(`হ্যালো EP OPTICS! আমি "${frame.name}" ফ্রেমটি কিনতে আগ্রহী।`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-slate-800 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl transition text-sm"
            >
              WhatsApp-এ অর্ডার করুন
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}