// import {axiosInstance} from '@api/';
// import {LoginResponse, PostLoginParams} from '@src/types/apiTypes';
import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { CustomersResponse } from "src/types.ts/api";

const customerUrl = "auth/login";

export class CustomersApiService {
  static readonly getCustomers = async (): Promise<
    AxiosResponse<CustomersResponse>
  > => {
    // const bodyFormData = new FormData();
    // bodyFormData.append('phone_number', phoneNumber);
    return axiosInstance.post(customerUrl);
  };
}
