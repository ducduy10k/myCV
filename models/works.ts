export interface Project {
  id: string;
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
  expand?: boolean;
  createAt?: string;
  updateAt?: string;
  creator?: string;
}

export interface Work {
  companyName: string;
  from: string;
  to: string;
  projects: Project[];
  position: 'Frontend' | 'Backend' | 'Fullstack';
  createAt?: string;
  updateAt?: string;
  creator?: string;
}
