import React from 'react'
import LanguageProvider from './languageToggle/language'

const Context = ({children}) => {
  return (
    <LanguageProvider>{children}</LanguageProvider>
  )
}

export default Context