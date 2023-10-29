

import {Table} from 'antd';
import {Pencil} from "../../Icons";

const ServiceTab = ({ service }) => {

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
            title: 'Buyurtmachilar soni',
            key: 'buyurtmachiSoni',
            dataIndex: 'buyurtmachiSoni',
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
  
    
    const data = service?.map((item, index) => {
        const date = new Date(item?.createdAt);
        return{
            
            key: item?.id, 
            number: index + 1,
            kursId: item?.id,
            kursNomi: item?.title, 
            buyurtmachiSoni: item?.users.length, 
            yarVaqti: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}    ${date.getHours()}:${date.getMinutes()}`, 
            tahrirlash: <span className='p-1 w-fit block bg-yellow-500 rounded-md text-white cursor-pointer'> <Pencil/> </span>
        }
    });

    return (

        <Table  columns={columns} dataSource={data} pagination={{ position: ["bottomLeft"] }} />
    )
}


export default ServiceTab;