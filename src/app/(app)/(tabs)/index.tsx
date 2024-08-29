import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { ConnectivityApiService } from "src/api/connectivityApi.service";
import { CustomersApiService } from "src/api/customersApi.service";
import { UserItem } from "src/components/UserItem/UserItem";
import { UserWithStatus } from "src/types/user";
import { styles } from "src/ui/screenStyles/customers.styles";

export const CustomersScreen = () => {
  const [customers, setCustomers] = useState<UserWithStatus[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const asyncConnectivityFetch = async ({
    customerIds,
  }: {
    customerIds: number[];
  }) => {
    const { data } = await ConnectivityApiService.getConnectivity({
      customerIds,
    });
    return data;
  };

  const asyncCustomersFetch = async ({
    isRefresh,
  }: {
    isRefresh?: boolean;
  }) => {
    const {
      data: { customers },
    } = await CustomersApiService.getCustomers();
    const mappedIds = customers.map((customer) => customer._id);

    const { customerConnectivity } = await asyncConnectivityFetch({
      customerIds: mappedIds,
    });

    const customersWithStatus = customers.map((customer) => {
      const status = customerConnectivity.find((s) => s.id === customer._id)!;
      return { ...customer, status };
    });
    if (isRefresh) {
      setCustomers([]);
    }
    setCustomers((state) => [...state, ...customersWithStatus]);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await asyncCustomersFetch({ isRefresh: true });
    setRefreshing(false);
  };

  useEffect(() => {
    asyncCustomersFetch({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={customers}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ paddingVertical: 12 }}
        onEndReached={() => asyncCustomersFetch({})}
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
