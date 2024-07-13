import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Root = () => {
    return (
        < div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet />
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;