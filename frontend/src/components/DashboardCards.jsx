import React from "react";

export default function DashboardCards({
  ats,
  match,
  skills,
  missing,
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

      <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg">
        <h3 className="text-gray-400">ATS Score</h3>
        <h1 className="text-4xl font-bold text-green-400 mt-2">
          {ats}%
        </h1>
      </div>

      <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg">
        <h3 className="text-gray-400">Job Match</h3>
        <h1 className="text-4xl font-bold text-blue-400 mt-2">
          {match}%
        </h1>
      </div>

      <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg">
        <h3 className="text-gray-400">Skills Found</h3>
        <h1 className="text-4xl font-bold text-yellow-400 mt-2">
          {skills}
        </h1>
      </div>

      <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg">
        <h3 className="text-gray-400">Missing Skills</h3>
        <h1 className="text-4xl font-bold text-red-400 mt-2">
          {missing}
        </h1>
      </div>

    </div>
  );
}