"use client";

import { Button } from "@/components/ui/button";
import { generateTranscript } from "@/lib/api";
import React from "react";

const HeroSection = () => {
  const [videoUrl, setVideoUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleCreateClick = async () => {
    if (!videoUrl.trim()) {
      setError("Please enter a video URL");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await generateTranscript(videoUrl);
      console.log('Transcript result:', result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate transcript");
      console.error('Error generating transcript:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      style={{ height: 'calc(100vh - 60px)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Paste your drive video/youtube link and let AI create your study guide
          </h1>
          <p className="text-lg mb-6 text-foreground">
            We create transcripts, summaries, flash notes & recommend you future studies needed with our prediction algorithm.
          </p>
          <div className="flex flex-col space-y-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter video URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              disabled={isLoading}
            />
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-white"
              onClick={handleCreateClick}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Create"}
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-foreground">No: of tutorials converted</h3>
              <p className="text-2xl font-bold text-foreground">1,234</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Hours saved</h3>
              <p className="text-2xl font-bold text-foreground">5,678</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-secondary/20 h-[90%] mx-8 rounded-lg  overflow-hidden">
          <div className="h-full flex items-center justify-center">
            <p className="text-secondary font-medium">A video explaining how the product works</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 