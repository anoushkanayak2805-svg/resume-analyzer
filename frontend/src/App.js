import React, { useState } from "react";
import "./App.css";

function App() {
  const [resumeText, setResumeText] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [file, setFile] = useState(null);
  const [history, setHistory] = useState([]);
  const [aiFeedback, setAiFeedback] = useState(""); // ✅ NEW

  const uploadFile = async () => {
    if (!file) return alert("Upload file first");

    const formData = new FormData();
    formData.append("resume", file);

    const res = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResumeText(data.text);
  };

  const analyze = async () => {
    const res = await fetch("http://127.0.0.1:5000/ats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resume: resumeText, job }),
    });

    const data = await res.json();
    setResult(data);

    const sug = await fetch("http://127.0.0.1:5000/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resume: resumeText, job }),
    });

    const sugData = await sug.json();
    setSuggestions(sugData.suggestions);
  };

  const fetchHistory = async () => {
    const res = await fetch("http://127.0.0.1:5000/history");
    const data = await res.json();
    setHistory(data);
  };

  // ✅ AI FUNCTION (INSIDE COMPONENT)
  const getAI = async () => {
    const res = await fetch("http://127.0.0.1:5000/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resume: resumeText, job }),
    });

    const data = await res.json();
    setAiFeedback(data.feedback);
  };

  return (
    <div className="container">
      <h1 className="title">🚀 AI Resume Analyzer</h1>

      <div className="card">
        <h2>Upload Resume</h2>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={uploadFile}>Upload PDF</button>

        <textarea
          placeholder="Resume text..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        <textarea
          placeholder="Job description..."
          onChange={(e) => setJob(e.target.value)}
        />

        <div className="btn-group">
          <button onClick={analyze}>Analyze</button>
          <button onClick={fetchHistory}>History</button>
          <button onClick={getAI}>🤖 AI Improve</button> {/* ✅ NEW */}
        </div>
      </div>

      {result && (
        <div className="result-card">
          <h2>📊 Results</h2>
          <div className="scores">
            <div className="score-box">
              <h3>ATS</h3>
              <p>{result.ats_score}</p>
            </div>
            <div className="score-box">
              <h3>Match</h3>
              <p>{result.match_score}</p>
            </div>
          </div>

          <h3>🧠 Skills</h3>
          <p>{result.skills.join(", ")}</p>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="card">
          <h2>🤖 Suggestions</h2>
          <ul>
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ AI OUTPUT */}
      {aiFeedback && (
        <div className="card">
          <h2>🤖 AI Feedback</h2>
          <pre>{aiFeedback}</pre>
        </div>
      )}

      {history.length > 0 && (
        <div className="card">
          <h2>📜 History</h2>
          {history.map((h, i) => (
            <div key={i} className="history-item">
              <p>ATS: {h.ats_score}</p>
              <p>Match: {h.match_score}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;