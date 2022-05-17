import { Company } from '@/models';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Chip, Stack, Typography, List, ListItem, Button } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
export interface ICompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: ICompanyCardProps) {
  console.log(company)
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
            <Chip color="default" label={company.from + ' - ' + company.to} />
          </Box>
        </Stack>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
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
      </Box>
      <Box >
        <Button size="small" variant="outlined">Thêm công ty
        </Button>
      </Box>
    </Box>
  );
}
