import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { startServer } from "./src/server";
import { CustomersApiService } from "src/api/customersApi.service";
import { User } from "src/types.ts/user";
import { Connectivity } from "src/types.ts/connectivity";
import { ConnectivityApiService } from "src/api/connectivityApi.service";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native-paper";

startServer();

export default function App() {
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
      {connectivityStatus.map((customer) => (
        <React.Fragment key={customer.id}>
          <Text>{JSON.stringify(customer, null, 2)}</Text>
        </React.Fragment>
      ))}
      <Text>----------------------</Text>
      <Ionicons name="checkmark-circle" size={32} color="green" />
      {customers.map((customer) => (
        <React.Fragment key={customer._id}>
          <Text variant="headlineLarge">
            {customer.firstName} {customer.lastName}
          </Text>
          <Text>{JSON.stringify(customer, null, 2)}</Text>
        </React.Fragment>
      ))}
    </View>
  );
}
