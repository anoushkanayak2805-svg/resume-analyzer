import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadCard({ onUpload }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <div className="border-2 border-dashed border-blue-500 rounded-xl p-10 text-center">

        <FaCloudUploadAlt
          size={70}
          className="mx-auto text-blue-600"
        />

        <h2 className="text-2xl font-bold mt-5">
          Upload Resume
        </h2>

        <p className="text-gray-500 mt-2">
          Upload your PDF Resume
        </p>

        <label className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer">

          Choose PDF

          <input
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) => onUpload(e.target.files[0])}
          />

        </label>

      </div>

    </div>
  );
}