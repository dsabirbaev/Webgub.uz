



import { Space, Table, Tag } from 'antd';


const StudentTab = () => {
    
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
            key: 'royxat',
            dataIndex: 'royxat',
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

    const data = [
        {   
            number: '22',
            key: '1',
            fam: 'John Brown',
            telefon: 32,
            kurs: 'React',
            royxat: '2023',
            holat: 'zor',
            tahrirlash: 'kerak'
        }
       
    ];
    return (

        <Table columns={columns} dataSource={data} />
    )
}


export default StudentTab;