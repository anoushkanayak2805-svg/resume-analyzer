import React from "react";

export default function PDFPreview({ pdf }) {

  if (!pdf) return null;

  return (
    <div className="bg-[#1f2937] rounded-xl p-5 mb-8">

      <h2 className="text-xl font-bold text-white mb-4">
        Resume Preview
      </h2>

      <iframe
        src={pdf}
        title="Resume"
        width="100%"
        height="500"
        className="rounded-lg"
      />

    </div>
  );
}