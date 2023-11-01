

import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Courses, Services, Customers, Home, Users } from "../../components/Icons"
import logo from "../../assets/icons/logo.svg"
import { Admin, Menu } from "../../components/Icons";
import { Dropdown, message } from 'antd';
import { SettingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import "./style.scss";
const index = () => {
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
    document.title = "Admin | Dashboard"

    const logout = () => {
        localStorage.clear();
        navigate("/");
        message.success("Siz tizimdan chiqdingiz!");
    }
    const items = [
        {
            label: <NavLink className="font-['SairaMedium'] flex items-center gap-x-2" to="/dashboard/settings"> <SettingOutlined /> Sozlamalar</NavLink>,
            key: '0',
        },
        {
            label: <div onClick={() => logout()} className="font-['SairaMedium'] flex items-center gap-x-2"> <ArrowLeftOutlined /> Chiqish</div>,
            key: '1',
        }
    ];
    return (
        <>

            <header>
                <nav className='h-[60px] px-2 flex justify-between'>
                    <NavLink onClick={() => { localStorage.clear() }} to="/"><img src={logo} alt="logo" /> </NavLink>

                    <div className='flex items-center gap-x-5'>

                        <span onClick={() => setSidebar(!sidebar)} className="text-blue-600 cursor-pointer">
                            <Menu />
                        </span>
                        <div>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a className="text-indigo-900 cursor-pointer flex items-center gap-x-1" onClick={(e) => e.preventDefault()}>
                                    <Admin />
                                    <span className="font-['InterMedium'] text-[18px]">{localStorage.getItem("fullName")}</span>


                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section className="flex dashboard">
                    <aside className={`flex flex-col gap-y-2 w-[300px]  p-5 border ${sidebar ? "absolute left-[-100%]" : "relative left-[0%]"} `}>
                        <NavLink to="/dashboard" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px] focus:bg-indigo-500 focus:text-white"> <Home /> Dashboard</NavLink>
                        <NavLink to="/dashboard/students" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px] focus:bg-indigo-500 focus:text-white"><Users /> O'quvchilar</NavLink>
                        <NavLink to="/dashboard/courses" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px] focus:bg-indigo-500 focus:text-white"><Courses /> Kurslar</NavLink>
                        <NavLink to="/dashboard/customers" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px] focus:bg-indigo-500 focus:text-white"><Customers /> Buyrtmachilar</NavLink>
                        <NavLink to="/dashboard/services" className="p-2 bg-slate-100 hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md flex  items-center  gap-x-1 font-['SairaMedium'] text-[16px] focus:bg-indigo-500 focus:text-white"><Services /> Xizmatlar</NavLink>
                    </aside>

                    <div className='w-full bg-slate-100 p-5'>
                        <Outlet />
                    </div>

                </section>
            </main>

        </>
    );
};

export default index;