import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  favorites: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, data) => {
      // only get first 50 elements for performance
      state.products = data.payload.slice(0, 50)
    },
    addFavorite: (state, data) => {
      state.favorites.push(data.payload)
    },
    removeFavorite: (state, data) => {
      state.favorites = state.favorites.filter(item => item !== data.payload);
    }
  },
})

export const { addProducts, addFavorite, removeFavorite  } = productSlice.actions
export default productSlice.reducer