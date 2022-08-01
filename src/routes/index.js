import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <BrowserRouter basename="pizzaman">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
