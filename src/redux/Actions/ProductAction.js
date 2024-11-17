import { PRODUCT_DATA_SUCCESS, PRODUCT_DATA_FAIL } from '../Constants/ProductConstants';
import axios from 'axios';

export const ProductAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3200/products')
            .then(response => {
                dispatch({
                    type: PRODUCT_DATA_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: PRODUCT_DATA_FAIL,
                    payload: error
                })
            })
    }
}
