'use client';

import Header from '@/components/Header';

export default function EyeTestPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm border text-center">
            <div className="text-6xl mb-4">👁️‍🗨️</div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Professional Eye Testing</h1>
            <p className="text-gray-600 mb-8 text-lg">
              Get your eyes checked by our certified optometrists using modern computerized equipment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg mb-2">⏱️ Timing</h3>
                <p className="text-gray-700">Everyday: 4:00 PM - 9:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">*Friday Closed</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-900 text-lg mb-2">💰 Fee</h3>
                <p className="text-gray-700">Computerized Eye Test: ৳২০০</p>
                <p className="text-sm text-gray-500 mt-1">*Free on Frame Purchase</p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book Your Appointment</h3>
              <p className="text-gray-500 mb-6">Call or message us on WhatsApp to confirm your serial.</p>
              <a 
                href="https://wa.me/YOUR_NUMBER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition shadow-md text-lg"
              >
                💬 Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}