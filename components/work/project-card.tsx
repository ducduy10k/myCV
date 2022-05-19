import { Project } from '@/models';
import { Delete, Edit, Info } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
export interface IProjectCardProps {
  project: Project;
  viewType: 'viewOnly' | 'edit';
  onEditItemProject: (value: Project) => void
  onDeleteditItemProject: (value: Project) => void
}

export function ProjectCard({ project, viewType, onEditItemProject , onDeleteditItemProject}: IProjectCardProps) {

  const handleEditItemProject = () => {
    onEditItemProject(project);
  }

  const handleDeleteItemProject = () => {
    onDeleteditItemProject(project);
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
          <Typography component="h1" variant="h5" mb={1}>
            {project.name}
          </Typography>
          <Box>
            <Chip color="default" label={project.from + ' - ' + project.to} />
          </Box>
          <Stack direction='row' alignItems='center' mt={1}><Typography fontWeight='bold' variant='h6' mr={1}>{project.teamSize}</Typography><PersonIcon color='success' /></Stack>
          <Typography marginTop='auto'>{project.technologies}</Typography>
        </Stack>
      </Box>
      <Box >
        <Stack justifyContent={'space-around'} height='100%'>
          <Button variant="contained" ><Info></Info></Button>
          {
            viewType == 'edit' ? (<React.Fragment >
              <Button variant="contained" onClick={() => handleEditItemProject()}><Edit></Edit></Button>
              <Button variant="outlined"  onClick={() => handleDeleteItemProject()}><Delete></Delete></Button>

            </React.Fragment>) : ''
          }
        </Stack>
      </Box>
    </Stack>
  );
}
