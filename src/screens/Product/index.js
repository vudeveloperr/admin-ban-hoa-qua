import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { Products } from './components';
import productactions from '../../redux/actions/product'
import categoryactions from '../../redux/actions/category'
import { Row, Col, Form, Input, Upload, Button, Modal, InputNumber  } from 'antd';
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


function Product(props) {

	const [totalCount, setTotalCount] = useState(0)
	const [currenPage, setCurrenPage] = useState(1)

    useEffect(
		() => {
			props.fetchCategory()
			getData()
		}
		, [])

	const getData = (page = 1, size = 10) => {
		props.fetchProducts({page, size}, (totalCount) => {
			console.log(totalCount)
			setTotalCount(totalCount)
		}
		)
	}
	const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }

    return (
        <>
            <section class="ftco-section">
				<div className="btn-discounts">
					<Row className="">
						<Col span={19} className=''> 
							List Product
						</Col>
						<Col span={5} className=''>
						<CenterWrapper>
							<Button className="btn-create-sale" onClick={showModal}>CREATE NEW PRODUCT</Button>
						</CenterWrapper>
						</Col>
					</Row> 
					<hr/>
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
				<div class="container">
					<Products
						products={props.product}
						fetchProducts={props.fetchProducts}
						totalCount={props.total_count}
					/>
				</div>
			</section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.category.category,
        product: state.product.product,
		total_count: state.product.total_count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (params, callback) => {
            dispatch(productactions.onFetchProducts(params, callback))
        },
        fetchCategory: () => {
            dispatch(categoryactions.onFetchCategory())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
