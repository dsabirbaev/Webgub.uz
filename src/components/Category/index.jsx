

import { Marketing, Web, IT, Graphic, PersonalDev, Art, } from "../Icons/TopCategories";
import "./style.scss";

const index = () => {
    return (
        <section id="category" className="pt-[101px] pb-[155px]">

            <div className="container">
                <div className="flex flex-col">
                    <h2 className="mb-[42px] font-['RowdiesBold'] text-[#323232] text-[45px] text-center">Top <span className="text-[#2AAA94]">Categories</span></h2>
                    <p className="text-[#4E596B] font-['SairaMedium'] text-center text-[25px] mb-[100px]">12,000+ unique online course list designs</p>

                    <div className="flex items-center justify-between gap-x-5 cursor-pointer">

                        <div className="hover:shadow-lg duration-200 w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
                            <div className="mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[#DF385B]">
                                <Marketing />
                            </div>
                            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">Digtal Marketing</p>

                            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">25 Courses</p>
                        </div>

                        <div className="hover:shadow-lg duration-200 w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
                            <div className="mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[#5AB48E]">
                                <Web />
                            </div>
                            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">Web Development</p>

                            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">16 Courses</p>
                        </div>

                        <div className="hover:shadow-lg duration-200 w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
                            <div className="mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[#7F56D9]">
                                <Art />
                            </div>
                            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">Art & Humanities</p>

                            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">76 Courses</p>
                        </div>

                        <div className="hover:shadow-lg duration-200 w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
                            <div className="mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[#FAB437]">
                                <PersonalDev />
                            </div>
                            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">Personal Development</p>

                            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">22 Courses</p>
                        </div>

                        <div className="hover:shadow-lg duration-200 w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
                            <div className="mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[#2AAA94]">
                                <IT />
                            </div>
                            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">IT and Software</p>

                            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">110 Courses</p>
                        </div>

                        <div className="hover:shadow-lg duration-200 w-[253px] h-[362px] flex items-center justify-center flex-col rounded-[20px] bg-white">
                            <div className="mb-[50px] flex items-center justify-center w-[90px] h-[90px] rounded-[8px] bg-[#2CD182]">
                                <Graphic />
                            </div>
                            <p className="text-[#324361] mb-[45px] font-['SairaSemiBold'] text-[25px] w-[120px] text-center">Graphic Design</p>

                            <p className="text-[#4F547B] font-['SairaMedium'] text-[18px]">85 Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;