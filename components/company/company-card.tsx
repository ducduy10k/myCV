import { Company } from '@/models';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Chip, Stack, Typography, List, ListItem, Button, Modal, TextField } from '@mui/material';
import { margin } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import moment from 'moment';
export interface ICompanyCardProps {
  company: Company;
}
const style = {
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
function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}
export function CompanyCard({ company }: ICompanyCardProps) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date('01-01-2022'), new Date('01-10-2022')]);
  const [open, setOpen] = React.useState(false);
  const [nameCompany, setNameCompany] = React.useState(company.companyName);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(nameCompany)
  const onChangeNameCompany = (e: any) => setNameCompany(e.target.value);
  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <Box>
        <Stack direction="column" height='100%'>

          <Typography component="h1" variant="h5" mb={1}>
            {company.companyName}
          </Typography>

          <Box>
            <Chip color="default" label={moment(company.from).format("DD/MM/YYYY") + ' - ' + moment(company.to).format("DD/MM/YYYY")} />
          </Box>
          <List
            sx={{
              display: 'flex',

            }}
          >
            {
              company.projects.map((project) =>
                <ListItem>
                  {project.name}
                </ListItem>
              )
            }
          </List>
        </Stack>

      </Box>
      <Box >
        <Button onClick={handleOpen} size="small" variant="outlined">Sửa
        </Button>
      </Box>
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
            defaultValue="Hello World"
            value={nameCompany}
            onChange={onChangeNameCompany}
            sx={{ marginBottom: '16px' }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              defaultValue={value}
              value={value}
              maxDate={getWeeksAfter(value[0], 4)}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Box>
      </Modal>
    </Box>
  );
}
