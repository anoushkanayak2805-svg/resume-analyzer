export default function MatchCard({ score }) {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-semibold">
        Job Match
      </h2>

      <h1 className="text-6xl text-blue-600 font-bold mt-8">
        {score}%
      </h1>

    </div>

  );

}