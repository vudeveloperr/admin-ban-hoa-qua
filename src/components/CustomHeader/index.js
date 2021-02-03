import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const AvatarWrapper = styled.div`
    width: fit-content;
    float:right;
`
const menu = (
    <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>1</Menu.Item>
    </Menu>
)


function CustomHeader(props) {
    return (
        <Dropdown
            overlay={menu}
            trigger={['click']}
        >
            <AvatarWrapper>
                <Avatar
                    icon={<UserOutlined />}
                    size="large"
                />
            </AvatarWrapper>
        </Dropdown>
    );
}

export default CustomHeader;