import "react-native-reanimated";

import { Slot } from "expo-router";
import { MD3LightTheme, PaperProvider, useTheme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SessionProvider } from "src/auth/AuthContext";

export default function Root() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
