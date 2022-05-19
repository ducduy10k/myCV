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
  selectedValue: Project ;
  onClose: (value: Project | null) => void;
  onDelete: (value: Project ) => void;
}

export function DialogDeleteProject(props: IDialogDeleteProjectProps) {
  const { onClose, selectedValue, open, onDelete } = props;
  const handleClose = () => {
    console.log('v')
    onClose(null);
  };
  return (
    <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete " + selectedValue?.name + " project !" }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>{selectedValue?.name} </b> project will be delete.<br/>Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={e =>onDelete(selectedValue)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
  );
}
