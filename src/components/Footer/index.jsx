
import "./style.scss";
import { Insta, Facebook, Twitter, Dribble, Behance } from "../Icons/SocialMedias";
import {Phone, Message, Map} from "../Icons";
const index = () => {
    return (
        <footer className="pb-10 pt-[132px]">
            <div className="container">
                <div className="flex flex-col text-white">
                    <div className="flex justify-between border-b pb-[89px]">
                        <div>
                            <h4 className="text-[25px] font-['RevaliaRegular' mb-[95px] text-center">webhub.uz</h4>
                            <p className="text-[18px] font-['SairaRegular'] leading-[28px] max-w-[477px]">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>

                        <div>
                            <h4 className="font-['RowdiesBold'] text-[25px] mb-[95px]">Quick Links</h4>
                            <div className="flex gap-x-[71px]">
                                <ul className="font-['SairaMedium'] text-[18px]">
                                    <li className="mb-[22px]"><a href="#">About</a></li>
                                    <li><a href="#">Course</a></li>
                                </ul>
                                <ul className="font-['SairaMedium'] text-[18px]">
                                    <li className="mb-[22px]"><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-['RowdiesBold'] text-[25px] mb-[95px]">Contact us</h4>

                            <div className="flex gap-x-[71px]">
                                <ul className="font-['SairaMedium'] text-[18px]">
                                    <li className="mb-[22px] flex items-center gap-x-5"><Phone/> +998 99 649 98 07</li>
                                    <li className="flex items-center gap-x-5"><Message/> webhub@example.com</li>
                                </ul>
                                <ul className="font-['SairaMedium'] text-[18px]">
                                    <li className="mb-[22px] flex items-center gap-x-5"><Map/> Toshkent , Chilonzor A9</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-[33px]">
                        <p className="text-[18px] font-['SairaRegular']">Copyright 2023 | Mystery</p>
                        <div className="flex items-center gap-x-5 cursor-pointer">
                            <Facebook />
                            <Twitter />
                            <Insta />
                            <Behance />
                            <Dribble />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;