import { LoginPayload } from '@/models/index';
import axiosClient from './axios-client';

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post('/auth', payload);
  },
  logout() {
    return axiosClient.post('logout');
  },
  getProfile() {
    return axiosClient.get('/auth');
  },
};
