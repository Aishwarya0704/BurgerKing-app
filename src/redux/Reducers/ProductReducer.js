import { PRODUCT_DATA_SUCCESS, PRODUCT_DATA_FAIL } from '../Constants/ProductConstants';

const initialState = {
    products: []
};
export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DATA_SUCCESS:
            return {
                ...state, products: action.payload,
            };
        case PRODUCT_DATA_FAIL:
            return {
                ...state, products: action.payload,
            };
        default:
            return state;
    }
}
