import { Ionicons } from "@expo/vector-icons";
import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Surface, Text } from "react-native-paper";
import { CustomHeader } from "src/components/CustomHeader/CustomHeader";
import { useCustomers } from "src/contexts/CustomersData";
import { i18n } from "src/locale/i18n";
import { styles } from "src/ui/screenStyles/customer-details.styles";
import { useAppTheme } from "src/ui/theme";

export const CustomerDetailsScreen = () => {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const { customers } = useCustomers();
  const customer = customers.find((customer) => customer.generatedId === id);
  const { colors } = useAppTheme();
  console.log("ROUTER", customer);
  const user = customer;
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

      <ScrollView>
        {user && (
          <Surface style={styles.container}>
            <View style={styles.header}>
              <View style={styles.avatarContainer}>
                <Avatar.Image size={96} source={{ uri: user.avatar }} />
              </View>
            </View>
            <View style={styles.user}>
              <Text variant="headlineMedium">
                {user.firstName} {user.lastName}
              </Text>
              {user.status.isConnected ? (
                <Ionicons
                  color={colors.primary}
                  name="checkmark-circle-outline"
                  size={64}
                />
              ) : (
                <Ionicons color={colors.error} name="close-outline" size={32} />
              )}
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText} variant="titleMedium">
                {i18n.t("user.email")}: {user.email}
              </Text>
              <Text style={styles.infoText} variant="titleMedium">
                {i18n.t("user.tier")}: {user.subscriptionTier}
              </Text>
              <Text style={styles.infoText} variant="titleMedium">
                {i18n.t("user.address")}: {user.address.country}{" "}
                {user.address.zipCode}
              </Text>
              <Text style={styles.infoText} variant="titleMedium">
                {user.address.city}
                {user.address.street}
              </Text>
              <Text style={styles.infoText} variant="titleMedium">
                {i18n.t("user.birthday")}: {user.birthday}
              </Text>
              <Text style={styles.infoText} variant="titleMedium">
                {i18n.t("user.sex")}: {user.sex}
              </Text>
            </View>
          </Surface>
        )}
      </ScrollView>
    </View>
  );
};

export default CustomerDetailsScreen;
