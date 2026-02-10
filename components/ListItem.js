import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNotes } from "@/context/NotesContext";

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

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fff",
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    noteContent: {
        flex: 1,
        marginRight: 12,
    },
    noteText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#333",
        lineHeight: 24,
    },
    deleteButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#ffebee",
    },
    deleteButtonPressed: {
        opacity: 0.7,
        backgroundColor: "#ffcdd2",
    },
});