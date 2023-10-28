
import { Learn, Work, Graduate } from "../Icons/OurCourses";
import {OurCourseCard} from "../UI/Card";
import "./style.scss";

const index = () => {
    return (
        <section id="our-courses" className="pt-[113px] pb-[144px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-white font-['RowdiesBold'] text-[45px] mb-[29px]">Why <span className="text-[#4BE5CA]">learn</span> with our courses?</h2>
                    <p className="mb-[115px] font-['SairaRegular'] text-[25px] leading-[35px] w-[728px] text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>
                    <div className="flex items-center justify-between gap-x-10">

                       <OurCourseCard img={<Learn />} title={"01. Learn"}/>
                       <OurCourseCard img={<Graduate />} title={"02. Graduate"}/>
                       <OurCourseCard img={<Work />} title={"03. Work"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;