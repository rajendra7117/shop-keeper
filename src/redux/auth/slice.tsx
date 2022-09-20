import {createSlice} from '@reduxjs/toolkit'

const initialState = {shopDetails: {shopName: '', operaterName: '', shopLocation: '', shopCategory: ''}, shopCreds: {email: '', password: ''}}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers:{
        setShopDetails(state, action){
            state = {...state, shopDetails: action.payload}
        }
    }
})

export const authSliceActions = authSlice.actions;

export default authSlice;