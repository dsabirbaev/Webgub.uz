import { useState } from 'react';
import useCourses from '../../../service/courses/useCourses';
import { Modal, Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PlusModal } from "../../Icons";



const CourseModal = ({ open, setOpen }) => {

    const [nameImg, setNameImg] = useState("");
    const { TextArea } = Input;

    const handleOpen = () => setOpen(!open);

    const onFinish = (values) => {
       
        const course = {title: values.title, description: values.description, image: values.image.fileList[0].originFileObj};
        
        

        // useCourses.createCourse(course).then((res) => {
        //     console.log(res)
        //     if(res.status === 201){
        //         message.success("Kurs muvaffaqqiyatli yaratildi!");
        //         handleOpen();
        //     }
        // }).catch((err) => {
        //     console.log(err)
        //     message.success("Xatolik yuz berd!");
        // })

    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const props = {
       
        onChange(info) {
          
          if (info.file.status !== 'uploading') {
            
            setNameImg(info.fileList[0].name)
          }
        
        },
      };



    return (
        <>

            <Modal title="Kurs qo'shish" open={open} footer={null} onCancel={handleOpen} >

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <label htmlFor="image">Kurs rasmi</label>
                    <Form.Item
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, kurs rasmini kiriting!',
                            },
                        ]}
                    >
                        <Upload showUploadList={false} accept=".png,.jpeg" {...props}>
                            <Button icon={<UploadOutlined />}>File yuklash uchun bosing</Button>
                            <span className='ml-4 font-medium text-sky-500'>{nameImg}</span>
                        </Upload>
                    </Form.Item>

                    <label htmlFor="title">Kurs nomi</label>
                    <Form.Item
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, kurs nomini kiriting!',
                            },
                        ]}
                    >
                        <Input id='title' placeholder='Kurs nomi'/>
                    </Form.Item>

                    <label htmlFor="description">Kurs haqida</label>
                    <Form.Item
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, kurs haqida kiriting!',
                            },
                        ]}
                    >
                        <TextArea rows={4} id='description' placeholder='Kurs haqida'/>
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 5,
                        }}
                    >
                        <Button type="primary" htmlType="submit" className='text-white bg-sky-600 block w-fit rounded-md cursor-pointer py-1 px-2'>
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