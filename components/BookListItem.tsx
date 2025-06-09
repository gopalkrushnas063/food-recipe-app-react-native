import { BookItem } from "@/models/BookItem";
import { styles } from "@/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Text, View, Pressable } from "react-native";

export const BookListItem = ({ item }: { item: BookItem }) => (
  <Link href={`/(tabs)/home/${item.id}`} asChild>
    <Pressable>
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
    </Pressable>
  </Link>
);