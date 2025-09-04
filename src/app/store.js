import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer
  }
})
