import BaseRequest from './BaseRequest';

const schema = 'admin'

class AdminRequest extends BaseRequest{
    fetchAdmin() {
        const url = `${schema}/`
        return this.get(url)
    }
}

export default AdminRequest