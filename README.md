# 🚀 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes against job descriptions, calculates an ATS score, identifies missing keywords, and provides intelligent suggestions to improve resume quality.

🔗 **Live Demo:**[ https://YOUR-VERCEL-URL.vercel.app](https://resume-analyzer-five-sepia.vercel.app/)

🔗 **Backend API:** https://resume-analyzer-57w9.onrender.com

---

# 📌 Features

- 📄 Upload Resume (PDF)
- 👀 PDF Preview
- 🤖 AI Resume Analysis
- 🎯 ATS Score Calculation
- 💼 Job Match Score
- ✅ Matched Skills
- ❌ Missing Skills
- 💡 AI Resume Suggestions
- 📊 Resume Analysis History
- 📥 Download PDF Report
- ☁️ MongoDB Atlas Database
- 🌐 Fully Deployed (Vercel + Render)

---

# 📸 Screenshots

### Dashboard

(Add Dashboard Screenshot Here)

---

### Resume Analysis

(Add Resume Analysis Screenshot Here)

---

### History

(Add History Screenshot Here)

---

# 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Icons
- jsPDF

### Backend

- Flask
- Python
- pdfplumber
- Flask-CORS

### Database

- MongoDB Atlas

### Deployment

- Vercel
- Render

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/anoushkanayak2805-svg/resume-analyzer.git

cd resume-analyzer
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

source venv/Scripts/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
OPENAI_API_KEY=YOUR_OPENAI_KEY

MONGO_URI=YOUR_MONGODB_URI
```

Run backend

```bash
python app.py
```

---

## Frontend Setup

```bash
cd frontend-v2

npm install

npm run dev
```

---

# 📂 Project Structure

```
resume-analyzer/
│
├── backend/
│   ├── services/
│   ├── app.py
│   ├── db.py
│   └── requirements.txt
│
├── frontend-v2/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🚀 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /upload | Upload Resume |
| POST | /ai | AI Resume Analysis |
| GET | /history | Resume Analysis History |
| GET | /health | Backend Health Check |

---

# 🧠 How It Works

1. Upload Resume PDF
2. Extract Resume Text
3. Paste Job Description
4. AI Compares Resume with Job Description
5. Calculates ATS Score
6. Finds Missing Keywords
7. Generates Suggestions
8. Stores Analysis in MongoDB Atlas
9. Allows PDF Report Download

---

# 📈 Future Improvements

- 🔐 User Authentication
- 📄 DOCX Resume Support
- 🤖 GPT Resume Rewriting
- 📊 ATS Trend Graphs
- 🌙 Dark Mode
- 🎤 AI Mock Interviews
- 📧 Email PDF Reports
- 📱 Mobile Responsive UI

---

# 👩‍💻 Author

**Anoushka Nayak**

GitHub:
https://github.com/anoushkanayak2805-svg

LinkedIn:
(Add your LinkedIn Profile)

---

# ⭐ Show Your Support

If you like this project,

⭐ Star the repository

🍴 Fork it

💙 Follow for more AI projects
