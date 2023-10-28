
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from 'antd';
import logo from "../../assets/icons/logo.svg";

import userAPI from '../../service/user/userAPI';

const index = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = (values) => {
        setIsLoading(true);
        const user = {username: values.username, password: values.parol};

        if (user.username.trim().length && user.password.trim().length){
            userAPI.login(user).then((res) => {
           
                
                localStorage.setItem("token", res?.data?.token);
                localStorage.setItem("fullName", res?.data?.admin?.fullName);
                localStorage.setItem("my_id", res?.data?.admin?._id);

                if(res.status === 200 && localStorage.getItem("token")){
                
                    res?.data && message.success("Siz tizimga kirdingiz!");
                    res.data && setIsLoading(false);
                    navigate("/dashboard");
                    
                }
                
            }).catch((err) => {
                console.log(err.message);
                setIsLoading(false);
                message.error("Tizimga kirishta xatolik bo'ldi!")
            })
        }else{
            message.warning("Iltimos, barcha maydonlarni to'ldiring!")
        }

       
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <section>
            <div className='flex items-center justify-center w-screen h-screen'>
                <div className='border flex flex-col items-center rounded-md shadow-xl p-5 border-t-4 border-t-indigo-600'>
                    <img className='mb-5' src={logo} alt="logo" />
                    <div>
                        <Form
                            className=' w-[500px]'
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
                            <label htmlFor="login">Foydalanuvchi nomi</label>
                            <Form.Item
                                
                                // label="Foydalanuvchi nomi"
                                name="username"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Iltimos, foydalanuvchi nomingizni kiriting!',
                                    },
                                ]}
                            >
                                <Input id='login' />
                            </Form.Item>
                            <label htmlFor="parol">Parol</label>
                            <Form.Item
                                // label="Parol"
                                name="parol"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Iltimos, parolingizni kiriting!',
                                    },
                                ]}
                            >
                                <Input.Password id='parol'/>
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 0,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Saqlap qo'lish</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 16,
                                }}
                            >
                                <Button loading={isLoading} type="primary" htmlType="submit" className='bg-indigo-600'>
                                    Kirish
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;