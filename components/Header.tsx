export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-blue-900">
          👓 Eye Point Optics
        </div>

        <nav className="flex items-center gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-900">
            Home
          </a>

          <a href="#" className="hover:text-blue-900">
            Frames
          </a>

          <a href="#" className="hover:text-blue-900">
            Sunglasses
          </a>

          <a href="#" className="hover:text-blue-900">
            Eye Test
          </a>

          <a href="#" className="hover:text-blue-900">
            Contact
          </a>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            WhatsApp
          </button>
        </nav>
      </div>
    </header>
  );
}