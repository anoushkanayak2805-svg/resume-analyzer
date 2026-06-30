import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadCard({ uploadResume }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-5">
        Upload Resume
      </h2>

      <label className="cursor-pointer">

        <div className="border-2 border-dashed border-blue-500 rounded-xl p-12 text-center hover:bg-blue-50 transition">

          <FaCloudUploadAlt
            className="mx-auto text-blue-600"
            size={60}
          />

          <p className="mt-5 text-lg">
            Click to Upload PDF
          </p>

        </div>

        <input
          hidden
          type="file"
          accept=".pdf"
          onChange={(e) => uploadResume(e.target.files[0])}
        />

      </label>

    </div>
  );
}