import { Connectivity } from "./connectivity";
import { User } from "./user";

export type CustomersResponse = {
  count: number;
  customers: User[];
};

export type ConnectivityResponse = {
  customerConnectivity: Connectivity[];
};

export type ConnectivityParams = {
  customerIds: number[];
};
