import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useSession } from "src/auth/AuthContext";
import { i18n } from "src/locale/i18n";
import { useAppTheme } from "src/ui/theme";

export const SettingsScreen = () => {
  const { signOut } = useSession();
  const { colors } = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Ionicons
          name="hammer-outline"
          size={64}
          color={colors.primary}
          style={{ marginBottom: 64 }}
        />
      </View>
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
