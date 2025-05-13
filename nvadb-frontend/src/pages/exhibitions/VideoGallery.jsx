import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const VideoGallery = () => {
  const { content } = useContent();
  const { videoGallery } = content.exhibitions;

  return (
    <PageTemplate title={videoGallery.title}>
      <div className="grid gap-8">
        {videoGallery.videos.map((video) => (
          <div key={video.id} className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">{videoGallery.durationtext}: </span>
                {video.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};

export default VideoGallery;
