import BaseRequest from './BaseRequest';

const prefix = '/statistic'

export default class StatisticRequest extends BaseRequest {

    fetchTotalAcc(){
        const url = `${prefix}/total-acc`;
        return this.get(url);
    }
    fetchTotalOrder(){
        const url = `${prefix}/total-order`;
        return this.get(url);
    }
    fetchTotalRevenu(){
        const url = `${prefix}/total-revenu`;
        return this.get(url);
    }
    fetchTopSale(params){
        const url = `${prefix}/total-top-sale/${params}`;
        return this.get(url);
    }

}
