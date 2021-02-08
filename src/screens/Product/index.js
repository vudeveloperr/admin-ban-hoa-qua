import { useState } from 'react';
import { Table, Form, Input, Modal } from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

function Product(props) {
    const [modalVisble, setModalVisible] = useState(false)

    const dataSource = [

    ];

    const columns = [
        {

        },
        {
            title: 'Name',
        },
        {
            title: 'Unit',
        },
        {
            title: 'Category',
        },
        {
            title: 'Price',
        },
        {
            title: 'Rate',
        },
        {
            title: 'Remaining',
        },
        {
            render: () => (
                <ButtonWrapper
                    onClick={editClick}
                >
                    Edit
                </ButtonWrapper>
            )
        },
    ];

    const editClick = () => {
        setModalVisible(true);
    }

    const modalOk = () => {
        setModalVisible(false);
    }

    const modalCancel = () => {
        setModalVisible(false);
    }



    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                title="Edit Product"
                visible={modalVisble}
                onOk={modalOk}
                onCancel={modalCancel}
            >
                <Form>

                </Form>
            </Modal>
        </div>
    )
}

export default Product;