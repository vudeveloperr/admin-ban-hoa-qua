export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const FETCH_PRODUCT_SUCCEED = 'FETCH_PRODUCT_SUCCEED'
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED'


export default {
  onFetchProduct: () => ({
    type: FETCH_PRODUCT,
  }),
  onFetchProductSucceed: (data) => ({
    type: FETCH_PRODUCT_SUCCEED,
    data,
  }),
  onFetchProductFailed: (err) => ({
    type: FETCH_PRODUCT_FAILED,
    err,
  }),
};