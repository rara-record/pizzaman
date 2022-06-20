import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Routers from '../../routes'

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
