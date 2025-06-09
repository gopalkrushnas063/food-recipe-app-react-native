// components/ThemedText.tsx
import { Text, TextProps } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

export const ThemedText = ({ style, ...props }: TextProps) => {
  const { colors } = useTheme();
  return <Text style={[{ color: colors.text }, style]} {...props} />;
};