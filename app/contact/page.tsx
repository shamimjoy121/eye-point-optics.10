'use client';

import Header from '@/components/Header';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">Contact Us</h1>
          <p className="text-center text-gray-500 mb-12">We would love to hear from you. Visit us or reach out online!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* দোকানের ঠিকানা ও তথ্য */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Store Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-900">📍 Address</h3>
                  <p className="text-gray-600">Eye Point Optics, Dhaka, Bangladesh</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">📞 Phone</h3>
                  <p className="text-gray-600">০১৭৭৯-৬৬৬০৩০</p>
                  <p className="text-gray-600">০১৯০৭-৪৪MD৩৬৫</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">✉️ Email</h3>
                  <p className="text-gray-600">Eyepointoptics11@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">⏰ Open Hours</h3>
                  <p className="text-gray-600">Saturday - Thursday: 10:00 AM - 10:00 PM</p>
                  <p className="text-sm text-red-500">*Friday Closed</p>
                </div>
              </div>
            </div>

            {/* সরাসরি যোগাযোগের বাটন সমূহ */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Connect</h2>
              <p className="text-gray-500 mb-8">Click below to chat with us instantly on WhatsApp or Call us directly.</p>
              
              <div className="w-full space-y-4">
                {/* হোয়াটসঅ্যাপ বাটন (প্রথম নাম্বারটি দিয়ে সেট করা) */}
                <a 
                  href="https://wa.me/8801779666030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white w-full py-3 rounded-xl font-bold hover:bg-green-600 transition shadow-md"
                >
                  💬 Chat on WhatsApp
                </a>
                {/* সরাসরি কল করার বাটন */}
                <a 
                  href="tel:+8801779666030" 
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md"
                >
                  📞 Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}