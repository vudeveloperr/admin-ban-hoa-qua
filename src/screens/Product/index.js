import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { CustomPagination, Products } from './components';
import productactions from '../../redux/actions/product'
import categoryactions from '../../redux/actions/category'

function Product(props) {
    useEffect(
		() => {
			props.fetchCategory()
			props.fetchProducts({ size: 8 })
		}
		, [])

	const onPageChange = (page, size) => {	
		props.fetchProducts({ page: page, size: 8 })
		
	}

    return (
        <>
            <section class="ftco-section">
				<div class="container">
					<Products
						products={props.product}
					/>
					<CustomPagination
						total={props.total_count}
						onPageChange={onPageChange}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch(productactions.onFetchProducts())
        },
        fetchCategory: () => {
            dispatch(categoryactions.onFetchCategory())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
