import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ATSCard({ score }) {

  const value = Number(score) || 0;

  let color = "#ef4444";

  if (value >= 80) color = "#22c55e";
  else if (value >= 60) color = "#f59e0b";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold text-center mb-4">
        ATS Score
      </h2>

      <div className="flex justify-center">

        <div className="w-20 h-20 mx-auto">

          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: color,
              trailColor: "#E5E7EB",
              textColor: "#111827",
              textSize: "20px",
            })}
          />

        </div>

      </div>

      <p className="text-center mt-5 font-medium text-gray-600">

        {value >= 80
          ? "Excellent"
          : value >= 60
          ? "Good"
          : "Needs Improvement"}

      </p>

    </div>
  );
}