import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Archive = () => {
  const { content, locale, changeLocale } = useContent();
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const { archive } = content.research;

  const filteredItems = archive.items.filter(item => 
    (selectedYear === 'all' || item.year === selectedYear) &&
    (selectedType === 'all' || item.type === selectedType)
  );

  return (
    <PageTemplate title={archive.title}>
      <div className="space-y-6">
        <div className="flex gap-4">
          <select 
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border rounded-lg p-2 bg-gray-200"
          >
            <option value="all">{archive.yeartext}</option>
            {archive.years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select 
            onChange={(e) => setSelectedType(e.target.value)}
            className="border rounded-lg p-2 bg-gray-200"
          >
            <option value="all">{archive.typetext}</option>
            {archive.types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.type} • {item.year}
              </p>
              <a 
                href={item.url}
                className="text-primary hover:underline mt-2 inline-block"
              >
                {archive.viewtext} →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Archive;
