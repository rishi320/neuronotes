# NeuronNotes Backend API Documentation

This document provides detailed information about the NeuronNotes backend API endpoints, including request and response structures.

## Setup

1. Create a virtual environment and activate it:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file with your Google API key:
```
GOOGLE_API_KEY=your_api_key_here
```

4. Run the server:
```bash
python main.py
```

The server will start on `http://localhost:8000`

## API Endpoints

### 1. Generate Transcript
Extracts transcript from a YouTube video.

**Endpoint:** `POST /generate-transcript`

**Request Body:**
```json
{
    "url": "string"  // YouTube video URL
}
```

**Response Body:**
```json
{
    "video_id": "string",
    "original_transcript": "string"
}
```

**Error Responses:**
- `400 Bad Request`: Invalid YouTube URL
- `500 Internal Server Error`: Server-side error with error message

### 2. Summarize Transcript
Generates a summary of the provided transcript.

**Endpoint:** `POST /summarize-transcript`

**Request Body:**
```json
{
    "transcript": "string",
    "max_words": "number (optional, default: 250)",
    "num_topics": "number (optional, default: 5)"
}
```

**Response Body:**
```json
{
    "original_length": "number",
    "summary_length": "number",
    "summary": "string"
}
```

**Error Response:**
- `500 Internal Server Error`: Server-side error with error message

### 3. Generate Flashcards
Creates flashcards from the provided transcript.

**Endpoint:** `POST /generate-flashcards`

**Request Body:**
```json
{
    "transcript": "string"
}
```

**Response Body:**
```json
{
    "flashcards": [
        {
            "question": "string",
            "answer": "string"
        }
    ]
}
```

**Error Response:**
- `500 Internal Server Error`: Server-side error with error message

### 4. Extract Learning Topics
Extracts main learning topics and resources from the transcript.

**Endpoint:** `POST /extract-learning-topics`

**Request Body:**
```json
{
    "transcript": "string",
    "num_topics": "number (optional, default: 5)"
}
```

**Response Body:**
```json
{
    "learning_topics": [
        {
            "topic": "string",
            "description": "string",
            "resources": [
                {
                    "title": "string",
                    "type": "string (documentation|tutorial|course|article)",
                    "url": "string"
                }
            ]
        }
    ]
}
```

**Error Response:**
- `500 Internal Server Error`: Server-side error with error message

## CORS Configuration
The API has CORS enabled and allows requests from all origins (`*`). In production, you should replace this with specific origins.

## Dependencies
See `requirements.txt` for a complete list of dependencies and their versions. 