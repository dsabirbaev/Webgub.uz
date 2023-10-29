import { useEffect, useState } from "react";
import useSummary from "../../service/summary/useSummary";
import {DashboardCard} from "../../components/UI/Card";
import { Check, DoubleCheck, Stop, Customer, Service, Course, Student } from "../../components/Icons/DashboardIcon";
const DashboardHome = () => {

    const [total, setTotal] = useState([]);
   
    const getSummary = async () => {
        const response = await useSummary.getSummary();
        const result = await response.data;
        setTotal(result?.summary);
    }

    useEffect(() => {
        getSummary();
       
    }, [])

  
    return (
        <div className='grid grid-cols-4 gap-x-4 gap-y-6'>


            <DashboardCard title={"O'quvchilar"} logo={<Student/>} number={total?.student?.total} color={"text-sky-400"}/>
            <DashboardCard title={"Yangi o'quvchilar"} logo={<Check/>} number={total?.student?.new} color={"text-yellow-400"}/>
            <DashboardCard title={"O'qiydiganlar"} logo={<DoubleCheck/>} number={total?.student?.resolve} color={"text-green-600"}/>
            <DashboardCard title={"O'qimaydiganlar"} logo={<Stop/>} number={total?.student?.reject} color={"text-red-600"}/>
            <DashboardCard title={"Buyurtmachilar"} logo={<Customer/>} number={total?.user?.total} color={"text-blue-600"}/>
            <DashboardCard title={"Xizmatlar"} logo={<Service/>} number={total?.service?.total} color={"text-gray-600"}/>
            <DashboardCard title={"Kurslar"} logo={<Course/>} number={total?.course?.total} color={"text-indigo-600"}/>
           
        </div>
    );
};

export default DashboardHome;