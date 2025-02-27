import { createContext, useState, ReactNode, useEffect } from "react";

interface LanguageContextType {
  language: string;
  data?: TranslationItem[];
  toggleLanguage: () => void;
}
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export interface TranslationItem {
  key: string;
  value: string;
}

interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("es");
  const [data, setData] = useState<TranslationItem[] | undefined>();

  useEffect(() => {
    fetch(`/translations/${language}.json`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error("Error cargando JSON:", error));
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};
