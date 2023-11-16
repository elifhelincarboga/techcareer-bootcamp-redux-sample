import { configureStore } from '@reduxjs/toolkit'
import productReducer from './modules/product'


export const store = configureStore({
  reducer: {
    product: productReducer
  },
})