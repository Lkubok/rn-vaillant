import { Link, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Surface, Text } from "react-native-paper";
import { i18n } from "src/locale/i18n";
import { User } from "src/types/user";

import { styles } from "./UserItem.styles";

type Props = {
  user: User;
};

export const UserItem = ({ user }: Props) => {
  //   const router = useRouter;
  return (
    <Link href={{ pathname: `/customer/${user._id}` }} asChild>
      <TouchableOpacity>
        <Surface style={styles.item}>
          <View style={styles.avatarContainer}>
            <Avatar.Image size={48} source={{ uri: user.avatar }} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text variant="titleMedium">
              {user.firstName} {user.lastName}
            </Text>
            <Text variant="labelSmall">{user.email}</Text>
            <Text variant="labelSmall">{user.subscriptionTier}</Text>
            {/* <Text variant="labelSmall">{user.address}</Text> */}
          </View>
          <View style={styles.statusContainer}></View>
          {/* <Text style={styles.orderId}>
            {i18n.t("orders.number")}: {item.number}
          </Text>
          <Text style={styles.textRow}>
            {i18n.t("orders.status")}: {item.status_name}
          </Text>
          <Text style={styles.textRow}>
            {i18n.t("orders.startDate")}: {item.addresses[0].date_time}
          </Text> */}
        </Surface>
      </TouchableOpacity>
    </Link>
  );
};
