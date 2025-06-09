import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <ThemeAwareStatusBar />
        <StackWithTheme />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const StackWithTheme = () => {
  const { colors } = useTheme();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // These will apply to all screens that show headers
        headerStyle: {
          backgroundColor: colors.cardBackground,
        },
        headerTitleStyle: {
          color: colors.text,
        },
        headerTintColor: colors.text, // Back button and other icons
      }}
    />
  );
};

const ThemeAwareStatusBar = () => {
  const { statusBarStyle } = useTheme();
  return <StatusBar style={statusBarStyle} />;
};