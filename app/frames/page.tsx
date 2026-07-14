'use client';

import Header from '@/components/Header';

export default function FramesPage() {
  const frames = [
    { id: 1, name: "Classic Black Frame", price: "৳১,৫০০" },
    { id: 2, name: "Clear Round Glasses", price: "৳১,৮০০" },
    { id: 3, name: "Matte Blue Square", price: "৳১,৯৫০" },
    { id: 4, name: "Vintage Tortoise Shell", price: "৳২,৫০০" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Our Eyeglasses Collection</h1>
          <p className="text-gray-500 mb-12">Choose the best frame for your eyes</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {frames.map((frame) => (
              <div key={frame.id} className="bg-white p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-4xl">
                  👓
                </div>
                <h3 className="font-semibold text-gray-700 text-lg">{frame.name}</h3>
                <p className="text-blue-600 font-bold mt-1 text-md">{frame.price}</p>
                <button className="mt-3 w-full bg-blue-900 text-white text-sm py-2 rounded-lg hover:bg-blue-800 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}