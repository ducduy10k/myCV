import { Project } from '@/models';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
export interface IProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: IProjectCardProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }}>
        <Image
          src={project.thumbnailUrl ? project.thumbnailUrl : ''}
          width={246}
          height={180}
          layout="responsive"
          alt="project thumbnail"
        />
      </Box>
      <Box>
        <Stack direction="column" height='100%'>
          <Typography component="h1" variant="h5" mb={1}>
            {project.name}
          </Typography>
          <Box>
          <Chip color="default" label={project.from + ' - ' + project.to}/>
          </Box>
          <Stack direction='row' alignItems='center' mt={1}><Typography fontWeight='bold' variant='h6' mr={1}>{project.teamSize}</Typography><PersonIcon color='success'/></Stack>
          <Typography  marginTop='auto'>{project.technologies}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
