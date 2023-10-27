
import Intro from "../../components/Intro";
import Course from "../../components/Course";
import OurCourses from "../../components/OurCourses";
import Category from "../../components/Category";
import Factor from "../../components/Factor";
import Service from "../../components/Service";
import "./style.scss"

const index = () => {
    return (
        <>
            <Intro/>
            <Course/>
            <OurCourses/>
            <Category/>
            <Factor/>
            <Service/>
        </>
    );
};

export default index;