



import { useState } from 'react';

import useStudents from '../../../service/students/useStudents';

import { Modal, Form, Select, Button } from 'antd';
import { PlusModal } from "../../Icons";


const CourseModal = ({ open, setOpen, id}) => {

    const [d, sD] = useState("");

    const handleOpen = () => setOpen(!open);

    const handleChange = (value) => {
        // console.log(`selected ${typeof value}`);
        sD(value)
     
    };

    const updateStatusStudent = () => {
        const info = {id: id, status: Number(d)};
        console.log(typeof id)
        console.log(info)

        useStudents.updateStatus(id, info).then(((res) => {
            console.log("Response:", res);
        })).catch((er) => {
            console.log(er)
        })
    }


    return (
        <>

            <Modal title="O'quvchi statusini o'zgartirish" open={open} footer={null} onCancel={handleOpen} >


                <div>
                    <Select
                        defaultValue="tanlang"
                        className='w-full mb-5'
                        onChange={handleChange}
                        options={[
                            {
                                value: '2',
                                label: 'O\'qiydi',
                            },
                            {
                                value: '3',
                                label: 'O\'qimaydi',
                            },
                           
                        ]}
                    />
                    <Button onClick={() => updateStatusStudent()} type="primary" htmlType="submit" className='text-white bg-sky-600 block w-fit rounded-md cursor-pointer p-1'>
                        <PlusModal />
                    </Button>
                </div>



                <div className='flex justify-end'>
                    <button onClick={handleOpen} className='mt-3 py-2 px-4 rounded-md bg-red-600 text-white text-[16px] flex items-end cursor-pointer'>Close</button>
                </div>

            </Modal>
        </>
    );
};
export default CourseModal;