import { Pressable, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useNotes } from "@/context/NotesContext";
import { styles } from "@/styles/HomeScreen.styles";

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
                    <Text style={styles.title}>Add Note </Text>
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
                    <Text style={styles.title}>All Notes</Text>
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
