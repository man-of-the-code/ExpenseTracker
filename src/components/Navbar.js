import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector(state => state.cart);
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between' }} >
        <span className='logo' >REDUX STORE</span>
        <div style={{padding:25}}>
            <Link className='navLink' to="/"  style={{margin:5 }}>Home</Link>
            <Link className='navLink' to="/cart"  style={{margin:5 }}>Cart</Link>
            <span className='cartCount'  style={{margin:5}}>CartItems:{items.length }</span>
        </div>
    </div>
  )
}

export default Navbar

// {items.length}