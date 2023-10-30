




import { useState } from 'react';
import { Button, Modal } from 'antd';
import {PlusModal} from "../../Icons";

const CourseModal = ({op}) => {
    
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal  title="Kurs qo'shish" open={op} footer={null} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

                <ul className='flex flex-col'>
                    <li><span className='text-white bg-sky-600 block w-fit rounded-md cursor-pointer p-1'><PlusModal/></span></li>
                    <li className='flex justify-end'>
                        <button onClick={!op} className='mt-3 py-2 px-4 rounded-md bg-red-600 text-white text-[16px] flex items-end cursor-pointer'>Close</button>
                    </li>
                </ul>
            </Modal>
        </>
    );
};
export default CourseModal;