'use client'
import React, { useEffect, useState } from 'react'
import i18n from 'utils/i18n'

const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [ready, setReady] = useState(false)

useEffect(() => {
    const lang  = localStorage.getItem('lang') || 'en';
        i18n.changeLanguage(lang).then(() => setReady(true));
},[])
 if (!ready) return null;

  return (
    <>{children}</>
  )
}

export default LanguageWrapper