'use client';

import { createContext, useContext } from 'react';

type LanguageContextType = {
  lang: 'bn' | 'en';
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'bn',
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ lang: 'bn' }}>
      {children}
    </LanguageContext.Provider>
  );
}