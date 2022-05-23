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
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StringDecoder } from 'string_decoder';
export interface ICompanyCardProps {
  company: Company;
  handleOpen(id: string): void;
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
function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}
export function CompanyCard({ company, handleOpen }: ICompanyCardProps) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date('01-01-2022'), new Date('01-10-2022')]);
  const [open, setOpen] = React.useState(false);
  const [nameCompany, setNameCompany] = React.useState(company.companyName);
  const [desc, setDesc] = React.useState(company.description);
  const onChangeNameCompany = (e: any) => setNameCompany(e.target.value);
  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <Box>
        <Stack direction="column" height='100%'>
          <Box sx={{ display: 'flex' }}>

            <Typography sx={{ marginRight: '50px' }} component="h1" variant="h5" mb={1}>
              Công ty: {company.companyName}
            </Typography>
            <Typography component="h1" variant="h5" mb={1}>
              Vị trí: {company.position}
            </Typography>
          </Box>
          <Typography component="h6" variant="h6" mb={1}>
            Thời gian làm việc
          </Typography>
          <Box>
            <Chip color="default" label={moment(new Date(parseFloat(company.from))).format("DD/MM/YYYY") + ' - ' + moment(new Date(parseFloat(company.to))).format("DD/MM/YYYY")} />
          </Box>
          <Typography component="h6" variant="h6" mb={1}>
            Dự án: {company.description}
          </Typography>

        </Stack>

      </Box>
      <Box >
        <Button onClick={() => handleOpen(company._id)} size="small" variant="outlined">Sửa
        </Button>
      </Box>
    </Box >
  );
}
