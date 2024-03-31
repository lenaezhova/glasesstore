import axios from 'axios';
import {AuthResponse} from '../models/response/AuthResponse';

export const API_URL = 'https://glasesstoreserver.vercel.app/api'
// export const API_URL = 'http://localhost:4006/api';

const $glassesApi = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$glassesApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('adminToken')}`;
  return config;
});

$glassesApi.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
      localStorage.setItem('adminToken', response.data.accessToken);
      return $glassesApi.request(originalRequest);
    } catch (e) {
    }
    throw error;
  }
});

export default $glassesApi;
