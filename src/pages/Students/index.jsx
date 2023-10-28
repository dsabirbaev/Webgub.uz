
import { useState, useEffect } from "react";
import useStudents from "../../service/students/useStudents";
import BreadCrumb from "../../components/UI/BreadCrumb";
import { StudentTab } from "../../components/UI/Tables";
const index = () => {

    const [student, setStudent] = useState([]);

    const getAllStudents = async () => {
        const response = await useStudents.getStudents();
        const result = await response.data;
        setStudent(result);
    }

    useEffect(() => {
        getAllStudents();
       
    }, [])
    console.log( typeof student.students)
    console.log(  student.students)
    return (
        <div className="flex flex-col gap-y-5">
            <div className="rounded-md bg-white p-4">
                <span className="font-['SairaSemiBold'] text-blue-600"> O'quvchilar</span>
                <BreadCrumb text={"O'quvchilar"} />
            </div>

            <div className="rounded-md bg-white p-4">
                <div className="mb-5 text-white rounded-md bg-sky-600 w-fit p-2 text-[12px] cursor-pointer">Export to Excel</div>

                <div>
                    
                    <StudentTab  />
                </div>
            </div>
        </div>
    );
};

export default index;