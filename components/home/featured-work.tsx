import { projectApi } from '@/api-client';
import { Work, Project } from '@/models';
import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { ProjectList } from '../work';
import DialogViewProject from '../work/dialog-view-project';

export interface IFeatureWorkProps {
}

export function FeatureWork(props: IFeatureWorkProps) {

  const [projects, setProjects] = React.useState<Project[]>([])

  React.useEffect(()=>{
    projectApi.getTop5Project().then((data:any) =>{
      setProjects(data);
    })
  },[])

  const [openDialogView, setOpenDialogView] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<Project | null>(null);

  const handleOpenDialogViewProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogView(true);
  }

  const handleClose = (value: Project | null) => {
    setSelectedValue(value);
    setOpenDialogView(false);
  };

  return (
    
    <Box component='section' pt={2} pb={4}>
      <Container>
         {
        openDialogView && selectedValue? (<DialogViewProject
          selectedValue={selectedValue}
          open={openDialogView}
          onClose={handleClose}
        />) : ''
      }
        <Stack direction='row' mb={2} justifyContent='space-between'>
          <Typography>
            Works
          </Typography>
          <Link passHref href='/works'>
            View all
          </Link>
        </Stack>
        <ProjectList projects={projects}  onViewItemProject={handleOpenDialogViewProject}  viewType='viewOnly'/>
      </Container>
    </Box>
  );
}
