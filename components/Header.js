import { Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNotes } from "@/context/NotesContext";
import { styles } from "@/styles/Header.styles";

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
