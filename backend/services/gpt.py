import os
from openai import OpenAI


def improve_resume(resume, job):

    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        return (
            "❌ OpenAI API Key not found.\n\n"
            "Create a .env file inside the backend folder and add:\n\n"
            "OPENAI_API_KEY=your_api_key_here"
        )

    client = OpenAI(api_key=api_key)

    prompt = f"""
You are an expert FAANG resume reviewer.

Analyze the following resume against the job description.

Resume:
{resume}

Job Description:
{job}

Return your answer in this format:

1. ATS Score Improvement
2. Missing Skills
3. Resume Summary Improvement
4. Weak Bullet Points
5. Better Bullet Points
6. Important Keywords to Add
7. Projects to Add
8. Certifications to Add
9. Final Suggestions
"""

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are a senior FAANG recruiter and ATS expert."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.5
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"OpenAI Error: {str(e)}"