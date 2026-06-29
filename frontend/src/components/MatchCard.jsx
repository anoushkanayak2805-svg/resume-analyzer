export default function MatchCard({ score }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold text-gray-700">
        Resume Match
      </h2>

      <h1 className="text-6xl font-bold text-blue-600 mt-4">
        {score}%
      </h1>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-6">

        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${score}%` }}
        ></div>

      </div>

    </div>
  );
}