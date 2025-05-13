import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const MobileApps = () => {
  const { content, locale, changeLocale } = useContent();
  const { mobileApps } = content.services;
  const { mainApp } = mobileApps;

  return (
    <PageTemplate title="NVADB Mobile Apps">
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{mainApp.name}</h2>
            <p className="text-gray-600">{mainApp.description}</p>
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {mainApp.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg">
            {/* App screenshot would go here */}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {mainApp.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="bg-primary text-white px-6 py-3 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for {platform.name}
            </a>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default MobileApps;
