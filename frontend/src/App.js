import React, { useState } from "react";

function App() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const response = await fetch("http://127.0.0.1:5000/ats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resume, job }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Resume Analyzer</h1>

      <textarea
        placeholder="Paste Resume"
        rows="5"
        cols="50"
        onChange={(e) => setResume(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Paste Job Description"
        rows="5"
        cols="50"
        onChange={(e) => setJob(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div>
          <h2>Results</h2>
          <p>ATS Score: {result.ats_score}</p>
          <p>Match Score: {result.match_score}</p>
          <p>Skills: {result.skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;