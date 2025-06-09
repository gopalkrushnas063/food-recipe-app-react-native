import { mockBooks } from "@/constants/mockData";
import { BookItem } from "@/models/BookItem";
import { useState } from "react";


export const useBookSearch = () => {
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

  return { searchQuery, filteredBooks, handleSearch };
};