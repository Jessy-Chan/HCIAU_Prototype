import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Card from '../../components/Card';
import { useContent } from '../../contexts/ContentContext';

const YoungArtEntrepreneurs = () => {
  const { content, locale, changeLocale } = useContent();
  const { yae } = content.media;

  return (
    <PageTemplate title={yae.title}>
      <div className="space-y-8">
        <p className="text-lg text-gray-600">{yae.description}</p>

        <section>
          <h2 className="text-xl font-semibold mb-4">Program Participants</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {yae.participants?.map((participant) => (
              <Card key={participant.id} className="flex space-x-4">
                <img
                  src={participant.image}
                  alt={participant.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{participant.name}</h3>
                  <p className="text-gray-600">{participant.project}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Program Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {yae.gallery?.map((image) => (
              <div key={image.id} className="aspect-square">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
          <div className="space-y-4">
            {yae.testimonials?.map((testimonial) => (
              <Card key={testimonial.id}>
                <blockquote className="italic text-gray-600">
                  "{testimonial.quote}"
                </blockquote>
                <p className="mt-2 font-medium">{testimonial.author}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default YoungArtEntrepreneurs;
