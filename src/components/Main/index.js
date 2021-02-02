import { Layout } from 'antd';
import {SiderMenu} from  '../';
import {Home,Product,Order,Import} from '../../screens';
import { Route } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function Main(props) {
    return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider theme='light' width='15%' style={{maxHeight:'100vh' , overflowY:'scroll'}}>
            <SiderMenu/>
        </Sider>
        <Layout>
            <Header>Header</Header>
            <Content>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={Product}/>
                <Route exact path="/order" component={Order}/>
                <Route exact path="/import" component={Import}/>
            </Content>
        </Layout>
    </Layout>);
}

export default Main;