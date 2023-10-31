


import { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, message } from 'antd';

import useServices from '../../../service/services/useServices';

const CourseModal = ({ open, setOpen }) => {

    const [serviceId, setServiceId] = useState([]);

    const handleOpen = () => setOpen(!open);

    const onFinish = (values) => {
        // console.log(values)
        const service = { fullName: values.fullName, phoneNumber: values.phoneNumber, serviceId: values.serviceId };

        console.log(service)

        if (service.fullName.trim().length && service.phoneNumber.trim().length && service.serviceId.trim().length) {

            useServices.userRegistration(service).then((res) => {
               

                if(res.status === 201){
                    message.success("Siz xizmatga yozildingiz!");
                    handleOpen();
                }
                
            }).catch((err) => {
                console.log(err)
                message.error("Tizimga kirishta xatolik bo'ldi!")
            })

        } else {
            message.warning("Iltimos, barcha maydonlarni to'ldiring!")
        }


    }

    const handleChange = (value) => {
        // console.log(`selected ${value}`);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const getServiceId = async () => {
        const response = await useServices.getServices();
        const result = await response.data;
        setServiceId(result?.services);
    }

    useEffect(() => {
        getServiceId();
    }, [])

    const options = serviceId?.map(item => (
        <Select.Option key={item.id} value={item.id}>
            {item.title}
        </Select.Option>
    ));

    return (
        <>

            <Modal title="Xizmatlar" open={open} footer={null} onCancel={handleOpen} >

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


                    <label htmlFor="fullName">Ism familiya sharifingiz</label>
                    <Form.Item
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, ism familiya sharifingiz kiriting!',
                            },
                        ]}
                    >
                        <Input id='fullName' placeholder='F.I.SH' />
                    </Form.Item>


                    <label htmlFor="phoneNumber">Telefon raqamingiz</label>
                    <Form.Item
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, telefon raqamingizni kiriting!',
                            },
                        ]}
                    >
                        <Input id='phoneNumber' placeholder='Tel' />
                    </Form.Item>

                    <label htmlFor="serviceId">Xizmatni tanlang</label>
                    <Form.Item
                        name="serviceId"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos, xizmat turini tanlang!',
                            },
                        ]}
                    >
                        <Select
                            defaultValue="Xizmat turi"
                            className="w-full"
                            onChange={handleChange}
                        >
                            {options}
                        </Select>
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 5,
                        }}
                    >
                        {/* onClick={handleOpen} */}
                        <Button  type="primary" htmlType="submit" className='text-white bg-sky-600 block w-fit rounded-md cursor-pointer p-1'>
                            Jo'natish
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    );
};
export default CourseModal;