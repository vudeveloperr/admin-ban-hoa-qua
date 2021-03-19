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
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ImportForm } from "./components";
import moment from "moment";
import { connect } from "react-redux";
import importactions from "../../redux/actions/import";
import vendoractions from "../../redux/actions/vendors";
import productactions from '../../redux/actions/product';

const { Option } = Select;

const ButtonWrapper = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;

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
  useEffect(() => {
    props.fetchImport();
    props.fetchVendors();
    props.fetchProducts();
  }, []);

  const [modalVisble, setModalVisible] = useState(false);
  const [showDetail] = useState(false);
  let [form] = Form.useForm()

  const formCreate = (values) => {
    console.log("hihi",values)
    delete values[""]
    

    // props.createImport({ ...values},
    //     () => {
    //         props.fetchImport();
    //     });
}

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
      render: (record) =>
        moment
          .unix(record.last_up_date)
          .format("dddd, MMMM Do, YYYY h:mm:ss A"),
    },
    {
      title: "Importer",
      dataIndex: "name_admin",
      key: "name_admin",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      render: (text, record) => (
        <div>
          {record.detail.map((item) => (
            <>
              <p>
                {item.name} | Unit: {item.unit}
              </p>
              <p>
                Quantity: {item.quantity}, Price: {item.price} $
              </p>
            </>
          ))}
        </div>
      ),
    },
    {
      title: "Total",
      dataIndex: "",
      key: "total",
      render: (record) => <>{record.total} $</>,
    },
  ];
  const detailClick = () => {
    setModalVisible(true);
  };

  const modalOk = () => {
    setModalVisible(false);
  };

  const modalCancel = () => {
    setModalVisible(false);
  };
  return (
    <div>
      Import
      <hr />
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="List Import Product" key="1">
          <Table dataSource={props.import} columns={columns} />
          <Modal
            title="Detail Import"
            visible={modalVisble}
            onOk={modalOk}
            onCancel={modalCancel}
          >
            <p> {(props.import.detail || {}).name} </p>
          </Modal>
        </TabPane>

        <TabPane tab="Import Quantity Product" key="2">
          <Form {...layout} form={form} onFinish={formCreate} name="control-ref">
            <Form.Item name="vendor_id" label="Vendors" rules={[{ required: true }]}>
              <Select>
                {props.vendors.map((item) => (
                  <Option key={parseInt(item.id)} value={parseInt(item.id)}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="product_id" label="Product" rules={[{ required: true }]}>
              <Select>
                {props.product.map((item) => (
                  <Option key={parseInt(item.id)} value={parseInt(item.id)}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="price"
              label="Import Money"
              rules={[{ required: true }]}
            >
              <InputNumber
                style={{
                  width: 200,
                }}
                defaultValue="1"
                min="0"
                max="50"
                step="0.01"
                stringMode
              />
            </Form.Item>
            <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
              <Select defaultValue="kg" style={{ width: 120 }}>
                <Option value="g">gram</Option>
                <Option value="kg">kg</Option>
                <Option value="ton">ton</Option>
                <Option value="pound">pound</Option>
                <Option value="ounce">ounce</Option>
              </Select>
            </Form.Item>
            <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}>
              <InputNumber defaultValue="1"
                min="1"
                max="100"/>
            </Form.Item>
            
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        {/* <TabPane tab="Add Quantity" key="3">
          <ImportForm />
        </TabPane> */}
      </Tabs>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    import: state.imports.product,
    vendors: state.vendors.vendors,
    product: state.product.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (params, callback) => {
			dispatch(productactions.onFetchProducts(params, callback))
		},
    fetchImport: () => {
      dispatch(importactions.onFetchImport());
    },
    createImport: () => {
      dispatch(importactions.onCreateImport());
    },
    fetchVendors: () => {
      dispatch(vendoractions.onFetchVendors());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
