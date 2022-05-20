import { Project } from '@/models';
import { Delete, Edit, Info } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import Moment from 'moment';

export interface IProjectCardProps {
  project: Project;
  viewType: 'viewOnly' | 'edit';
  onViewProject: (value: Project) => void
  onEditProject: (value: Project) => void
  onDeleteProject: (value: Project) => void
}

export function ProjectCard({ project, viewType, onEditProject , onDeleteProject, onViewProject}: IProjectCardProps) {

  const handleViewProject = () => {
    onViewProject(project);
  }

  const handleEditProject = () => {
    onEditProject(project);
  }

  const handleDeleteProject = () => {
    onDeleteProject(project);
  }

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }}>
        {
          project.thumbnailUrl ?  <Image
          src={ project.thumbnailUrl }
          width={246}
          height={180}
          layout="responsive"
          alt="project thumbnail"
        />: <Image
        src={  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'}
        width={246}
        height={180}
        layout="responsive"
        alt="project thumbnail"
      />
        }
       
      </Box>
      <Box flexGrow={1}>
        <Stack direction="column" height='100%'>
          <Typography component="h1" variant="h5"  fontWeight='bold' mb={1}>
            {project.name}
          </Typography>
          <Box>
            <Chip color="default" label={
              Moment(new Date(parseFloat(project.from))).format('Do MMM yyyy') +
              ' - ' +
              Moment(new Date(parseFloat(project.to))).format('Do MMM yyyy')
            } />
          </Box>
          <Stack direction='row' alignItems='center' mt={1}>
            <Typography variant='h6' mr={1}>{project.teamSize}</Typography>
            <PersonIcon color='success' />
            </Stack>
            <Typography component="h3" variant="h6"mb={1}>eKGis</Typography>
          
          <Typography marginTop='auto'>{project.technologies}</Typography>
        </Stack>
      </Box>
      <Box >
        <Stack direction='row' justifyContent={'space-around'} height='100%'>
          <Info color='info' onClick={() => handleViewProject()} sx={{cursor:'pointer', ml:1}}></Info>
          {
            viewType == 'edit' ? (<React.Fragment >
              <Edit onClick={() => handleEditProject()} color='primary' sx={{cursor:'pointer', ml:1}}></Edit>
              <Delete onClick={() => handleDeleteProject()} color='warning' sx={{cursor:'pointer', ml:1}}></Delete>
            </React.Fragment>) : ''
          }
        </Stack>
      </Box>
    </Stack>
  );
}
