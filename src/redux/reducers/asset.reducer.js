import { createSlice } from '@reduxjs/toolkit'


export const assetSlice = createSlice({
    name: "assets",
    initialState: {
        asset_list: [],
        is_fetching: false,
        error: null
    },
    reducers: {
        isFetchingData: (state) => {
            state.is_fetching = true
        },
        loadData: (state, action) => {
            state.asset_list = action.payload
        },
        finishFetching: (state) => {
            state.is_fetching = false
        },
        error: (state, action) => {
            state.error = action.payload
        }
    }
})


export const { isFetchingData, loadData , finishFetching, error } = assetSlice.actions

export default assetSlice.reducer