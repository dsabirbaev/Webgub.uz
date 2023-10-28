import { useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import BreadCrumb from "../../components/UI/BreadCrumb";
import userAPI from '../../service/user/userAPI';
const index = () => {
    
    const [info, setInfo] = useState([]); 

    const onFinish = (values) => {
        console.log(values)
        
        const user = { fullName: values.fullName, username: values.username, password: values.parol };
        console.log(user)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const getAdmin = async() => {
        const response = await userAPI.getMe();
        const res = await response.data;
        setInfo(res);
    }
    console.log(info?.admin?.fullName)
    useEffect(() => {
        getAdmin();
    },[])
    return (
        <div className="flex flex-col gap-y-5">
            <div className="rounded-md bg-white p-4">
                <span className="font-['SairaSemiBold'] text-blue-600">Sozlamalar</span>
                <BreadCrumb text={"Sozlamalar"} />
            </div>

            <div className="rounded-md bg-white p-4">
                <div className=''>
                    <Form
                        className=' w-full'
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
                        <label htmlFor="fullname">F.I.SH</label>
                        <Form.Item
                            name="fullName"
                            
                            rules={[
                                {
                                    required: false,
                                    message: 'Iltimos, foydalanuvchi to\'liq ism sharifingizni kiriting!',
                                },
                            ]}
                        >
                            <Input id='fullname'   />
                        </Form.Item>

                        <label htmlFor="login">Foydalanuvchi nomi</label>
                        <Form.Item
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

                        <label htmlFor="parol">Foydalanuvchi paroli</label>
                        <Form.Item

                            name="parol"
                            rules={[
                                {
                                    required: false,
                                    message: 'Iltimos, parolingizni kiriting!',
                                },
                            ]}
                        >
                            <Input.Password id='parol' />
                        </Form.Item>



                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" className='bg-indigo-600'>
                                Tahrirlash
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default index;