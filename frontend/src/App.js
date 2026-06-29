import React, { useState } from "react";

const API_URL = "https://resume-analyzer-57w9.onrender.com";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!resume || !job) {
      alert("Please enter Resume and Job Description");
      return;
    }

    const userMsg = {
      role: "user",
      text: "Analyze my resume and give AI feedback 🚀",
    };

    setMessages((prev) => [...prev, userMsg]);
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
        throw new Error(data.error || "Backend Error");
      }

      const aiMsg = {
        role: "ai",
        text: data.feedback,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ " + err.message,
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-[#0b1220] text-white">
      <div className="w-72 bg-[#0f172a] border-r border-gray-800 p-4">
        <h1 className="text-xl font-bold mb-4">🚀 Resume GPT</h1>

        <textarea
          placeholder="Paste Resume"
          className="w-full h-32 p-2 bg-[#111827] rounded mb-2"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />

        <textarea
          placeholder="Paste Job Description"
          className="w-full h-32 p-2 bg-[#111827] rounded"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <button
          onClick={analyze}
          className="w-full mt-3 bg-sky-600 p-2 rounded hover:bg-sky-500"
        >
          {loading ? "Analyzing..." : "Ask AI"}
        </button>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">
          AI Resume Chat Assistant
        </h2>

        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg max-w-2xl ${
                msg.role === "user"
                  ? "bg-sky-600 ml-auto"
                  : "bg-gray-800"
              }`}
            >
              <pre className="whitespace-pre-wrap">{msg.text}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}