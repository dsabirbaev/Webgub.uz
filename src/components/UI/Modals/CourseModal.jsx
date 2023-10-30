



import { Modal, Form, Input, Button, Upload } from 'antd';
import { PlusModal } from "../../Icons";


const CourseModal = ({ open, setOpen }) => {

    const { TextArea } = Input;

    const handleOpen = () => setOpen(!open);

    const onFinish = (values) => {
        console.log(values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                        <Upload>
                            <Button>Choose File</Button>
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
                        <Input id='title' />
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
                        <TextArea rows={4} id='description' />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 5,
                        }}
                    >
                        <Button type="primary" htmlType="submit" className='text-white bg-sky-600 block w-fit rounded-md cursor-pointer p-1'>
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