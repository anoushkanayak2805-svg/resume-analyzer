import {
  FaChartPie,
  FaHistory,
  FaFilePdf,
  FaCog,
  FaRobot,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-8 border-b border-slate-700">

        <div className="flex items-center gap-3">

          <FaRobot className="text-4xl text-blue-500"/>

          <div>

            <h1 className="text-2xl font-bold">
              Resume AI
            </h1>

            <p className="text-gray-400 text-sm">
              ATS Analyzer
            </p>

          </div>

        </div>

      </div>

      <nav className="flex-1 mt-8">

        <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-slate-800">

          <FaChartPie/>

          Dashboard

        </button>

        <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-slate-800">

          <FaHistory/>

          History

        </button>

        <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-slate-800">

          <FaFilePdf/>

          Reports

        </button>

        <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-slate-800">

          <FaCog/>

          Settings

        </button>

      </nav>

    </div>
  );
}