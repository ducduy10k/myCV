import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import * as React from 'react';
import { useQuill } from 'react-quilljs';
export interface IDialogEditProjectProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function DialogEditProject(props: IDialogEditProjectProps) {
  const { onClose, selectedValue, open } = props;
  const {  quillRef } = useQuill();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Dialog  onClose={handleClose} open={true} sx={{ m: 0, p: 2 }} maxWidth="md" fullWidth={true}>
      <DialogTitle>Add project</DialogTitle>
      <DialogContent dividers={true}>
        <TextField
          id="standard-search"
          label="Name"
          type="search"
          variant="standard"
          fullWidth={true}
        />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <DesktopDatePicker
              label="From"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={6}>
            <DesktopDatePicker
              label="To"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>

        <TextField
          id="standard-search"
          label="Team size"
          type="number"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Description"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Programing Languages"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Tools"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Database"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Technologies"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Thumbnail Url"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
        />
        {
          open?( <div style={{ width: '600px', height: '320px' }}>
          <div ref={quillRef} />
        </div>):''
        }
       
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
