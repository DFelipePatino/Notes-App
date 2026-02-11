import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
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
