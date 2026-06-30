import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ATSCard({ score }) {
  let status = "";
  let color = "";

  if (score >= 80) {
    status = "Excellent";
    color = "#22c55e";
  } else if (score >= 60) {
    status = "Good";
    color = "#f59e0b";
  } else {
    status = "Needs Improvement";
    color = "#ef4444";
  }

  return (
    <div className="bg-[#111827] rounded-2xl p-6 shadow-xl">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold">
            ATS Score
          </h2>

          <p className="text-gray-400 mt-2">
            Resume Quality
          </p>
        </div>

        <div className="w-36 h-36">

          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              textColor: "#ffffff",
              pathColor: color,
              trailColor: "#2d3748",
            })}
          />

        </div>

      </div>

      <div
        className="mt-6 p-3 rounded-xl text-center font-bold"
        style={{
          background: color,
        }}
      >
        {status}
      </div>

    </div>
  );
}