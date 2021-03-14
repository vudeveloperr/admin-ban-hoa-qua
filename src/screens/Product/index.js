import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { Products } from './components';
import productactions from '../../redux/actions/product'
import categoryactions from '../../redux/actions/category'



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
		props.fetchProducts({ page, size }, (totalCount) => {
			setTotalCount(totalCount)
		}
		)
	}


	return (
		<>
			<section class="ftco-section">
				<div class="container">
					<Products
						products={props.product}
						category={props.category}
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
