import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* লোগো এবং দোকানের নাম */}
        <Link href="/" className="text-2xl font-bold text-blue-900 flex items-center gap-2 cursor-pointer select-none">
          👓 Eye Point Optics
        </Link>

        {/* মেনুবার লিঙ্ক সমূহ */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-900 font-medium text-gray-700 transition">
            Home
          </Link>
          <Link href="/frames" className="hover:text-blue-900 font-medium text-gray-700 transition">
            Frames
          </Link>
          <Link href="/sunglasses" className="hover:text-blue-900 font-medium text-gray-700 transition">
            Sunglasses
          </Link>
          <Link href="/eye-test" className="hover:text-blue-900 font-medium text-gray-700 transition">
            Eye Test
          </Link>
          <Link href="/contact" className="hover:text-blue-900 font-medium text-gray-700 transition">
            Contact
          </Link>
        </nav>

        {/* হোয়াটসঅ্যাপ বাটন */}
        <div>
          <a 
            href="https://wa.me/8801779666030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </header>
  );
}