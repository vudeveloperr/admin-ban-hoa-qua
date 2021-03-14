import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Tabs,
  Upload,
  message,
  Table,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from 'styled-components';
import { ImportForm } from "./components";


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

const { TabPane } = Tabs;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Import(props) {
  const [modalVisble, setModalVisible] = useState(false)
  const dataSource = {};

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text) => (
        <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />
      ),
      key: "image",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Category",
      dataIndex: "category_id",
      key: "category_id",
      // render: () => props.category_id.find((dataIndex) => {return dataIndex}).name
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "AVGRate",
      dataIndex: "rate_avg",
      key: "rate_avg",
    },
    {
      title: "Remaining",
      dataIndex: "remaining",
      key: "remaining",
    },
    {
      render: () => <ButtonWrapper onClick={editClick}>Edit</ButtonWrapper>,
    },
  ];
  const editClick = () => {
    setModalVisible(true);
  };

  return (
    <div>
      Import
      <hr />
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="List Import Product" key="1">
          <Table
            dataSource={dataSource}
            columns={columns}
            // pagination={{
            //     current: currentPage,
            //     onChange: ((page, pageSize) => {
            //         props.fetchProducts({page, size: pageSize})
            //         setCurrentPage(page)
            //     }),
            //     total: totalCount
            // }}
          />
        </TabPane>
        <TabPane tab="Import New Product" key="2">
          <Form {...layout} name="control-ref">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="importmoney"
              label="Import Money"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price on Page"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="remaining" label="Quantity">
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
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
        </TabPane>
        <TabPane tab="Add Quantity" key="3">
          <ImportForm />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Import;
