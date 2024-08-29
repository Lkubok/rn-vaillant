import { Ionicons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { CustomTabBar } from "src/components/CustomTabBar/CustomTabBar";
import { i18n } from "src/locale/i18n";
import { useAppTheme } from "src/ui/theme";

export default function TabLayout() {
  const { colors } = useAppTheme();

  useEffect(() => {
    const asyncEffect = async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync(colors.primary);
      }
    };
    asyncEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.onPrimary,
        tabBarInactiveTintColor: colors.secondary,
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: i18n.t("navigation.tabNames.customers"),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="checkmark-circle" size={32} color="green" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: i18n.t("navigation.tabNames.settings"),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="checkmark-circle" size={32} color="green" />
          ),
        }}
      />
    </Tabs>
  );
}
