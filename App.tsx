import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { startServer } from "./src/server";
import { CustomersApiService } from "src/api/customersApi.service";
import { User } from "src/types.ts/user";
import { Connectivity } from "src/types.ts/connectivity";
import { ConnectivityApiService } from "src/api/connectivityApi.service";

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
      {customers.map((customer) => (
        <React.Fragment key={customer._id}>
          <Text>
            {customer.firstName} {customer.lastName}
          </Text>
          <Text>{JSON.stringify(customer, null, 2)}</Text>
        </React.Fragment>
      ))}
    </View>
  );
}
