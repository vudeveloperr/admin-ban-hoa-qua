import { useState } from 'react';
import { Form, Input, Upload, Select, Table, Button, Modal, InputNumber } from 'antd';
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
const { Option } = Select;

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

function ImportForm(props) {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }
    return (
        <Spacing>
            <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Table />
            <CenterWrapper>
                <Button onClick={showModal}>Add Product</Button>
            </CenterWrapper>
            <Modal
                title="Modal"
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
                    <Form.Item label="Upload Image Product">
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

    )
}

export default ImportForm;


