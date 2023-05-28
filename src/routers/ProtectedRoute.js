import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const Route = ({children}) => {
    const {currentUser} = useAuth()
  return  currentUser ? children : <Navigate to ="/login"/>
 
}

export default Route