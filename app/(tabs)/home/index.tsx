import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, TextInput, View, Text } from "react-native";
import { BookListItem } from "../../../components/BookListItem";
import { useBookSearch } from "../../../hooks/useBookSearch";
import { styles } from "@/styles/home.styles";

const HomeScreen = () => {
  const { searchQuery, filteredBooks, handleSearch } = useBookSearch();

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
          renderItem={({ item }) => <BookListItem item={item} />}
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

export default HomeScreen;