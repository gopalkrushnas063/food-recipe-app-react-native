import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ColorScheme = {
  background: string;
  text: string;
  cardBackground: string;
  border: string;
  tabBarBackground: string;
  tabBarBorder: string;
  tabBarActiveTint: string;
  tabBarInactiveTint: string;
};

type ThemeType = {
  light: ColorScheme;
  dark: ColorScheme;
  isDark: boolean;
  colors: ColorScheme;
  statusBarStyle: 'light' | 'dark';
  toggleTheme: () => Promise<void>;
  setTheme: (darkMode: boolean) => Promise<void>;
};

const lightColors: ColorScheme = {
  background: '#ffffff',
  text: '#121212',
  cardBackground: '#f8f8f8',
  border: '#e0e0e0',
  tabBarBackground: '#ffffff',
  tabBarBorder: '#e0e0e0',
  tabBarActiveTint: '#007AFF',
  tabBarInactiveTint: '#8e8e93',
};

const darkColors: ColorScheme = {
  background: '#121212',
  text: '#ffffff',
  cardBackground: '#1e1e1e',
  border: '#383838',
  tabBarBackground: '#1e1e1e',
  tabBarBorder: '#2d2d2d',
  tabBarActiveTint: '#0A84FF',
  tabBarInactiveTint: '#98989D',
};

const ThemeContext = createContext<ThemeType>({
  light: lightColors,
  dark: darkColors,
  isDark: false,
  colors: lightColors,
  statusBarStyle: 'dark',
  toggleTheme: async () => {},
  setTheme: async () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('themePreference');
        if (savedTheme) {
          setIsDark(savedTheme === 'dark');
        } else {
          const systemTheme = Appearance.getColorScheme();
          setIsDark(systemTheme === 'dark');
        }
      } catch (error) {
        console.error('Failed to load theme preference', error);
        setIsDark(Appearance.getColorScheme() === 'dark');
      } finally {
        setIsLoaded(true);
      }
    };

    loadTheme();

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      AsyncStorage.getItem('themePreference').then((savedTheme: any) => {
        if (!savedTheme) {
          setIsDark(colorScheme === 'dark');
        }
      });
    });

    return () => subscription.remove();
  }, []);

  const setTheme = async (darkMode: boolean) => {
    setIsDark(darkMode);
    try {
      await AsyncStorage.setItem('themePreference', darkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Failed to save theme preference', error);
    }
  };

  const toggleTheme = async () => {
    const newMode = !isDark;
    await setTheme(newMode);
  };

  const colors = isDark ? darkColors : lightColors;
  const statusBarStyle = isDark ? 'light' : 'dark';

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <ThemeContext.Provider
      value={{
        light: lightColors,
        dark: darkColors,
        isDark,
        colors,
        statusBarStyle,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};