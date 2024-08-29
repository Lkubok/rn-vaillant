import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "src/auth/AuthContext";

export const SettingsScreen = () => {
  const { signOut } = useSession();
  return (
    <SafeAreaView>
      <Text>Settings screen</Text>
      <Button onPress={() => signOut()}>Settings logout logout</Button>
    </SafeAreaView>
  );
};

export default SettingsScreen;
