// API Response Types
interface TranscriptResponse {
  video_id: string;
  original_transcript: string;
}

interface SummaryResponse {
  original_length: number;
  summary_length: number;
  summary: string;
}

interface Flashcard {
  question: string;
  answer: string;
}

interface Resource {
  title: string;
  type: 'documentation' | 'tutorial' | 'course' | 'article';
  url: string;
}

interface LearningTopic {
  topic: string;
  description: string;
  resources: Resource[];
}

interface FlashcardsResponse {
  flashcards: Flashcard[];
}

interface LearningTopicsResponse {
  learning_topics: LearningTopic[];
}

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// API Error Class
class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
    throw new APIError(response.status, error.detail || 'An error occurred');
  }
  return response.json();
}

// API Client Functions
export async function generateTranscript(youtubeUrl: string): Promise<TranscriptResponse> {
  const response = await fetch(`${API_BASE_URL}/generate-transcript`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: youtubeUrl }),
  });

  return handleResponse<TranscriptResponse>(response);
}

export async function summarizeTranscript(
  transcript: string,
  maxWords: number = 250
): Promise<SummaryResponse> {
  const response = await fetch(`${API_BASE_URL}/summarize-transcript`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transcript,
      max_words: maxWords,
    }),
  });

  return handleResponse<SummaryResponse>(response);
}

export async function generateFlashcards(transcript: string): Promise<FlashcardsResponse> {
  const response = await fetch(`${API_BASE_URL}/generate-flashcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ transcript }),
  });

  // Parse the JSON string in the flashcards field
  const rawResponse = await handleResponse<{ flashcards: string }>(response);
  return {
    flashcards: JSON.parse(rawResponse.flashcards) as Flashcard[]
  };
}

export async function extractLearningTopics(
  transcript: string,
  numTopics: number = 5
): Promise<LearningTopicsResponse> {
  const response = await fetch(`${API_BASE_URL}/extract-learning-topics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transcript,
      num_topics: numTopics,
    }),
  });

  // Parse the JSON string in the learning_topics field
  const rawResponse = await handleResponse<{ learning_topics: string }>(response);
  return {
    learning_topics: JSON.parse(rawResponse.learning_topics) as LearningTopic[]
  };
}

// Export types for use in components
export type {
  TranscriptResponse,
  SummaryResponse,
  Flashcard,
  Resource,
  LearningTopic,
  FlashcardsResponse,
  LearningTopicsResponse,
  APIError,
}; 