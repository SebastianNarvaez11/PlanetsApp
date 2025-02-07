import axios, {
  AxiosHeaders,
  AxiosInstance,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from 'axios';
import {PUBLIC_KEY} from '../constants';

/**
 * Creates and configures an Axios instance for making HTTP requests
 *
 * @param baseURL - The base URL for all requests made with this instance
 * @param headers - Optional custom headers to include with requests
 * @returns Configured Axios instance ready for making HTTP requests
 */
const createApiConfig = (
  baseURL: string,
  headers?:
    | AxiosHeaders
    | Partial<HeadersDefaults>
    | Partial<RawAxiosRequestHeaders>,
): AxiosInstance => {
  const api = axios.create({
    baseURL: baseURL,
    headers: headers || {
      'Content-Type': 'application/json',
      apikey: PUBLIC_KEY,
    },
  });

  return api;
};

export {createApiConfig};
