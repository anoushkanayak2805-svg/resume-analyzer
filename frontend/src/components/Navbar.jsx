export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-sky-400">
          AI Resume Analyzer
        </h1>

        <div className="space-x-6">
          <button className="hover:text-sky-400">
            Dashboard
          </button>

          <button className="hover:text-sky-400">
            History
          </button>

          <button className="hover:text-sky-400">
            About
          </button>
        </div>

      </div>
    </nav>
  );
}