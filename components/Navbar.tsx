import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="font-bold text-xl text-blue-900">Eye Point Optics</div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/frames">Frames</Link>
        <Link href="/sunglasses">Sunglasses</Link>
        <Link href="/eye-test">Eye Test</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}