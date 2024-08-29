import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    marginTop: 32,
  },
  logo: {
    height: 80,
    width: 300,
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
  textInput: {
    marginVertical: 12,
  },
  button: {
    marginVertical: 12,
    marginTop: 32,
    borderRadius: 6,
    marginBottom: Platform.OS === "android" ? 96 : 48,
  },
});
