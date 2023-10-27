


import { Outlet, NavLink } from 'react-router-dom';
import { Courses,Services,Customers, Home, Users} from "../../components/Icons"
import "./style.scss";
const index = () => {
    return (
        <section>
          
            <div className="flex dashboard">
                <aside className="flex flex-col gap-y-2 w-[300px] p-5 border">
                    <NavLink to="/dashboard" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px]"> <Home/> Dashboard</NavLink>
                    <NavLink to="/dashboard/students" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px]"><Users/> O'quvchilar</NavLink>
                    <NavLink to="/dashboard/courses" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px]"><Courses/> Kurslar</NavLink>
                    <NavLink to="/dashboard/customers" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px]"><Customers/> Buyrtmachilar</NavLink>
                    <NavLink to="/dashboard/services" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px]"><Services/> Xizmatlar</NavLink>
                </aside>

                <div className='w-full bg-slate-100 p-5'>
                    <Outlet />
                </div>

            </div>
           
        </section>
    );
};

export default index;