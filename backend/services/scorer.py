def calculate_ats_score(skills, job_desc, match_score):
    job_words = job_desc.lower().split()

    matched_skills = 0

    for skill in skills:
        if skill in job_words:
            matched_skills += 1

    if len(skills) == 0:
        skills_score = 0
    else:
        skills_score = (matched_skills / len(skills)) * 100

    ats_score = (0.4 * skills_score) + (0.6 * match_score)

    return round(ats_score, 2)