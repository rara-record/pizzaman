import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import CommonSection from '../components/UI/CommonSection'

import { Container, Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/reducer/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const [disable, setDisable] = useState(false)

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => {
                      return <Tr key={item.id} item={item} />
                    })
                  ) : (
                    <tr className="cart__no-item mt-4"></tr>
                  )}
                </tbody>
              </table>

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart_-subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  {cartItems.length ? (
                    <button className="addTOCart__btn">
                      <Link to="/checkout">Proceed to checkout</Link>
                    </button>
                  ) : (
                    <button
                      disabled={!cartItems.length}
                      className="cart__disabled-btn"
                    >
                      Proceed to checkout
                    </button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {
  const { id, image01, title, price, quantity } = item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  )
}

export default Cart
