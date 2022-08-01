import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './reducer/cartSlice'
import cartUISlice from './reducer/cartUISlice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUISlice.reducer,
  },
})

export default store
