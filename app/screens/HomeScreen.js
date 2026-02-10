import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useNotes } from "@/context/NotesContext";

const HomeScreen = () => {
    const router = useRouter();
    const { notes } = useNotes();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => router.push('/add-note')}
                style={({ pressed }) => [
                    styles.itemButton,
                    pressed && styles.itemButtonPressed
                ]}
            >
                <View style={styles.buttonContent}>
                    <Ionicons name="add-circle" size={40} color="#6200ee" />
                    <Text style={styles.title}>Agrega una note Elsa </Text>
                    <Ionicons name="arrow-forward" size={24} color="#6200ee" />
                </View>
            </Pressable>
            <Pressable
                onPress={() => router.push('/all-notes')}
                style={({ pressed }) => [
                    styles.itemButton,
                    pressed && styles.itemButtonPressed
                ]}
            >
                <View style={styles.buttonContent}>
                    <Ionicons name="document-text" size={40} color="#6200ee" />
                    <Text style={styles.title}>Todas las Notas</Text>
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{notes.length}</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={24} color="#6200ee" />
                </View>
            </Pressable>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 20,
        gap: 20,
    },
    itemButton: {
        width: Dimensions.get("window").width - 40,
        minHeight: 120,
        backgroundColor: "#fff",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    itemButtonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: 20,
    },
    title: {
        color: "#333",
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
    },
    badgeContainer: {
        backgroundColor: "#6200ee",
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        minWidth: 32,
        alignItems: "center",
    },
    badgeText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});
