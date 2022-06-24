import Header from '../Header'
import Footer from '../Footer'
import Routers from '../../routes'

import Carts from '../UI/Carts'

const Layout = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
