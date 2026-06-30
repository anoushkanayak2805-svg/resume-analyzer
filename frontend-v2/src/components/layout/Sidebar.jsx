import {
  FaRobot,
  FaChartBar,
  FaHistory,
  FaFilePdf,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white shadow-2xl">

      <div className="p-8 border-b border-slate-700">

        <div className="flex items-center gap-4">

          <div className="bg-blue-600 p-3 rounded-xl">
            <FaRobot size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Resume AI
            </h1>

            <p className="text-slate-400">
              ATS Analyzer
            </p>
          </div>

        </div>

      </div>

      <nav className="mt-8">

        <button className="w-full px-8 py-4 flex gap-4 items-center hover:bg-slate-800">
          <FaChartBar />
          Dashboard
        </button>

        <button className="w-full px-8 py-4 flex gap-4 items-center hover:bg-slate-800">
          <FaHistory />
          History
        </button>

        <button className="w-full px-8 py-4 flex gap-4 items-center hover:bg-slate-800">
          <FaFilePdf />
          Reports
        </button>

        <button className="w-full px-8 py-4 flex gap-4 items-center hover:bg-slate-800">
          <FaCog />
          Settings
        </button>

      </nav>

    </aside>
  );
}