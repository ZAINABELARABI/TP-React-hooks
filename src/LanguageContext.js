import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  fr: {
    searchPlaceholder: 'Rechercher un produit...',
  },
  en: {
    searchPlaceholder: 'Search for a product...',
  },
  es: {
    searchPlaceholder: 'Buscar un producto...',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
