'use client'
import React, { useEffect } from 'react';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
  }, []);

  return <>{children}</>;
};

export default ThemeWrapper;