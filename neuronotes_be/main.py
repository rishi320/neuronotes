from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi
import re
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Google Generative AI
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable is not set")

genai.configure(api_key=GOOGLE_API_KEY)

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class YouTubeURL(BaseModel):
    url: str

class TranscriptText(BaseModel):
    transcript: str
    max_words: Optional[int] = 250  # Optional parameter to control summary length

def extract_video_id(url: str) -> Optional[str]:
    """Extract YouTube video ID from various URL formats."""
    patterns = [
        r'(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)',
        r'(?:youtube\.com\/embed\/)([\w-]+)',
        r'(?:youtube\.com\/v\/)([\w-]+)',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

@app.post("/generate-transcript")
async def generate_transcript(youtube_data: YouTubeURL):
    try:
        # Extract video ID
        video_id = extract_video_id(youtube_data.url)
        if not video_id:
            raise HTTPException(status_code=400, detail="Invalid YouTube URL")

        # Get transcript
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        full_transcript = " ".join([entry["text"] for entry in transcript_list])
        full_transcript = full_transcript.replace("[Music]", "");

        # Process with Google Generative AI
        # model = genai.GenerativeModel('gemini-2.0-flash-exp')
        # prompt = f"Please analyze this video transcript and provide a well-structured summary:\n\n{full_transcript}"
        
        # response = model.generate_content(prompt)
        
        # # Extract text from response parts
        # summary_text = ""
        # for part in response.parts:
        #     summary_text += part.text

        return {
            "video_id": video_id,
            "original_transcript": full_transcript,
            # "summary": summary_text
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/summarize-transcript")
async def summarize_transcript(transcript_data: TranscriptText):
    try:
        # Process with Google Generative AI
        model = genai.GenerativeModel('gemini-2.0-flash-exp')
        prompt = f"""Please provide a clear and concise summary of the following transcript. 
        The summary should be approximately {transcript_data.max_words} words long and capture the main points:

        {transcript_data.transcript}"""
        
        response = model.generate_content(prompt)
        
        # Extract text from response parts
        summary_text = ""
        for part in response.parts:
            summary_text += part.text

        return {
            "original_length": len(transcript_data.transcript.split()),
            "summary_length": len(summary_text.split()),
            "summary": summary_text
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate-flashcards")
async def generate_flashcards(transcript_data: TranscriptText):
    try:
        # Process with Google Generative AI
        model = genai.GenerativeModel('gemini-pro')
        prompt = f"""Please generate 5 flashcards from the following transcript:

{transcript_data.transcript}

Generate the response in this exact JSON format:
[
    {{"question": "Question 1", "answer": "Answer 1"}},
    {{"question": "Question 2", "answer": "Answer 2"}},
    ...
]"""
        
        response = model.generate_content(prompt)
        
        # Extract text from response parts
        flashcards_text = ""
        for part in response.parts:
            flashcards_text += part.text

        return {
            "flashcards": flashcards_text
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)