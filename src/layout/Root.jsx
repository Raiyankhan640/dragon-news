import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Navbar from '../pages/shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;