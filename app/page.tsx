'use client'; // পপ-আপ ফর্মের ক্লিকের কাজ করার জন্য এটি প্রয়োজন

import Header from '@/components/Header';
import { useState } from 'react';

export default function Home() {
  // বুকিং ফর্ম খোলা বা বন্ধ রাখার স্টেট
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-blue-900">
          👓 Eye Point Optics
        </h1>
        
        <p className="mt-4 text-xl text-gray-600">
          Welcome to Eye Point Optics
        </p>
        
        <p className="mt-2 text-gray-500">
          Premium Eyeglasses • Sunglasses • Eye Test
        </p>
        
        {/* এই বাটনে ক্লিক করলে ফর্ম ওপেন হবে */}
        <button 
          onClick={() => setIsOpen(true)}
          className="mt-8 rounded-lg bg-blue-900 px-6 py-3 text-white hover:bg-blue-700 font-semibold transition"
        >
          Book an Eye Test
        </button>
      </main>

      {/* ১. আমাদের সেবাসমূহ (Our Services) */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">👓</div>
              <h3 className="text-xl font-semibold mb-2">Premium Eyeglasses</h3>
              <p className="text-gray-600">Find the perfect pair from our wide collection of prescription glasses.</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🕶️</div>
              <h3 className="text-xl font-semibold mb-2">Trendy Sunglasses</h3>
              <p className="text-gray-600">Protect your eyes in style with our latest UV-protection sunglasses.</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-2">Expert Eye Test</h3>
              <p className="text-gray-600">Book an appointment with our certified optometrists for a precise checkup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ২. পপ-আপ বুকিং ফর্ম (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Book an Appointment</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Booking Confirmed!'); setIsOpen(false); }} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-900" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="017XXXXXXXX" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-900" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input type="date" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-900" required />
              </div>
              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ৩. কাস্টমার রিভিউ (Testimonials) */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
          <p className="text-gray-500 mb-8">Read reviews from our satisfied clients</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 border rounded-xl shadow-sm bg-gray-50">
                <div className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐•</div>
                <p className="text-gray-600 italic mb-4">
                  "The eye test was very precise, and they have an amazing collection of premium frames. Highly recommended!"
                </p>
                <h4 className="font-semibold text-gray-800">Customer Name {item}</h4>
                <span className="text-xs text-gray-400">Verified Buyer</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৪. ফুটার (Footer Section) */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-lg font-bold mb-3">Eye Point Optics</h3>
            <p className="text-gray-400 text-sm">Your vision is our priority. Providing the best eyewear and eye care services.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <p className="text-gray-400 text-sm">📍 Dhaka, Bangladesh</p>
            <p className="text-gray-400 text-sm">📞 +880 1700-000000</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Opening Hours</h3>
            <p className="text-gray-400 text-sm">Sat - Thu: 10:00 AM - 9:00 PM</p>
            <p className="text-gray-400 text-sm text-red-400">Friday: Closed</p>
          </div>
        </div>
        <div className="border-t border-gray-800 text-center text-xs text-gray-500 mt-8 pt-4">
          © {new Date().getFullYear()} Eye Point Optics. All rights reserved.
        </div>
      </footer>
    </>
  );
}