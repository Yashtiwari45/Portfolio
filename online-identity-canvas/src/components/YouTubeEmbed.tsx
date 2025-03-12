
import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  // Extract video ID from full YouTube URL if needed
  const getVideoId = (url: string): string => {
    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return match[2];
    }
    
    // If the input is already a video ID (exactly 11 chars), return it
    if (url.length === 11) {
      return url;
    }
    
    // For URLs like youtu.be/ID or with 'si' parameter
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      return id;
    }
    
    return url;
  };

  const embeddableId = getVideoId(videoId);

  return (
    <div className="aspect-video w-full rounded-t-xl overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${embeddableId}`}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
