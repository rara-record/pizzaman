import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import { cartUIActions } from '../../../store/reducer/cartUISlice'

const Carts = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cart.cartItems)

  const toggleCart = () => {
    dispatch(cartUIActions.toggle())
  }

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts && cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom">
          <h6>
            Subtotal amount: <span>$123</span>
          </h6>
          <button>
            <Link to="/checkout">CheckOut</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts
