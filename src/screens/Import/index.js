import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Tabs,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { ImportForm } from './components';

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
  return (
    <div>
      Import
      <hr />
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Import New Product" key="1">

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
        </TabPane>
        <TabPane tab="Add Quantity" key="2">
          <ImportForm />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Import;
