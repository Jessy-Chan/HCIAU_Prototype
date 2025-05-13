import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const BoardDevelopment = () => {
  const { content, locale, changeLocale } = useContent();
  const { board } = content.about;

  return (
    <PageTemplate title="NVADB Board of Development">
      <div className="space-y-8">
        <p className="text-gray-600 leading-relaxed">{board.description}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {board.members.map((member) => (
            <div key={member.name} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-sm text-gray-500">{member.representation}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default BoardDevelopment;
