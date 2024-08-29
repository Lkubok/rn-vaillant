import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useSession } from "src/auth/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export const CustomersScreen = () => {
  const { signOut } = useSession();
  return (
    <SafeAreaView>
      <Text>Customers screen</Text>
      <Button onPress={() => signOut()}>logout</Button>
    </SafeAreaView>
  );
};

export default CustomersScreen;
