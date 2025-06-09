import { BookItem } from '@/models/BookItem';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { useTheme } from '@/context/ThemeContext';

export const BookListItem = ({ item }: { item: BookItem }) => {
  const { colors } = useTheme();

  return (
    <Link href={`/(tabs)/home/${item.id}`} asChild>
      <Pressable>
        {({ pressed }) => (
          <ThemedView 
            style={[
              styles.bookContainer, 
              { 
                backgroundColor: colors.cardBackground,
                borderColor: colors.border,
                opacity: pressed ? 0.8 : 1 
              }
            ]}
          >
            <View style={styles.bookInfoContainer}>
              <Image
                source={{ uri: item.coverImage }}
                style={styles.bookCover}
                accessibilityLabel={`Cover of ${item.title}`}
              />
              <View style={styles.bookTextContainer}>
                <ThemedText style={styles.bookTitle}>{item.title}</ThemedText>
                <ThemedText style={styles.bookAuthor}>{item.author}</ThemedText>
              </View>
            </View>
            <Ionicons 
              name="arrow-forward-circle-sharp" 
              size={24} 
              color={colors.text} 
            />
          </ThemedView>
        )}
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bookCover: {
    width: 70,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  bookTextContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
  },
});