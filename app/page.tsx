export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-950 text-white p-6">
      <div className="text-center border-4 border-white p-10 rounded-xl shadow-2xl">
        <h1 className="text-6xl font-extrabold text-blue-300">Eye Point Optics</h1>
        <p className="mt-6 text-2xl italic">"Clear Vision, Better Life"</p>
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition duration-300">
          Explore Our Collection
        </button>
      </div>
    </main>
  );
}