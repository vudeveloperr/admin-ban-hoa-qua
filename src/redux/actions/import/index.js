
export const ADDITION_QUANTITY = 'ADDITION_QUANTITY'
export const ADDITION_QUANTITY_SUCCEED = 'ADDITION_QUANTITY_SUCCEED'
export const ADDITION_QUANTITY_FAILED = 'ADDITION_QUANTITY_FAILED'

export const FETCH_LIST_IMPORT = 'FETCH_LIST_IMPORT'
export const FETCH_LIST_IMPORT_SUCCEED = 'FETCH_LIST_IMPORT_SUCCEED'
export const FETCH_LIST_IMPORT_FAILED = 'FETCH_LIST_IMPORT_FAILED'

export default {
    
    onAdditionQuantity: (data,callback) => ({
        type: ADDITION_QUANTITY,
        data,
        callback
    }),
    onAdditionQuantitySuccess: (data) => ({
        type: ADDITION_QUANTITY_SUCCEED,
        data
    }),
    onAdditionQuantityFailed: (err) => ({
        type: ADDITION_QUANTITY_FAILED,
        err
    }),
    onFetchImport: (data) => ({
        type: FETCH_LIST_IMPORT,
        data
    }),
    onFetchImportSucceed: (data) => ({
        type: FETCH_LIST_IMPORT_SUCCEED,
        data
    }),
    onFetchImportFailed: (err) => ({
        type: FETCH_LIST_IMPORT_FAILED,
        err
    })
}




