


import { Outlet, NavLink } from 'react-router-dom';

const index = () => {
    return (
        <section>
            <div className="container">
                <div className="flex gap-x-2">
                    <div className="flex flex-col">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/dashboard/students">Students</NavLink>
                        <NavLink to="/dashboard/courses">Courses</NavLink>
                        <NavLink to="/dashboard/customers">Customers</NavLink>
                        <NavLink to="/dashboard/services">Services</NavLink>
                    </div>

                    <div className='w-full bg-red-400'>
                        <Outlet />
                    </div>

                </div>
            </div>  
        </section>
    );
};

export default index;