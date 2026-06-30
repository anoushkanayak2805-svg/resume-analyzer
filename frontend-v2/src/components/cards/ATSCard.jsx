export default function ATSCard({ score }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        ATS Score
      </h2>

      <div className="text-6xl font-bold text-green-600">

        {score}%

      </div>

    </div>
  );
}