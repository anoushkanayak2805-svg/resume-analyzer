import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ResultCards from "./components/ResultCards";
import "./App.css";

const API_URL = "https://resume-analyzer-57w9.onrender.com";

export default function App() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");

  const [loading, setLoading] = useState(false);

  const [atsScore, setAtsScore] = useState(0);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Upload Resume
  const uploadResume = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setResume(data.text);
    } catch (err) {
      alert(err.message);
    }
  };

  // Analyze Resume
  const analyze = async () => {
    if (!resume || !job) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
          job,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setAtsScore(data.ats_score || 0);
      setMatchedSkills(data.matched_keywords || []);
      setMissingSkills(data.missing_keywords || []);
      setSuggestions(data.suggestions || []);
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-[#0b1220] text-white">

      <Sidebar
        resume={resume}
        setResume={setResume}
        job={job}
        setJob={setJob}
        uploadResume={uploadResume}
        analyze={analyze}
        loading={loading}
      />

      <div className="flex-1 p-8 overflow-auto">

        <h1 className="text-4xl font-bold mb-8">
          AI Resume Analyzer
        </h1>

        <ResultCards
          atsScore={atsScore}
          matchedSkills={matchedSkills}
          missingSkills={missingSkills}
          suggestions={suggestions}
        />

      </div>

    </div>
  );
}