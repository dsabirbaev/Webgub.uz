

import { Search } from "../Icons";

import { amazon, amd, megabox, logitech, uzum, najot } from "../../assets/images/brands";
import prince from "../../assets/images/prince.png"
import vue from "../../assets/images/vue.png"
import react from "../../assets/images/react.png"
import "./style.scss";
const index = () => {
    return (
        <section>
            <div className="intro-top pt-[287px] pb-[184px] relative">
                <div className="container">
                    <div className="flex">
                        <div>
                            <h4 className="font-['SairaSemiBold'] text-[18px] text-white tracking-[3px] uppercase mb-[40px]">Successful coaches are visionaries</h4>
                            <h1 className="text-[80px] leading-[90px] font-['RowdiesRegular'] text-white w-[1200px]">Good <span className="text-[#4BE5CA]">coaching</span> is good teaching & nothing else. InshaaAlloh</h1>
                            <button className="font-['SairaSemiBold'] border border-white rounded-[5px] px-[30px] py-[10px] text-[18px] tracking-[1px] text-white my-[79px] hover:bg-white hover:text-black  active:border-black active:shadow-lg">Courses</button>

                            <div className="rounded-[7px] flex p-[10px] gap-x-[30px] bg-white w-[489px]">
                                <input className="w-full outline-none placeholder:text-[16px] placeholder:text-[#4F547B] font-['SairaRegular']" type="text" placeholder="What do you want to learn today?" />
                                <span className="intro-search cursor-pointer flex gap-x-[12px] text-[15px] text-white font-['InterMedium'] py-[14px] px-[30px] rounded-[10px] hover:ring hover:ring-violent-500"><Search /> Search</span>
                            </div>
                            <img src={react} alt="react" className=" absolute right-[500px] bottom-[250px]"/>
                            <img src={vue} alt="vue" className=" absolute right-[20px] top-[250px]"/>
                            <img src={prince} alt="prince" className="w-[591px] h-[650px] absolute right-[20px] bottom-0"/>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="intro-bottom ">
                <div className="container">
                    <div className="h-[169px] flex justify-around items-center ">
                        <img src={amazon} alt="amazon"/>
                        <img src={amd} alt="amd" />
                        <img src={megabox} alt="megabox" />
                        <img src={najot} alt="najot" />
                        <img src={logitech} alt="logitech" />
                        <img src={uzum} alt="uzum" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;