import React from 'react'
import { Table, Checkbox } from 'antd';

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
        remaining: 56,
        description: 'Weight: 1kg',
    },
    {
        key: '4',
        image: 'https://www.greendale.com//catalogimages/products/maris_piper_potatoes_1.jpg',
        name: 'Maris Piper Potatoes 1kg',
        remaining: 11,
        description: 'Weight: 1kg',
    },
    {
        key: '5',
        image: 'https://www.greendale.com//catalogimages/products/parsnips_1.jpg',
        name: 'Parsnips 500g',
        remaining: 8,
        description: 'Weight: 500g',
    },
    {
        key: '6',
        image: 'https://www.greendale.com//catalogimages/products/ginger.jpg',
        name: 'Ginger',
        remaining: 15,
        description: 'Weight: 100g',
    },
    {
        key: '7',
        image: 'https://www.greendale.com//catalogimages/products/IMG_0339.jpg',
        name: 'Pre-Packed Radishes',
        remaining: 9,
        description: 'Weight: 150g',
      },
      {
        key: '8',
        image: 'https://www.greendale.com//catalogimages/products/swede.jpg',
        name: 'Fresh Local Swede',
        remaining: 12,
        description: 'Typical weight 500g each',
      },
];

const columns = [
    {
        title: 'Select',
        render: () => <Checkbox></Checkbox>
    },
    {
        title: 'Image',
        render: (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
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
export default function Discounts() {
    return (
        <div>
            Discounts
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
