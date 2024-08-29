import "react-native-reanimated";

import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SessionProvider } from "src/auth/AuthContext";
import { startServer } from "src/server";
import { CombinedDarkTheme, CombinedLightTheme } from "src/ui/theme";

export default function Root() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  startServer();

  return (
    <SafeAreaProvider>
      <PaperProvider theme={isDark ? CombinedDarkTheme : CombinedLightTheme}>
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
