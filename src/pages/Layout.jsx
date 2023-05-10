import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Drawer from '../components/Drawer'
import React from 'react'

function Layout(props) {
  const { openDrawer, setopenDrawer, cartItems, removeToCart } = props
  return (
    <div className="wrapper clear">
      {openDrawer ? (
        <Drawer
          onClose={() => setopenDrawer(false)}
          items={cartItems}
          remove={(object) => removeToCart(object)} // object.id
        />
      ) : null}

      <Header onOpen={() => setopenDrawer(true)} />

      <Outlet />
    </div>
  )
}

export default Layout
