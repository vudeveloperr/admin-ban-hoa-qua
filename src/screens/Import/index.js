const dataSource = [
    {
      key: '1',
      image: '',
      name: 'Cornish New Potatoes (500g)',
      remaining: 32,
      description: 'Weight: 500g',
    },
    {
      key: '2',
      name: 'John',
      remaining: 42,
      description: 'Typical weight 220g each',
    },
    {
      key: '3',
      name: 'John',
      remaining: 42,
      description: 'Typical weight 220g each',
    },
    {
      key: '4',
      name: 'John',
      remaining: 42,
      description: 'Typical weight 220g each',
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
      render:  () => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={`https://www.greendale.com//catalogimages/products/cornish_new_potatoes_c.jpg`} />,
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

function Import(props){
    return(
        <div>
            Import
        </div>
    );
}

export default Import;