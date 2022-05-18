import { Project } from '@/models';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useEffect, useState , useContext} from 'react';
import { useQuill } from 'react-quilljs';


export interface IDialogEditProjectProps {
  open: boolean;
  selectedValue: Project | null;
  onClose: (value: Project | null) => void;
  onAdd: (value: Project) => void;
}

export function DialogEditProject(props: IDialogEditProjectProps) {
  const { onClose, selectedValue, open, onAdd } = props;
  // QUILL
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(responsibilities);
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
 
 
  const [formData, setFormData] = useState<Project>({
    id: (selectedValue? selectedValue.id : ''),
    name: (selectedValue? selectedValue.name : ''),
    from:  Date.now()+ '',
    to:  Date.now() + '',
    url: (selectedValue? selectedValue.url : ''),
    srcCode: (selectedValue? selectedValue.srcCode : ''),
    description: (selectedValue? selectedValue.description : ''),
    teamSize: (selectedValue? selectedValue.teamSize : 0),
    responsibilities:(selectedValue? selectedValue.responsibilities : ''),
    programingLanguages: (selectedValue? selectedValue.programingLanguages : ''),
    tools: (selectedValue? selectedValue.tools : ''),
    database: (selectedValue? selectedValue.database : ''),
    technologies: (selectedValue? selectedValue.technologies : ''),
    thumbnailUrl: 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    expand: false,
    createAt:  Date.now() + '',
    updateAt: (selectedValue? selectedValue.updateAt : ''),
    creator: (selectedValue? selectedValue.creator : ''),
  });

  const {
    id,
    name,
    from,
    to,
    url,
    srcCode,
    description,
    teamSize,
    responsibilities,
    programingLanguages,
    tools,
    database,
    technologies,
    thumbnailUrl,
    expand,
    createAt,
    updateAt,
    creator,
  } = formData;
  var fromDate = new Date(parseInt(from));
  var toDate = new Date(parseInt(to));

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (value: Project) => {
    onClose(value);
  };

  const handleChange = (e:any) => {
    console.log(e)
    setFormData({
      ...formData, [e.target.name]:e.target.value
    })
  };

  const handleSubmit = ()=>{
    onAdd(formData)
  }

  return (
    <Dialog onClose={handleClose} open={true} sx={{ m: 0, p: 2 }} maxWidth="md" fullWidth={true}>
      <DialogTitle>Add project</DialogTitle>
      <DialogContent dividers={true}>
        <TextField
          id="standard-search"
          label="Name"
          type="search"
          variant="standard"
          defaultValue={name}
          fullWidth={true}
          onChange={e=>handleChange}
        />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <DesktopDatePicker
              label="From"
              inputFormat="MM/dd/yyyy"
              value={fromDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={6}>
            <DesktopDatePicker
              label="To"
              inputFormat="MM/dd/yyyy"
              value={toDate}
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
          defaultValue={teamSize}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Description"
          type="search"
          variant="standard"
          fullWidth={true}
          sx={{ my: 2 }}
          defaultValue={description}
        />
        <TextField
          id="standard-search"
          label="Programing Languages"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={programingLanguages}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Tools"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={tools}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Database"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={database}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Technologies"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={technologies}
          sx={{ my: 2 }}
        />
        <TextField
          id="standard-search"
          label="Thumbnail Url"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={thumbnailUrl}
          sx={{ my: 2 }}
        />
        <Typography> Responsibilities </Typography>
        {open ? (
          <div style={{ width: '100%', height: '320px' }}>
            <div ref={quillRef} />
          </div>
        ) : (
          ''
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
