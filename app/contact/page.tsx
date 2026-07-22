'use client';

import { useLanguage } from "@/components/context/LanguageContext";

export default function ContactPage() {
  const { lang } = useLanguage();
  const facebookUrl = "https://www.facebook.com/share/1AZxwXbBR9/?mibextid=wwXIfr";
  const googleBusinessUrl = "https://www.google.com/search?q=%E0%A6%86%E0%A6%87+%E0%A6%AA%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F+%E0%A6%85%E0%A6%AA%E0%A6%9F%E0%A6%BF%E0%A6%95%E0%A6%B8%2C%E0%A6%A8%E0%A6%BF%E0%A6%95%E0%A7%81%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A7%A8"; 
  const phone1 = "01779666030";
  const phone2 = "01907440365";

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12 space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          📞 {lang === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          {lang === 'bn'
            ? 'আপনার যেকোনো প্রশ্ন, চশমা নির্বাচন বা স্পেশাল অর্ডারের জন্য সরাসরি আমাদের সাথে যুক্ত হোন।'
            : 'Get in touch for any queries, eyewear selection, or special orders.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* ফেসবুক কার্ড */}
        <a 
          href={facebookUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-blue-500/50 transition shadow-xl"
        >
          <div className="w-10 h-10 bg-blue-600/10 text-blue-400 flex items-center justify-center rounded-xl text-xl">
            📘
          </div>
          <h3 className="text-lg font-bold text-white">
            {lang === 'bn' ? 'অফিসিয়াল ফেসবুক পেজ' : 'Official Facebook Page'}
          </h3>
          <p className="text-slate-400 text-xs">
            {lang === 'bn'
              ? 'আমাদের ফেসবুক পেজে যুক্ত হয়ে নতুন নতুন চশমার কালেকশন ও অফার দেখে নিন।'
              : 'Visit our Facebook page for new eyewear collections and special offers.'}
          </p>
        </a>

        {/* গুগল বিজনেস কার্ড */}
        <a 
          href={googleBusinessUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-emerald-500/50 transition shadow-xl"
        >
          <div className="w-10 h-10 bg-emerald-600/10 text-emerald-400 flex items-center justify-center rounded-xl text-xl">
            📍
          </div>
          <h3 className="text-lg font-bold text-white">
            {lang === 'bn' ? 'গুগল বিজনেস লোকেশন' : 'Google Business Location'}
          </h3>
          <p className="text-slate-400 text-xs">
            {lang === 'bn'
              ? 'সরাসরি আমাদের শোরুমে (নিকুঞ্জ-২) এসে চশমা দেখতে ম্যাপের সাহায্য নিন।'
              : 'Locate our showroom at Nikunja-2 easily using Google Maps.'}
          </p>
        </a>
      </div>

      {/* ফোন নম্বর সেকশন */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4">
        <h3 className="text-lg font-bold text-white">
          {lang === 'bn' ? 'সরাসরি কথা বলুন' : 'Call Us Directly'}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`tel:${phone1}`} className="text-lg font-black text-blue-400 hover:underline">
            📞 {phone1}
          </a>
          <a href={`tel:${phone2}`} className="text-lg font-black text-blue-400 hover:underline">
            📞 {phone2}
          </a>
        </div>
      </div>
    </main>
  );
}