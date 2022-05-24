import { projectApi } from '@/api-client';
import { MainLayout } from '@/components/layout';
import { DialogEditProject, ProjectList } from '@/components/project';
import { DialogDeleteProject } from '@/components/project/dialog-delete-project';
import DialogViewProject from '@/components/project/dialog-view-project';
import { Project } from '@/models';
import { Add } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Container,
  Pagination,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
export interface IProjectPageProps {}

export interface MSGAlert {
  msg: string;
  type: 'success' | 'info' | 'warning' | 'error';
  open: boolean;
}
export const PAGE_SIZE = 3;
export default function ProjectPage(props: IProjectPageProps) {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [openDialogView, setOpenDialogView] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const [selectedValue, setSelectedValue] = useState<Project | null>(null);

  const [msgAlert, setMsgAlert] = useState<MSGAlert>({
    msg: '',
    type: 'success',
    open: false,
  });
  var numPage = Math.ceil(count / PAGE_SIZE);
  useEffect(() => {
    projectApi.getTotolRecord().then((data: any) => {
      setCount(data.count);
    });
    projectApi.getProjectWithPagination(currentPage, PAGE_SIZE).then((data: any) => {
      setProjectList(data);
    });
  }, []);

  const handleOpenAddDialog = () => {
    setCount((preCount) => {
      return preCount + 1;
    });
    projectApi.getProjectWithPagination(currentPage, PAGE_SIZE).then((data: any) => {
      setProjectList(data);
    });
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
    projectApi.getTotolRecord().then((data: any) => {
      setCount(data.count);
    });
    projectApi.getProjectWithPagination(1, PAGE_SIZE).then((data: any) => {
      setProjectList(data);
    });
    setOpenDialogEdit(false);
    setMsgAlert({
      msg: 'Add project success',
      type: 'success',
      open: true,
    });
  };

  const handleEditProject = (value: Project) => {
    setProjectList(
      [...projectList].map((project) => {
        return project._id === value._id ? value : project;
      })
    );
    setMsgAlert({
      msg: 'Edit project success',
      type: 'success',
      open: true,
    });
    setOpenDialogEdit(false);
  };

  const handleDeleteProject = (value: Project) => {
    setProjectList(
      [...projectList].filter((project) => {
        return project._id !== value._id;
      })
    );
    setOpenDialogDelete(false);
    setMsgAlert({
      msg: 'Delete project success',
      type: 'success',
      open: true,
    });
  };

  const handleOpenDialogViewProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogView(true);
  };

  const handleOpenDialogEditProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogEdit(true);
  };

  const handleOpenDialogDeleteProject = (value: Project) => {
    if (!value) return;
    setSelectedValue(value);
    setOpenDialogDelete(true);
  };

  const handleCloseAlert = () => {
    setMsgAlert({
      msg: '',
      type: 'success',
      open: false,
    });
  };

  const handleError = (error: any) => {
    setMsgAlert({
      msg: error,
      type: 'error',
      open: true,
    });
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    projectApi.getProjectWithPagination(value, PAGE_SIZE).then((data: any) => {
      setProjectList(data);
    });
  };

  return (
    <Box component="section" pt={2} pb={4} height='100%'>
      {openDialogView && selectedValue ? (
        <DialogViewProject
          selectedValue={selectedValue}
          open={openDialogView}
          onClose={handleClose}
        />
      ) : (
        ''
      )}
      {openDialogDelete && selectedValue ? (
        <DialogDeleteProject
          selectedValue={selectedValue}
          open={openDialogEdit}
          onClose={handleClose}
          onDelete={handleDeleteProject}
          onError={handleError}
        />
      ) : (
        ''
      )}

      <Snackbar
        open={msgAlert.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleCloseAlert}
      >
        <Alert severity={msgAlert.type} sx={{ width: '100%' }} onClose={handleCloseAlert}>
          {msgAlert.msg}
        </Alert>
      </Snackbar>

      <Container>
        <Stack direction="row" mb={2} justifyContent="space-between">
          <Typography></Typography>
          <Button
            variant="contained"
            onClick={handleOpenAddDialog}
            sx={{ mb: 2 }}
            startIcon={<Add />}
          >
            Add project
          </Button>
          {openDialogEdit ? (
            <DialogEditProject
              selectedValue={selectedValue}
              open={openDialogEdit}
              onClose={handleClose}
              onAdd={handleAddProject}
              onEdit={handleEditProject}
              onError={handleError}
            />
          ) : (
            ''
          )}
        </Stack>
        <ProjectList
          projects={projectList}
          onEditItemProject={handleOpenDialogEditProject}
          onDeleteditItemProject={handleOpenDialogDeleteProject}
          onViewItemProject={handleOpenDialogViewProject}
          viewType="edit"
        />
        {numPage > 0 ? (
          <Stack alignItems="center">
            <Pagination count={numPage} onChange={handleChangePage} />
          </Stack>
        ) : (
          ''
        )}
      </Container>
    </Box>
  );
}
ProjectPage.Layout = MainLayout;
ProjectPage.isPrivate = true;
