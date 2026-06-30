import React from "react";

export default function SuggestionCard({ suggestions }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6">

      <h2 className="text-xl font-bold mb-5">
        AI Suggestions
      </h2>

      <ul className="space-y-3">

        {suggestions.map((item, index) => (

          <li key={index}>
            ✅ {item}
          </li>

        ))}

      </ul>

    </div>
  );
}