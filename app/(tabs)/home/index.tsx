import { BookListItem } from "@/components/BookListItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useBookSearch } from "@/hooks/useBookSearch";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { searchQuery, filteredBooks, handleSearch } = useBookSearch();
  const { colors } = useTheme();

  return (
   
      <ThemedView style={styles.mainContainer}>
        <ThemedView
          style={[
            styles.searchHeader,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
            },
          ]}
        >
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search books by name or author"
            placeholderTextColor={colors.text}
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus={true}
            clearButtonMode="while-editing"
          />
          <Ionicons name="search" size={24} color={colors.text} />
        </ThemedView>

        <ThemedView style={styles.listContainer}>
          <FlatList
            data={filteredBooks}
            renderItem={({ item }) => <BookListItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <ThemedView style={styles.separator}>
                <View style={styles.separator} />
              </ThemedView>
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <ThemedView style={styles.emptyContainer}>
                <ThemedText style={styles.emptyText}>No books found</ThemedText>
              </ThemedView>
            }
          />
        </ThemedView>
      </ThemedView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  searchHeader: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  separator: {
    height: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
  },
});

export default HomeScreen;
