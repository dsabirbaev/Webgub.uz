
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"

import "./style.scss";

const index = () => {
   




    document.title = "Webgub.uz"
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white">
            <div className="container">
                <nav className="flex justify-between items-center h-[120px]">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                    <div className={`flex items-center gap-x-[243px]`}>

                        <ul className="flex items-center gap-x-[72px] text-[#1B2336] font-['SairaMedium'] text-[20px]">
                            <li className="py-2 px-3 hover:bg-slate-200 rounded-md active:bg-slate-400 active:text-white"><a href="#courses">Courses</a></li>
                            <li className="py-2 px-3 hover:bg-slate-200 rounded-md active:bg-slate-400 active:text-white"><a href="#services">Services</a></li>
                        </ul>

                        < NavLink to="/login" className="btn-join text-white hover:ring hover:ring-indigo-400 font-['SairaMedium'] text-[20px] py-[10px] px-[54px] rounded-[10px]">Join</NavLink>


                    </div>
                </nav>
            </div >
        </header >
    );
};

export default index;