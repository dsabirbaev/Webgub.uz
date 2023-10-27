
import {NavLink} from "react-router-dom";
import logo from "../../assets/icons/logo.svg"
import "./style.scss";

const index = () => {
    return (
        <header className="shadow-lg">
            <div className="container">
                <nav className="flex justify-between items-center h-[119px]">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                    <div className="flex items-center gap-x-[243px]">
                        <div className="flex items-center gap-x-[72px] text-[#1B2336] font-['SairaMedium'] text-[20px]">
                            <a href="#">Courses</a>
                            <a href="#">Services</a>
                        </div>

                        <NavLink to="/login" className="btn-join text-white font-['SairaMedium'] text-[20px] py-[10px] px-[54px] rounded-[10px]">Join</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;