'use client';

export default function SunglassesPage() {
  const sunglasses = [
    { id: 1, name: 'Polarized Aviator Classic', price: '৳২,২০০', tag: 'UV400 Protected' },
    { id: 2, name: 'Wayfarer Dark Matte', price: '৳১,৮০০', tag: 'Polarized' },
    { id: 3, name: 'Hexagonal Gold Frame Sun', price: '৳২,৫০০', tag: 'Trendy' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black text-white">প্রিমিয়াম সানগ্লাস কালেকশন</h1>
        <p className="text-slate-400">চোখের সম্পূর্ণ সুরক্ষায় ও ফ্যাশনে সেরা সানগ্লাস</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sunglasses.map((item) => (
          <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-blue-500/50 transition">
            <div className="aspect-video bg-slate-950 rounded-xl flex items-center justify-center text-4xl border border-slate-800/80">
              🕶️
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-white mt-2">{item.name}</h3>
              <p className="text-emerald-400 font-bold text-xl mt-1">{item.price}</p>
            </div>
            <a
              href={`https://wa.me/8801779666030?text=${encodeURIComponent(`হ্যালো EP OPTICS! আমি "${item.name}" সানগ্লাসটি কিনতে আগ্রহী।`)}`}
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