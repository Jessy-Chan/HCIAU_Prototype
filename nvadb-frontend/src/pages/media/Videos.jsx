import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const Videos = () => {
  const { content, locale, changeLocale } = useContent();
  const { videos } = content.media;

  return (
    <PageTemplate title="LPSVN Videos">
      <div className="grid gap-8">
        {videos.lpsvn.map((video) => (
          <div key={video.id} className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/90 hover:bg-primary text-white p-4 rounded-full"
                >
                  Play Video
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
              <p className="text-sm text-gray-500">Duration: {video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Videos;
