import Header from "@/components/Header";


export default function Home() {
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

        <button className="mt-8 rounded-lg bg-blue-900 px-6 py-3 text-white hover:bg-blue-700">
          Book an Eye Test
        </button>
      </main>
    </>
  );
}