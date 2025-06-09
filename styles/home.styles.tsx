import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // or your app background
  },

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
