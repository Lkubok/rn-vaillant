import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Surface } from "react-native-paper";
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
          <Text>aa</Text>
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
