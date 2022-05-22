import { Skill } from '@/models/index';
import axiosClient from './axios-client';

export const skillApi = {
  getAll() {
    return axiosClient.get('/skill');
  },
  getProjectById(id: number) {
    return axiosClient.get(`/skill/${id}`);
  },
  addProject(payload: Skill) {
    return axiosClient.post<Skill>('/skill', payload);
  },
  updateProject(payload: Skill) {
    return axiosClient.post(`/skill/${payload.id}`, payload);
  },
  deleteProject(id: string) {
    return axiosClient.delete(`/skill/${id}`);
  },
};
