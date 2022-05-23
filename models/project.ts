export interface Project {
  _id: string;
  name: string;
  from: string;
  to: string;
  url?: string;
  srcCode?: string;
  description?: string;
  teamSize: number;
  responsibilities: string;
  programingLanguages: string;
  tools: string;
  database: string;
  technologies: string;
  thumbnailUrl?: string;
  company?: number;
  expand?: boolean;
  createAt?: string;
  updateAt?: string;
  creator?: string;
}
