


import { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, message } from 'antd';
import useStudents from '../../../service/students/useStudents';
import useCourses from "../../../service/courses/useCourses";

const CourseModal = ({ open, setOpen }) => {

    const [courseId, setCourseId] = useState([]);

    const handleOpen = () => setOpen(!open);

    const onFinish = (values) => {
        // console.log(values)
        const course = { fullName: values.fullName, phoneNumber: values.phoneNumber, courseId: values.courseId };


        if (course.fullName.trim().length && course.phoneNumber.trim().length && course.courseId) {

            useStudents.userRegistration(course).then((res) => {
                console.log(res)

                if(res.status === 201){
                    message.success("Siz kurska yo'zildingiz!");
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

    const getCourseId = async () => {
        const response = await useCourses.getCourses();
        const result = await response.data;
        setCourseId(result?.courses);
    }

    useEffect(() => {
        getCourseId();
    }, [])

    const options = courseId?.map(item => (
        <Select.Option key={item.id} value={item.id}>
            {item.title}
        </Select.Option>
    ));

    return (
        <>

            <Modal title="Kurslar" open={open} footer={null} onCancel={handleOpen} >

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

                    <label htmlFor="courseId">Xizmatni tanlang</label>
                    <Form.Item
                        name="courseId"
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