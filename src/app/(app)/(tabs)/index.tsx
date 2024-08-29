import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { ConnectivityApiService } from "src/api/connectivityApi.service";
import { CustomersApiService } from "src/api/customersApi.service";
import { UserItem } from "src/components/UserItem/UserItem";
import { Connectivity } from "src/types/connectivity";
import { User } from "src/types/user";

export const CustomersScreen = () => {
  const [customers, setCustomers] = useState<User[]>([]);
  const [connectivityStatus, setConnectivityStatus] = useState<Connectivity[]>(
    []
  );

  useEffect(() => {
    const asyncCustomersFetch = async () => {
      const { data } = await CustomersApiService.getCustomers();
      setCustomers(data.customers);
    };
    asyncCustomersFetch();

    const asyncConnectivityFetch = async () => {
      const { data } = await ConnectivityApiService.getConnectivity({
        customerIds: [20000, 20001, 20002],
      });
      setConnectivityStatus(data.customerConnectivity);
    };
    asyncConnectivityFetch();
  }, []);

  return (
    <View>
      <FlatList
        data={customers}
        style={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <UserItem key={item._id} user={item} />}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

export default CustomersScreen;
