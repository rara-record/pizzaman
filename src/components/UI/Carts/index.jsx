import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import { useDispatch } from 'react-redux'

import CartItem from './CartItem'
import { cartUIActions } from '../../../store/reducer/cartUISlice'

const Carts = () => {
  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(cartUIActions.toggle())
  }

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
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
