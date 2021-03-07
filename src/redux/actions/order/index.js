export const FETCH_ORDERS = 'FETCH_ORDERS'
export const FETCH_ORDERS_SUCCEED = 'FETCH_ORDERS_SUCCEED'
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED'


export default {
  onFetchOrders: () => ({
    type: FETCH_ORDERS,
  }),
  onFetchOrdersSucceed: (data) => ({
    type: FETCH_ORDERS_SUCCEED,
    data,
  }),
  onFetchOrdersFailed: (err) => ({
    type: FETCH_ORDERS_FAILED,
    err,
  }),
};