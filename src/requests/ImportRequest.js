import BaseRequest from './BaseRequest';

const prefix = '/product'

export default class ImportRequest extends BaseRequest {
    
    addQuantity(data){
        const url = `${prefix}`;
        return this.post(url,data); 
    }
}
