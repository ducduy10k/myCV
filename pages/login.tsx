import { authApi } from '@/api/index';
import { useAuth } from '@/hooks';
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField } from '@mui/material';
import login from './../styles/Login.module.css'
import * as React from 'react';

export default function LoginPage() {
    const { profile, error, login, logout } = useAuth({
        revalidateOnMount: false
    });

    const handleLoginClick = async () => {
        try {
            await login();
            // redirect to dashboard
        } catch (error) {
            console.log(error)
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
            await logout()
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Stack minHeight='100vh' justifyContent='center' alignItems='center'>
            <div className="login-form" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="mb-3 login__title">Login</h2>
                <div className="login__greeting">
                    Welcome to My CV
                </div>
                <TextField
                    id="standard-search"
                    label="Email"
                    type="search"
                    variant="standard"
                    fullWidth={true}
                    sx={{my:2}}
                />
                <TextField
                    id="standard-search"
                    label="Password"
                    type="search"
                    variant="standard"
                    fullWidth={true}
                    sx={{my:2}}
                />
                <Stack direction='row' my={2} alignItems='center'>
                    <Box> <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /></Box>
                    <Box flexGrow={1}>Forgot your password</Box>
                </Stack>
                <Button variant="text">Sign in</Button>
                <div>
                    Dont have an account?<span className="create-account">
                        Create your account.
                    </span>
                </div> 
            </div>
        </Stack>
    )
}
