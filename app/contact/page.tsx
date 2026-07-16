'use client';

export default function ContactPage() {
  // 🔗 আপনার ফেসবুক পেজের সঠিক লিঙ্ক
  const facebookUrl = "https://www.facebook.com/share/1AZxwXbBR9/?mibextid=wwXIfr";
  
  // 📍 আপনার গুগল বিজনেস (আই পয়েন্ট অপটিকস, নিকুঞ্জ-২) এর সঠিক লিঙ্ক
  const googleBusinessUrl = "https://www.google.com/search?q=%E0%A6%86%E0%A6%87+%E0%A6%AA%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F+%E0%A6%85%E0%A6%AA%E0%A6%9F%E0%A6%BF%E0%A6%95%E0%A6%B8%2C%E0%A6%A8%E0%A6%BF%E0%A6%95%E0%A7%81%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A7%A8"; 
  
  // 📞 আপনার দুটি মোবাইল নম্বর
  const phone1 = "01779666030";
  const phone2 = "01907440365";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* হেডার / নেভিগেশন */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👓</span>
          <span className="font-black tracking-wider text-xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">EP OPTICS</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="/" className="hover:text-slate-200 transition">HOME</a>
          <a href="/frames" className="hover:text-slate-200 transition">FRAMES</a>
          <a href="/sunglasses" className="hover:text-slate-200 transition">SUNGLASSES</a>
          <a href="/contact" className="text-blue-400 transition">CONTACT</a>
        </nav>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16 space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            📞 আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            আপনার যেকোনো প্রশ্ন, চশমা নির্বাচন বা স্পেশাল অর্ডারের জন্য সরাসরি আমাদের সাথে যুক্ত হোন।
          </p>
        </div>

        {/* কন্টাক্ট কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* ফেসবুক কার্ড */}
          <a 
            href={facebookUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition shadow-xl group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-400 flex items-center justify-center rounded-xl text-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                📘
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">অফিসিয়াল ফেসবুক পেজ</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                আমাদের ফেসবুক পেজে যুক্ত হয়ে নতুন নতুন চশমার কালেকশন, অফার এবং কাস্টমার রিভিউগুলো দেখে নিন।
              </p>
            </div>
            <div className="text-blue-400 text-sm font-bold mt-6 flex items-center gap-1 group-hover:underline">
              पेজে ভিজিট করুন ➔
            </div>
          </a>

          {/* গুগল বিজনেস / ম্যাপস কার্ড */}
          <a 
            href={googleBusinessUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/50 transition shadow-xl group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-600/10 text-emerald-400 flex items-center justify-center rounded-xl text-2xl group-hover:bg-emerald-600 group-hover:text-white transition">
                📍
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">গুগল বিজনেস লোকেশন</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                সরাসরি আমাদের শোরুমে (আই পয়েন্ট অপটিকস, নিকুঞ্জ-২) এসে চশমা ট্রায়াল দিতে এবং চোখ পরীক্ষা করতে গুগল ম্যাপের সাহায্য নিন।
              </p>
            </div>
            <div className="text-emerald-400 text-sm font-bold mt-6 flex items-center gap-1 group-hover:underline">
              ম্যাপে শোরুম দেখুন ➔
            </div>
          </a>

        </div>

        {/* ফোন এবং ডিরেক্ট সাপোর্ট কার্ড */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">সরাসরি কথা বলুন</h3>
            <p className="text-slate-400 text-sm">যেকোনো তথ্যের জন্য আমাদের এই নম্বরগুলোতে কল করতে পারেন।</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2">
              <p className="text-xl font-black text-blue-400 tracking-wider">📞 {phone1}</p>
              <p className="text-xl font-black text-blue-400 tracking-wider">📞 {phone2}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <a 
              href={`tel:${phone1}`} 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer text-center"
            >
              নম্বর ১ এ কল করুন
            </a>
            <a 
              href={`tel:${phone2}`} 
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              নম্বর ২ এ কল করুন
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}