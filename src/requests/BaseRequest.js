

class BaseRequest {
    async get(url, params = {}) {
        try {
            const response = await window.axios.get(`${this.version}/${url}`, { params });
            return this._responseHandler(response);
        } catch (error) {
            this._errorHandler(error);
        }
    }
    async put(url, data = {}) {
        try {
            const response = await window.axios.put(`${this.version}/${url}`, data);
            return this._responseHandler(response);
        } catch (error) {
            this._errorHandler(error);
        }
    }

    async post(url, data = {}) {
        try {
            const response = await window.axios.post(`${this.version}/${url}`, data);
            return this._responseHandler(response);
        } catch (error) {
            this._errorHandler(error);
        }
    }

    async del(url, params = {}) {
        try {
            const response = await window.axios.delete(`${this.version}/${url}`, params);
            return this._responseHandler(response);
        } catch (error) {
            this._errorHandler(error);
        }
    }

    async _responseHandler(response) {
        const { data } = response;
        return {
            data: data.response_data,
            error: data.error,
        } || {};
    }

    _errorHandler(err) {
        if (err.response && err.response.status === 401) {
          window.location.href = '/';
        }
        throw err;
      }
}