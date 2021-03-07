import BaseRequest from './BaseRequest';

const prefix = '/product'

export default class ProductRequest extends BaseRequest {
    fetchProducts(params){
        const url = `${prefix}/list`;
        console.log("params", params)
        return this.get(url, params); 
    }
}
