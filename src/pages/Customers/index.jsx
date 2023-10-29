import { useState, useEffect } from "react";
import { CustomerTab } from "../../components/UI/Tables";
import useCustomers from "../../service/customers/useCustomers";
import BreadCrumb from "../../components/UI/BreadCrumb";
import { Excel } from "../../components/Icons";
const index = () => {

    const [customer, setCustomer] = useState([]);

    const getAllCustomers = async () => {

        const response = await useCustomers.getCustomers();
        const result = await response.data;
        setCustomer(result?.users);
    }

    useEffect(() => {
        getAllCustomers();
    }, [])


    return (
        <div className="flex flex-col gap-y-5">
            <div className="rounded-md bg-white p-4">
                <span className="font-['SairaSemiBold'] text-blue-600">Buyurtmachilar</span>
                <BreadCrumb text={"O'quvchilar"} />
            </div>

            <div className="rounded-md bg-white p-4">
                <div className="mb-5 text-white rounded-md bg-sky-600 w-fit p-2 text-[12px] cursor-pointer flex items-center gap-x-2">Export to Excel <span className="text-white"><Excel /></span></div>


                <div>
                    < CustomerTab customer={customer} />
                </div>

            </div>
        </div>
    );
};

export default index;