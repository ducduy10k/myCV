import { Company, Project } from '@/models';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dynamic from 'next/dynamic';
import React, { useEffect, useState, useContext, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { companyApi, projectApi } from '@/api-client';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});
export interface IDialogEditProjectProps {
  open: boolean;
  selectedValue: Project | null;
  onClose: (value: Project | null) => void;
  onAdd: (value: Project) => void;
  onEdit: (value: Project) => void;
}

export function DialogEditProject(props: IDialogEditProjectProps) {
  const { onClose, selectedValue, open, onAdd, onEdit } = props;
  const [companies, setCompanies] = useState([]);
  const quillRef = useRef();

  useEffect(() => {
    companyApi
      .getAll()
      .then((data: any) => {
        console.log(companies);
        setCompanies(data);
      })
      .catch((error) => {});
  }, []);

  const [formData, setFormData] = useState<Project>({
    _id: selectedValue ? selectedValue._id : '',
    name: selectedValue ? selectedValue.name : '',
    from: Date.now() + '',
    to: Date.now() + '',
    url: selectedValue ? selectedValue.url : '',
    srcCode: selectedValue ? selectedValue.srcCode : '',
    description: selectedValue ? selectedValue.description : '',
    teamSize: selectedValue ? selectedValue.teamSize : 0,
    responsibilities: selectedValue ? selectedValue.responsibilities : '',
    programingLanguages: selectedValue ? selectedValue.programingLanguages : '',
    tools: selectedValue ? selectedValue.tools : '',
    database: selectedValue ? selectedValue.database : '',
    technologies: selectedValue ? selectedValue.technologies : '',
    thumbnailUrl: selectedValue ? selectedValue.thumbnailUrl : '',
    expand: false,
    createAt: Date.now() + '',
    company: selectedValue ? selectedValue.company : '',
    updateAt: selectedValue ? selectedValue.updateAt : '',
    creator: selectedValue ? selectedValue.creator : '',
  });

  const {
    _id,
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
    company,
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

  const handleChange = (name: string, e: any) => {
    console.log(e.target.value)
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleChangeDesc = (value: any) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleChangeResp = (value: any) => {
    setFormData({
      ...formData,
      responsibilities: value,
    });
  };

  const handleChangeProjectTo = (value: Date | null) => {
    setFormData({
      ...formData,
      to: value?.getTime() + '',
    });
  };

  const handleChangeProjectFrom = (value: Date | null) => {
    setFormData({
      ...formData,
      from: value?.getTime() + '',
    });
  };

  const handleAdd = () => {
    console.log(formData);
    formData.teamSize = parseInt(formData.teamSize + '');
    projectApi
      .addProject(formData)
      .then((data: any) => {
        console.log(data);
        formData._id = data._id;
        return onAdd(formData);
      })
      .catch((error) => {});
  };

  const handleEdit = () => {
    projectApi
      .updateProject(formData)
      .then(() => {
        onEdit(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dialog onClose={handleClose} open={true} sx={{ m: 0, p: 2 }} maxWidth="md" fullWidth={true}>
      <DialogTitle> {selectedValue ? 'Edit' : 'Add'} project</DialogTitle>
      <DialogContent dividers={true}>
        <TextField
          id="standard-search"
          label="Name"
          type="search"
          variant="standard"
          value={name}
          fullWidth={true}
          onChange={(e) => handleChange('name', e)}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <DesktopDatePicker
                label="From"
                inputFormat="MM/dd/yyyy"
                value={fromDate}
                onChange={handleChangeProjectFrom}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={6}>
              <DesktopDatePicker
                label="To"
                inputFormat="MM/dd/yyyy"
                value={toDate}
                onChange={handleChangeProjectTo}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

        <TextField
          id="standard-search"
          label="Team size"
          type="number"
          variant="standard"
          fullWidth={true}
          defaultValue={teamSize}
          sx={{ my: 2 }}
          onChange={(e) => handleChange('teamSize', e)}
        />
        <Typography> Description </Typography>
        <ReactQuill theme="snow" value={description || ''} onChange={handleChangeDesc} />
        <TextField
          id="standard-search"
          label="Programing Languages"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={programingLanguages}
          sx={{ my: 2 }}
          onChange={(e) => handleChange('programingLanguages', e)}
        />
        <TextField
          id="standard-search"
          label="Tools"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={tools}
          sx={{ my: 2 }}
          onChange={(e) => handleChange('tools', e)}
        />
        <TextField
          id="standard-search"
          label="Database"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={database}
          sx={{ my: 2 }}
          onChange={(e) => handleChange('database', e)}
        />
        <TextField
          id="standard-search"
          label="Technologies"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={technologies}
          sx={{ my: 2 }}
          onChange={(e) => handleChange('technologies', e)}
        />
        <TextField
          id="standard-search"
          label="Thumbnail Url"
          type="search"
          variant="standard"
          fullWidth={true}
          defaultValue={thumbnailUrl}
          sx={{ my: 2 }}
          onChange={(e) => handleChange('thumbnailUrl', e)}
        />
        <Typography> Responsibilities </Typography>
        <div>
          <ReactQuill theme="snow" value={responsibilities || ''} onChange={handleChangeResp} />
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">Company</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={company || ''}
            onChange={(e) => handleChange('company', e)}
            label="Company"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              companies.map((company: Company)=>{
                return  <MenuItem value={company._id} key={company._id}>{company.companyName}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {selectedValue ? (
          <Button onClick={handleEdit}>Edit</Button>
        ) : (
          <Button onClick={handleAdd}>Add</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
