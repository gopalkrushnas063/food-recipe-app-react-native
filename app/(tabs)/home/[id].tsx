import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { mockBooks } from "@/constants/mockData";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function BookDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { colors } = useTheme();

  const book = mockBooks.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Book not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {book.coverImage ? (
        <Image
          source={{ uri: book.coverImage }}
          style={styles.coverImage}
          accessibilityLabel={`Cover of ${book.title}`}
          resizeMode="contain"
        />
      ) : (
        <ThemedView style={[styles.coverImage, styles.placeholderImage]}>
          <ThemedText>No Image</ThemedText>
        </ThemedView>
      )}

      <ThemedText style={styles.title}>{book.title}</ThemedText>
      <ThemedText style={styles.author}>By {book.author}</ThemedText>

      <ThemedView style={[styles.detailsContainer]}>
        <ThemedText style={styles.detailText}>Book ID: {book.id}</ThemedText>
        <ThemedText style={styles.detailText}>Published: 2023</ThemedText>
        <ThemedText style={styles.detailText}>Pages: 320</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
  },
  detailsContainer: {
    width: "100%",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#202020",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
