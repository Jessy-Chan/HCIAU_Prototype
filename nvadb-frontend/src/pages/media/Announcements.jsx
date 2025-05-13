import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Announcements = () => {
  const { content, locale, changeLocale } = useContent();
  const { announcements } = content.media;

  return (
    <PageTemplate title={announcements.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">{announcements.currenttitle}</h2>
          {announcements.current.map((announcement) => (
            <Card key={announcement.id} className="mb-4">
              <span className="inline-block px-2 py-1 text-sm bg-primary/10 text-primary rounded mb-2">
                {announcement.type}
              </span>
              <h3 className="text-lg font-semibold">{announcement.title}</h3>
              <p className="text-gray-500">{announcement.date}</p>
              <p className="text-gray-600 mt-2">{announcement.content}</p>
            </Card>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{announcements.archivetitle}</h2>
          <div className="space-y-4">
            {announcements.archive.map((announcement) => (
              <Card key={announcement.id} className="hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{announcement.title}</h3>
                    <p className="text-sm text-gray-500">{announcement.date}</p>
                  </div>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {announcement.type}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Announcements;
