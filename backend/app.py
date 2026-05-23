from services.parser import extract_skills
from services.matcher import match_resume_job
from services.scorer import calculate_ats_score
from services.suggestions import generate_suggestions
from db import collection
from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber

app = Flask(__name__)
CORS(app)


# ✅ Home Route
@app.route("/")
def home():
    return "Resume Analyzer Backend Running"


# ✅ Upload Resume
@app.route("/upload", methods=["POST"])
def upload_resume():
    file = request.files["resume"]

    text = ""
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            text += page.extract_text()

    return jsonify({"text": text})


# ✅ Skill Extraction
@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data["text"]

    skills = extract_skills(text)

    return jsonify({
        "skills": skills
    })


# ✅ Job Matching
@app.route("/match", methods=["POST"])
def match():
    data = request.json

    resume_text = data["resume"]
    job_desc = data["job"]

    score = match_resume_job(resume_text, job_desc)

    return jsonify({
        "match_score": round(score, 2)
    })


# ✅ ATS Score + Save to MongoDB
@app.route("/ats", methods=["POST"])
def ats():
    data = request.json

    resume_text = data["resume"]
    job_desc = data["job"]

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


# ✅ AI Suggestions
@app.route("/suggest", methods=["POST"])
def suggest():
    data = request.json

    resume_text = data["resume"]
    job_desc = data["job"]

    skills = extract_skills(resume_text)
    suggestions = generate_suggestions(skills, job_desc)

    return jsonify({
        "skills": skills,
        "suggestions": suggestions
    })


# ✅ History (Fetch from MongoDB)
@app.route("/history", methods=["GET"])
def history():
    data = list(collection.find({}, {"_id": 0}))
    return jsonify(data)


# ✅ Run Server (FIXED LINE)
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)