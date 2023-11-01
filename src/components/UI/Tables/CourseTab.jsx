import { useState } from 'react';
import { Table } from 'antd';
import { EditCourse } from '../Modals';
import { Pencil } from "../../Icons";

const CourseTab = ({ course }) => {
    const [open, setOpen] = useState(false);
    const [idCourse, setIdCourse] = useState("");
    const columns = [
        {
            title: '#',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'Kurs id',
            dataIndex: 'kursId',
            key: 'kursId',
        },
        {
            title: 'Kurs nomi',
            key: 'kursNomi',
            dataIndex: 'kursNomi',
        },
        {
            title: 'O\'quvchilar soni',
            key: 'talabalarSoni',
            dataIndex: 'talabalarSoni',
        },
        {
            title: 'Yaratilgan vaqti',
            key: 'yarVaqti',
            dataIndex: 'yarVaqti',
        },
        {
            title: 'Tahrirlash',
            key: 'tahrirlash',
            dataIndex: 'tahrirlash',
        },

    ];

    const getId = (id) => {
        setOpen(!open)
        setIdCourse(id)
    }
  

    const data = course?.map((item, index) => {
        const date = new Date(item?.createdAt);
        return {

            key: item?.id,
            number: index + 1,
            kursId: item?.id,
            kursNomi: item?.title,
            talabalarSoni: item?.students.length,
            yarVaqti: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}    ${date.getHours()}:${date.getMinutes()}`,
            tahrirlash: <span onClick={() => getId(item?.id)} className='p-1 w-fit block bg-yellow-500 rounded-md text-white cursor-pointer'> <Pencil /> </span>
        }
    });

    return (
        <>
            <EditCourse  open={open} setOpen={setOpen} idCourse={idCourse}/>
            <Table columns={columns} dataSource={data} pagination={{ position: ["bottomLeft"] }} />
        </>

    )
}


export default CourseTab;