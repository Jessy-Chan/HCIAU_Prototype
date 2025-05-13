import React, { useState, useEffect } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const PhotoGallery = () => {
  const { content } = useContent();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { photogallery } = content.exhibitions;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  const handleNext = () => {
    if (!selectedImage || currentImageIndex >= selectedImage.full.length - 1) return;
    setCurrentImageIndex(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (!selectedImage || currentImageIndex <= 0) return;
    setCurrentImageIndex(prev => prev - 1);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(0);
  };

  return (
    <PageTemplate title={photogallery.title}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photogallery.images.map((image) => (
            <button
              key={image.id}
              onClick={() => handleImageSelect(image)}
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
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedImage(null);
              }
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              {photogallery.closetext}
            </button>
            
            <div className="relative max-w-[90vw] max-h-[90vh]">
              {selectedImage.full.length > 1 && currentImageIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  {photogallery.previoustext}
                </button>
              )}
              
              <img
                src={selectedImage.full[currentImageIndex]}
                alt={selectedImage.title}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />

              {selectedImage.full.length > 1 && currentImageIndex < selectedImage.full.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  {photogallery.nexttext}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default PhotoGallery;
