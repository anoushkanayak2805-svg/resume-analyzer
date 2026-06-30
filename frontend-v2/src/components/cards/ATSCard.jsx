import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ATSCard({ score }) {

  const value = Number(score) || 0;

  let color = "#ef4444";

  if (value >= 80) color = "#22c55e";
  else if (value >= 60) color = "#f59e0b";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6 text-center">
        ATS Score
      </h2>

      <div className="w-40 h-40 mx-auto">

        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textColor: "#111827",
            pathColor: color,
            trailColor: "#e5e7eb",
            textSize: "18px",
          })}
        />

      </div>

      <p className="text-center mt-5 text-gray-600">
        {value >= 80
          ? "Excellent Resume"
          : value >= 60
          ? "Good Resume"
          : "Needs Improvement"}
      </p>

    </div>
  );
}