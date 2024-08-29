import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ConnectivityApiService } from "src/api/connectivityApi.service";
import { CustomersApiService } from "src/api/customersApi.service";
import { UserWithStatus } from "src/types/user";

interface CustomersContextType {
  customers: UserWithStatus[];
  setCustomers: React.Dispatch<React.SetStateAction<UserWithStatus[]>>;
  fetchCustomers: ({ isRefresh }: { isRefresh?: boolean }) => Promise<void>;
}

const CustomersContext = createContext<CustomersContextType | undefined>(
  undefined
);

// Create a provider component
const CustomersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<UserWithStatus[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchConnectivity = async ({
    customerIds,
  }: {
    customerIds: number[];
  }) => {
    const { data } = await ConnectivityApiService.getConnectivity({
      customerIds,
    });
    return data;
  };

  const fetchCustomers = async ({ isRefresh }: { isRefresh?: boolean }) => {
    const {
      data: { customers },
    } = await CustomersApiService.getCustomers();
    const mappedIds = customers.map((customer) => customer._id);

    const { customerConnectivity } = await fetchConnectivity({
      customerIds: mappedIds,
    });

    const customersWithStatus: UserWithStatus[] = customers.map((customer) => {
      const status = customerConnectivity.find((s) => s.id === customer._id)!;
      return {
        ...customer,
        status,
        generatedId: `${customer._id}_${customer.email}`,
      };
    });
    if (isRefresh) {
      setCustomers([]);
    }
    setCustomers((state) => [...state, ...customersWithStatus]);
  };

  useEffect(() => {
    fetchCustomers({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomersContext.Provider
      value={{ customers, setCustomers, fetchCustomers }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

// Custom hook to use the CustomersContext
const useCustomers = () => {
  const context = React.useContext(CustomersContext);
  if (context === undefined) {
    throw new Error("useCustomers must be used within a CustomersProvider");
  }
  return context;
};

export { CustomersProvider, useCustomers };
