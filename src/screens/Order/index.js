import {useState, useEffect} from 'react';
import {Table, Modal} from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import orderactions from '../../redux/actions/order'
import moment from 'moment';

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

    useEffect(
		() => {
			props.fetchOrders()
            // props.acceptOrder()
		}, [])
    

    const columns = [
        {
            title: "OrderId",
            dataIndex: 'id',
        },
        {
            title: "CusName ",
            dataIndex: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address'
        },
        {
            title: 'Time Order',
            dataIndex: '',
            render : (record)=>(
                moment.unix(record.last_update).format('dddd, MMMM Do, YYYY h:mm:ss A')
            )
        },
        {
            title: "Order's state",
            dataIndex: 'current_status'
        },
        {
            title: 'Phone',
            dataIndex: 'number'
        },
        {
            title: 'Require',
            dataIndex: 'detail'
        },
        {
            render: () => (
                <ButtonWrapper
                    onClick={detailClick}
                >
                    Accept
                </ButtonWrapper>
            )
        },
    ];

    const detailClick = (record) => {
        // setModalVisible(true);
        props.acceptOrder(record.id)
    }

    return(
        <div>
            <Table dataSource={props.order} columns={columns} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        order: state.order.order,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => {
            dispatch(orderactions.onFetchOrders())
        },
        acceptOrder: () => {
            dispatch(orderactions.onUpdateOrder())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)