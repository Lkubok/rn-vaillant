import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { CustomTabBar } from "src/components/CustomTabBar/CustomTabBar";
import { TabBarIcon } from "src/components/TabBarIcon/TabBarIcon";
import { i18n } from "src/locale/i18n";
import { useAppTheme } from "src/ui/theme";

export default function TabLayout() {
  const { colors } = useAppTheme();

  useEffect(() => {
    const asyncEffect = async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync(colors.secondaryBackground);
      }
    };
    asyncEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: i18n.t("navigation.tabs.home"),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: i18n.t("navigation.tabs.search"),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
