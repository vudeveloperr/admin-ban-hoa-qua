import BaseRequest from './BaseRequest';

const prefix = '/product'

export default class ProductRequest extends BaseRequest {
    fetchProducts(){
        const url = `${prefix}/`;
        return this.get(url); 
    }
}
