import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FormEmbed from '../../components/FormEmbed';
import { useContent } from '../../contexts/ContentContext';

const ArtisticDonations = () => {
  const { content, locale, changeLocale } = useContent();
  const { donations } = content.about;
  
  const donationFormFields = [
    { id: 'artworkType', label: 'Type of Artwork', type: 'select', options: donations.artworkTypes, required: true },
    { id: 'title', label: 'Artwork Title', type: 'text', required: true },
    { id: 'artist', label: 'Artist Name', type: 'text', required: true },
    { id: 'description', label: 'Description', type: 'textarea', required: true },
    { id: 'images', label: 'Artwork Images', type: 'file', multiple: true, required: true },
    { id: 'documents', label: 'Supporting Documents', type: 'file', multiple: true }
  ];

  return (
    <PageTemplate title="Artistic Donations & Sponsorships">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Donation Guidelines</h2>
          <div className="prose max-w-none">
            {donations.guidelines.map((guideline, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{guideline.title}</h3>
                <p className="text-gray-600">{guideline.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Donate Artwork</h2>
          <FormEmbed
            title="Artwork Donation Form"
            fields={donationFormFields}
            onSubmit={(data) => console.log('Donation submitted:', data)}
          />
        </section>
      </div>
    </PageTemplate>
  );
};

export default ArtisticDonations;
