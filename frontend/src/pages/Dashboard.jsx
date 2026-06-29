import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Resume Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-3">
              ATS Score
            </h2>

            <h1 className="text-5xl text-green-600 font-bold">
              82%
            </h1>

          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-3">
              Resume Match
            </h2>

            <h1 className="text-5xl text-blue-600 font-bold">
              76%
            </h1>

          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-3">
              Skills Found
            </h2>

            <ul className="space-y-2">
              <li>Python</li>
              <li>React</li>
              <li>Flask</li>
              <li>MongoDB</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}