import { AxiosResponse } from "axios";
import { CustomersResponse } from "src/types/api";

import { axiosInstance } from "./axiosInstance";

const customerUrl = "customers";

export class CustomersApiService {
  static readonly getCustomers = async (): Promise<
    AxiosResponse<CustomersResponse>
  > => {
    return axiosInstance.get(customerUrl);
  };
}
