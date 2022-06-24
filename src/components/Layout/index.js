import Header from '../Header'
import Footer from '../Footer'
import Routers from '../../routes'

import Carts from '../UI/Carts'
import { useSelector } from 'react-redux'

const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible)

  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
