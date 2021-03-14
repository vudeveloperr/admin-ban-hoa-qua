import BaseRequest from './BaseRequest';

const prefix = '/vendor'

export default class VendorsRequest extends BaseRequest {

    fetchVendors(){
        const url = `${prefix}`;
        return this.get(url);
    }

}
