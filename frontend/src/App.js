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
    <div style={styles.container}>
      <h1 style={styles.title}>🤖 AI Resume Analyzer</h1>

      <div style={styles.card}>
        <textarea
          style={styles.textarea}
          placeholder="Paste your resume here..."
          onChange={(e) => setResume(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Paste job description here..."
          onChange={(e) => setJob(e.target.value)}
        />

        <button style={styles.button} onClick={analyze}>
          Analyze Resume
        </button>
      </div>

      {result && (
        <div style={styles.resultCard}>
          <h2>📊 Results</h2>

          <div style={styles.scoreBox}>
            <h3>ATS Score</h3>
            <p style={styles.bigText}>{result.ats_score}</p>
          </div>

          <div style={styles.scoreBox}>
            <h3>Match Score</h3>
            <p style={styles.bigText}>{result.match_score}</p>
          </div>

          <div>
            <h3>🧠 Skills Detected</h3>
            <p>{result.skills.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "auto",
  },
  textarea: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resultCard: {
    marginTop: "30px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  scoreBox: {
    marginBottom: "15px",
  },
  bigText: {
    fontSize: "28px",
    fontWeight: "bold",
  },
};

export default App;