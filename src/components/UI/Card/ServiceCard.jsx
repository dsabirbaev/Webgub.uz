

import { Cart } from "../../Icons";
import bank from "../../../assets/images/bank.png";

const ServiceCard = () => {
    return (
        <div className="w-[512px] overflow-hidden rounded-[20px] hover:shadow-lg">
            <img src={bank} alt="bank" />

            <div className="p-[33px] font-['SairaBold'] bg-white">
                <div className="flex items-center justify-between text-[#4E596B] text-[14px] tracking-[-0.42px] mb-5">
                    <span>5,957 Students</span> <span>01h 49m</span>
                </div>
                <p className="text-[25px] tracking-[-0.75px] text-[#324361] mb-[33px]">Learn 3D Modelling and Design for Beginners</p>

                <div className="flex justify-between">
                    <span>$33.99</span>
                    <span className="cursor-pointer"><Cart /></span>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;