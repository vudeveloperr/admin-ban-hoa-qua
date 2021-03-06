export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCEED = 'FETCH_PRODUCTS_SUCCEED'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'


export default {
  onFetchProducts: () => ({
    type: FETCH_PRODUCTS,
  }),
  onFetchProductsSucceed: (data) => ({
    type: FETCH_PRODUCTS_SUCCEED,
    data,
  }),
  onFetchProductsFailed: (err) => ({
    type: FETCH_PRODUCTS_FAILED,
    err,
  }),
};