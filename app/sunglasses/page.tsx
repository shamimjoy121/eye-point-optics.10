'use client';

import Header from '@/components/Header';

export default function SunglassesPage() {
  // সানগ্লাস প্রোডাক্ট ডাটা
  const sunglasses = [
    { id: 1, name: "Aviator Classic", price: "৳২,২০০" },
    { id: 2, name: "Wayfarer Matte Black", price: "৳১,৯৫০" },
    { id: 3, name: "Clubmaster Vintage", price: "৳২,৫০০" },
    { id: 4, name: "Hexagonal Trendy", price: "৳২,৮০০" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Premium Sunglasses Collection</h1>
          <p className="text-gray-500 mb-12">Protect your eyes in style with our latest UV protection sunglasses</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {sunglasses.map((item) => (
              <div key={item.id} className="bg-white p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-4xl">
                  🕶️
                </div>
                <h3 className="font-semibold text-gray-700 text-lg">{item.name}</h3>
                <p className="text-blue-600 font-bold mt-1 text-md">{item.price}</p>
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