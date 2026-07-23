export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
            Premium Eye Care & Luxury Eyewear
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Eye Point
            <span className="block text-yellow-400">
              Optics
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Discover premium eyeglasses, sunglasses, contact lenses and
            professional eye testing—all in one place. Experience quality,
            comfort and luxury.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400">
              View Frames
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
              WhatsApp Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}