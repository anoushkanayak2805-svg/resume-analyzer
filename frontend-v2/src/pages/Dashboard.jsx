import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import UploadCard from "../components/upload/UploadCard";
import PDFViewer from "../components/pdf/PDFViewer";

import ATSCard from "../components/cards/ATSCard";
import MatchCard from "../components/cards/MatchCard";
import SkillsCard from "../components/cards/SkillsCard";
import SuggestionCard from "../components/cards/SuggestionCard";

import api from "../services/api";

export default function Dashboard() {
  const [resumeText, setResumeText] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [atsScore, setAtsScore] = useState(0);
  const [matchScore, setMatchScore] = useState(0);

  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  async function uploadResume(file) {
    if (!file) return;

    setPdfFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await api.post("/upload", formData);

      console.log("UPLOAD RESPONSE:", res.data);

      setResumeText(res.data.text || "");

      alert("✅ Resume Uploaded Successfully");

    } catch (err) {
      console.error(err);

      alert("❌ Upload Failed");
    }
  }

  async function analyzeResume() {

    console.log("Current Resume Text:", resumeText);

    if (!resumeText || resumeText.trim() === "") {
      alert("Upload Resume First");
      return;
    }

    const job = prompt("Paste Job Description");

    if (!job) return;

    setLoading(true);

    try {

      const res = await api.post("/ai", {
        resume: resumeText,
        job,
      });

      console.log("AI RESPONSE:", res.data);

      const data = res.data;

      setAtsScore(data.ats_score || 0);
      setMatchScore(data.match_score || 0);

      setMatchedSkills(data.matched_keywords || []);
      setMissingSkills(data.missing_keywords || []);
      setSuggestions(data.suggestions || []);

    } catch (err) {
      console.error(err);

      alert("Analysis Failed");
    }

    setLoading(false);
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="grid grid-cols-12 gap-8 p-8">
          <div className="col-span-4 space-y-6">

            <UploadCard uploadResume={uploadResume} />

            <button
              onClick={analyzeResume}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

            <ATSCard score={atsScore} />

            <MatchCard score={matchScore} />

          </div>

          <div className="col-span-8 space-y-6">

            <PDFViewer pdf={pdfFile} />

            <SkillsCard
              title="Matched Skills"
              skills={matchedSkills}
            />

            <SkillsCard
              title="Missing Skills"
              skills={missingSkills}
            />

            <SuggestionCard
              suggestions={suggestions}
            />

          </div>
        </div>
      </div>
    </div>
  );
}