def generate_suggestions(skills, job_desc):
    suggestions = []

    job_words = job_desc.lower().split()

    # Missing skills
    for word in job_words:
        if word not in skills and word.isalpha():
            suggestions.append(f"Consider adding skill: {word}")

    # General improvements
    suggestions.append("Add more quantified achievements (e.g., increased performance by 30%)")
    suggestions.append("Include more project details")
    suggestions.append("Improve formatting for ATS readability")

    return list(set(suggestions))[:5]