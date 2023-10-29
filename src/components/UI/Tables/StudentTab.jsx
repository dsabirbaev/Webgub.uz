



import { Table } from 'antd';
import {Pencil, Check} from "../../Icons";

const StudentTab = ({ student }) => {

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
  
    
    const data = student?.map((item, index) => {
        const date = new Date(item?.createdAt);
        return{
            
            key: item?.id, 
            number: index + 1,
            fam: item?.fullName,
            telefon: item?.phoneNumber, 
            kurs: item?.courseId?.title, 
            royxatVaqti: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}    ${date.getHours()}:${date.getMinutes()}`, 
            holat: <span className='p-1 w-fit block bg-yellow-500 rounded-md'> <Check/></span>, 
            tahrirlash: <span className='p-1 w-fit block bg-yellow-500 rounded-md text-white cursor-pointer'> <Pencil/> </span>
        }
    });

    return (

        <Table  columns={columns} dataSource={data} pagination={{ position: ["bottomLeft"] }} />
    )
}


export default StudentTab;