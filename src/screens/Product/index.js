import { useState, useEffect } from 'react';
import { Table, Form, Input, Modal } from 'antd';
import styled from 'styled-components';
import {connect} from 'react-redux';

import actions from '../../redux/actions/category'

const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

function Product(props) {
    const [modalVisble, setModalVisible] = useState(false)

    const dataSource =[];

    useEffect(
        props.fetchCategory
    ,[])

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

const mapStateToProps = (state) => {
    return{
        category: state.category.category
    }
}   

const mapDispatchToProps = (dispatch) => {
    return{
        fetchCategory: () => {
            dispatch(actions.onFetchCategory())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);