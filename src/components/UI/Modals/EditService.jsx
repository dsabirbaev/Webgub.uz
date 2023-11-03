


import { useState, useEffect } from 'react';
import useServices from '../../../service/services/useServices';

import { Modal, Form, Input, Button, Upload, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PlusModal } from "../../Icons";



const EditService = ({ open, setOpen, idService}) => {
    const [info, setInfo] = useState(""); 
    const [nameImg, setNameImg] = useState("");
    const { TextArea } = Input;
   
    const onFinish = (values) => {
       
        const service = {course: values.course, description: values.description, image: values.image.fileList[0].originFileObj};
        
        console.log(service)
        console.log(idService)
        useServices.updateService(idService, service).then((res) => {
            console.log(res)
            if(res.status === 200){
                message.success("Xizmat muvaffaqqiyatli tahrirlandi!");
                handleOpen();
            }
        }).catch((err) => {
            console.log(err)
            message.success("Xatolik yuz berd!");
        })

    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
   
    const handleOpen = () =>{
        setOpen(!open)
    };
   
   
    // const getService = () => {
    //     useServices.getOneService(idService).then((res) => {
        
    //         setInfo(res?.data?.service)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }
    
    // useEffect(() => {
    //     getService();    
    // }, [idService]);
  
    return (
        <>

            <Modal title="Xizmat qo'shish" open={open} footer={null} onCancel={handleOpen} >

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    // fields={[
                    //     {
                    //         name: ["image"],
                    //         value: info?.image,
                    //     },
                    //     {
                    //         name: ["title"],
                    //         value: info?.title,
                    //     },
                    //     {
                    //         name: ["description"],
                    //         value: info?.description,
                    //     }
                    // ]}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <label htmlFor="image">Xizmat rasmi</label>
                    <Form.Item
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, xizmat rasmini kiriting!',
                            },
                        ]}
                    >
                        <Upload showUploadList={false} accept=".png,.jpeg"  onChange={(info) => setNameImg(info.fileList[0].name)}>
                            <Button icon={<UploadOutlined />}>File yuklash uchun bosing</Button>
                            <span className='ml-4 font-medium text-sky-500'>{nameImg}</span>
                        </Upload>
                    </Form.Item>

                    <label htmlFor="course">Xizmat nomi</label>
                    <Form.Item
                        name="course"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, xizmat nomini kiriting!',
                            },
                        ]}
                    >
                        <Input id='course' placeholder='Xizmat nomi'/>
                    </Form.Item>

                    <label htmlFor="description">Xizmat haqida</label>
                    <Form.Item
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, xizmat haqida kiriting!',
                            },
                        ]}
                    >
                        <TextArea rows={4} id='description' placeholder='Xizmat haqida'/>
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
export default EditService;