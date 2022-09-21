import { createSlice } from "@reduxjs/toolkit";

const initialState = {products: [], isEditing: false, editingProduct: {}}
const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers:{
        setEditing(state, action){
            state.isEditing = true
            state.editingProduct = action.payload

            console.log(state.editingProduct)

        },
        editProduct(state, action){
            state.isEditing = false
        }
    }
})

export const productSliceActions = productSlice.actions

export default productSlice;