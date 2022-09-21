import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth/slice';
import productSlice from './products/productsSlice';

export interface rootState {
    auth: any,
    products: any
}
const store = configureStore({
    reducer:{
        'auth': authSlice.reducer,
        "products": productSlice.reducer
    }
})

export default store;