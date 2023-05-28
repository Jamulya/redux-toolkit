import React, {useRef} from 'react'
import '../App.css'
import {  HomeOutlined, ShoppingCartCheckout } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAuth from '../hooks/useAuth'
import userIcon from '../assect/Vector.png'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const selector = useSelector((item) => item.cart)
    const navigate = useNavigate()


    const {currentUser} = useAuth()
    const profileRef = useRef(null)

    const toggleProfileRef = () => profileRef.current.classList.toggle('show__profileActions')

    const logout = () => {
        signOut(auth)
        .then(() => {
            toast.success('Logged out')
            navigate('/home')
        }).catch(err => {
            toast.error(err.message)
        })
    }
  return (
    <div className='navbar' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <h3 style={{  padding: '10px'}}>
            Shop
        </h3>
        <div className='navItems' >
            <Link className='navLink' to='/' style={{position: 'relative', top: '10px'}}>
             <HomeOutlined color='primary'/>
            </Link>
           

            <div className='navItem'>
                <Link className='navLink' to='/cart'>
                    <ShoppingCartCheckout color='primary'/>
                </Link>
                <span className='cartCount'>{selector.length}</span>

                <div className='profile'>
                    <Link to='/login' style={{position: 'absolute', right: '-14px', top: '-15px'}}>
                    <img className='userIcon' src={currentUser ? currentUser.photoURL : userIcon}
                    onClick={toggleProfileRef}
                    />
                </Link>

                <div className='profile__actions' ref={profileRef} 
                onClick={toggleProfileRef}
                >
                    {currentUser ? <span onClick={logout}>Logout</span> : 
                    <div className='profile__links'>
                        <Link to='/signup'>SignUp</Link>
                        <Link to='/login'>Login</Link>

                    </div>
                    }

                    
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar