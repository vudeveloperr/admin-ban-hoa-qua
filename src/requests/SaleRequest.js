import BaseRequest from './BaseRequest';

const prefix = '/sale'

export default class SaleRequest extends BaseRequest {

    fetchSales(){
        const url = `${prefix}`;
        return this.get(url);
    }
    createSale(data){
        const url = `${prefix}/`;
        return this.post(url,data); 
    }
    updateSale(params){
        console.log("param: ",params)
        const url = `${prefix}/${params}`
        return this.put(url);
    }

}
