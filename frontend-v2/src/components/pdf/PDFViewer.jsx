export default function PDFViewer({ pdf }) {

  return (

    <div className="bg-white rounded-xl shadow-lg h-[750px]">

      {

        pdf ?

        <iframe
          src={pdf}
          title="resume"
          className="w-full h-full rounded-xl"
        />

        :

        <div className="h-full flex justify-center items-center text-gray-400 text-2xl">

          Upload Resume to Preview

        </div>

      }

    </div>

  );

}