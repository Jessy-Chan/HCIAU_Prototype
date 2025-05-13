import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useContent } from '../../contexts/ContentContext';

const MissionVision = () => {
  const { content, locale, changeLocale } = useContent();
  const { mission_vision, mission, vision } = content.about;

  return (
    <PageTemplate title={mission_vision.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">{vision.title}</h2>
          <p className="text-gray-600">{vision.content}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{mission.title}</h2>
          <p className="text-gray-600">{mission.content}</p>
          {mission.objectives && (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">{mission.objectivestitle}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {mission.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-600">{objective}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      </div>
    </PageTemplate>
  );
};

export default MissionVision;
