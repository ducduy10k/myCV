import { authApi } from '@/api/index';
import { useAuth } from '@/hooks';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import login from './../styles/Login.module.css';
import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '@/components/common/spinner';
import Link from 'next/link';
import { MainLayout } from '@/components/layout';

export default function SignUpPage() {
  const { logout } = useAuth({
    revalidateOnMount: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    mgs: '',
    type: 'normal',
  });

  const [formData, setFormData] = useState({
    name: 'Ayna',
    email: 'duy@gmail.com',
    password: '12345678',
    confirmPassword: '12345678',
  });

  //   const {name, email, password, confirmPassword } = formData;
  let { confirmPassword, ...data } = formData;
  const checkValidConfirmPassword = () => {
    return confirmPassword === data.password;
  };

  const handleSignUpClick = async () => {
    // setLoading(true);
    if (!checkValidConfirmPassword()) {
      setError({
        mgs: 'Password mismatch',
        type: 'error',
      });
      return;
    }
    try {
      authApi
        .signup(data)
        .then(() => {
          setError({
            mgs: 'Sign up success',
            type: 'success',
          });
        })
        .catch((error) => {
          setError({
            mgs: error.response.data.msg,
            type: 'error',
          });
        });
      // redirect to dashboard
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = (name: string, e: any) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <Fragment>
      <Stack minHeight="100vh" justifyContent="center" alignItems="center">
        <div className="login-form" style={{ alignItems: 'center', justifyContent: 'center' }}>
          {error.type == 'success' ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Sign up success
            </Alert>
          ) : (
            <>
              <h2 className="mb-3 login__title">Sign up</h2>
              <div className="login__greeting">Welcome to My CV</div>
              {error.type == 'error' ? (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error.mgs}
                </Alert>
              ) : (
                ''
              )}

              <TextField
                id="standard-search"
                label="name"
                type="search"
                variant="standard"
                fullWidth={true}
                defaultValue={data.name}
                sx={{ my: 2 }}
                onChange={(e) => handleChange('name', e)}
              />

              <TextField
                id="standard-search"
                label="Email"
                type="search"
                variant="standard"
                fullWidth={true}
                defaultValue={data.email}
                sx={{ my: 2 }}
                onChange={(e) => handleChange('email', e)}
              />
              <TextField
                id="standard-search"
                label="Password"
                variant="standard"
                fullWidth={true}
                defaultValue={data.password}
                sx={{ my: 2 }}
                type="password"
                autoComplete="current-password"
                onChange={(e) => handleChange('password', e)}
              />

              <TextField
                id="standard-search"
                label="Confirm Password"
                variant="standard"
                fullWidth={true}
                defaultValue={confirmPassword}
                sx={{ my: 2 }}
                type="password"
                autoComplete="current-password"
                onChange={(e) => handleChange('confirmPassword', e)}
              />

              <Stack my={2}>
                <Button variant="contained" onClick={handleSignUpClick}>
                  Sign up
                </Button>
              </Stack>
              <div style={{ textAlign: 'center' }}>
                <Link href="./login">
                  <Typography color="primary" component="span">
                    I have account.
                  </Typography>
                </Link>
              </div>
            </>
          )}
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
SignUpPage.Layout = MainLayout;
