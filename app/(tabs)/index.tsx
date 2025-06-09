import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, TextInput, View } from "react-native";
import { BookItem } from "../../models/BookItem";

const mockBooks: BookItem[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    coverImage: "https://picsum.photos/200/302",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "https://picsum.photos/200/303",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage: "https://picsum.photos/200/304",
  },
];

const BookListItem = ({ item }: { item: BookItem }) => (
  <View style={styles.bookContainer}>
    <View style={styles.bookInfoContainer}>
      <Image
        source={{ uri: item.coverImage }}
        style={styles.bookCover}
        accessibilityLabel={`Cover of ${item.title}`}
      />
      <View style={styles.bookTextContainer}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
      </View>
    </View>
    <Ionicons name="arrow-forward-circle-sharp" size={24} color="black" />
  </View>
);

const BookSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BookItem[]>(mockBooks);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = mockBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(mockBooks);
    }
  };

  const renderBookItem: ListRenderItem<BookItem> = ({ item }) => (
    <BookListItem item={item} />
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchHeader}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search books by name or author"
          value={searchQuery}
          onChangeText={handleSearch}
          autoFocus={true}
          clearButtonMode="while-editing"
        />
        <Ionicons name="search" size={24} color="black" />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={filteredBooks}
          renderItem={renderBookItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No books found</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default BookSearchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchHeader: {
    borderColor: "#ddd",
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  bookContainer: {
    borderColor: "#ddd",
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bookInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "600",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: "#666",
  },
  separator: {
    height: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});