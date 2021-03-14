import { useState, useEffect } from 'react';
import { Table, Form, InputNumber, Modal, Select, Button } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  

function Products(props) {
    const [modalVisble, setModalVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)

    const [form] = Form.useForm();

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
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
            render: (text) => {
                return (props.category.find((item) => (item.id === text.toString())) || {}).name
            }
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
            render: (text,record) => (
                <ButtonWrapper
                    onClick={() => editClick(record)}
                >
                    Edit
                </ButtonWrapper>
            )
        },
    ];

    const editClick = (record) => {
        form.setFieldsValue(record)
        setModalVisible(true);
    }

    const modalOk = () => {
        setModalVisible(false);
    }

    const modalCancel = () => {
        setModalVisible(false);
    }

    useEffect(() => {
        setTotalCount(props.totalCount)
    }, [props.totalCount])


    return (
        <div>
            <Table dataSource={props.products} columns={columns}
                pagination={{
                    current: currentPage,
                    onChange: ((page, pageSize) => {
                        props.fetchProducts({ page, size: pageSize })
                        setCurrentPage(page)
                    }),
                    total: totalCount
                }}
            />
            <Modal
                title="Edit Product"
                visible={modalVisble}
                onOk={modalOk}
                onCancel={modalCancel}
                footer={false}
            >
                <Form
                    form={form}
                    {...layout}
                >
                    <Form.Item
                        label="Category"
                        name="category_id"
                    >
                        <Select>
                            {
                                props.category.map((item) => (
                                    <Option key={item.id} value={parseInt(item.id,10)}>{item.name}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                    {...tailLayout}
                    >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Products;