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

if __name__ == "__main__":
    app.run(debug=True)