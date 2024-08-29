import { router } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "src/auth/AuthContext";
import { i18n } from "src/locale/i18n";
import { styles } from "src/ui/screenStyles.ts/sign-in.styles";

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
          {i18n.t("common.appName")}
        </Text>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          mode="outlined"
          label={i18n.t("auth.username")}
          value={login}
          onChangeText={(text) => setLogin(text)}
          style={{ marginVertical: 12 }}
        />
        <TextInput
          mode="outlined"
          label={i18n.t("auth.password")}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
        />
        <Button
          style={styles.button}
          mode="elevated"
          buttonColor={colors.primary}
          textColor={colors.onPrimary}
          onPress={onSignInHandler}
        >
          {i18n.t("auth.logIn")}
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
