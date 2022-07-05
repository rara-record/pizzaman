import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // =========== add item ============
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      )
      state.totalQuantity++

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )
    },
    // =========== remove item ============
    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.cartItems.find((item) => item.id === id)
      state.totalQuantity--

      /**
       * 선택한 아이템의 갯수가 1일때, - 버튼을 누르면 수량이 0이 되므로 카트 안의 아이템은 지워짐
       */
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price)
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
