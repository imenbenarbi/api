import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <nav className='navbar'>

    <Link to="/" className='navbar__link'>  <h1 className='navbar__title'>HOME</h1>  </Link>

    <Link to="/ListOfUsers" className='navbar__link'>   <h1 className='navbar__title'>USERS LIST</h1>   </Link>

  </nav>
  )
}

export default Navbar