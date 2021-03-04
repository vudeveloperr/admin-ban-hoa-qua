import { useState } from 'react'
import { Table, Checkbox, Row, Col, Form, Input, Upload, Button, Modal, InputNumber  } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import styled from 'styled-components';
const CenterWrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Spacing = styled.div`
  &>*{
    margin-bottom: 10px;
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

const dataSource = [
    {
        key: '1',
        name: 'Cornish New Potatoes (500g)',
        remaining: 32,
        description: 'Weight: 500g',
    },
];

const columns = [
    {
        title: 'Select',
        render: () => <Checkbox></Checkbox>
    },
    {
        title: 'Name Sale Off Event',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
    },
    {
        title: 'Time',
        dataIndex: 'lastupdate',
        key: 'lastupdate',
    },
];
export default function Discounts(props) {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }
    return (
        <div>
            Discounts
            <hr/>
            <div className="btn-discounts">
                <Row className="">
                    <Col span={21} className=''></Col>
                    <Col span={3} className=''>
                    <CenterWrapper>
                        <Button className="btn-create-sale" onClick={showModal}>CREATE SALE</Button>
                    </CenterWrapper>
                    </Col>
                </Row> 
                <Spacing>
                    
                    <Modal
                        title="Add New SaleOff Campaign"
                        visible={visible}
                        onCancel={hideModal}
                    >
                        <Form {...layout} name="control-ref">
                            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="importmoney" label="Import Money" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="price" label="Price on Page" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="remaining" label="Quantity" >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Upload Image For Banner">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
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
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
