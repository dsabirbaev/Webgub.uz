
import { useState, useEffect } from "react";
import {CourseCard} from "../UI/Card";
import useCourses from "../../service/courses/useCourses";
import "./style.scss";
const index = () => {

    const [course, setCourse] = useState([]);
    const [num, setNum] = useState(3);
    const getAllCourses = async () => {
        const response = await useCourses.getCourses();
        const result = await response.data;
        setCourse(result?.courses);
    }

    useEffect(() => {
        getAllCourses();
    }, [])

   
    const addMoreCards = () => {
        setNum(num + 3);
    }
    return (
        <section id="courses" className="pt-[120px] pb-[103px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="mb-[48px] text-[#323232] font-['RowdiesRegular'] text-[45px] tracking-[-1.35px]">Featured <span className="text-[#2AAA94]">Course</span></h2>
                    <p className="mb-[90px] text-[#4E596B] text-[25px] leading-[35px] font-['SairaRegular'] w-[691px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>

                    <div className="grid grid-cols-3 gap-[36px] mb-10">
                        {
                            course?.slice(0, num).map((item) => {
                                return <CourseCard state={item} key={item?.id}/>
                            })
                        }
                        
                    </div>
                       
                    {num < course.length && (
                        <button
                            onClick={addMoreCards}
                            className="text-white hover:bg-[#083F9B] active:bg-white active:text-black active:ring active:ring-[#7F56D9] py-[17px] px-[18px] rounded-[10px] bg-[#7F56D9] font-['SairaMedium'] text-[20px]"
                        >
                            Explore courses
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default index;