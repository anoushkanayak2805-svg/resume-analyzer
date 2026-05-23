from services.parser import extract_skills
from services.matcher import match_resume_job
from services.scorer import calculate_ats_score
from services.suggestions import generate_suggestions
from services.gpt import improve_resume
from db import collection
from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber

app = Flask(__name__)
CORS(app)


# ✅ Home
@app.route("/")
def home():
    return "Resume Analyzer Backend Running"


# ✅ Upload Resume
@app.route("/upload", methods=["POST"])
def upload_resume():
    try:
        if "resume" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["resume"]

        text = ""
        with pdfplumber.open(file) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text

        return jsonify({"text": text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ Analyze Skills
@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json or {}
    text = data.get("text", "")

    skills = extract_skills(text)

    return jsonify({"skills": skills})


# ✅ Match
@app.route("/match", methods=["POST"])
def match():
    data = request.json or {}

    resume_text = data.get("resume", "")
    job_desc = data.get("job", "")

    score = match_resume_job(resume_text, job_desc)

    return jsonify({"match_score": round(score, 2)})


# ✅ ATS + Save
@app.route("/ats", methods=["POST"])
def ats():
    try:
        data = request.json or {}

        resume_text = data.get("resume", "")
        job_desc = data.get("job", "")

        skills = extract_skills(resume_text)
        match_score = match_resume_job(resume_text, job_desc)
        ats_score = calculate_ats_score(skills, job_desc, match_score)

        collection.insert_one({
            "resume": resume_text,
            "job": job_desc,
            "skills": skills,
            "match_score": match_score,
            "ats_score": ats_score
        })

        return jsonify({
            "skills": skills,
            "match_score": round(match_score, 2),
            "ats_score": ats_score
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ Suggestions
@app.route("/suggest", methods=["POST"])
def suggest():
    data = request.json or {}

    resume_text = data.get("resume", "")
    job_desc = data.get("job", "")

    skills = extract_skills(resume_text)
    suggestions = generate_suggestions(skills, job_desc)

    return jsonify({
        "skills": skills,
        "suggestions": suggestions
    })


# ✅ History
@app.route("/history", methods=["GET"])
def history():
    data = list(collection.find({}, {"_id": 0}))
    return jsonify(data)


# ✅ AI GPT Feature (SAFE)
@app.route("/ai", methods=["POST"])
def ai():
    try:
        data = request.json or {}

        resume = data.get("resume", "")
        job = data.get("job", "")

        feedback = improve_resume(resume, job)

        return jsonify({"feedback": feedback})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ Run
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)