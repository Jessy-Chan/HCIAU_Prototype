import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Publications = () => {
  const { content, locale, changeLocale } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const { publications } = content.research;

  const filteredPublications = publications.items.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTemplate title="Research Publications">
      <div className="space-y-6">
        <input
          type="search"
          placeholder="Search publications..."
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid gap-6">
          {filteredPublications.map((pub) => (
            <Card key={pub.id}>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{pub.title}</h2>
                  <p className="text-gray-600">By {pub.author}</p>
                  <p className="text-sm text-gray-500">{pub.date}</p>
                  <p className="mt-2">{pub.abstract}</p>
                </div>
                <a
                  href={pub.downloadUrl}
                  className="bg-primary text-white px-4 py-2 rounded-lg h-fit"
                >
                  Download PDF
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Publications;
