import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const PressReleases = () => {
  const { content, locale, changeLocale } = useContent();
  const { pressreleases } = content.media;

  return (
    <PageTemplate title="Press Releases">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Latest Press Releases</h2>
          {pressreleases.latest.map((release) => (
            <Card key={release.id} className="mb-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{release.title}</h3>
                  <p className="text-gray-500">{release.date}</p>
                </div>
                <p className="text-gray-600">{release.summary}</p>
                <div className="text-sm text-gray-500">
                  <p>Contact: {release.contactPerson}</p>
                  <p>Email: {release.contactEmail}</p>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Archive</h2>
          {Object.entries(pressreleases.archive).map(([year, releases]) => (
            <div key={year} className="mb-6">
              <h3 className="font-medium mb-2">{year}</h3>
              <div className="space-y-2">
                {releases.map((release) => (
                  <Card key={release.id}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{release.title}</h4>
                        <p className="text-sm text-gray-500">{release.date}</p>
                      </div>
                      <button className="text-primary">Read More</button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </PageTemplate>
  );
};

export default PressReleases;
