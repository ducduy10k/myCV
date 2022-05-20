import { projectApi } from '@/api-client';
import { MainLayout } from '@/components/layout';
import { DialogEditProject, ProjectList } from '@/components/work';
import { DialogDeleteProject } from '@/components/work/dialog-delete-project';
import DialogViewProject from '@/components/work/dialog-view-project';
import { Project } from '@/models';
import { Add } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
export interface IWorkPageProps {
}

export default function WorkPage(props: IWorkPageProps) {
  const [projectList, setProjectList] = useState<Project[]>([
  ])

  const [openDialogView, setOpenDialogView] = React.useState(false);
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);

  const [selectedValue, setSelectedValue] = React.useState<Project | null>(null);

  useEffect(()=>{
    projectApi.getAll().then((data:any)=>{
      console.log(data);
      setProjectList(data)
    });
  },[])

  const handleOpenAddDialog = () => {
    setSelectedValue(null);
    setOpenDialogEdit(true);
  };

  const handleClose = (value: Project | null) => {
    setOpenDialogView(false);
    setOpenDialogEdit(false);
    setOpenDialogDelete(false);
    setSelectedValue(value);
  };
  const handleAddProject = (value: Project) => {
    // value._id = (projectList.length + 1) + '';
    setProjectList([...projectList, value]);
    setOpenDialogEdit(false);
  };

  const handleEditProject = (value: Project) => {
    setProjectList([...projectList].map((project) =>{
      return (project._id === value._id) ? value : project
    }));
    setOpenDialogEdit(false);
  };

  const handleDeleteProject = (value: Project) => {
    setProjectList([...projectList].filter((project)=>{
      return project._id !== value._id
    }));
    setOpenDialogDelete(false);
  };

  const handleOpenDialogViewProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogView(true);
  }

  const handleOpenDialogEditProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogEdit(true);
  }


  const handleOpenDialogDeleteProject = (value: Project) => {
    if(!value) return;
    setSelectedValue(value);
    setOpenDialogDelete(true);
  }

  return (
    <Box component='section' pt={2} pb={4}>
     {
        openDialogView && selectedValue? (<DialogViewProject
          selectedValue={selectedValue}
          open={openDialogView}
          onClose={handleClose}
        />) : ''
      }
      {
        openDialogDelete && selectedValue? (<DialogDeleteProject
          selectedValue={selectedValue}
          open={openDialogEdit}
          onClose={handleClose}
          onDelete={handleDeleteProject}
        />) : ''
      }
      <Container>
        <Stack direction='row' mb={2} justifyContent='space-between'>
          <Typography>
          </Typography>
          <Button  variant="contained" onClick={handleOpenAddDialog}  sx={{mb:2}} startIcon={<Add/>}>
            Add project
          </Button>
          {
            openDialogEdit ? (<DialogEditProject
              selectedValue={selectedValue}
              open={openDialogEdit}
              onClose={handleClose}
              onAdd={handleAddProject}
              onEdit={handleEditProject}

            />) : ''
          }
        </Stack>
        <ProjectList projects={projectList} onEditItemProject={handleOpenDialogEditProject} onDeleteditItemProject={handleOpenDialogDeleteProject} onViewItemProject={handleOpenDialogViewProject} viewType='edit' />
      </Container>
    </Box>
  );
}
WorkPage.Layout = MainLayout
WorkPage.isPrivate = true;

// export const getStaticProps: GetStaticProps<I> =