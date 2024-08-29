import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { CustomHeader } from "src/components/CustomHeader/CustomHeader";
import { i18n } from "src/locale/i18n";

export const CustomerDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          title: i18n.t("navigation.screenNames.customerDetails"),
          header: ({ navigation, options, route }) => (
            <CustomHeader
              navigation={navigation}
              route={route}
              options={options}
            />
          ),
        }}
      />

      <Text>[id]</Text>
    </View>
  );
};

export default CustomerDetailsScreen;
