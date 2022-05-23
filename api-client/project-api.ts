import { Project } from '@/models/index';
import axiosClient from './axios-client';

export const projectApi = {
  getAll() {
    return axiosClient.get('/project');
  },
  getTop5Project() {
    return axiosClient.get('/project/top5');
  },
  getProjectById(id: number) {
    return axiosClient.get(`/project/${id}`);
  },
  addProject(payload: Project) {
    return axiosClient.post<Project>('/project', payload);
  },
  updateProject(payload: Project) {
    return axiosClient.post(`/project/${payload._id}`, payload);
  },
  deleteProject(id: string) {
    return axiosClient.delete(`/project/${id}`);
  },
};
