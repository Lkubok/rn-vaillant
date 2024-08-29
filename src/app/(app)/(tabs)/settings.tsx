import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useSession } from "src/auth/AuthContext";
import { i18n } from "src/locale/i18n";

export const SettingsScreen = () => {
  const { signOut } = useSession();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          borderRadius: 8,
          height: 50,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="contained"
        onPress={() => signOut()}
      >
        {i18n.t("auth.logOut")}
      </Button>
    </View>
  );
};

export default SettingsScreen;
