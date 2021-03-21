import { Menu } from 'antd';
import {Link} from 'react-router-dom';

function SiderMenu(props) {
    return (
        <Menu
            defaultSelectedKeys={[window.location.pathname]}
            mode="inline"
        >
           <Menu.Item key='/'><Link to='/'>Home</Link></Menu.Item>
           <Menu.Item key='/order'><Link to='/order'>Order Manager</Link></Menu.Item>
           <Menu.Item key='/product'><Link to='/product'>Product Manager</Link></Menu.Item>
           <Menu.Item key='/category'><Link to='/category'>Category Manager</Link></Menu.Item>
           <Menu.Item key='/import'><Link to='/import'>Import Manager</Link></Menu.Item>
           <Menu.Item key='/user-control'><Link to='/user-control'>User Manager</Link></Menu.Item>
           <Menu.Item key='/discounts'><Link to='/discount'>Discounts Manager</Link></Menu.Item>
           <Menu.Item key='/statistic'><Link to='/statistic'>Statistic</Link></Menu.Item>
           <Menu.Item key='/vendors'><Link to='/vendors'>Vendors Manager</Link></Menu.Item>
           <Menu.Item key='/sale'><Link to='/sale'>Sale Off Manager</Link></Menu.Item>
        </Menu>
    );
}

export default SiderMenu;