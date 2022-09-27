import React, { createContext, useState } from "react";

export const LanguageContext = React.createContext()

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(localStorage.getItem('language'))
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;