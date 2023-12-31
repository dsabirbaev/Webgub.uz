

import { useState } from "react";
import { UserServiceModal } from "../Modals";
import { Cart } from "../../Icons";


const ServiceCard = ({ state: { title, description, image } }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[420px]   overflow-hidden rounded-[20px] hover:shadow-lg">
            <UserServiceModal open={open} setOpen={setOpen} />

            <img src={`${"http://api.webhub.uz" + image}`} alt={title} className="h-[323px]  object-cover w-full " />

            <div className="p-[33px] font-['SairaSemiBold'] bg-white flex flex-col justify-between h-[250px]">

                <div>
                    <div className="flex items-center justify-between text-[#4E596B] text-[14px] tracking-[-0.42px] mb-5">
                        <span>{title}</span>
                    </div>
                    <p className="text-[25px] tracking-[-0.75px] text-[#324361] ">{`${description.length > 50 ? description.slice(0, 50) + " ..." : description}`}</p>
                </div>

                <div className="flex justify-between">
                    <span className="text-[22px]">$33.99</span>
                    <span onClick={() => setOpen(!open)} className="cursor-pointer"><Cart /></span>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;