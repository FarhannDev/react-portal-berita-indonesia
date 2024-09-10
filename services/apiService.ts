import axiosInstance from '@/config/axios';
import axios, { AxiosResponse } from 'axios';

const apiService = (() => {
  const getResourceApi = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get(`/api`);
      const responseData: ResponseData = response.data;

      return responseData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  const getAllNewsByPortal: (
    portalName: string
  ) => Promise<PortalNews[] | undefined> = async (portalName: string) => {
    try {
      const response: AxiosResponse<ResponseData> = await axiosInstance.get(
        `/api/{} ${portalName}`
      );
      const responseData: ResponseData = response.data;
      const { data } = responseData;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  const getNewsPortalByCategory: (
    portalName: string,
    categoryName: string
  ) => Promise<PortalNews[] | undefined> = async (
    portalName: string,
    categoryName: string
  ) => {
    try {
      const response: AxiosResponse<ResponseData> = await axiosInstance.get(
        `/api/${portalName}/${categoryName}`
      );
      const responseData: ResponseData = response.data;
      const { data } = responseData;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return { getResourceApi, getAllNewsByPortal, getNewsPortalByCategory };
})();

export default apiService;
