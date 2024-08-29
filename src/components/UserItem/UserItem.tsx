import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Surface, Text } from "react-native-paper";
import { UserWithStatus } from "src/types/user";
import { useAppTheme } from "src/ui/theme";

import { styles } from "./UserItem.styles";

type Props = { user: UserWithStatus };

export const UserItem = ({ user }: Props) => {
  const { colors } = useAppTheme();
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
          </View>
          <View style={styles.statusContainer}>
            {user.status.isConnected ? (
              <Ionicons
                color={colors.primary}
                name="checkmark-circle-outline"
                size={32}
              />
            ) : (
              <Ionicons color={colors.error} name="close-outline" size={32} />
            )}
          </View>
        </Surface>
      </TouchableOpacity>
    </Link>
  );
};
