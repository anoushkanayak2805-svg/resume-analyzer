import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import UploadCard from "../components/upload/UploadCard";
import PDFViewer from "../components/pdf/PDFViewer";

import ATSCard from "../components/cards/ATSCard";
import MatchCard from "../components/cards/MatchCard";
import SkillsCard from "../components/cards/SkillsCard";
import SuggestionCard from "../components/cards/SuggestionCard";
import StatsCard from "../components/cards/StatsCard";
import History from "../components/history/History";

import { downloadReport } from "../utils/report";

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

  const [refreshHistory, setRefreshHistory] = useState(false);

  // ---------------- Upload Resume ----------------

  async function uploadResume(file) {

    if (!file) return;

    setPdfFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("resume", file);

    try {

      const res = await api.post("/upload", formData);

      setResumeText(res.data.text || "");

      alert("✅ Resume Uploaded Successfully");

    } catch (err) {

      console.error(err);

      if (err.response) {

        alert(JSON.stringify(err.response.data));

      } else {

        alert(err.message);

      }

    }

  }

  // ---------------- Analyze Resume ----------------

  async function analyzeResume() {

    if (!resumeText.trim()) {

      alert("Upload Resume First");

      return;

    }

    const job = prompt("Paste Job Description");

    if (!job) return;

    setLoading(true);

    try {

      const res = await api.post("/ai", {

        resume: resumeText,
        job

      });

      const data = res.data;

      setAtsScore(Number(data.ats_score) || 0);
      setMatchScore(Number(data.match_score) || 0);

      setMatchedSkills(data.matched_keywords || []);
      setMissingSkills(data.missing_keywords || []);
      setSuggestions(data.suggestions || []);

      setRefreshHistory(prev => !prev);

      alert("✅ Analysis Complete");

    } catch (err) {

      console.error(err);

      if (err.response) {

        alert(JSON.stringify(err.response.data));

      } else {

        alert(err.message);

      }

    } finally {

      setLoading(false);

    }

  }

  // ---------------- Download Report ----------------

  function handleDownload() {

    if (atsScore === 0) {

      alert("Please analyze your resume first.");

      return;

    }

    try {

      downloadReport(
        atsScore,
        matchScore,
        matchedSkills,
        missingSkills,
        suggestions
      );

    } catch (err) {

      console.error(err);

      alert(err.message);

    }

  }

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="grid grid-cols-12 gap-8 p-8">

          {/* LEFT PANEL */}

          <div className="col-span-4 space-y-6">

            <UploadCard uploadResume={uploadResume} />

            <button
              onClick={analyzeResume}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-bold transition"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

            <button
              onClick={handleDownload}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 font-bold transition"
            >
              📄 Download Report
            </button>

            <ATSCard score={atsScore} />

            <MatchCard score={matchScore} />

            <div className="grid grid-cols-2 gap-4">

              <StatsCard
                title="Skills Found"
                value={matchedSkills.length}
                color="green"
              />

              <StatsCard
                title="Missing Skills"
                value={missingSkills.length}
                color="red"
              />

            </div>

          </div>

          {/* RIGHT PANEL */}

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

            <History refresh={refreshHistory} />

          </div>

        </div>

      </div>

    </div>

  );

}