from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber
from dotenv import load_dotenv

from services.parser import extract_skills
from services.matcher import match_resume_job
from services.scorer import calculate_ats_score
from services.suggestions import generate_suggestions
from services.gpt import improve_resume
from db import collection

load_dotenv()

app = Flask(__name__)

# Allow requests from Vercel
CORS(app)

# -----------------------------
# Home Route
# -----------------------------
@app.route("/")
def home():
    return jsonify({
        "message": "Resume Analyzer Backend Running 🚀"
    })


# -----------------------------
# Upload Resume PDF
# -----------------------------
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
                    text += page_text + "\n"

        return jsonify({
            "text": text
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# Skill Extraction
# -----------------------------
@app.route("/analyze", methods=["POST"])
def analyze():

    try:
        data = request.get_json()

        text = data.get("text", "")

        skills = extract_skills(text)

        return jsonify({
            "skills": skills
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# Resume Match
# -----------------------------
@app.route("/match", methods=["POST"])
def match():

    try:
        data = request.get_json()

        resume = data.get("resume", "")
        job = data.get("job", "")

        score = match_resume_job(resume, job)

        return jsonify({
            "match_score": round(score, 2)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# ATS Score
# -----------------------------
@app.route("/ats", methods=["POST"])
def ats():

    try:
        data = request.get_json()

        resume = data.get("resume", "")
        job = data.get("job", "")

        skills = extract_skills(resume)

        match_score = match_resume_job(resume, job)

        ats_score = calculate_ats_score(
            skills,
            job,
            match_score
        )

        collection.insert_one({
            "resume": resume,
            "job": job,
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
        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# Suggestions
# -----------------------------
@app.route("/suggest", methods=["POST"])
def suggest():

    try:
        data = request.get_json()

        resume = data.get("resume", "")
        job = data.get("job", "")

        skills = extract_skills(resume)

        suggestions = generate_suggestions(
            skills,
            job
        )

        return jsonify({
            "skills": skills,
            "suggestions": suggestions
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# AI Resume Feedback
# -----------------------------
@app.route("/ai", methods=["POST"])
def ai():

    try:
        data = request.get_json()

        resume = data.get("resume", "")
        job = data.get("job", "")

        if resume.strip() == "" or job.strip() == "":
            return jsonify({
                "error": "Resume and Job Description are required."
            }), 400

        feedback = improve_resume(
            resume,
            job
        )

        return jsonify({
            "success": True,
            "feedback": feedback
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


# -----------------------------
# History
# -----------------------------
@app.route("/history", methods=["GET"])
def history():

    try:
        history = list(
            collection.find(
                {},
                {"_id": 0}
            )
        )

        return jsonify(history)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# Health Check
# -----------------------------
@app.route("/health")
def health():
    return jsonify({
        "status": "ok"
    })


# -----------------------------
# Run App
# -----------------------------
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )