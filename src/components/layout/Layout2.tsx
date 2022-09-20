import React from 'react'
import './Styles.css'
type props = {
    children: any
}
const Layout2 = ({children}:props) => {
  return (
    <div className='layout2'>{children}</div>
  )
}

export default Layout2