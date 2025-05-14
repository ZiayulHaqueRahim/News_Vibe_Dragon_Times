
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-bd-base-200  mx-auto  min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;