import React from "react";

export default function SkillCard({ skills }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6">

      <h2 className="text-xl font-bold mb-5">
        Skills Found
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (

          <span
            key={index}
            className="bg-green-600 px-4 py-2 rounded-full"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}