export default function PDFViewer({ pdf }) {

  if (!pdf) {
    return (
      <div className="bg-white rounded-2xl shadow-lg h-[700px] flex justify-center items-center">

        <h2 className="text-gray-400 text-2xl">
          PDF Preview
        </h2>

      </div>
    );
  }

  return (
    <iframe
      title="Resume"
      src={pdf}
      className="w-full h-[700px] rounded-2xl shadow-lg"
    />
  );
}