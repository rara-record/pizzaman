import Header from '../Header'
import Footer from '../Footer'
import Carts from '../UI/Carts'
import Routers from '../../routes'

import { useSelector } from 'react-redux'

const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible)

  return (
    <>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
