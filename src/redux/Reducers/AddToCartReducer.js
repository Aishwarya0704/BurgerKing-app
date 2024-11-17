import { FETCH_DATA_OF_CART_SUCCESS, FETCH_DATA_OF_CART_FAIL, ADD_DATA_TO_CART_SUCCESS, ADD_DATA_TO_CART_FAIL, DELETE_ITEM_FROM_CART_SUCCESS, DELETE_ITEM_FROM_CART_FAIL } from '../Constants/AddToCartConstants';

const initialState = {
    cartItems: []
};
export const FetchDataFromCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_OF_CART_SUCCESS:
            return {
                ...state, cartItems: action.payload,
            };
        case FETCH_DATA_OF_CART_FAIL:
            return {
                ...state, cartItems: action.payload,
            };
        default:
            return state;
    }
}

export const AddDataToCartReducer = (state = initialState, action) => {
    // let findItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
    // if (findItem >= 0 ) {
    //     state.cartItems[findItem].quantity += 1
    // }
    // else {
    //     state.cartItems.push(action.payload)
    // }
    switch (action.type) {
        case ADD_DATA_TO_CART_SUCCESS:
            console.log("Hey in reducer 123");
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        case ADD_DATA_TO_CART_FAIL:
            return {
                ...state, cartItems: action.payload,
            }
        default:
            return state;
    }
}

export const RemoveItemFromCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state, cartItems: action.payload
            };
        case DELETE_ITEM_FROM_CART_FAIL:
            return {
                ...state, cartItems: action.payload,
            }
        default:
            return state;
    }
}