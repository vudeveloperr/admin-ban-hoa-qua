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
            {/* <thead class="MuiTableHead-root">
              <tr class="MuiTableRow-root MuiTableRow-head">          
                <th class="MuiTableCell-root MuiTableCell-head jss991 jss953" scope="col">
                  <div class="jss987 jss988">
                    <div class="jss986">
                      <span class="jss960">Name</span>
                    </div>
                  </div>
                </th>
                                  
                <th class="MuiTableCell-root MuiTableCell-head jss991 jss956" scope="col">
                  <div class="jss987">
                    <div class="jss986">Type</div>
                  </div>
                </th>
                                    
                <th class="MuiTableCell-root MuiTableCell-head jss991 jss955" scope="col">
                  <div class="jss987">
                    <div class="jss986">Published</div>
                  </div>
                </th>
                                        
                <th class="MuiTableCell-root MuiTableCell-head jss991 jss954" scope="col">
                  <div class="jss987 jss990">
                    <div class="jss986">Price</div>
                  </div>
                </th>
              </tr>
            </thead>

            <table className='MuiTable-root jss963'>
              <tr className="MuiTableRow-root jss962 MuiTableRow-hover" data-test="id" data-test-id="UHJvZHVjdDo3Mg==">
                <td className="MuiTableCell-root MuiTableCell-body jss1043 jss953" data-test="name">
                  <div className="jss1042">
                    <div className="MuiAvatar-root MuiAvatar-circle jss1040">
                      <img src="https://demo.saleor.io/media/__sized__/products/saleordemoproduct_fd_juice_06-thumbnail-255x255.png" className="MuiAvatar-img"/>
                    </div>
                    <div className="jss1041">
                      <div className="jss961">
                        <span>Apple Juice</span>
                        <div className="MuiTypography-root MuiTypography-caption">Configurable</div>
                      </div>
                    </div>
                  </div>
                </td>
                
                <td className="MuiTableCell-root MuiTableCell-body jss956" data-test="product-type">Juice</td>
                
                <td className="MuiTableCell-root MuiTableCell-body jss955" data-test="isPublished" data-test-is-published="true">
                  <div className="jss1096 undefined jss1098">Published</div>
                </td>

                <td className="MuiTableCell-root MuiTableCell-body jss954">$5.00 - $7.00</td>

              </tr>
            </table> */}
        </div>
    )
}
