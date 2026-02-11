import { Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNotes } from "@/context/NotesContext";
import { styles } from "@/styles/ListItem.styles";

const ListItem = ({ note, id }) => {
    const { deleteNote } = useNotes();

    const handleDelete = () => {
        if (id) {
            deleteNote(id);
        }
    };

    return (
        <View style={styles.listItem}>
            <View style={styles.noteContent}>
                <Text style={styles.noteText}>{note}</Text>
            </View>
            {id && (
                <Pressable 
                    onPress={handleDelete}
                    style={({ pressed }) => [
                        styles.deleteButton,
                        pressed && styles.deleteButtonPressed
                    ]}
                >
                    <Ionicons name="trash-outline" size={20} color="#d32f2f" />
                </Pressable>
            )}
        </View>
    );
};

export default ListItem;