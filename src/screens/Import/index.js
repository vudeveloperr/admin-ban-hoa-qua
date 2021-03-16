import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Tabs,
  Upload,
  message,
  Table,
  Modal,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from 'styled-components';
import { ImportForm } from "./components";
import moment from 'moment';
import { connect } from 'react-redux';
import importactions from '../../redux/actions/import'

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

  useEffect(
		() => {
			props.fetchImport()
	}, [])

  const [modalVisble, setModalVisible] = useState(false)
  const [ showDetail ] = useState(false)
  
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "vendorsName",
      dataIndex: "vendor_name",
      key: "vendor_name",
    },
    {
      title: "Import Time",
      dataIndex: "",
      key: "last_up_date",
      render : (record)=>(
        moment.unix(record.last_up_date).format('dddd, MMMM Do, YYYY h:mm:ss A')
      )
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Importer",
      dataIndex: "name_admin",
      key: "name_admin",
    },
    // {
    //   render: (record) => (
    //     record.detail
    //   )
    // },
    {
      title: "Detail",
      render: (text, record) => <ButtonWrapper onClick={() => {
        detailClick()
      }}>DETAIL</ButtonWrapper>,
    },
  ];
  const detailClick = () => {
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
      Import
      <hr />
      <Tabs defaultActiveKey="1" type="card">

        <TabPane tab="List Import Product" key="1">
          <Table dataSource={props.import} columns={columns} />
          <Modal title="Detail Import" visible={modalVisble} onOk={modalOk} onCancel={modalCancel}>
            <p> {(props.import.detail || {}).name} </p>
          </Modal>

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

const mapStateToProps = (state) => {
  console.log([...state.imports.product])
  return {
    import: state.imports.product,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImport: () => {
      dispatch(importactions.onFetchImport())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import);
