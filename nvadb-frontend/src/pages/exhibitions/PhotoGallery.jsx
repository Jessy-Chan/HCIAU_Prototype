import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const PhotoGallery = () => {
  const { content, locale, changeLocale } = useContent();
  const [selectedImage, setSelectedImage] = useState(null);
  const { photogallery } = content.exhibitions;

  return (
    <PageTemplate title={photogallery.title}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photogallery.images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="object-cover w-full h-full transition hover:scale-105"
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white"
            >
              {photogallery.closetext}
            </button>
            <img
              src={selectedImage.full}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default PhotoGallery;
