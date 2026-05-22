from services.parser import extract_skills
from services.matcher import match_resume_job
from services.scorer import calculate_ats_score   # ✅ ADD THIS
from services.suggestions import generate_suggestions
from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Resume Analyzer Backend Running"


@app.route("/upload", methods=["POST"])
def upload_resume():
    file = request.files["resume"]

    text = ""
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            text += page.extract_text()

    return jsonify({"text": text})


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data["text"]

    skills = extract_skills(text)

    return jsonify({
        "skills": skills
    })


@app.route("/match", methods=["POST"])
def match():
    data = request.json

    resume_text = data["resume"]
    job_desc = data["job"]

    score = match_resume_job(resume_text, job_desc)

    return jsonify({
        "match_score": round(score, 2)
    })


# ✅ ATS ROUTE (MUST BE ABOVE app.run)
@app.route("/ats", methods=["POST"])
def ats():
    data = request.json

    resume_text = data["resume"]
    job_desc = data["job"]

    skills = extract_skills(resume_text)
    match_score = match_resume_job(resume_text, job_desc)
    ats_score = calculate_ats_score(skills, job_desc, match_score)

    return jsonify({
        "skills": skills,
        "match_score": round(match_score, 2),
        "ats_score": ats_score
    })
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


if __name__ == "__main__":
    app.run(debug=True)