import { Skill } from '@/models/index';
import axiosClient from './axios-client';

export const skillApi = {
  getAllSkill() {
    return axiosClient.get<Skill[]>('/skill');
  },
  getTop10Skill() {
    return axiosClient.get<Skill[]>('/skill/top10');
  },
  getSkillById(id: number) {
    return axiosClient.get(`/skill/${id}`);
  },
  addSkill(payload: Skill) {
    return axiosClient.post<Skill>('/skill', payload);
  },
  updateSkill(payload: Skill) {
    return axiosClient.post(`/skill/${payload.id}`, payload);
  },
  deleteSkill(id: string) {
    return axiosClient.delete(`/skill/${id}`);
  },
};
