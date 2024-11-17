import { FETCH_DATA_OF_CART_SUCCESS, FETCH_DATA_OF_CART_FAIL, ADD_DATA_TO_CART_SUCCESS, ADD_DATA_TO_CART_FAIL } from '../Constants/AddToCartConstants';
import axios from 'axios';

export const FetchDataFromCartAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3200/cart')

            .then(response => {
                dispatch({
                    type: FETCH_DATA_OF_CART_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_DATA_OF_CART_FAIL,
                    payload: error
                })
            })
    }
}

export const AddDataToCartAction = (cartItem) => {
    return (dispatch) => {
        axios.post('http://localhost:3200/cart', cartItem)
            .then(response => {
                dispatch({
                    type: ADD_DATA_TO_CART_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_DATA_TO_CART_FAIL,
                    payload: error
                })
            })
    }
}

export const RemoveItemFromCartAction = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3200/cart/${id}`)
            .then(response => {
                dispatch({
                    type: ADD_DATA_TO_CART_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                return dispatch({
                    type: ADD_DATA_TO_CART_FAIL,
                    payload: error
                })
            })
    }
}
