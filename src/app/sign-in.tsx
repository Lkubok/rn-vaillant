import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
// import * as WebBrowser from "expo-web-browser";
import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "src/auth/AuthContext";

export const SignInScreen = () => {
  const { signIn } = useSession();
  const { colors } = useTheme();

  const onSignInHandler = () => {
    signIn();
    router.replace("/");
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-around" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons name="checkmark-circle" size={32} color="green" />
        </View>

        <View
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <Text
            variant="titleLarge"
            style={[{ alignSelf: "flex-start", marginBottom: 32 }]}
          >
            welcome
          </Text>

          <Button onPress={onSignInHandler}>aaa</Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignInScreen;
