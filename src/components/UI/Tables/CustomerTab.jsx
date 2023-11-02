





import { Table } from 'antd';

const StudentTab = ({ customer }) => {

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
            title: 'Xizmat',
            key: 'xizmat',
            dataIndex: 'xizmat',
        },
        {
            title: 'Ro\'yxatdan o\'tgan vaqti',
            key: 'royxatVaqti',
            dataIndex: 'royxatVaqti',
        }
    ];
  
    
    const data = customer?.map((item, index) => {
        const date = new Date(item?.createdAt);
        return{
            
            key: item?.id, 
            number: index + 1,
            fam: item?.fullName,
            telefon: item?.phoneNumber, 
            xizmat: item?.serviceId?.title, 
            royxatVaqti: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}    ${date.getHours()}:${date.getMinutes()}`, 
            
        }
    });

    return (

        <Table  columns={columns} dataSource={data} pagination={{ position: ["none"] }} />
    )
}


export default StudentTab;