import axios from "axios";
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../Constants/LoginConstants';


export const LoginAction = (user) => {
    return (dispatch) => {
        axios.get('http://localhost:3200/users', user)
            .then((response) => {
                const responseData = response.data;
                const foundUser = responseData.find((apiUser) => {
                    if (apiUser.email === user.email & apiUser.password === user.password) {
                        return user;
                    }
                });
                if (foundUser) {
                    localStorage.setItem('idToken', true)
                    localStorage.setItem('user-info', foundUser.username)
                    return dispatch({
                        type: USER_LOGIN_SUCCESS,
                        payload: foundUser,
                    })
                }
                else {
                    alert('Please enter valid credentials')
                    return dispatch({
                        type: USER_LOGIN_FAIL,
                    })
                }
            })
            .catch((error) => {
                return dispatch({
                    type: USER_LOGIN_FAIL,
                    payload: error,
                });
            });
    }
}


