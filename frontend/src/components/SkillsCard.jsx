export default function SkillsCard({ skills }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        Skills Found
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}