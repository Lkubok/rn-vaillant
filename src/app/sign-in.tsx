import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "src/auth/AuthContext";

export const SignInScreen = () => {
  const { signIn } = useSession();
  const { colors } = useTheme();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSignInHandler = () => {
    signIn();
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
        <Text
          variant="headlineLarge"
          style={[styles.appName, { color: colors.primary }]}
        >
          Installer
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", padding: 12 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          mode="outlined"
          label={"labeller"}
          value={login}
          onChangeText={(text) => setLogin(text)}
          style={{ marginVertical: 12 }}
        />
        <TextInput
          mode="outlined"
          label={"labeller"}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ marginVertical: 12 }}
        />
        <Button
          style={{
            marginVertical: 12,
            marginTop: 32,
            borderRadius: 0,
            marginBottom: Platform.OS === "android" ? 96 : 48,
          }}
          mode="elevated"
          buttonColor={colors.primary}
          textColor={colors.onPrimary}
          onPress={onSignInHandler}
        >
          Log in
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
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
});
