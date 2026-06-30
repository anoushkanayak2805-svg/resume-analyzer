import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function DropZone({ uploadResume }) {
  return (
    <div className="bg-[#111827] p-8 rounded-xl border-2 border-dashed border-sky-500">

      <div className="flex flex-col items-center">

        <FaCloudUploadAlt
          size={70}
          className="text-sky-400 mb-4"
        />

        <h2 className="text-xl font-bold mb-2">
          Upload Resume
        </h2>

        <p className="text-gray-400 mb-6">
          Drag & Drop or Select PDF
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => uploadResume(e.target.files[0])}
        />

      </div>

    </div>
  );
}