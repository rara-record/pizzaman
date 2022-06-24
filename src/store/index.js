import { configureStore } from '@reduxjs/toolkit'

import cartUISlice from './reducer/cartUISlice'

const store = configureStore({
  reducer: {
    cartUI: cartUISlice.reducer,
  },
})

export default store
