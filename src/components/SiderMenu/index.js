import { Menu } from 'antd';
import {Link} from 'react-router-dom';

function SiderMenu(props) {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
           <Menu.Item><Link to='/'>Home</Link></Menu.Item>
           <Menu.Item><Link to='/order'>Order</Link></Menu.Item>
           <Menu.Item><Link to='/product'>Product</Link></Menu.Item>
           <Menu.Item><Link to='/import'>Import</Link></Menu.Item>
           <Menu.Item><Link to='/user-control'>User control</Link></Menu.Item>
        </Menu>
    );
}

export default SiderMenu;