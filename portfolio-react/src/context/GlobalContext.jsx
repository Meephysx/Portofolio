import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translation'; // Pastikan file data ini sudah ada

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Default bahasa Inggris ('en')
  const [language, setLanguage] = useState('en'); 
  const t = translations[language]; // Ambil teks berdasarkan bahasa yang aktif

  // Fungsi untuk tukar bahasa
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <GlobalContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);