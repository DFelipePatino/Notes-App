import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNotes } from "@/context/NotesContext";

const Header = () => {
  const { notes } = useNotes();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Ionicons name="document-text" size={32} color="#fff" />
        <Text style={styles.headerTitle}>Your Sticky Notes</Text>
      </View>
      {notes.length > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{notes.length}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    minHeight: 100,
    backgroundColor: "#6200ee",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  badge: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 32,
    alignItems: "center",
  },
  badgeText: {
    color: "#6200ee",
    fontSize: 16,
    fontWeight: "bold",
  },
});
