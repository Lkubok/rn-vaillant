import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { i18n } from "src/locale/i18n";
import { styles } from "src/ui/screenStyles/not-found.styles";
import { useAppTheme } from "src/ui/theme";

export const NotFoundPage = () => {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={{ color: colors.primary }}>
        {i18n.t("screens.notFound")}
      </Text>
    </View>
  );
};

export default NotFoundPage;
