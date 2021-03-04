import { useState, useEffect } from 'react';
import { Table, Form, Input, Modal } from 'antd';
import styled from 'styled-components';
import {connect} from 'react-redux';

import productactions from '../../redux/actions/product'
import categoryactions from '../../redux/actions/category'


const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

function Product(props) {
    const [modalVisble, setModalVisible] = useState(false)

    useEffect(
        props.fetchProducts,
        props.fetchCategory
    ,[])

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            render:  (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
            key: 'image'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit'
        },
        {
            title: 'Category',
            dataIndex: 'category_id',
            key: 'category_id',
            // render: () => props.category_id.find((dataIndex) => {return dataIndex}).name
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'AVGRate',
            dataIndex: 'rate_avg',
            key: 'rate_avg',
        },
        {
            title: 'Remaining',
            dataIndex: 'remaining',
            key: 'remaining',
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
            <Table dataSource={props.product} columns={columns}/>
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
        category: state.category.category,
        product: state.product.product,
    }
}   

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts: () => {
            dispatch(productactions.onFetchProduct())
        },
        fetchCategory: () => {
            dispatch(categoryactions.onFetchCategory())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);