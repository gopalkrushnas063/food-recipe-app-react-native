import { mockBooks } from "@/constants/mockData";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function BookDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const book = mockBooks.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Book not found</Text>
      </View>
    );
  }

  console.log("URL check:", {
    uri: book.coverImage,
    isString: typeof book.coverImage === "string",
    startsWithHttp: book.coverImage.startsWith("http"),
  });

  return (
    <View style={styles.container}>
      {book.coverImage ? (
        <Image
          source={{ uri: book.coverImage }}
          style={styles.coverImage}
          accessibilityLabel={`Cover of ${book.title}`}
          resizeMode="contain"
        />
      ) : (
        <View style={[styles.coverImage, styles.placeholderImage]}>
          <Text>No Image</Text>
        </View>
      )}
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>By {book.author}</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Book ID: {book.id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderImage: {
    backgroundColor: "#f0f0f0",
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
    color: "#666",
    marginBottom: 20,
  },
  detailsContainer: {
    width: "100%",
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
