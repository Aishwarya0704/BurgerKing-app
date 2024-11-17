// import { compose } from 'redux';
import rootReducer from "./redux/Reducers/index";
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],

});

export default store;