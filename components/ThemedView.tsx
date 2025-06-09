// components/ThemedView.tsx
import { View, ViewProps } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

export const ThemedView = ({ style, ...props }: ViewProps) => {
  const { colors } = useTheme();
  return <View style={[{ backgroundColor: colors.background }, style]} {...props} />;
};