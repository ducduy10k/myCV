import { Company } from '@/models';
import { Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { CompanyCard } from './company-card';
import { Box, Container } from '@mui/material';

export interface ICompanyListProps {
  companies: Company[];
  handleOpen(id: string): void;
}

export function CompanyList({ companies, handleOpen }: ICompanyListProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Container>
        <Box>
          {companies?.map((company) => (
            <Fragment key={company._id}>
              <CompanyCard company={company} handleOpen={handleOpen}></CompanyCard>
              <Divider sx={{ mt: 2, mb: 4 }} />
            </Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
