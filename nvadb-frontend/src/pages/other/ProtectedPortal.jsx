import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import FormEmbed from '../../components/FormEmbed';
const { content, locale, changeLocale } = useContent();

const ProtectedPortal = ({ title, system }) => {
  return (
    <PageTemplate title={title}>
      <div className="max-w-md mx-auto">
        <p className="text-gray-600 mb-6">
          Please log in to access the {title}.
        </p>
        
        <FormEmbed
          title="Login"
          fields={[
            { id: 'username', label: 'Username', type: 'text'},
            { id: 'password', label: 'Password', type: 'password'}
          ]}
          onSubmit={(data) => {
            window.location.href = system.url;
          }}
        />
      </div>
    </PageTemplate>
  );
};

export default ProtectedPortal;
