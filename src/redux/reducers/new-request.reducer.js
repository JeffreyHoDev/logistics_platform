import { createSlice } from '@reduxjs/toolkit'

export const newRequestSlice = createSlice({
    name: 'new_request',
    initialState: {
        request_item_list: []
    },
    reducers: {
        addToList: (state, action) => {
            const { request_item_list } = state
            let findResult = request_item_list.find(item => item.id === action.payload.id)
            let newArray = []
            if(findResult){
                newArray = request_item_list.map((item) => {
                    if(item.id === action.payload.id){
                        item.quantity = action.payload.quantity
                    }
                    return item
                })
            }else {
                newArray = [...request_item_list, action.payload]
            }
            state.request_item_list = newArray

        },
        removeFromList: (state, action) => {
            const { request_item_list } = state
            let newArray = request_item_list.filter((item) => item.id !== action.payload.id)
            state.request_item_list = newArray
        },
        addOne: (state, action) => {
            const { request_item_list } = state
            let newArray = request_item_list.map((item) => {
                if(item.id === action.payload.id){
                    item.quantity++
                }
                return item
            })
            state.request_item_list = newArray
        },
        reduceOne: (state, action) => {
            const { request_item_list } = state
            let newArray = request_item_list.map((item) => {
                if(item.id === action.payload.id){
                    if(item.quantity <= 0){
                        item.quantity = 0
                    }else {
                        item.quantity--
                    }
                }
                return item
            })
            state.request_item_list = newArray
        }
    }
})

export const { addToList, removeFromList, addOne, reduceOne } = newRequestSlice.actions

export default newRequestSlice.reducer