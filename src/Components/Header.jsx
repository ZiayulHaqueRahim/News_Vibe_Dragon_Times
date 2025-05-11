import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex  flex-col justify-center items-center py-8 gap-3'>
            <img className='w-[350px]' src={logo} />
            <p className='text-gray-600'>Journalism without fear!!!</p>
            <p className='text-semi-bold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;