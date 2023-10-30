
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"
import { SettingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Dropdown, message } from 'antd';
import "./style.scss";


import { Admin, Menu } from "../Icons";

const index = () => {
    const isAuth = localStorage.getItem("token");
    const navigate = useNavigate();
    document.title = "Dashboard | Admin"

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

    document.title = "Webhub.uz"
    return (
        <header>
            <div className="container">
                <nav className="flex justify-between items-center h-[120px]">
                    <NavLink onClick={() => {localStorage.clear()}} to="/"><img src={logo} alt="logo" /></NavLink>
                    <div className={`flex items-center ${isAuth ? "gap-x-5" : "gap-x-[243px]"}`}>
                        {
                            isAuth ?
                                <>
                                    <span className="text-blue-600 cursor-pointer">
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
                                </>

                                :
                                <>
                                    <ul className="flex items-center gap-x-[72px] text-[#1B2336] font-['SairaMedium'] text-[20px]">
                                        <li><a href="#courses">Courses</a></li>
                                        <li><a href="#services">Services</a></li>
                                    </ul>

                                    < NavLink to="/login" className="btn-join text-white font-['SairaMedium'] text-[20px] py-[10px] px-[54px] rounded-[10px]">Join</NavLink>
                                </>


                        }

                    </div>
                </nav>
            </div >
        </header >
    );
};

export default index;