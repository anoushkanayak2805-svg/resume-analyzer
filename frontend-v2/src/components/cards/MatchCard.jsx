export default function MatchCard({ score }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        Job Match
      </h2>

      <div className="text-6xl font-bold text-blue-600">

        {score}%

      </div>

    </div>
  );
}