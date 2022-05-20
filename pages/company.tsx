import { FeatureWork } from '@/components/home/featured-work';
import { CompanyList } from '@/components/company';
import { MainLayout } from '@/components/layout';
import { Work, Company } from '@/models';
import * as moment from 'moment/moment';
import React, { useState } from 'react';
import { Box, Button, Container, Stack, Typography, Modal, TextField, Grid } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export interface ICompanyProps {
}

export default function CompanyPage(props: ICompanyProps) {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [start, setStart] = React.useState(new Date('01-01-2022'));
  const [end, setEnd] = React.useState(new Date('11-01-2022'));
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [companyList, setCompanyList] = useState([
    {
      id: '1',
      companyName: 'eKGIS',
      position: 'Fullstack',
      from: new Date('01-01-2022'),
      to: new Date('10-01-2022'),
      desc: 'du an giáo dục',
    },
    {
      id: '2',
      companyName: 'RikkeiSoft',
      position: 'Frontend',
      from: new Date('2022-01-01'),
      to: new Date('2022-09-01'),
      desc: 'du an y te',

    }])

  const [nameProject, setNameProjetc] = React.useState();

  const handleAddCompany = () => {
    handleOpen()
    setName('')
    setDesc('')


  }
  const onChangeNameProject = (e: any) => {
    setName(e.target.value)
  }
  const onChangeNameCompany = (e: any) => {
    setDesc(e.target.value)
  }
  const onChangeStart = (e: any) => {
    setStart(e.target.value)
  }
  const onChangeEnd = (e: any) => {
    setEnd(e.target.value)
  }
  const handleOpenModal = (id: string) => {
    handleOpen();
    const companies = companyList.find((company: Company) => company.id === id)
    if (companies) {
      setName(companies?.companyName || '')
      setDesc(companies?.desc || '')
    }
  }

  const handleAdd = () => {
    handleClose();
    const companies = [...companyList, {
      id: (companyList.length + 1) + '',
      companyName: name,
      position: 'Fullstack',
      from: start,
      to: end,
      desc: desc,
    }];
    setCompanyList(companies);
  }
  return (

    <Box component='div' pt={2} pb={4}>
      <Box>
        <Button onClick={handleAddCompany} sx={{ marginLeft: '80%', marginBottom: '30px' }} size="small" variant="outlined">Thêm </Button>
      </Box>
      <CompanyList companies={companyList} handleOpen={handleOpenModal} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <TextField
            required
            id="outlined-required"
            label="Tên công ty"
            value={name}
            defaultValue={name}
            onChange={onChangeNameProject}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', }} mb={3} mt={3}>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <DesktopDatePicker
                    label="From"
                    inputFormat="MM/dd/yyyy"
                    value={start}
                    onChange={onChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DesktopDatePicker
                    label="To"
                    inputFormat="MM/dd/yyyy"
                    value={end}
                    onChange={onChangeEnd}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>

          </Box>
          <TextField
            required
            id="outlined-required"
            label="Mô tả"
            value={desc}
            onChange={onChangeNameCompany}
          />
          <Button onClick={handleAdd} sx={{ marginLeft: '80%', marginTop: '160px' }} size="small" variant="outlined">Thêm </Button>
        </Box>
      </Modal>
    </Box>
  );
}

CompanyPage.Layout = MainLayout