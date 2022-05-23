import { Project } from '@/models';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { ProjectCard } from './project-card';

export interface IProjectListProps {
  projects: Project[];
  viewType: 'viewOnly' | 'edit';
  onViewItemProject?: (value: Project) => void;
  onEditItemProject?: (value: Project) => void;
  onDeleteditItemProject?: (value: Project) => void;
}

export function ProjectList({
  projects,
  viewType,
  onEditItemProject = () => {},
  onDeleteditItemProject = () => {},
  onViewItemProject = () => {},
}: IProjectListProps) {
  const handleViewItemProject = (value: Project) => {
    onViewItemProject(value);
  };

  const handleEditItemProject = (value: Project) => {
    if (viewType == 'edit') {
      onEditItemProject(value);
    }
  };

  const handleDeleteItemProject = (value: Project) => {
    if (viewType == 'edit') {
      onDeleteditItemProject(value);
    }
  };


  if (!Array.isArray(projects) || projects.length === 0) return null;
  return (
    <Box>
      {projects.map((project) => (
        <Fragment key={project._id}>
          <ProjectCard
            project={project}
            viewType={viewType}
            onEditProject={handleEditItemProject}
            onDeleteProject={handleDeleteItemProject}
            onViewProject={handleViewItemProject}
          ></ProjectCard>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Fragment>
      ))}
    </Box>
  );
}
