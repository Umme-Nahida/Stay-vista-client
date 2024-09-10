import React from 'react';
import Sidebar from './Siderbar/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='relative md:flex min-h-screen'>
            <div>
                {/* sidebar */}
                 <Sidebar></Sidebar>
            </div>
            <div className='flex-1 p-4 md:ml-[64px]'>
                {/* outlet */}

            </div>
        </div>
    );
};

export default DashboardLayout;