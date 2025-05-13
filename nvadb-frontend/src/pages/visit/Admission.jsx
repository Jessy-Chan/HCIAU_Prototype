import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const Admission = () => {
  const { content } = useContent();
  const { admission } = content.visit;

  return (
    <PageTemplate title={admission.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">{admission.hours.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="font-medium mb-2">{admission.hours.regulartitle}</h3>
              <p>{admission.hours.weekdaytext}: {admission.hours.weekday}</p>
              <p>{admission.hours.weekendtext}: {admission.hours.weekend}</p>
            </Card>
            <Card>
              <h3 className="font-medium mb-2">{admission.hours.closures}</h3>
              <ul className="list-disc pl-5">
                {admission.hours.closed.map(closedDay => (
                  <li key={closedDay.day || closedDay}>{closedDay.day || closedDay}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{admission.fees.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="font-medium mb-2">{admission.fees.regular.title}</h3>
              <ul className="space-y-2">
                {Object.entries(admission.fees.regular.rates).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize">{value.type || key}</span>
                    <span>{value.price || value}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-medium mb-2">{admission.fees.special.title}</h3>
              <ul className="space-y-2">
                {Object.entries(admission.fees.special).map(([key, value]) => {
                  if (key === 'title') return null;
                  return (
                    <li key={key} className="flex justify-between">
                      <span className="capitalize">{value.type || key}</span>
                      <span>{value.price || value}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Admission;
