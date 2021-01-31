import { Layout } from 'antd';
import {SiderMenu} from  '../';
import {Home} from '../../screens';
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
            </Content>
        </Layout>
    </Layout>);
}

export default Main;