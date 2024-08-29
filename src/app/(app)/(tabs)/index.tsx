import React, { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { UserItem } from "src/components/UserItem/UserItem";
import { useCustomers } from "src/contexts/CustomersData";
import { styles } from "src/ui/screenStyles/customers.styles";

export const CustomersScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { customers, fetchCustomers } = useCustomers();

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCustomers({ isRefresh: true });
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={customers}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ paddingVertical: 12 }}
        onEndReached={() => fetchCustomers({})}
        onEndReachedThreshold={4}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <UserItem key={`${item._id}_${item.email}`} user={item} />
        )}
        keyExtractor={(item) => `${item._id}_${item.email}`}
      />
    </View>
  );
};

export default CustomersScreen;
