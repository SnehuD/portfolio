import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Helper function to generate color shades
const generateColorShades = (hex) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const { r, g, b } = rgb;

  // Generate shades from 50 to 900
  const shades = {
    50: `${Math.min(255, r + 200)} ${Math.min(255, g + 200)} ${Math.min(255, b + 200)}`,
    100: `${Math.min(255, r + 150)} ${Math.min(255, g + 150)} ${Math.min(255, b + 150)}`,
    200: `${Math.min(255, r + 100)} ${Math.min(255, g + 100)} ${Math.min(255, b + 100)}`,
    300: `${Math.min(255, r + 50)} ${Math.min(255, g + 50)} ${Math.min(255, b + 50)}`,
    400: `${Math.min(255, r + 25)} ${Math.min(255, g + 25)} ${Math.min(255, b + 25)}`,
    500: `${r} ${g} ${b}`,
    600: `${Math.max(0, r - 25)} ${Math.max(0, g - 25)} ${Math.max(0, b - 25)}`,
    700: `${Math.max(0, r - 50)} ${Math.max(0, g - 50)} ${Math.max(0, b - 50)}`,
    800: `${Math.max(0, r - 75)} ${Math.max(0, g - 75)} ${Math.max(0, b - 75)}`,
    900: `${Math.max(0, r - 100)} ${Math.max(0, g - 100)} ${Math.max(0, b - 100)}`,
  };

  return shades;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const [accentColor, setAccentColor] = useState(() => {
    const savedColor = localStorage.getItem('accentColor');
    return savedColor || '#0ea5e9';
  });

  // Update theme class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Update accent color CSS variables
  useEffect(() => {
    const shades = generateColorShades(accentColor);
    if (shades) {
      const root = document.documentElement;
      Object.entries(shades).forEach(([shade, rgb]) => {
        root.style.setProperty(`--color-primary-${shade}`, rgb);
      });
    }
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
