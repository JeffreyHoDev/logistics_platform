import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users-slice",
    initialState: {
        user: {},
        is_authenticated: false,
        is_authenticating: false,
        error: null,
        is_fetching_users_data: false,
        users_list: [],
        fetching_error: null
    },
    reducers: {
        setAuthenticating: (state, action) => {
            state.is_authenticating = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.is_authenticated = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setIsFetchingUsersData: (state, action) => {
            state.is_fetching_users_data = action.payload
        },
        setUsersDataList: (state, action) => {
            state.users_list = action.payload
        },
        setFetchUserDataError: (state, action) => {
            state.fetching_error = action.payload
        },
    }
})


export const { setAuthenticating, setIsAuthenticated, setError, setIsFetchingUsersData, setUsersDataList, setFetchUserDataError } = usersSlice.actions

export default usersSlice.reducer