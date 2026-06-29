import React from "react";

export default function Sidebar({
  resume,
  setResume,
  job,
  setJob,
  uploadResume,
  analyze,
  loading,
}) {
  return (
    <div className="w-80 bg-[#0f172a] border-r border-gray-800 p-5">

      <h1 className="text-3xl font-bold mb-8 text-sky-400">
        🚀 Resume GPT
      </h1>

      <label className="font-semibold">
        Upload Resume
      </label>

      <input
        type="file"
        accept=".pdf"
        className="w-full mt-2 mb-5"
        onChange={(e)=>uploadResume(e.target.files[0])}
      />

      <label className="font-semibold">
        Resume
      </label>

      <textarea
        value={resume}
        readOnly
        className="w-full h-52 mt-2 bg-[#111827] rounded p-3 mb-5"
      />

      <label className="font-semibold">
        Job Description
      </label>

      <textarea
        value={job}
        onChange={(e)=>setJob(e.target.value)}
        className="w-full h-52 mt-2 bg-[#111827] rounded p-3"
      />

      <button
        onClick={analyze}
        className="w-full mt-6 bg-sky-600 hover:bg-sky-500 p-3 rounded-xl font-bold"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

    </div>
  );
}