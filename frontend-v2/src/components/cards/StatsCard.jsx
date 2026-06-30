export default function StatsCard({ title, value, color = "blue" }) {

  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">

      <p className="text-gray-500 text-sm">{title}</p>

      <div
        className={`mt-3 inline-flex px-5 py-3 rounded-xl text-3xl font-bold ${colors[color]}`}
      >
        {value}
      </div>

    </div>
  );
}