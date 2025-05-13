import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Archive = () => {
  const { content, locale, changeLocale } = useContent();
  const { archive } = content.exhibitions;
  const [selectedYear, setSelectedYear] = useState(archive.years[0]);

  return (
    <PageTemplate title="Exhibition Archive">
      <div className="space-y-6">
        <div className="flex gap-2">
          {archive.years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg ${
                selectedYear === year 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {archive.exhibitions[selectedYear]?.map((exhibition) => (
            <Card key={exhibition.id}>
              <h2 className="font-semibold">{exhibition.title}</h2>
              <p className="text-gray-600">{exhibition.dates}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Archive;
