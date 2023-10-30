
import { useState, useEffect } from "react";
import {ServiceCard} from "../UI/Card";
import useCourses from "../../service/courses/useCourses";
import "./style.scss";
const index = () => {

    const [course, setCourse] = useState([]);
   
    const getAllCourses = async () => {
        const response = await useCourses.getCourses();
        const result = await response.data;
        console.log(result)
        setCourse(result?.courses);
    }

    useEffect(() => {
        getAllCourses();
    }, [])

    return (
        <section id="courses" className="pt-[120px] pb-[103px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="mb-[48px] text-[#323232] font-['RowdiesRegular'] text-[45px] tracking-[-1.35px]">Featured <span className="text-[#2AAA94]">Course</span></h2>
                    <p className="mb-[90px] text-[#4E596B] text-[25px] leading-[35px] font-['SairaRegular'] w-[691px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>

                    <div className="flex items-center gap-[36px]">
                        {
                            course?.map((item) => {
                                return <ServiceCard state={item} key={item?.id} courses={true}/>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;