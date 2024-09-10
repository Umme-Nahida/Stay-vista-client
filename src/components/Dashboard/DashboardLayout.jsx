import React from 'react';
import Sidebar from './Siderbar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='relative md:flex min-h-screen'>
                {/* sidebar */}
                 <Sidebar></Sidebar>
            <div className='flex-1 p-4 md:ml-64 bg-red-500'>
                {/* outlet */}
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;