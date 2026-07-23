"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-black text-white tracking-wider">
          EYE POINT <span className="text-blue-500">OPTICS</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-slate-300 font-medium">
          <Link href="/" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/frames" className="hover:text-blue-500 transition">Frames</Link>
          <Link href="/sunglasses" className="hover:text-blue-500 transition">Sunglasses</Link>
          <Link href="/power-glasses" className="hover:text-blue-500 transition">Power Glasses</Link>
          <Link href="/contact-lenses" className="hover:text-blue-500 transition">Contact Lenses</Link>
          <Link href="/eye-test" className="hover:text-blue-500 transition">Eye Test</Link>
          <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-500 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}