import { Project } from '@/models';
import { Delete, Edit, Info } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Box, Button, Chip, Stack, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import Moment from 'moment';
import { useCompany } from '@/hooks/swrCompany';

export interface IProjectCardProps {
  project: Project;
  viewType: 'viewOnly' | 'edit';
  onViewProject: (value: Project) => void;
  onEditProject: (value: Project) => void;
  onDeleteProject: (value: Project) => void;
}

export function ProjectCard({
  project,
  viewType,
  onEditProject,
  onDeleteProject,
  onViewProject,
}: IProjectCardProps) {
  const { companies, firstLoading } = useCompany();
  const handleViewProject = () => {
    onViewProject(project);
  };

  const handleEditProject = () => {
    onEditProject(project);
  };

  const handleDeleteProject = () => {
    onDeleteProject(project);
  };

  const getCompanyName = () => {
    if (companies && companies.length > 0) {
      const index = companies.findIndex((company) => {
        return company._id == project.company;
      });
      if (index != -1) {
        return companies[index].companyName;
      }
    }
    return '';
  };
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }}>
        {project.thumbnailUrl ? (
          <Image
            src={project.thumbnailUrl}
            width={246}
            height={180}
            layout="responsive"
            alt="project thumbnail"
          />
        ) : (
          <Image
            src={
              'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
            }
            width={246}
            height={180}
            layout="responsive"
            alt="project thumbnail"
          />
        )}
      </Box>
      <Box flexGrow={1}>
        <Stack direction="column" height="100%">
          <Typography component="h1" variant="h5" fontWeight="bold" mb={1}>
            {project.name}
          </Typography>
          <Box>
            <Chip
              color="default"
              label={
                Moment(new Date(parseFloat(project.from))).format('DD/MM/YYYY') +
                ' - ' +
                Moment(new Date(parseFloat(project.to))).format('DD/MM/YYYY')
              }
            />
          </Box>
          <Stack direction="row" alignItems="center" mt={1}>
            <Typography variant="h6" mr={1}>
              {project.teamSize}
            </Typography>
            <PersonIcon color="success" />
          </Stack>
          <Typography component="h3" variant="h6" mb={1}>
            {getCompanyName()} <ApartmentIcon />
          </Typography>
          <Typography marginTop="auto">{project.technologies}</Typography>
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" justifyContent={'space-around'} height="100%">
          <Tooltip title="Info">
            <Info
              color="info"
              onClick={() => handleViewProject()}
              sx={{ cursor: 'pointer', ml: 1 }}
            ></Info>
          </Tooltip>
          {viewType == 'edit' ? (
            <React.Fragment>
              <Tooltip title="Edit">
                <Edit
                  onClick={() => handleEditProject()}
                  color="primary"
                  sx={{ cursor: 'pointer', ml: 1 }}
                ></Edit>
              </Tooltip>
              <Tooltip title="Delete">
                <Delete
                  onClick={() => handleDeleteProject()}
                  color="warning"
                  sx={{ cursor: 'pointer', ml: 1 }}
                ></Delete>
              </Tooltip>
            </React.Fragment>
          ) : (
            ''
          )}
        </Stack>
      </Box>
    </Stack>
  );
}
