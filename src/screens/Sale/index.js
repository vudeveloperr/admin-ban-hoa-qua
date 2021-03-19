import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Checkbox, Row, Col, Form, Input, Button, Modal, InputNumber  } from 'antd';
import styled from 'styled-components';
import saleactions from '../../redux/actions/sale'
import moment from 'moment';

const CenterWrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Spacing = styled.div`
  &>*{
    margin-bottom: 10px;
  }
`
const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function Sale(props) {

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'People',
            dataIndex: 'name_admin',
            key: 'name_admin',
        },
        {
            title: 'Time Create Discount',
            dataIndex: '',
            render : (record)=>(
                moment.unix(record.last_up_date).format('dddd, MMMM Do, YYYY h:mm:ss A')
            )
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'Detail',
            render: (text, record, index) => (
                <ButtonWrapper
                    onClick={() => {
                        editClick(record);
                        setRank(record.rank);
                        setEditData(true);
                    }}
                >
                    Edit
                </ButtonWrapper>
            )
        },
        {
            title: 'Action',
            render: (text, record, index) => (
                <ButtonWrapper
                    onClick={() => {
                        editClick(record);
                        setRank(record.rank);
                        setEditData(true);
                    }}
                >
                    Edit
                </ButtonWrapper>
            )
        },
    ];

    useEffect(() => {
        props.fetchSale()
    }, [])

    const formUpdate = (values) => {
        console.log("hiha :", values)
		props.updateDiscount({ ...values, rank: rank}, 
			() => { 
				setVisible(false);
				props.fetchDiscount();
			});
	}
    const formCreate = (values) => {
        props.createDiscount({ ...values},
            () => {
                setVisibleADD(false);
                props.fetchDiscount();
            });
    }

    const [visible, setVisible] = useState(false);
    const [visibleADD, setVisibleADD] = useState(false);
    const [ editData, setEditData ] = useState(0)
    const [addDiscount, setAddDiscount] = useState(false);
    const [rank, setRank] = useState(0);
    let [form] = Form.useForm()

    const modalOk = () => {
        setVisible(false);
    }
    const modalCancel = () => {
        setVisible(false);
    }
    const editClick = (record) => {
        setVisible(true);
        form.setFieldsValue(record);
    }


    const hideModalADD = () => {
        setVisibleADD(false);
    }
    const modalOkADD = () => {
        setVisibleADD(false);
    }

    const addClick = (record) => {
        setVisibleADD(true);
        setAddDiscount(true);
        form.resetFields();
    }


    return (
        <div>
            <div className="btn-discounts">
                <Row className="">
                    <Col span={19} className=''>
                        Sale Off
                    </Col>
                    <Col span={5} className=''>
                    <CenterWrapper>
                        <Button className="btn-create-sale" onClick={addClick}>CREATE SALE CAMPAIGN</Button>
                    </CenterWrapper>
                    </Col>
                </Row>
                <hr/>
                <Spacing>
                    <Modal
                        title="Add New Discount"
                        visible={visibleADD}
                        onCancel={hideModalADD}
                        onOk={modalOkADD}
                    >
                        <Form {...layout} form={form} onFinish={formCreate} name="control-ref">
                            <Form.Item name="rank" label="Rank" rules={[{ required: true }]}>
                                <InputNumber min={1} max={10} defaultValue={1}/>
                            </Form.Item>
                            <Form.Item name="rate" label="Rate" rules={[{ required: true }]}>
                                <InputNumber min={1} max={10} defaultValue={1}/>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    <Modal title="Detail Vendors" visible={visible} onOk={modalOk} onCancel={modalCancel}>
                        <Form {...layout} form={form} onFinish={formUpdate} name="control-ref">
                            <Form.Item name="rank" label="Rank" rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                            <Form.Item name="rate" label="Rate" rules={[{ required: true }]}>
                                <InputNumber />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Spacing>
            </div>
            <Table dataSource={props.sale} columns={columns} />
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log("sale",state)
    return{
        sale: state.sale.sale
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchSale: () => {
            dispatch(saleactions.onFetchSales())
        },
        updateSale: (data, callback) => {
            dispatch(saleactions.onUpdateSale(data, callback))
        },
        createSale: (data, callback) => {
            dispatch(saleactions.onCreateSale(data, callback))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)