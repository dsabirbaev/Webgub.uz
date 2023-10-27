

import BreadCrumb from "../../components/UI/BreadCrumb";
import {Plus} from "../../components/Icons";
const index = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <div className="rounded-md bg-white p-4 flex items-center justify-between">
                <div>
                    <span className="font-['SairaSemiBold'] text-blue-600"> Kurslar</span>
                    <BreadCrumb text={"Kurslar"} />
                </div>
                <span className="text-white py-1 px-2 rounded-md bg-sky-600 hover:bg-sky-900 duration-200 active:bg-black cursor-pointer"><Plus/></span>
            </div>

            <div className="rounded-md bg-white p-4">
                dd
            </div>
        </div>
    );
};

export default index;