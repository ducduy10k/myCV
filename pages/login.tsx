import { authApi } from '@/api/index';
import { useAuth } from '@/hooks';

import * as React from 'react';

export default function LoginPage() {
const {profile, error, login, logout} = useAuth({
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
        <div>
            <h1>Login page</h1>
            <button onClick={handleLoginClick}>Login</button>
            {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
            <button onClick={handleLogoutClick}>Logout</button>
            <div>
                {JSON.stringify(profile || {}, null , 4)}
            </div>
        </div>
    );
}
