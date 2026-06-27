import React, { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!resume || !job) return;

    const userMsg = {
      role: "user",
      text: "Analyze my resume and give AI feedback 🚀",
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const res = await fetch("http://127.0.0.1:5000/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume, job }),
    });

    const data = await res.json();

    const aiMsg = {
      role: "ai",
      text: data.feedback,
    };

    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-[#0b1220] text-white">

      {/* Sidebar */}
      <div className="w-72 bg-[#0f172a] border-r border-gray-800 p-4">
        <h1 className="text-xl font-bold mb-4">🚀 Resume GPT</h1>

        <textarea
          placeholder="Paste Resume"
          className="w-full h-32 p-2 bg-[#111827] rounded mb-2"
          onChange={(e) => setResume(e.target.value)}
        />

        <textarea
          placeholder="Paste Job Description"
          className="w-full h-32 p-2 bg-[#111827] rounded"
          onChange={(e) => setJob(e.target.value)}
        />

        <button
          onClick={analyze}
          className="w-full mt-3 bg-sky-600 p-2 rounded hover:bg-sky-500"
        >
          {loading ? "Analyzing..." : "Ask AI"}
        </button>
      </div>

      {/* Chat Area */}
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
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}