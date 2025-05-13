import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const History = () => {
  const { content, locale, changeLocale } = useContent();
  const { history } = content.about;

  return (
    <PageTemplate title={history.title}>
      <div className="prose max-w-none">
        <p className="text-gray-600">{history.content}</p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">{history.title}</h2>
          {history.timeline.map((event) => (
            <div key={event.year} className="mb-4 flex">
              <span className="font-bold w-24 text-red-600 ">{event.year}</span>
              <span>{event.event}</span>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default History;
