'use client';

import { useLanguage } from "@/components/context/LanguageContext";

export default function EyeTestPage() {
  const { lang } = useLanguage();
  const whatsappNumber = '8801779666030';
  const doctorPhone = '+8801711337200';

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-col justify-center min-h-[calc(100vh-80px)]">
      
      {/* ১. হেডার সেকশন */}
      <div className="text-center mb-4 md:mb-6 space-y-2">
        <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md shadow-blue-500/20">
          {lang === 'bn' ? 'বিশেষজ্ঞ চক্ষু চিকিৎসা ও পরামর্শ' : 'Specialized Eye Care & Consultation'}
        </span>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
          {lang === 'bn' ? 'অভিজ্ঞ চক্ষু বিশেষজ্ঞ দ্বারা আই টেস্ট' : 'Eye Test by Experienced Ophthalmologist'}
        </h1>
        
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          {lang === 'bn' 
            ? 'আপনার চোখের সঠিক যত্ন ও নিখুঁত পাওয়ার পরীক্ষার জন্য সরাসরি চিফ কনসালট্যান্ট দ্বারা সার্ভিস নিন।' 
            : 'Get accurate power test & eye care service directly from Chief Consultant.'}
        </p>
      </div>

      {/* ২. ডাক্তার প্রোফাইল কার্ড */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden mb-4 md:mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
          
          {/* ডাক্তারের ছবি */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-[240px] md:max-w-xs">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[4/3] md:aspect-square">
                <img
                  src="/doctor.jpg"
                  alt="Prof. Dr. A.S.M.M. Quadir"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* নাম, পদবী ও কর্মস্থল */}
          <div className="md:col-span-8 space-y-3">
            
            {/* নাম ও ডিগ্রি */}
            <div className="border-b border-slate-800/80 pb-2">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-black text-white tracking-wide">
                {lang === 'bn' ? 'প্রফেসর ডা. এ.এস.এম.এম. কাদির' : 'Prof. Dr. A.S.M.M. Quadir'}
              </h2>
              <div className="inline-block mt-1.5 bg-slate-800/80 text-blue-400 text-xs sm:text-sm px-3 py-1 rounded border border-slate-700 font-medium">
                {lang === 'bn' ? 'এমবিবিএস (ডিএমসি), এমএস (অফথালমোলজি)' : 'MBBS (DMC), MS (Ophthalmology)'}
              </div>
            </div>

            {/* বর্তমান পদবী ও কর্মস্থল */}
            <div className="bg-slate-950/60 border-l-4 border-blue-500 p-3 rounded-r-lg space-y-1">
              <span className="text-[11px] text-blue-400 font-bold uppercase tracking-wider block">
                {lang === 'bn' ? 'বর্তমান পদবী ও কর্মস্থল' : 'Current Position & Workplace'}
              </span>
              <p className="text-sm md:text-base font-extrabold text-white">
                {lang === 'bn' ? 'পরিচালক ও অধ্যাপক' : 'Director cum Professor'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {lang === 'bn' 
                  ? 'জাতীয় চক্ষু বিজ্ঞান ইনস্টিটিউট ও হাসপাতাল' 
                  : 'National Institute of Ophthalmology & Hospital'}
              </p>
              <p className="text-[11px] text-slate-400">
                {lang === 'bn' ? 'শের-ই-বাংলা নগর, ঢাকা-১২০৭' : 'Sher-e-Bangla Nagar, Dhaka-1207'}
              </p>
            </div>

            {/* যোগাযোগের তথ্য */}
            <div className="flex flex-wrap gap-2 text-xs pt-1">
              <a 
                href={`tel:${doctorPhone}`}
                className="bg-slate-950/80 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5 transition"
              >
                <span>📞</span> <span className="font-bold text-white">{doctorPhone}</span>
              </a>
              <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5">
                <span>✉️</span> <span>drmquadir@yahoo.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ৩. ফি ও অফার বক্স */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto w-full mb-4 md:mb-6">
        
        {/* অন্যান্য চেম্বার */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 flex justify-between items-center opacity-75">
          <div>
            <span className="text-[10px] text-slate-400 font-semibold uppercase">
              {lang === 'bn' ? 'অন্যান্য চেম্বার' : 'Other Chamber'}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-200">
              {lang === 'bn' ? 'বাংলাদেশ আই হাসপাতাল, উত্তরা' : 'Bangladesh Eye Hospital, Uttara'}
            </h4>
            <p className="text-[11px] text-slate-400">{lang === 'bn' ? 'নিয়মিত ফি' : 'Regular Fee'}</p>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-slate-300">৳১,৫০০</span>
          </div>
        </div>

        {/* আই পয়েন্ট অপটিক্স অফার */}
        <div className="bg-gradient-to-r from-blue-950/70 via-slate-900 to-emerald-950/70 border border-emerald-500/40 rounded-xl p-3.5 flex justify-between items-center relative overflow-hidden shadow-lg">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-emerald-500 text-slate-950 font-black px-1.5 py-0.5 rounded">
                {lang === 'bn' ? '৫৩% ছাড়' : '53% OFF'}
              </span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase">
                {lang === 'bn' ? 'বিশেষ অফার' : 'Special Offer'}
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
              {lang === 'bn' ? 'আই পয়েন্ট অপটিকস (নিকুঞ্জ-২)' : 'Eye Point Optics (Nikunja-2)'}
            </h4>
            <p className="text-[11px] text-slate-300">
              {lang === 'bn' ? '৮০০ টাকা সাশ্রয়!' : 'Save 800 BDT!'}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-400 line-through block">৳১,৫০০</span>
            <span className="text-xl font-black text-emerald-400">৳৭০০</span>
          </div>
        </div>

      </div>

      {/* ৪. বুকিং ও অ্যাকশন বাটন */}
      <div className="flex flex-row gap-3 justify-center max-w-md mx-auto w-full">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            lang === 'bn'
              ? `হ্যালো EP OPTICS!\n\nআমি প্রফেসর ডা. এ.এস.এম.এম. কাদির স্যারের আই টেস্টের জন্য সিরিয়াল নিতে চাই।`
              : `Hello EP OPTICS!\n\nI want to book an eye test appointment with Prof. Dr. A.S.M.M. Quadir.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl transition text-center text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-900/20"
        >
          <span>💬</span> {lang === 'bn' ? 'হোয়াটসঅ্যাপে সিরিয়াল' : 'WhatsApp Serial'}
        </a>

        <a
          href={`tel:${doctorPhone}`}
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-xl transition text-center text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/20"
        >
          <span>📞</span> {lang === 'bn' ? 'সরাসরি কল করুন' : 'Call Now'}
        </a>
      </div>

    </main>
  );
}