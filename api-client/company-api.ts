import { Company } from '@/models';
import axiosClient from './axios-client';

export const companyApi = {
  getAll() {
    return axiosClient.get('/company');
  },
  getCompanyById(id: number) {
    return axiosClient.get(`/company/${id}`);
  },
  addCompany(payload: Company) {
    return axiosClient.post<Company>('/company', payload);
  },
  updateCompany(payload: Company) {
    return axiosClient.post(`/company/${payload._id}`, payload);
  },
  deleteCompany(id: string) {
    return axiosClient.delete(`/company/${id}`);
  },
};
