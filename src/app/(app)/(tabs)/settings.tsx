import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useSession } from "src/auth/AuthContext";
import { i18n } from "src/locale/i18n";
import { styles } from "src/ui/screenStyles/settings.styles";
import { useAppTheme } from "src/ui/theme";

export const SettingsScreen = () => {
  const { signOut } = useSession();
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <View>
        <Ionicons
          name="hammer-outline"
          size={64}
          color={colors.primary}
          style={styles.logo}
        />
      </View>
      <Button style={styles.button} mode="contained" onPress={() => signOut()}>
        {i18n.t("auth.logOut")}
      </Button>
    </View>
  );
};

export default SettingsScreen;
