import React from 'react'
import './Styles.css'
type props = {
    children: any
}
const Layout = ({children}:props) => {
  return (
    <div className='layout'>{children}</div>
  )
}

export default Layout