import React, { useState } from 'react'

function Topbar() {

const [menuItems, setMenuItems] = useState([
    {name: 'Home', path: '/'},
    {name: 'Shop', path: '/Shop'},
    {name: 'Product', path: '/Product'},
    {name: 'Contact us', path: '/contact-us'},
])

  return (
    <div className='container'>
      
    </div>
  )
}

export default Topbar;
