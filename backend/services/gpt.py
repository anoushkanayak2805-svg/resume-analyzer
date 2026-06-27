def improve_resume(resume, job):

    resume = resume.lower()
    job = job.lower()

    # -----------------------------
    # Simple keyword extraction
    # -----------------------------
    job_keywords = set(job.split())
    resume_words = set(resume.split())

    missing_keywords = list(job_keywords - resume_words)
    matched_keywords = list(job_keywords & resume_words)

    # -----------------------------
    # Score calculation
    # -----------------------------
    if len(job_keywords) == 0:
        match_score = 0
    else:
        match_score = round((len(matched_keywords) / len(job_keywords)) * 100, 2)

    # -----------------------------
    # Suggestions Engine
    # -----------------------------
    suggestions = []

    if match_score < 50:
        suggestions.append("Improve keyword matching with job description")

    if len(missing_keywords) > 0:
        suggestions.append(f"Add these keywords: {', '.join(missing_keywords[:10])}")

    suggestions.append("Use strong action verbs: built, designed, implemented")
    suggestions.append("Add measurable impact (%, numbers, results)")
    suggestions.append("Improve resume formatting for ATS readability")

    # -----------------------------
    # Final output (GPT-like format)
    # -----------------------------
    return f"""
🤖 AI Resume Analysis (Free Mode)

1. ATS Score Improvement:
Your ATS score is {match_score}%

2. Missing Skills:
{', '.join(missing_keywords[:15])}

3. Resume Summary Improvement:
Make your summary more role-focused and add keywords from job description.

4. Weak Areas:
- Missing job-specific keywords
- Lack of measurable achievements

5. Suggestions:
{chr(10).join(['- ' + s for s in suggestions])}

6. Important Keywords:
{', '.join(list(job_keywords)[:15])}
"""