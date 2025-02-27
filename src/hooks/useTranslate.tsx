import { useContext } from "react";
import { LanguageContext } from "../contexts/TranslationContext";

export const useTranslate = () => {
  const translations = useContext(LanguageContext);
  const t = (key: string, defaultValue: string) => {
    const result = translations?.data?.find((item) => item.key === key)?.value;

    return result ? result : defaultValue;
  };

  const toggleLanguage = () => {
    translations?.toggleLanguage();
  };

  return { t, toggleLanguage };
};
