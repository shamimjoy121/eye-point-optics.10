import { createClient } from '@supabase/supabase-js'
import Header from '@/components/Header'
import Link from 'next/link'

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: false })

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* হিরো সেকশন */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4">👓 EP OPTICS</h1>
          <p className="text-slate-400 text-lg mb-8">প্রিমিয়াম চশমা এবং সানগ্লাসের সেরা কালেকশন</p>
          
          <div className="flex gap-4 justify-center">
            <Link
              href="/frames"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              👓 ফ্রেম দেখুন
            </Link>
            <Link
              href="/sunglasses"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              🕶️ সানগ্লাস দেখুন
            </Link>
          </div>
        </div>

        {/* পণ্য গ্রিড */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-600 transition">
                  {/* ছবি */}
                  <div className="relative h-64 bg-slate-800 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                      {product.category === 'frames' ? '👓 ফ্রেম' : '🕶️ সানগ্লাস'}
                    </span>
                  </div>

                  {/* বিবরণ */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                      {product.name}
                    </h3>
                    <p className="text-blue-400 font-bold text-xl mb-4">৳{product.price}</p>
                    {product.description && (
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    {/* অর্ডার বাটন */}
                    <a
                      href={`https://wa.me/8801779666030?text=আমি%20এই%20পণ্যটি%20অর্ডার%20করতে%20চাই:%20${product.name}%20(৳${product.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition text-center"
                      onClick={(e) => e.preventDefault()}
                    >
                      📱 WhatsApp এ অর্ডার করুন
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg mb-6">কোনো পণ্য পাওয়া যায়নি</p>
            <Link
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              পণ্য যোগ করুন
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}