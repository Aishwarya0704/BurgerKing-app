import axios from "axios";
import { USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAIL} from '../Constants/RegistrationConstants';

export const RegistrationAction = (user) => {
    return (dispatch) => {
        axios.post('http://localhost:3200/users',user)
            .then((response) => {
                return dispatch({
                    type: USER_REGISTRATION_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                return dispatch({
                    type: USER_REGISTRATION_FAIL,
                    payload: error,
                });
            });
    };
};
