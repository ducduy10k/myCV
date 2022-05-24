import { LayoutProps } from '@/models/index';
import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Auth, Footer, Header } from '../common';
export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box style={{  overflow: 'auto', height: 'calc(100vh - 65px)' }} marginTop={{ xs: '0', md: '65px' }}>
        <Box component="main" flexGrow={1} sx={{}}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Stack>
  );
}
