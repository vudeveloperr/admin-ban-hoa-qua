import { Table } from 'antd';
 
  const columns = [
    {
      title: 'UserName',
      dataIndex: 'name',
      key: 'name',
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

export default function Account(props) {
    return (
        <div className='jss736'>
            <h2>LIST ACCOUNTS</h2>
            <Table dataSource={props.users} columns={columns} />
            
        </div>
    )
}
