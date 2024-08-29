import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 24,
    flexDirection: "row",
  },
  avatarContainer: {
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 6,
    paddingLeft: 12,
  },
  statusContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
