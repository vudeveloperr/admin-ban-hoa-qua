import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      username: 'admin',
      type: 'admin',
      phone: '0987654321',
      email: 'admin@gmail.com',
      gender: 'male',
    },
    {
      key: '2',
      username: 'vanvu',
      type: 'user',
      phone: '0987654321',
      email: 'vanvu@gmail.com',
      gender: 'male',
    },
    {
      key: '3',
      username: 'namnguyen',
      type: 'user',
      phone: '0987654321',
      email: 'namnguyen@gmail.com',
      gender: 'male',
    },
    {
      key: '4',
      username: 'dungtran',
      type: 'user',
      phone: '0987654321',
      email: 'dungtran@gmail.com',
      gender: 'male',
    },
    {
      key: '5',
      username: 'tuyenthe',
      type: 'user',
      phone: '0987654321',
      email: 'tuyenthe@gmail.com',
      gender: 'male',
    },
  ];
  
  const columns = [
    {
      title: 'UserName',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

export default function Account() {
    return (
        <div className='jss736'>
            <h2>LIST ACCOUNTS</h2>
            <Table dataSource={dataSource} columns={columns} />
            
        </div>
    )
}
