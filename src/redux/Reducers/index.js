import { combineReducers } from "redux";
import { RegistrationReducer } from "./RegistrationReducer";
import { LoginReducer } from "./LoginReducer";
import { ProductReducer } from './ProductReducer';
import { FetchDataFromCartReducer } from "./AddToCartReducer";
import { AddDataToCartReducer } from "./AddToCartReducer";
import { RemoveItemFromCartReducer } from "./AddToCartReducer";

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  RegistrationReducer: RegistrationReducer,
  ProductReducer: ProductReducer,
  FetchDataFromCartReducer: FetchDataFromCartReducer,
  AddDataToCartReducer: AddDataToCartReducer,
  RemoveItemFromCartReducer: RemoveItemFromCartReducer,
});

export default rootReducer;
