import React from "react";
import {
  FaRobot,
  FaGithub,
  FaHistory,
  FaFileDownload,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
            <FaRobot className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              AI Resume Analyzer
            </h1>

            <p className="text-slate-300 text-sm mt-1">
              Analyze • Optimize • Get Interview Ready
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex gap-3">

          <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition">
            <FaHistory />
            History
          </button>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition">
            <FaFileDownload />
            Report
          </button>

          <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition">
            <FaGithub />
            GitHub
          </button>

        </div>

      </div>

    </header>
  );
}