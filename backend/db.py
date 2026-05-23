from pymongo import MongoClient

# connect to local MongoDB
client = MongoClient("mongodb://localhost:27017/")

# database name
db = client["resume_analyzer"]

# collection to store resumes
collection = db["resumes"]