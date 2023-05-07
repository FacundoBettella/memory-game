import Axios, { AxiosResponse } from "axios";

export const initAxios = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

  const responseHandler = (response: AxiosResponse) => {
    // const { data } = response;
    return response;
  };

  // const errorHandler = () => {};
  // const requestHandler = async (request: AxiosRequestConfig) => {};

  Axios.interceptors.response.use(responseHandler);
};
