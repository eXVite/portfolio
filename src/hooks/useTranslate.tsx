import { useCallback, useContext } from "react";
import { LanguageContext } from "../contexts/TranslationContext";

export const useTranslate = () => {
  const translations = useContext(LanguageContext);
  const t = useCallback(
    (key: string, defaultValue: string) => {
      const result = translations?.data?.find(
        (item) => item.key === key
      )?.value;

      return result ? result : defaultValue;
    },
    [translations?.data]
  );

  const toggleLanguage = useCallback(() => {
    translations?.toggleLanguage();
  }, [translations]);

  return { t, toggleLanguage };
};
