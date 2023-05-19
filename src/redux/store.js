import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './root-reducer'


export default configureStore({
  reducer: RootReducer,
})