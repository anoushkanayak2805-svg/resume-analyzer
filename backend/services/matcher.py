from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def match_resume_job(resume_text, job_desc):
    vectorizer = TfidfVectorizer()

    vectors = vectorizer.fit_transform([resume_text, job_desc])

    similarity = cosine_similarity(vectors[0], vectors[1])

    return float(similarity[0][0]) * 100