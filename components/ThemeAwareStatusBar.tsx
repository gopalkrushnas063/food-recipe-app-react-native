// components/ThemeAwareStatusBar.tsx
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@/context/ThemeContext';

export const ThemeAwareStatusBar = () => {
  const { statusBarStyle, colors } = useTheme();
  return (
    <StatusBar 
      style={statusBarStyle} 
      backgroundColor={colors.background} 
    />
  );
};