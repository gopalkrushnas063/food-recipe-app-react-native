// components/ThemeToggle.tsx
import { Switch, View, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { ThemedText } from './ThemedText';

export const ThemeToggle = () => {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <ThemedText style={styles.text}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </ThemedText>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
  },
});