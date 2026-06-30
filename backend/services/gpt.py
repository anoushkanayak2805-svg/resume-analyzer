def improve_resume(resume, job):

    resume = resume.lower()
    job = job.lower()

    # -----------------------------
    # Extract keywords
    # -----------------------------
    job_keywords = set(job.split())
    resume_words = set(resume.split())

    matched_keywords = list(job_keywords & resume_words)
    missing_keywords = list(job_keywords - resume_words)

    # -----------------------------
    # ATS / Match Score
    # -----------------------------
    if len(job_keywords) == 0:
        ats_score = 0
    else:
        ats_score = round(
            (len(matched_keywords) / len(job_keywords)) * 100
        )

    match_score = ats_score

    # -----------------------------
    # Suggestions
    # -----------------------------
    suggestions = []

    if ats_score < 50:
        suggestions.append(
            "Improve keyword matching with the job description."
        )

    if missing_keywords:
        suggestions.append(
            "Add these keywords: " +
            ", ".join(missing_keywords[:10])
        )

    suggestions.append(
        "Use strong action verbs like Built, Developed, Designed."
    )

    suggestions.append(
        "Add measurable achievements using numbers and percentages."
    )

    suggestions.append(
        "Improve ATS-friendly formatting."
    )

    suggestions.append(
        "Keep your resume within one page if you are a fresher."
    )

    return {
        "ats_score": ats_score,
        "match_score": match_score,
        "matched_keywords": matched_keywords,
        "missing_keywords": missing_keywords,
        "suggestions": suggestions,
        "important_keywords": list(job_keywords)[:15]
    }