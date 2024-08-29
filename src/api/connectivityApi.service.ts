// import { Connectivity } from './../types.ts/connectivity';
// import {axiosInstance} from '@api/';
// import {LoginResponse, PostLoginParams} from '@src/types/apiTypes';
import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import {
  ConnectivityParams,
  ConnectivityResponse,
  //   CustomersResponse,
} from "src/types.ts/api";

const connectivityUrl = "customer-connectivity-report";

export class ConnectivityApiService {
  static readonly getConnectivity = async (
    data: ConnectivityParams
  ): Promise<AxiosResponse<ConnectivityResponse>> => {
    // const bodyFormData = new FormData();
    console.log("GETTING Connectivity");
    // bodyFormData.append('phone_number', phoneNumber);
    return axiosInstance.post(connectivityUrl, data);
  };
}
