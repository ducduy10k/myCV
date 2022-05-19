import { Company } from '@/models';
import { Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { CompanyCard } from './company-card';
import { Box, Chip, Stack, Typography, List, Button, Modal, TextField } from '@mui/material';


export interface ICompanyListProps {
  companies: Company[];
}
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

export function CompanyList({ companies }: ICompanyListProps) {
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState();
  const [nameProject, setNameProjetc] = React.useState();
  const onChangeNameProject = (e: any) => {
    setNameProjetc(e.target.value)
  }
  const onChangeNameCompany = (e: any) => {
    setDesc(e.target.value)
  }

  if (!Array.isArray(companies) || companies.length === 0) return null;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
      <Box>
        <Button onClick={handleOpen} sx={{ marginLeft: '80%', marginBottom: '30px' }} size="small" variant="outlined">Thêm </Button>
      </Box>
      <Box>
        {
          companies.map((company) => (
            <Fragment key={company.id}>
              <CompanyCard company={company}></CompanyCard>
              <Divider sx={{ mt: 2, mb: 4 }} />
            </Fragment>
          ))
        }
      </Box >
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
            value={nameProject}
            onChange={onChangeNameProject}

          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', }} mb={3} mt={3}>

            <TextField
              id="date"
              label="from"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 200 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="to"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 200 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <TextField
            required
            id="outlined-required"
            label="Mô tả"
            value={desc}
            onChange={onChangeNameCompany}
          />
        </Box>
      </Modal >
    </Box>
  );
}
