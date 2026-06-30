import React from "react";

export default function StatsCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 shadow-xl">

      <h3 className="text-gray-400">
        {title}
      </h3>

      <h1
        className="text-5xl font-bold mt-4"
        style={{
          color: color,
        }}
      >
        {value}
      </h1>

    </div>
  );
}