import React from "react";
import { Text, View } from "react-native";
import { startServer } from "./src/server";
import { CustomersApiService } from "src/api/customersApi.service";
// import { CustomersApiService } from "src/api/cusomersApi.service";

startServer();

export default function App() {
  const [customers, setCustomers] = React.useState([]);
  const [connectivityStatus, setConnectivityStatus] = React.useState([]);

  React.useEffect(() => {
    // fetch("/api/customers")
    //   .then((res) => res.json())
    //   .then((json) => setCustomers(json.customers));

    const asyncCustomersFetch = async () => {
      const response = await CustomersApiService.getCustomers();
      // const json = await response.json();
      // setCustomers(json.customers);
    };

    asyncCustomersFetch();

    fetch("/api/customer-connectivity-report", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerIds: [20000, 20001, 20002] }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((json) => setConnectivityStatus(json.customerConnectivity));
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
