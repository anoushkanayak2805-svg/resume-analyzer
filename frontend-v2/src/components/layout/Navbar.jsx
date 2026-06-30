export default function Navbar() {
  return (
    <div className="bg-white shadow px-10 py-6 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold">
          Resume Dashboard
        </h1>

        <p className="text-gray-500">
          AI Powered Resume Analyzer
        </p>

      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
        Download Report
      </button>

    </div>
  );
}