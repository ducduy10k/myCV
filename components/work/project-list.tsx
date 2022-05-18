import { Project, Work } from '@/models';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { ProjectCard } from './project-card';

export interface IProjectListProps {
  projects: Project[];
  viewType: 'viewOnly' | 'edit';
  onClickItemProject?: (value: Project)=>void
}

export function ProjectList({ projects, viewType , onClickItemProject = ()=>{}}: IProjectListProps) {
  const handleClickItemProject = (value:Project)=>{
    if(viewType == 'edit'){
      onClickItemProject(value)
    }
  }
  if (!Array.isArray(projects) || projects.length === 0) return null;
      return (
    <Box>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <ProjectCard project={project} viewType={viewType} onClickItemProject={handleClickItemProject}></ProjectCard>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Fragment>
      ))}
    </Box>
  );
}
