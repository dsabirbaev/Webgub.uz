
import {DashboardCard} from "../../components/UI/Card";

import { Check, DoubleCheck, Stop, Customer, Service, Course, Student } from "../../components/Icons/DashboardIcon";
const DashboardHome = () => {
    return (
        <div className='grid grid-cols-4 gap-x-4 gap-y-6'>


            <DashboardCard title={"O'quvchilar"} logo={<Student/>} number={"1"} color={"text-sky-400"}/>
            <DashboardCard title={"Yangi o'quvchilar"} logo={<Check/>} number={"1"} color={"text-yellow-400"}/>
            <DashboardCard title={"O'qiydiganlar"} logo={<DoubleCheck/>} number={"1"} color={"text-green-600"}/>
            <DashboardCard title={"O'qimaydiganlar"} logo={<Stop/>} number={"1"} color={"text-red-600"}/>
            <DashboardCard title={"Buyurtmachilar"} logo={<Customer/>} number={"1"} color={"text-blue-600"}/>
            <DashboardCard title={"Xizmatlar"} logo={<Service/>} number={"1"} color={"text-gray-600"}/>
            <DashboardCard title={"Kurslar"} logo={<Course/>} number={"1"} color={"text-indigo-600"}/>
           
        </div>
    );
};

export default DashboardHome;