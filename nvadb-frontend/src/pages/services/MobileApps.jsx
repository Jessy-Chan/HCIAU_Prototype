import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Mobileapps = () => {
  const { content, locale, changeLocale } = useContent();
  const { mobileapps } = content.services;
  const { mainapp } = mobileapps;

  return (
    <PageTemplate title={mobileapps.title}>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{mainapp.name}</h2>
            <p className="text-gray-600">{mainapp.description}</p>
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold">{mobileapps.keyfeaturestext}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {mainapp.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg">
            {/* app screenshot would go here */}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {mainapp.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="bg-primary text-white px-6 py-3 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mobileapps.downloadtext} {platform.name}
            </a>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Mobileapps;
