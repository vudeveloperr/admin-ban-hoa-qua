import { Menu } from 'antd';
import {Link} from 'react-router-dom';

function SiderMenu(props) {
    return (
        <Menu
            defaultSelectedKeys={[window.location.pathname]}
            mode="inline"
        >
           <Menu.Item key='/'><Link to='/'>Home</Link></Menu.Item>
           <Menu.Item key='/order'><Link to='/order'>Order</Link></Menu.Item>
           <Menu.Item key='/product'><Link to='/product'>Product</Link></Menu.Item>
           <Menu.Item key='/import'><Link to='/import'>Import</Link></Menu.Item>
           <Menu.Item key='/user-control'><Link to='/user-control'>User control</Link></Menu.Item>
           <Menu.Item key='/discounts'><Link to='/discount'>Discounts</Link></Menu.Item>
           <Menu.Item key='/statistic'><Link to='/statistic'>Statistic</Link></Menu.Item>
           <Menu.Item key='/vendors'><Link to='/vendors'>Vendors</Link></Menu.Item>
           <Menu.Item key='/sale'><Link to='/sale'>Sale Off</Link></Menu.Item>
        </Menu>
    );
}

export default SiderMenu;