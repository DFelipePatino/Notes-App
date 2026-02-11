import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
