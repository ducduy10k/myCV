import {
  Box,
  Container,
  Stack,
  Link as MuiLink,
  Button,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ROYTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useAuth } from '@/hooks';

export interface IHeaderDesktopProps {}

export function HeaderDesktop(props: IHeaderDesktopProps) {
  const router = useRouter();
  const { profile, error, login, logout } = useAuth({
    revalidateOnMount: true,
  });
  const handleOpenMenuProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenuProfile = Boolean(anchorEl);

  const handleCloseMenuProfileClick = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };
  return (
    <Box
      display={{ xs: 'none', md: 'block' }}
      py={2}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height:'65px',
        background: '#ffffff',
        zIndex:1,
        boxShadow:'1px 1px 8px rgb(0 0 0 / 15%)'
      }}
    >
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROYTE_LIST.map((route) => (
            <Link key={route.path} passHref href={route.path}>
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                className={clsx({
                  active: router.pathname === route.path,
                })}
              >
                {route.lable}
              </MuiLink>
            </Link>
          ))}
          {!profile ? (
            <Link passHref href="/login">
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                className={clsx({
                  active: router.pathname === '/login',
                })}
              >
                Login
              </MuiLink>
            </Link>
          ) : (
            <>
              <Typography
                sx={{ ml: 2, fontWeight: 'medium' }}
                id="basic-button"
                aria-controls={openMenuProfile ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuProfile ? 'true' : undefined}
                onClick={handleOpenMenuProfileClick}
              >
                {(profile as any).name}
              </Typography>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenuProfile}
                onClose={handleCloseMenuProfileClick}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
