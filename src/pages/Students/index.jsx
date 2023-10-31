
import { useState, useEffect } from "react";
import useStudents from "../../service/students/useStudents";
import BreadCrumb from "../../components/UI/BreadCrumb";
import { StudentTab } from "../../components/UI/Tables";
import { Excel } from "../../components/Icons";


const index = () => {

    const [student, setStudent] = useState([]);

    const getAllStudents = async () => {
        try {
            const response = await useStudents.getStudents();
            const result = response.data;
            setStudent(result.students);
        } catch (error) {
            console.error('Error fetching students', error);
        }
    }

    useEffect(() => {
        getAllStudents();

    }, [])




    return (
        <div className="flex flex-col gap-y-5">

            <div className="rounded-md bg-white p-4">
                <span className="font-['SairaSemiBold'] text-blue-600"> O'quvchilar</span>
                <BreadCrumb text={"O'quvchilar"} />
            </div>

            <div className="rounded-md bg-white p-4">
                <div className="mb-5 text-white rounded-md bg-sky-600 w-fit p-2 text-[12px] cursor-pointer flex items-center gap-x-2">Export to Excel <span className="text-white"><Excel /></span></div>

                <div>
                    <StudentTab student={student} />
                </div>
            </div>
        </div>
    );
};

export default index;