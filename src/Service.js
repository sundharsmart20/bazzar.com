import axios from 'axios';

const FAKE_API="https://fakestoreapi.com/products";

class Service{

    getProducts()
    {
        return axios.get(FAKE_API);
    }

}
export default new Service();