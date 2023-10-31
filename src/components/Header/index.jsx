
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"

import "./style.scss";

const index = () => {
   




    document.title = "Webgub.uz"
    return (
        <header>
            <div className="container">
                <nav className="flex justify-between items-center h-[120px]">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                    <div className={`flex items-center gap-x-[243px]`}>

                        <ul className="flex items-center gap-x-[72px] text-[#1B2336] font-['SairaMedium'] text-[20px]">
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#services">Services</a></li>
                        </ul>

                        < NavLink to="/login" className="btn-join text-white font-['SairaMedium'] text-[20px] py-[10px] px-[54px] rounded-[10px]">Join</NavLink>


                    </div>
                </nav>
            </div >
        </header >
    );
};

export default index;