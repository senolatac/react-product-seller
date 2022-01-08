import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { authHeader } from './base.service';


const API_URL = BASE_API_URL + '/api/product';

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL, product, {headers: authHeader()});
    }

    deleteProduct(product) {
        return axios.delete(API_URL + '/' + product.id, {headers: authHeader()});
    }

    getAllProducts() {
        return axios.get(API_URL);
    }
}

export default new ProductService();
