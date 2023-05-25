import React from 'react'
import '../App.css'
import { AccountCircle, HomeOutlined, ShoppingCartCheckout } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const selector = useSelector((item) => item.cart)
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
                <Link className='navLink' to='/cart'>
                    <ShoppingCartCheckout color='primary'/>
                </Link>
                <span className='cartCount'>{selector.length}</span>
                <Link to='/login'>
                    <AccountCircle color='primary'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar