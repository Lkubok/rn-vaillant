import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "src/auth/AuthContext";

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
