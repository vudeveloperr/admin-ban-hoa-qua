import BaseRequest from './BaseRequest';

const prefix = '/product'

export default class ProductRequest extends BaseRequest {
    fetchProducts(params){
        const url = `${prefix}/list`;
        return this.get(url, params); 
    }
    createProduct(data){
        const url = `${prefix}`;
        return this.post(url,data); 
    }
}
