import {USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../Constants/LoginConstants';
 
const initialState = {};
export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                userLoggedIn: action.payload,
            };
        
        case USER_LOGIN_FAIL:
            return {
                userLoggedIn: null,
            };

        default:
            return state;
    }
}
