export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white px-4">
      
      <h1 className="text-4xl font-bold mb-6">
        Soundness Explainer
      </h1>

      <div className="bg-white text-blue-600 rounded-xl p-6 w-full max-w-md shadow-lg">
        
        <label className="block mb-2 font-semibold">
          Choose audience
        </label>

        <select className="w-full p-2 rounded border mb-4">
          <option>Beginner</option>
          <option>Developer</option>
          <option>Investor</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
          Generate Explanation
        </button>

        <p className="mt-4 text-sm">
          (Explanation will appear here)
        </p>

      </div>

      <footer className="mt-10 text-sm opacity-90">
        Made by <b>@daviddforth</b> — follow me on X
      </footer>

    </main>
  );
}
