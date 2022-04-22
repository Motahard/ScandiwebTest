import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'
import { LogoIcon } from '../LogoIcon'
import { CartIcon } from '../CartIcon'
import { ShowdownIcon } from '../ShowdownIcon'

const Navbar = ({ setActiveShowdownCurrency, activeShowdownCurrency }) => {
  const location = useLocation()
  const indexOfSlash = location.pathname.lastIndexOf('/');
  const value = location.pathname.slice(indexOfSlash + 1);
  const [active, setActive] = useState(value);

  const setActiveURL = (e) => {
     setActive(e.currentTarget.id);
  }

  const setActiveCurrency = () => {
    console.log(activeShowdownCurrency);
    setActiveShowdownCurrency(!activeShowdownCurrency)
  }

  

  return (
    <div className='navbar'>
      <ul className='nav'>
        <Link to='/category/women' id='women' className={`link ${active === 'women' && 'active' }`} onClick={setActiveURL}><li className='nav-item'>WOMEN</li></Link>
        <Link to='/category/men' id='men'  className={`link ${active === 'men' && 'active' }`} onClick={setActiveURL}><li className='nav-item'>MEN</li></Link>
        <Link to='/category/kids' id='kids'  className={`link ${active === 'kids' && 'active' }`} onClick={setActiveURL}><li className='nav-item'>KIDS</li></Link>
      </ul>
      <div className='icon-cart'>
        <LogoIcon />
      </div>
      <div className='icons'>
        <div className="currency" onClick={setActiveCurrency}>
          <div className='currency-icon'>$</div>
          <div className="showdown-icon">
            <ShowdownIcon />
          </div>
        </div>
        <div className="cart-icon">
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar;