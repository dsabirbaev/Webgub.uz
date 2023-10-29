
import { useState, useEffect } from "react";

import useCourses from "../../service/courses/useCourses";
import {CourseTab} from "../../components/UI/Tables";
import BreadCrumb from "../../components/UI/BreadCrumb";
import {Plus} from "../../components/Icons";

const index = () => {

    const [course, setCourse] = useState([]);
   
    const getAllCourses = async () => {
        const response = await useCourses.getCourses();
        const result = await response.data;
        // console.log(result)
        console.log( result?.courses)
        setCourse(result?.courses);
    }

    useEffect(() => {
        getAllCourses();
       
    }, [])


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
                < CourseTab course={course} />
            </div>
        </div>
    );
};

export default index;