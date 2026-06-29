import Navbar from "../components/Navbar";
import ATSCard from "../components/ATSCard";
import MatchCard from "../components/MatchCard";
import SkillsCard from "../components/SkillsCard";
import SuggestionsCard from "../components/SuggestionsCard";

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

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Resume Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <ATSCard score={84} />

          <MatchCard score={78} />

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <SkillsCard skills={skills} />

          <SuggestionsCard suggestions={suggestions} />

        </div>

      </div>

    </div>
  );
}