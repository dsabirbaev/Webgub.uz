

import { useState, useEffect } from "react";
import {ServiceTab} from "../../components/UI/Tables";
import {ServiceModal} from "../../components/UI/Modals";
import useServices from "../../service/services/useServices";
import BreadCrumb from "../../components/UI/BreadCrumb";
import {Plus} from "../../components/Icons";

const index = () => {
    const [open, setOpen] = useState(false);
    const [service, setService] = useState([]);
   
    const getAllServices = async () => {

        const response = await useServices.getServices();
        const result = await response.data;
        setService(result?.services);
    }

    useEffect(() => {
        getAllServices();
    }, [])

    return (
        <div className="flex flex-col gap-y-5">
            <ServiceModal  open={open} setOpen={setOpen}/>
            <div className="rounded-md bg-white p-4 flex items-center justify-between">
                <div>
                    <span className="font-['SairaSemiBold'] text-blue-600">Xizmatlar</span>
                    <BreadCrumb text={"Xizmatlar"} />
                </div>
                <span onClick={() => setOpen(!open)} className="text-white py-1 px-2 rounded-md bg-sky-600 hover:bg-sky-900 duration-200 active:bg-black cursor-pointer"><Plus/></span>
            </div>

            <div className="rounded-md bg-white p-4">
                <ServiceTab service={service}/>
            </div>
        </div>
    );
};

export default index;