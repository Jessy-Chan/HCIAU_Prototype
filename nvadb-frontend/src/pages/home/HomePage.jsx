import React from 'react';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const HomePage = () => {
  const { content, locale, changeLocale } = useContent();
  const { hero, aboutus, featured, quickLinks, announcements } = content.home;

  return (
    <div className="space-y-6">
      <section className="hero-section">
        <h1>{hero.title}</h1>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title={aboutus.title}>
          <img 
            src="/images/gallery/photos/NUSA_1.jpg" 
            alt={content.metadata.siteName}
            className="h-auto w-auto mb-4"
          />
          <div className="text-justify">
            {aboutus.content}
          </div>
        </Card>
        <Card title={featured.exhibitionstitle}>
          <div className="space-y-4">
            {featured.exhibitions.map((exhibition) => (
              <div key={exhibition.id} className="flex gap-4">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{exhibition.title}</h3>
                  <p className="text-sm text-gray-600">{exhibition.daterange}</p>
                  <p className="text-sm text-gray-500 mt-1">{exhibition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>        
        <Card title={featured.eventstitle}>
          <div className="divide-y">
            {featured.events.map((event) => (
              <div key={event.id} className="py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{event.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
