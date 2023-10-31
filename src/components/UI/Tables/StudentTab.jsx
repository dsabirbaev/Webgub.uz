

import { useState } from 'react';
import { StudentModal } from "../../UI/Modals";
import { Table } from 'antd';
import { Pencil, Check, DoubleCheck } from "../../Icons";

const StudentTab = ({ student }) => {
    
    const [open, setOpen] = useState(false);
    const [idUser, setIdUser] = useState(null);
    const columns = [
        {
            title: '#',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'F.I.SH',
            dataIndex: 'fam',
            key: 'fam',
        },
        {
            title: 'Telefon',
            dataIndex: 'telefon',
            key: 'telefon',
        },
        {
            title: 'Kurs',
            key: 'kurs',
            dataIndex: 'kurs',
        },
        {
            title: 'Ro\'yxatdan o\'tgan vaqti',
            key: 'royxatVaqti',
            dataIndex: 'royxatVaqti',
        },
        {
            title: 'Holat',
            key: 'holat',
            dataIndex: 'holat',
        },
        {
            title: 'Tahrirlash',
            key: 'tahrirlash',
            dataIndex: 'tahrirlash',
        },

    ];

    const openModal = (id) => {
        setOpen(!open)
        setIdUser(id)
    }

   
    const data = student?.map((item, index) => {
        const date = new Date(item?.createdAt);
       
        return {

            key: item?.id,
            number: index + 1,
            fam: item?.fullName,
            telefon: item?.phoneNumber,
            kurs: item?.courseId?.title,
            royxatVaqti: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}    ${date.getHours()}:${date.getMinutes()}`,
            holat: <span className={`p-1 w-fit block ${ item?.status == 2 ? "bg-green-500 text-white" : "bg-yellow-500"}  rounded-md`}>{item?.status == 2 ? <DoubleCheck/> : <Check /> } </span>,
            tahrirlash: <span onClick={() => openModal(item?.id)}  className='p-1 w-fit block bg-yellow-500 rounded-md text-white cursor-pointer'> <Pencil /> </span>
        }
    });

    return (
        <>
                <StudentModal open={open} setOpen={setOpen} id={idUser}/>
                <Table columns={columns} dataSource={data} pagination={{ position: ["bottomLeft"] }} />
        </>
        
    )
}


export default StudentTab;