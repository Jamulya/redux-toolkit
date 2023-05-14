import React from 'react'
import '../App.css'
import { HomeOutlined, ShoppingCartCheckout } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <h3 style={{  padding: '10px'}}>
            Shop
        </h3>
        <div className='navItems'>
            <Link className='navLink' to='/'>
             <HomeOutlined color='primary'/>
            </Link>
           
            <div className='navItem'>
                <Link className='navLink'>
                    <ShoppingCartCheckout color='primary'/>
                </Link>
                <span className='cartCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar