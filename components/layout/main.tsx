import { LayoutProps } from '@/models/index';
import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Footer, Header } from '../common';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
export function MainLayout({ children }: LayoutProps) {
  // useEffect(() => {
  //     console.log('Main layout mouting');
  //     return () => {
  //         console.log('Main layout unmouting');
  //     }
  // }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack minHeight="100vh">
        <Header />
        <Box component="main" flexGrow={1}>
          {children}
        </Box>
        <Footer />
      </Stack>
    </LocalizationProvider>
  );
}
