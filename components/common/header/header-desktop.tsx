import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import * as React from 'react';
import { ROYTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface IHeaderDesktopProps {}

export function HeaderDesktop(props: IHeaderDesktopProps) {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROYTE_LIST.map((route) => (
            <Link key={route.path} passHref href={route.path}>
              <MuiLink sx={{ml:2, fontWeight :"medium" }}className={clsx({
                active: router.pathname === route.path
              })}>{route.lable}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
