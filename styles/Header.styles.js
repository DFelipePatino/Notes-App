import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
