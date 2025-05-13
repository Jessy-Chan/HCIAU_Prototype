import React, { createContext, useContext, useState } from 'react';
import i18n from '../data/content/i18n';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [locale, setLocale] = useState(i18n.defaultLocale);
  const content = i18n[locale] || i18n[i18n.defaultLocale];

  const changeLocale = (newLocale) => {
    if (i18n.supportedLocales.includes(newLocale)) {
      setLocale(newLocale);
    }
  };

  return (
    <ContentContext.Provider value={{ content, locale, changeLocale }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export default ContentContext;
