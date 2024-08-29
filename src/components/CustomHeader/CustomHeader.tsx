import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { ParamListBase, Route } from "@react-navigation/native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useAppTheme } from "src/ui/theme";

type CustomHeaderProps = {
  route: Route<string>;
  options: BottomTabNavigationOptions;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
};

export const CustomHeader = ({
  navigation,
  options,
  route,
}: CustomHeaderProps) => {
  const { colors } = useAppTheme();
  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      {/* {navigation.canGoBack() && (
        <Appbar.BackAction onPress={navigation.goBack} />
      )} */}
      <Appbar.Content
        color={colors.onPrimary}
        title={options.title}
        style={{ alignItems: "center" }}
      />
      {/* {route.name === ScreenNames.SignIn && (
        <Appbar.Action icon="logout" onPress={() => signOut()} />
      )} */}
    </Appbar.Header>
  );
};
