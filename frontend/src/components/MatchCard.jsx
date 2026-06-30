import React from "react";

export default function MatchCard({ score }) {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold">
        Resume Match
      </h2>

      <p className="text-gray-400 mb-6">
        Job Description Match
      </p>

      <div className="w-full bg-gray-700 rounded-full h-5">

        <div
          className="bg-gradient-to-r from-sky-500 to-green-500 h-5 rounded-full transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

      <div className="mt-6 flex justify-between">

        <span className="text-gray-400">
          Match Score
        </span>

        <span className="text-3xl font-bold text-green-400">
          {score}%
        </span>

      </div>

    </div>
  );
}