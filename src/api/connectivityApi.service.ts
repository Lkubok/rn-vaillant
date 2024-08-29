import { AxiosResponse } from "axios";
import { ConnectivityParams, ConnectivityResponse } from "src/types/api";

import { axiosInstance } from "./axiosInstance";

const connectivityUrl = "customer-connectivity-report";

export class ConnectivityApiService {
  static readonly getConnectivity = async (
    data: ConnectivityParams
  ): Promise<AxiosResponse<ConnectivityResponse>> => {
    return axiosInstance.post(connectivityUrl, data);
  };
}
