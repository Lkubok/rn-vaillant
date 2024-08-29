// import {axiosInstance} from '@api/';
// import {LoginResponse, PostLoginParams} from '@src/types/apiTypes';
import { AxiosResponse } from "axios";
import { CustomersResponse } from "src/types.ts/api";

import { axiosInstance } from "./axiosInstance";

const customerUrl = "customers";

export class CustomersApiService {
  static readonly getCustomers = async (): Promise<
    AxiosResponse<CustomersResponse>
  > => {
    // const bodyFormData = new FormData();
    console.log("GETTING CUSTOMERS");
    // bodyFormData.append('phone_number', phoneNumber);
    return axiosInstance.get(customerUrl);
  };
}
