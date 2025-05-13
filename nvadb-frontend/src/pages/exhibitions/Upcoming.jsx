import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Upcoming = () => {
  const { content } = useContent();
  const { upcoming } = content.exhibitions;

  return (
    <PageTemplate title={upcoming.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {upcoming.array.map((exhibition) => (
          <Card key={exhibition.id}>
            <h2 className="text-xl font-semibold">{exhibition.title}</h2>
            <p className="text-primary mt-1">
              <span className="font-medium">{upcoming.datetext}: </span>
              {exhibition.daterange}
            </p>
            <p className="text-gray-600 mt-2">{exhibition.description}</p>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Upcoming;
