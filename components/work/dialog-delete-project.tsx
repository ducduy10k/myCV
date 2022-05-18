import { Project } from '@/models';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

export interface IDialogDeleteProjectProps {
  open: boolean;
  selectedValue: Project | null;
  onClose: (value: Project | null) => void;
  onAdd: (value: Project) => void;
}

export function DialogDeleteProject(props: IDialogDeleteProjectProps) {
  const { onClose, selectedValue, open, onAdd } = props;
  const handleClose = () => {
    onClose(null);
  };
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}
