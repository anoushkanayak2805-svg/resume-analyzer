import Navbar from "../components/Navbar";
import ATSCard from "../components/ATSCard";
import MatchCard from "../components/MatchCard";
import SkillsCard from "../components/SkillsCard";
import SuggestionsCard from "../components/SuggestionsCard";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {

  const skills = [
    "Python",
    "React",
    "Flask",
    "MongoDB",
    "SQL"
  ];

  const suggestions = [
    "Add measurable achievements",
    "Improve project descriptions",
    "Include more job keywords",
    "Add certifications"
  ];

  const missingSkills = [
    "Docker",
    "AWS",
    "Kubernetes",
    "Redis"
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          AI Resume Dashboard
        </h1>

        {/* Top Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <StatsCard
            title="Skills Found"
            value={skills.length}
            color="#22c55e"
          />

          <StatsCard
            title="Missing Skills"
            value={missingSkills.length}
            color="#ef4444"
          />

          <StatsCard
            title="Suggestions"
            value={suggestions.length}
            color="#3b82f6"
          />

        </div>

        {/* ATS & Match */}
        <div className="grid md:grid-cols-2 gap-6">

          <ATSCard score={84} />

          <MatchCard score={78} />

        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <SkillsCard skills={skills} />

          <SuggestionsCard suggestions={suggestions} />

        </div>

      </div>

    </div>
  );
}