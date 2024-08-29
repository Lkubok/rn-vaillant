import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";
import { useSession } from "src/auth/AuthContext";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    // TODO: add loading indicator
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
  // return (
  //   <ThemeProvider value={DefaultTheme}>
  //     <Stack screenOptions={{ headerShown: false }}>
  //       {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
  //       {/* <Stack.Screen name="sign-in" options={{ headerShown: false }} /> */}
  //       <Stack.Screen name="customers" options={{ headerShown: false }} />
  //     </Stack>
  //   </ThemeProvider>
  // );
}
