import {useState} from 'react';
import {Table, Modal} from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`
function Order(props){
    const [modalVisble, setModalVisible] = useState(false)
    const dataSource = [

    ];

    const columns = [
        {

        },
        {
            title: "Customer's name ",
        },
        {
            title: 'Address',
        },
        {
            title: 'Total',
        },
        {
            title: "Order's state",
        },
        {
            title: 'Remaining',
        },
        {
            render: () => (
                <ButtonWrapper
                    onClick={detailClick}
                >
                    Detail
                </ButtonWrapper>
            )
        },
    ];

    const detailClick = () => {
        setModalVisible(true);
    }

    const modalOk = () => {
        setModalVisible(false);
    }

    const modalCancel = () => {
        setModalVisible(false);
    }

    return(
        <div>
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                title="Edit Product"
                visible={modalVisble}
                onOk={modalOk}
                onCancel={modalCancel}
            >

            </Modal>
        </div>
    );
}

export default Order;