import { combineReducers } from "redux";
import newRequestReducer from './reducers/new-request.reducer'
import assetReducer from './reducers/asset.reducer'
import usersReducer from './reducers/users.reducer'

const RootReducer = combineReducers({
    newRequestReducer,
    assetReducer,
    usersReducer
})

export default RootReducer