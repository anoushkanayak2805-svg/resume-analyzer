import spacy

# Load NLP model
nlp = spacy.load("en_core_web_sm")

# Basic skill list (we will improve later)
SKILLS = ["python", "java", "c++", "react", "node", "mongodb", "sql"]

def extract_skills(text):
    doc = nlp(text.lower())
    found_skills = []

    for token in doc:
        if token.text in SKILLS:
            found_skills.append(token.text)

    return list(set(found_skills))