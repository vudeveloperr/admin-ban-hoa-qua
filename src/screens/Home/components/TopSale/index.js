import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      image: 'https://www.greendale.com//catalogimages/products/cornish_new_potatoes_c.jpg',
      name: 'Cornish New Potatoes (500g)',
      remaining: 32,
      description: 'Weight: 500g',
    },
    {
      key: '2',
      image: 'https://www.greendale.com//catalogimages/products/courgettes_yellow.jpg',
      name: 'Yellow Courgettes',
      remaining: 42,
      description: 'Typical weight 220g each',
    },
    {
      key: '3',
      image: 'https://www.greendale.com//catalogimages/products/potatoes.jpg',
      name: 'Daisy Potatoes - 1kg',
      remaining: 42,
      description: 'Weight: 1kg',
    },
    {
      key: '4',
      image: 'https://www.greendale.com//catalogimages/products/maris_piper_potatoes_1.jpg',
      name: 'Maris Piper Potatoes 1kg',
      remaining: 42,
      description: 'Weight: 1kg',
    },
  ];
  
  const columns = [
    {
      title: 'Top',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Image',
      render:  (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
      dataIndex: 'image',
      key: 'image',
      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Remaining',
      dataIndex: 'remaining',
      key: 'remaining',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

export default function TopSale() {
    return (
        <div className='jss736'>
            <h2>Top Sale</h2>
            
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
