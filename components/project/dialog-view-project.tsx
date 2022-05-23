import { Project } from '@/models';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
export interface IDialogViewProjectProps {
  open: boolean;
  selectedValue: Project;
  onClose: (value: Project | null) => void;
}
import Moment from 'moment';
export default function DialogViewProject({
  onClose,
  selectedValue,
  open,
}: IDialogViewProjectProps) {
  console.log(selectedValue);
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={true} sx={{ m: 0, p: 2 }} maxWidth="md" fullWidth={true}>
      <DialogTitle>
          {selectedValue?.name}
      </DialogTitle>
       <Box sx={{ml:2 , mb:2}}>
          <Chip
            color="default"
            label={
              Moment(new Date(parseFloat(selectedValue.from))).format('Do MMM yyyy') +
              ' - ' +
              Moment(new Date(parseFloat(selectedValue.to))).format('Do MMM yyyy')
            }
          />
        </Box>
      <DialogContent dividers={true}>
        <TableContainer component={Paper} sx={{ overflow: 'hidden' }}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Team size
                </TableCell>
                <TableCell align="right"> {selectedValue?.teamSize}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Description
                </TableCell>
                <TableCell>
                  <div dangerouslySetInnerHTML={{ __html: selectedValue.description || '' }}></div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Programing Languages
                </TableCell>
                <TableCell>{selectedValue?.programingLanguages}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Tools
                </TableCell>
                <TableCell>{selectedValue?.tools}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Technologies
                </TableCell>
                <TableCell>{selectedValue?.technologies}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Responsibilities
                </TableCell>
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{ __html: selectedValue.responsibilities || '' }}
                  ></div>
                </TableCell>
              </TableRow>
              {selectedValue.thumbnailUrl ? (
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    <Box width={{ xs: '100%', md: '246px' }}>
                      <Image
                        src={selectedValue.thumbnailUrl}
                        width={246}
                        height={180}
                        layout="responsive"
                        alt="project thumbnail"
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
