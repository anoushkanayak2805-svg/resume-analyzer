import { useState } from "react";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";

export default function UploadCard({ uploadResume }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFileName(file.name);

    uploadResume(file);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-2">
        Upload Resume
      </h2>

      <p className="text-gray-500 mb-6">
        Upload your resume in PDF format
      </p>

      <label className="cursor-pointer block">

        <div className="border-2 border-dashed border-blue-500 rounded-2xl p-10 text-center hover:bg-blue-50 transition duration-300">

          <FaCloudUploadAlt
            className="mx-auto text-blue-600"
            size={70}
          />

          <h3 className="mt-5 text-xl font-semibold">
            Click to Select PDF
          </h3>

          <p className="text-gray-500 mt-2">
            Drag & Drop also works
          </p>

        </div>

        <input
          type="file"
          accept=".pdf"
          hidden
          onChange={handleFileChange}
        />

      </label>

      {fileName && (
        <div className="mt-6 flex items-center gap-3 bg-green-50 border border-green-300 rounded-lg p-3">

          <FaFilePdf
            className="text-red-600"
            size={28}
          />

          <div>

            <p className="font-semibold text-green-700">
              Resume Selected
            </p>

            <p className="text-sm text-gray-600">
              {fileName}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}