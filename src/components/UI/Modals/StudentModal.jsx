

import useStudents from '../../../service/students/useStudents';

import { Modal, Form, Button, Select, message } from 'antd';
import { PlusModal } from "../../Icons";


const CourseModal = ({ open, setOpen, id, userName, getAllStudents }) => {

    const handleOpen = () => {
        setOpen(!open);
        getAllStudents();
    };

    const handleChange = (value) => {
        // console.log(`selected ${value}`);
    };

    const onFinish = (values) => {
        const info = { id: id, status: Number(values.status) };
       
        useStudents.updateStatus(id, info).then(((res) => {
           
            if(res.status === 200){
                message.success(`${userName} ${info.status === 2 ? "o\'qiydi" : "o\'qimaydi"}`);
                handleOpen();
            }
            
        })).catch((er) => {
            message.success("Xatolik yuz berd!");
        })
    }

    return (
        <>

            <Modal title="O'quvchi statusini o'zgartirish" open={open} footer={null} onCancel={handleOpen} >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                   
                    autoComplete="off"
                >

                    <label htmlFor="status">Holatni tanlang</label>
                    <Form.Item
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, status turini tanlang!',
                            },
                        ]}
                    >
                        <Select
                            defaultValue="tanlang"
                            className='w-full'
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

                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 5,
                        }}

                    >
                        <Button  type="primary" htmlType="submit" className='text-white bg-sky-600 block w-fit rounded-md cursor-pointer p-1'>
                            <PlusModal />
                        </Button>

                    </Form.Item>
                </Form>

                <div className='flex justify-end'>
                    <button onClick={handleOpen} className='mt-3 py-2 px-4 rounded-md bg-red-600 text-white text-[16px] flex items-end cursor-pointer'>Close</button>
                </div>

            </Modal>
        </>
    );
};
export default CourseModal;