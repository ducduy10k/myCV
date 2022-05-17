import { Company } from '@/models';
import { Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { CompanyCard } from './company-card';
import { Box, Chip, Stack, Typography, List, ListItem } from '@mui/material';


export interface ICompanyListProps {
  companies: Company[];
}

export function CompanyList({ companies }: ICompanyListProps) {
  if (!Array.isArray(companies) || companies.length === 0) return null;
  return (
    <Box>
      {companies.map((company) => (
        <Fragment key={company.id}>
          <CompanyCard company={company}></CompanyCard>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Fragment>
      ))}
    </Box>
  );
}
