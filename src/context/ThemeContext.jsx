import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const colors = {
    light: {
      background: '#ffffff',
      surfaceBackground: '#fefdfad0',
      primaryText: '#000',
      secondaryText: '#333',
      tertiaryText: '#666',
      navBackground: '#453737',
      navText: '#ffffff',
      navActiveText: '#000',
      navHoverText: '#fefdfad0',
      cardBackground: '#fefdfad0',
      cardBorder: 'rgba(255, 255, 255, 0.8)',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      buttonPrimary: '#141109',
      buttonHover: '#333',
      dividerColor: '#ddd',
      pageTitle: '#453737',
    },
    dark: {
      background: '#0f0f0f',
      surfaceBackground: '#1a1a1a',
      primaryText: '#ffffff',
      secondaryText: '#f0f0f0',
      tertiaryText: '#d0d0d0',
      navBackground: '#0f0f0f',
      navText: '#ffffff',
      navActiveText: '#fefdfad0',
      navHoverText: '#fefdfad0',
      cardBackground: '#1a1a1a',
      cardBorder: 'rgba(254, 253, 250, 0.3)',
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      buttonPrimary: '#fefdfad0',
      buttonHover: '#e8e7e4',
      dividerColor: '#333',
      pageTitle: '#fefdfad0',
    },
  };

  const theme = isDark ? colors.dark : colors.light;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
