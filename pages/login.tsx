import { authApi } from '@/api/index';
import { useAuth } from '@/hooks';
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import login from './../styles/Login.module.css';
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Spinner from '@/components/common/spinner';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { profile, error, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: 'duy@gmail.com',
    password: '12345678',
  });

  const { email, password } = formData;

  const handleLoginClick = async () => {
    setLoading(true);
    try {
      login(email, password).then(() => {
        router.push('/');
      });
      // redirect to dashboard
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // const handleGetProfileClick = async () => {
  //     try {
  //         await authApi.getProfile();
  //     } catch (error) {
  //         console.log(error)
  //     }
  //  };
  const handleLogoutClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (name: string, e: any) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <Stack minHeight="100vh" justifyContent="center" alignItems="center">
        <div className="login-form" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="mb-3 login__title">Login</h2>
          <div className="login__greeting">Welcome to My CV</div>
          <TextField
            id="standard-search"
            label="Email"
            type="search"
            variant="standard"
            fullWidth={true}
            defaultValue={email}
            sx={{ my: 2 }}
            onChange={(e) => handleChange('email', e)}
          />
          <TextField
            id="standard-search"
            label="Password"
            variant="standard"
            fullWidth={true}
            defaultValue={password}
            sx={{ my: 2 }}
            type="password"
            autoComplete="current-password"
            onChange={(e) => handleChange('email', e)}
          />
          <Stack direction="row" my={2} alignItems="center">
            <Box>
              {' '}
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </Box>
            <Box flexGrow={1} textAlign='right'>Forgot your password</Box>
          </Stack>
          <Stack  my={2}>
          <Button  variant="contained"  onClick={handleLoginClick}>
            Sign in
          </Button>
          </Stack>
          <div>
            Dont have an account ? 
            <Link href='./'>
             <Typography color='primary' component='span'> Create your account.</Typography>
            </Link>
          </div>
        </div>
      </Stack>
      {loading ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.15)',
          }}
        >
          <Spinner></Spinner>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
}
